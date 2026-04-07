from typing import Optional
from Configuration.Constants import DEFAULT_DOCUMENT_RETRIEVAL_AMOUNT, EXTRA_DATA_TEMPLATE, GENERAL_TEMPLATE
from Contracts.RequestContracts import AIRetrievalType, AdviseRetrievalType, GameContext
from langchain_core.documents import Document
from langchain_core.prompts import ChatPromptTemplate
from Services.DatabaseService import ruleDBConnection, wildlingDBConnection, bidTrackDBConnection, combatDBConnection
from Utilities.ConvertExtractedJSONToString import buildGameStateString
from Utilities.General import combineQuestionAndContext, combineTextFragments

def searchAllTables(query: str, k: int) -> list[Document]:
    all_results = []

    for db in [ruleDBConnection, combatDBConnection, bidTrackDBConnection, wildlingDBConnection]:
        all_results.extend(db.similarity_search_with_score(query, k=k))

    # sort by score
    all_results.sort(key=lambda x: x[1])

    return [doc for doc, _ in all_results[:k]]

def buildRetrievedStates(question : str, stringifiedContext: str, retrievalType : AdviseRetrievalType, retrievalAmount = DEFAULT_DOCUMENT_RETRIEVAL_AMOUNT) -> str:
    
    documents: list[Document]
    if (retrievalType == AdviseRetrievalType.TRACK_BID):
       documents = bidTrackDBConnection.as_retriever(search_kwargs={"k": retrievalAmount}).invoke(combineQuestionAndContext(question, stringifiedContext))
    
    elif (retrievalType == AdviseRetrievalType.COMBAT):
       documents = combatDBConnection.as_retriever(search_kwargs={"k": retrievalAmount}).invoke(combineQuestionAndContext(question, stringifiedContext))
    
    elif (retrievalType == AdviseRetrievalType.WILDING_BID):
       documents = wildlingDBConnection.as_retriever(search_kwargs={"k": retrievalAmount}).invoke(combineQuestionAndContext(question, stringifiedContext))
    
    elif (retrievalType == AdviseRetrievalType.OTHER):
       documents = searchAllTables(combineQuestionAndContext(question, stringifiedContext), retrievalAmount)
   
    return "\n\n".join(EXTRA_DATA_TEMPLATE.format(state=s.page_content) for s in documents)

def buildRules (question : str):
    return combineTextFragments(ruleDBConnection.as_retriever().invoke(question))

def buildPrompts(
        aiRetrievalType : AIRetrievalType,
        question : str, context: Optional[GameContext],
        retrievalType : AdviseRetrievalType, retrievalAmount: Optional[int] = None):

    stringifiedGameState = buildGameStateString(context) if context else "No game state provided."
    retrievalAmount = retrievalAmount or DEFAULT_DOCUMENT_RETRIEVAL_AMOUNT
    examples = ""

    if aiRetrievalType == AIRetrievalType.RAG:
        examples = buildRetrievedStates(question, stringifiedGameState, retrievalType, retrievalAmount)

    promptTemplate = ChatPromptTemplate.from_template(GENERAL_TEMPLATE)
    finalPrompt = (promptTemplate.invoke({
        "rules": buildRules(question),
        "extras" : examples,
        "game_state": stringifiedGameState,
        "question" : question

    }))

    return finalPrompt