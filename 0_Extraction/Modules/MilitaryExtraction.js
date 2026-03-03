import { ReplayConstants, HouseCardState } from "../Contracts/GameConstants.js";
import { findCorrespondingRound } from "./GameRoundExtraction.js";
import _ from "lodash";
// ===== DATA EXTRACTION FUNCTIONS =====
export const extractMilitaryData = (logData, gameRoundMapping, gameState) => {
    const combatLogs = [];
    gameState.replayManager.selectLog(1);
    const entireGameSnapshotClass = Object.getPrototypeOf(gameState.replayManager.selectedSnapshot).constructor;
    const SnapshotMigratorClass = Object.getPrototypeOf(gameState.replayManager.migrator).constructor;
    const migrator = new SnapshotMigratorClass(gameState);
    const setupLog = logData.find(l => l.type === "orders-revealed");
    if (!setupLog)
        throw "No setup log found to initialize snapshot";
    let currentSnapshot = new entireGameSnapshotClass({
        worldSnapshot: setupLog.worldState,
        gameSnapshot: setupLog.gameSnapshot,
    }, gameState);
    // Process CombatResult logs
    logData.forEach((log, index) => {
        // Kinda Copy pasted from replay manager v
        if (ReplayConstants.combatTerminationLogTypes.has(log.type)) {
            migrator.resetCombatLogData();
        }
        if (isModifyingGameLog(log)) {
            currentSnapshot = migrator.applyLogEvent(currentSnapshot, _.cloneDeep(log), index);
        }
        else if (isReplacementGameLog(log)) {
            currentSnapshot = migrator.handleVassalReplacement(currentSnapshot, _.cloneDeep(log));
        }
        else {
            console.warn("Unknown log type in military extraction");
        }
        // ^
        if (log.type !== "combat-result")
            return;
        const combatResult = log;
        const round = findCorrespondingRound(index, gameRoundMapping);
        if (currentSnapshot === null || currentSnapshot === undefined)
            throw "How the fuck is currentSnapshot null??????";
        let AttackLog;
        let SupportDeclaredLogs = [];
        let SupportRefusedLogs = [];
        // Progression:
        // Attack initialed
        // Support declared
        // Cards Chosen
        // Battle Commences
        // Post battle decisions
        // Battle finishes <== current log
        let RoundBeginningTerminateInfiniteLoopCondition = false;
        let currentLogIsAttackLog = false;
        let logCorrelationIndex = index;
        while (!currentLogIsAttackLog && !RoundBeginningTerminateInfiniteLoopCondition) {
            logCorrelationIndex--;
            const correlatedLog = logData[logCorrelationIndex]; // we already check for "turn-begin"
            if (correlatedLog.type == "support-declared") {
                SupportDeclaredLogs.push(correlatedLog);
            }
            else if (correlatedLog.type == "support-refused") {
                SupportRefusedLogs.push(correlatedLog);
            }
            RoundBeginningTerminateInfiniteLoopCondition = correlatedLog.type == "turn-begin";
            currentLogIsAttackLog = correlatedLog.type == "attack";
        }
        if (RoundBeginningTerminateInfiniteLoopCondition) {
            console.error("Infinite Log in extract military data");
            return;
        }
        AttackLog = logData[logCorrelationIndex]; // I am too tired to figure out why the index isn't on the money
        const winnerStats = combatResult.stats.find((s) => s.isWinner);
        const loserStats = combatResult.stats.find((s) => !s.isWinner);
        if (winnerStats === undefined || loserStats === undefined)
            throw "winnerStats or loserStats is undefined???";
        const winnerSupport = SupportDeclaredLogs
            .filter((support) => support.supported == winnerStats.house)
            .map(support => support.supporter);
        const loserSupport = SupportDeclaredLogs
            .filter((support) => support.supported == loserStats.house)
            .map(support => support.supporter);
        const winnerRefusedSupport = SupportRefusedLogs
            .filter((support) => support.house == winnerStats.house)
            .length > 0;
        const loserRefusedSupport = SupportRefusedLogs
            .filter((support) => support.house == loserStats.house)
            .length > 0;
        const winnerHouseSnapshot = currentSnapshot.getHouse(winnerStats.house);
        const loserHouseSnapshot = currentSnapshot.getHouse(loserStats.house);
        if (winnerHouseSnapshot === undefined || loserHouseSnapshot === undefined)
            throw "House snapshots are not available! Snapshot type is not supported!";
        // gameState.replayManager.reset()
        const winnerHouseCards = winnerHouseSnapshot
            .houseCards
            .filter(x => x.state == HouseCardState.AVAILABLE)
            .map(x => x.id);
        const loserHouseCards = loserHouseSnapshot
            .houseCards
            .filter(x => x.state == HouseCardState.AVAILABLE)
            .map(x => x.id);
        const battleData = {
            Attacker: AttackLog.attacker,
            AttackerRegion: AttackLog.attackingRegion,
            Defender: AttackLog.attacked ?? "unknown",
            AttackedRegion: AttackLog.attackedRegion,
        };
        const winnerData = {
            House: winnerStats.house,
            OrderType: AttackLog.orderType,
            OrderBonus: winnerStats.orderBonus,
            ArmyStrength: winnerStats.army,
            ArmyUnits: winnerStats.armyUnits,
            WoundedUnits: winnerStats.woundedUnits,
            SupportStrength: winnerStats.support,
            SupportingFactions: winnerSupport, // Could be extracted from support logs if available
            RefusedSupport: winnerRefusedSupport,
            GarrisonStrength: winnerStats.garrison,
            HouseCard: winnerStats.houseCard,
            HouseCardStrength: winnerStats.houseCardStrength,
            ValyrianSteelBlade: winnerStats.valyrianSteelBlade,
            TidesOfBattleCard: winnerStats.tidesOfBattleCard,
            Total: winnerStats.total,
            HouseCardSelection: winnerHouseCards,
            FiefdomTrackPosition: round.fiefdomsTrack.findIndex((x) => x == AttackLog.attacker)
        };
        const loserData = {
            House: loserStats.house,
            OrderType: undefined,
            OrderBonus: loserStats.orderBonus,
            ArmyStrength: loserStats.army,
            ArmyUnits: loserStats.armyUnits || [],
            WoundedUnits: loserStats.woundedUnits || [],
            SupportStrength: loserStats.support,
            SupportingFactions: loserSupport,
            RefusedSupport: loserRefusedSupport,
            GarrisonStrength: loserStats.garrison,
            HouseCard: loserStats.houseCard,
            HouseCardStrength: loserStats.houseCardStrength,
            ValyrianSteelBlade: loserStats.valyrianSteelBlade,
            TidesOfBattleCard: loserStats.tidesOfBattleCard,
            Total: loserStats.total,
            HouseCardSelection: loserHouseCards,
            FiefdomTrackPosition: round.fiefdomsTrack.findIndex((x) => x == AttackLog.attacked)
        };
        combatLogs.push({
            BattleData: battleData,
            WinnerData: winnerData,
            LoserData: loserData,
            round: round.round,
        });
    });
    return { combatLogs };
};
function isModifyingGameLog(log) {
    return ReplayConstants.modifyingGameLogTypes.has(log.type);
}
function isReplacementGameLog(log) {
    return ReplayConstants.replacementLogTypes.has(log.type);
}
