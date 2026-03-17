# Run this script to get the vecctor embeddings saved
# You will need to sign up for a (free) google API key

from langchain_text_splitters import MarkdownHeaderTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import Chroma
from dotenv import load_dotenv
import time

# GOOGLE_API_KEY=mykey
load_dotenv()


text = ""
with open("rules.md", encoding='utf-8', errors="replace") as file:
    text = file.read()

splitter = MarkdownHeaderTextSplitter(
    headers_to_split_on=[("#", "Header 1"), ("##", "Header 2"), ("###", "Header 3")]
)
chunks = splitter.split_text(text)

embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")
vector_db = Chroma(
    embedding_function=embeddings,
    persist_directory="../rules_db"
)

batch_size = 50
for i in range(0, len(chunks), batch_size):
    batch = chunks[i : i + batch_size]
    vector_db.add_documents(batch)
    print(f"Sleeping 60s")
    
    #wait 60 seconds to let the rate limit reset
    time.sleep(60)

print("Rules saved to rules_db")