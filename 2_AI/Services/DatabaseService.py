from langchain_community.vectorstores import Chroma
from Configuration.Constants import DATABASE_PATH, DEFAULT_DOCUMENT_RETRIEVAL_AMOUNT, DatabaseTables  
from dotenv import load_dotenv

from Services.EmbeddingsService import embeddings

load_dotenv()

ruleDBConnection = Chroma( persist_directory=DATABASE_PATH, embedding_function=embeddings, collection_name=DatabaseTables.Rules.value)
wildlingDBConnection = Chroma( persist_directory=DATABASE_PATH, embedding_function=embeddings, collection_name=DatabaseTables.WildingBid.value)
bidTrackDBConnection = Chroma( persist_directory=DATABASE_PATH, embedding_function=embeddings, collection_name=DatabaseTables.TrackBid.value)
combatDBConnection = Chroma( persist_directory=DATABASE_PATH, embedding_function=embeddings, collection_name=DatabaseTables.CombatBid.value)
