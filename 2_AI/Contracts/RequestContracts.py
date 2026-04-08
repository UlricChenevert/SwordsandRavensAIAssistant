from enum import Enum
from typing import List, Optional
from pydantic import BaseModel

from Contracts.ExtractionContracts import CleanBiddingData, CombatLog, ExtractedRoundData, PlayerInfo, WildingTrackData

class AIRetrievalType(Enum):
    ZERO_SHOT = "zero-shot"
    FEW_SHOT = "few-shot"
    RAG = "rag"

class AdviseRetrievalType(Enum):
    TRACK_BID = "track-bid"
    WILDING_BID = "wildling-bid"
    COMBAT = "combat"
    OTHER = "other"

class ChatGPTModel(str, Enum):
    GPT_4O_MINI = "gpt-4o-mini"
    GPT_4O      = "gpt-4o"

class GameContext(BaseModel):
    model_config = {"arbitrary_types_allowed": True}

    gameState: ExtractedRoundData
    players: List[PlayerInfo]
    trackBids: Optional[List[CleanBiddingData]] = None
    wildlingBids: Optional[List[WildingTrackData]] = None
    combat: Optional[CombatLog] = None

class PromptRequest(BaseModel):
    openaiKey: str
    prompt: str
    retrievalAmount: Optional[int] = None
    context: Optional[GameContext] = None
    aiRetrievalType: AIRetrievalType
    adviseRetrievalType: AdviseRetrievalType
    model: ChatGPTModel = ChatGPTModel.GPT_4O_MINI