from Contracts.ExtractionContracts import CleanBiddingData, WildingTrackData, ExtractedRoundData
from typing import List


def joinTrackBidsByRound(bids: List[CleanBiddingData]) -> dict[int, List[CleanBiddingData]]:
    joinedBids : dict[int, List[CleanBiddingData] ] = {}
    for trackBidEvent in bids:
        allBiddingInRound = joinedBids.get(trackBidEvent["currentGameStateReferenceIndex"], [])
        allBiddingInRound.append(trackBidEvent)
        joinedBids[trackBidEvent["currentGameStateReferenceIndex"]] = allBiddingInRound
    
    return joinedBids

def joinWildlingBidsByRound(bids: List[WildingTrackData]) -> dict[int, List[WildingTrackData]]:
    joinedBids : dict[int, List[WildingTrackData] ] = {}
    for wildlingBidEvent in bids:
        allBiddingInRound = joinedBids.get(wildlingBidEvent["currentGameStateReferenceIndex"], [])
        allBiddingInRound.append(wildlingBidEvent)
        joinedBids[wildlingBidEvent["currentGameStateReferenceIndex"]] = allBiddingInRound
    
    return joinedBids