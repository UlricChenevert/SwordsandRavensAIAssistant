import { extractBidData } from "../Modules/BiddingExtraction.js";
import { extractMilitaryData } from "../Modules/MilitaryExtraction.js";
import { extractPlayerData } from "../Modules/PlayerExtraction.js";
import { extractGameStateData } from "../Modules/RoundStateExtraction.js";
export const extractGameData = (GameClient) => {
    const GameState = GameClient.entireGame.childGameState; // Checked by injection script
    const GameLogs = GameState.gameLogManager.logs;
    const TurnMapping = extractGameTurnData(GameLogs);
    const extractedData = {};
    Object.assign(extractedData, extractLogData(GameLogs, [extractBidData, extractMilitaryData, extractGameStateData], TurnMapping, GameState));
    Object.assign(extractedData, extractMiscData(GameClient, [extractPlayerData]));
    return extractedData;
};
export const extractLogData = (logs, Extractors, gameRoundToLogIndex, gameState) => {
    const logData = logs.map((log) => log.data);
    const finalObject = {};
    Extractors.forEach((trackerLambda) => {
        Object.assign(finalObject, trackerLambda(logData, gameRoundToLogIndex, gameState));
    });
    return finalObject;
};
export const extractGameTurnData = (logs) => {
    const final = [];
    logs.forEach((log, index) => {
        if (log.data.type != "turn-begin")
            return;
        let orderRevealedIndex = index;
        while (logs.length > orderRevealedIndex &&
            logs[orderRevealedIndex]?.data.type != "orders-revealed")
            orderRevealedIndex++;
        if (logs.length == orderRevealedIndex) {
            let orderRevealedIndex = index;
            while (logs[orderRevealedIndex]?.data.type != "orders-revealed")
                orderRevealedIndex--;
        }
        const orderRevealed = logs[orderRevealedIndex].data;
        const ironTrack = (orderRevealed.gameSnapshot?.ironThroneTrack) ? orderRevealed.gameSnapshot?.ironThroneTrack : [];
        const fiefdomTrack = (orderRevealed.gameSnapshot?.fiefdomsTrack) ? orderRevealed.gameSnapshot?.fiefdomsTrack : [];
        const kingsCourtTrack = (orderRevealed.gameSnapshot?.kingsCourtTrack) ? orderRevealed.gameSnapshot?.kingsCourtTrack : [];
        const victoryTrack = (orderRevealed.gameSnapshot?.housesOnVictoryTrack) ? orderRevealed.gameSnapshot?.housesOnVictoryTrack : [];
        final.push({
            index: index,
            round: log.data.turn,
            wildlingStrength: orderRevealed.gameSnapshot?.wildlingStrength,
            dragonStrength: orderRevealed.gameSnapshot?.dragonStrength,
            ironThroneTrack: ironTrack,
            fiefdomsTrack: fiefdomTrack,
            kingsCourtTrack: kingsCourtTrack,
            housesOnVictoryTrack: victoryTrack,
            vsbUsed: orderRevealed.gameSnapshot?.vsbUsed,
            ironBank: orderRevealed.gameSnapshot?.ironBank,
        });
    });
    return final;
};
export const extractMiscData = (GameClient, Extractors) => {
    const finalObject = {};
    Extractors.forEach((extractionLambda) => {
        Object.assign(finalObject, extractionLambda(GameClient));
    });
    return finalObject;
};
//# sourceMappingURL=ExtractGameData.js.map