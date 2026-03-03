// Coin / Power token, land size,
import { findCorrespondingRound } from "./GameRoundExtraction.js";
import { ExtractedRoundDataFactory } from "../Utilities/ClassFactories.js";
export const extractGameStateData = (logData, gameRoundMapping) => {
    const cleanData = { Rounds: [] };
    logData.forEach((log, index) => {
        if (log.type != "orders-revealed")
            return;
        const extractedRoundData = ExtractedRoundDataFactory();
        extractedRoundData.Round = findCorrespondingRound(index, gameRoundMapping).round;
        if (log.gameSnapshot) {
            log.gameSnapshot.housesOnVictoryTrack.forEach((house) => {
                const extractedHouseRef = extractedRoundData.HouseSnapshotData[house.id];
                extractedHouseRef.CastleCount = house.victoryPoints;
                extractedHouseRef.LandAreaCount = house.landAreaCount;
                extractedHouseRef.PowerTokens = house.powerTokens;
                extractedHouseRef.SupplyTier = house.supply;
            });
        }
        log.worldState.forEach((region) => {
            if (region.order)
                extractedRoundData.OrderTokenChoices.set(region.id, region.order.type);
            let house;
            if (region.units?.length !== undefined && region.units?.length > 0) {
                house = region.units[0].house;
                extractedRoundData.UnitLocationSnapshotData.set(region.id, region.units);
            }
            else if (region.controlPowerToken) {
                house = region.controlPowerToken;
            }
            else {
                return;
            }
            extractedRoundData.HouseSnapshotData[house].LandAreas.push(region.id);
        });
        cleanData.Rounds.push(extractedRoundData);
    });
    return cleanData;
};
