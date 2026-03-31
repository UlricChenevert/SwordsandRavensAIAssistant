import asyncio
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from Configuration.Constants import DB_PATH, EMBEDDINGS_MODEL_NAME

embeddingService = HuggingFaceEmbeddings(model_name=EMBEDDINGS_MODEL_NAME)
databaseService = Chroma(persist_directory=DB_PATH, embedding_function=embeddingService)

# def testDatabase():
#     results = databaseService.similarity_search("armies defeated", k=10, filter={"type": "combat_log"})

from Utilities.LoadJSONData import loadScrappedData
async def main():
    games = await loadScrappedData(2)
    for game in games:
        databaseService.add_texts(game)

asyncio.run(main())

