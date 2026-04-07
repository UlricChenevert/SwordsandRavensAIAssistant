from enum import Enum

GENERAL_TEMPLATE = """
You are an expert at the official Game of Thrones Board Game.

SOME RELEVANT RULES:
{rules}

{extras}

GAME STATE:
{game_state}

QUESTION:
{question}

Based on the rules and game state above, answer the question.
"""

EXTRA_DATA_TEMPLATE = """
SIMILAR GAME EVENT:
{retrieved_state}
"""

DEFAULT_DOCUMENT_RETRIEVAL_AMOUNT = 10

DATABASE_PATH = "./2_AI/Data/DocumentDatabase"

class DatabaseTables(Enum):
    Rules = "Rules"
    TrackBid = "TrackBid"
    WildingBid = "TrackBid"
    CombatBid = "TrackBid"
    

EXTRACTED_DATA_PATH="../0_Extraction/Data"

RULES_DATA_PATH = "./2_AI/Data/rules.md"

EMBEDDINGS_MODEL_NAME = "all-mpnet-base-v2"

HOST_IP="127.0.0.1"

GITHUB_ISSUES_URL = "https://github.com/UlricChenevert/SwordsandRavensAIAssistant/issues"

PORT=5002

USAGE_LIMIT = "10/minute"