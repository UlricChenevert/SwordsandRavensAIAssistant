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

class GeminiModel(str, Enum):
    FLASH_2_0 = "gemini-2.0-flash"
    PRO_2_5   = "gemini-2.5-pro"

class GameContext(BaseModel):
    model_config = {"arbitrary_types_allowed": True}

    gameState: ExtractedRoundData
    players: List[PlayerInfo]
    trackBids: Optional[List[CleanBiddingData]] = None
    wildlingBids: Optional[List[WildingTrackData]] = None
    combat: Optional[CombatLog] = None

class PromptRequest(BaseModel):
    geminiKey: str
    prompt: str
    context: Optional[GameContext] = None
    aiRetrievalType: AIRetrievalType
    adviseRetrievalType: AdviseRetrievalType
    model: GeminiModel = GeminiModel.FLASH_2_0