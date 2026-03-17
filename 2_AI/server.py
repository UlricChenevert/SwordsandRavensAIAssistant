from dotenv import load_dotenv
#from google import genai
import uvicorn
from fastapi import FastAPI

from langchain_classic.chains import create_retrieval_chain
from langchain_classic.chains.combine_documents import create_stuff_documents_chain
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

DOCUMENT_RETRIEVAL_AMOUNT = 5
DB_PATH = "./game_rules_db"

def format_docs(docs):
    """Combines retrieved rule chunks into one clean string."""
    return "\n\n".join(doc.page_content for doc in docs)

app = FastAPI()

load_dotenv()
embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")

vector_db = Chroma(
    persist_directory=DB_PATH, 
    embedding_function=embeddings
)
retriever = vector_db.as_retriever(search_kwargs={"k": DOCUMENT_RETRIEVAL_AMOUNT})

llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0)

template = """
You are an expert at a board game called Sword and Ravens. Below are snippets from the official rulebook
and the player's current situation. 

RULES:
{context}

SITUATION:
{question}

Based on the rules provided above, what is the best move?
"""

prompt = ChatPromptTemplate.from_template(template)

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

@app.get("/")
def home(query: str):
    response = rag_chain.invoke(query)
    return {"response": response}

if __name__ == "__main__":
    #print(rag_chain.invoke("What do I do at the beginning of my turn?"))
    uvicorn.run(app, host="127.0.0.1", port=8000)

'''# Query the model (e.g., gemini-2.5-flash which is generally available in the free tier)
response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents="Explain how to query the Gemini API for free."
)

print(response.text)'''