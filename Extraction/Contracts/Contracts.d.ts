import { Factions, GameLocation, UnitState } from "../../Data/GameTypes.js";

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