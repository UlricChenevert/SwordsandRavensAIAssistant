// Coin / Power token, land size,

import { possibleFactions } from "../../Data/GameConstants.js";
import { Factions, GameLocation, GameLogData, UnitState } from "../../Data/GameTypes.js";
import { IGameLogDataExtractor } from "../../Contracts/ExtractionContracts.js"
import { findCorrespondingRound } from "../../Utilities/GameRoundUtility.js";


type CleanHouseSnapshot = {
    FactionName : Factions
    SupplyTier: number;
    PowerTokens: number;
    LandAreas : GameLocation[]
    CastleCount: number;
    LandAreaCount: number;
}

type ExtractedRoundData = {
    HouseSnapshotData: Record<Factions, CleanHouseSnapshot>;
    OrderTokenChoices: Map<GameLocation, string>;
    UnitLocationSnapshotData: Map<GameLocation, UnitState[]>
    Round : number
};

type ExtractedGameStateData = {
    Rounds : ExtractedRoundData[]
}

const CleanHouseSnapshotFactory = (HouseName : Factions) : CleanHouseSnapshot => {
    return {
        FactionName : HouseName,
        SupplyTier: -1,
        PowerTokens: -1,
        LandAreas : [],
        CastleCount: -1,
        LandAreaCount: -1
    }
}

const ExtractedRoundDataFactory = () : ExtractedRoundData => {
    const HouseSnapshots = {} as Record<Factions, CleanHouseSnapshot>
    
    possibleFactions.forEach(house=>{
        HouseSnapshots[house] = CleanHouseSnapshotFactory(house)
    })

    return {
        HouseSnapshotData: HouseSnapshots,
        OrderTokenChoices: new Map<GameLocation, string>(),
        UnitLocationSnapshotData: new Map<GameLocation, UnitState[]>(),
        Round : -1
    }
}

export const extractGameStateData : IGameLogDataExtractor<ExtractedGameStateData> = (logData: GameLogData[], gameRoundMapping) => {
    const cleanData : ExtractedGameStateData = {Rounds: []}
    
    logData.forEach((log, index)=>{
        if (log.type != "orders-revealed") return
        
        const extractedRoundData : ExtractedRoundData = ExtractedRoundDataFactory()

        extractedRoundData.Round = findCorrespondingRound(index, gameRoundMapping).round

        if (log.gameSnapshot) {
            log.gameSnapshot.housesOnVictoryTrack.forEach((house)=>{
                const extractedHouseRef = extractedRoundData.HouseSnapshotData[house.id]
                
                extractedHouseRef.CastleCount = house.victoryPoints
                extractedHouseRef.LandAreaCount = house.landAreaCount
                extractedHouseRef.PowerTokens = house.powerTokens
                extractedHouseRef.SupplyTier = house.supply
            })
        }
    
        log.worldState.forEach((region)=>{
            if (region.order) 
                extractedRoundData.OrderTokenChoices.set(region.id, region.order.type)
    
            let house : Factions;
            
            if (region.units?.length !== undefined && region.units?.length > 0) {
                house = (<UnitState>region.units[0]).house
                extractedRoundData.UnitLocationSnapshotData.set(region.id, region.units)
            } else if (region.controlPowerToken) {
                house = region.controlPowerToken
            } else  {
                return
            }
    
            extractedRoundData.HouseSnapshotData[house].LandAreas.push(region.id)
        })

        cleanData.Rounds.push(extractedRoundData)
    })

    return cleanData
}