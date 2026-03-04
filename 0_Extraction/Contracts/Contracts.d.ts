import { Factions, GameLocation, UnitState } from "./GameTypes.js";

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
    OrderTokenChoices: Partial<Record<GameLocation, string>>;
    UnitLocationSnapshotData: Partial<Record<GameLocation, UnitState[]>>
    Round : number
    LogIndex : number
};

type ExtractedGameStateData = {
    Rounds : ExtractedRoundData[]
}