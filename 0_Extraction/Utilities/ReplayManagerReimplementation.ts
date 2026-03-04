import _ from "lodash";
import { ReplayConstants } from "../Contracts/GameConstants.js";
import { EntireGameSnapshot, GameLogData, IngameGameState, SnapshotMigrator } from "../Contracts/GameTypes.js";
import { EntireGameSnapshotConstructor } from "./GrabClassConstructors.js";

export function changeSnapshotWithNewLog(migrator : SnapshotMigrator, currentSnapshot : EntireGameSnapshot, log : GameLogData, index : number, gameState : IngameGameState) {
    // Because region data starts off as undefined (static region info and player based troop placements), 
    // then you have to refresh the orders-revealed. You could also find and initialize the valutes from the static data, but eehh 

    if (ReplayConstants.combatTerminationLogTypes.has(log.type)) {
        migrator.resetCombatLogData();
    }

    const newSnapshot = currentSnapshot.getCopy()

    if (log.type == "orders-revealed") 
        return new EntireGameSnapshotConstructor({
                worldSnapshot: log.worldState,
                gameSnapshot: log.gameSnapshot,
                }, gameState);
    
    if (isModifyingGameLog(log)) 
        // lastSnapshot = _.cloneDeep(currentSnapshot)
        return migrator.applyLogEvent(newSnapshot, _.cloneDeep(log), index);
    
    if (isReplacementGameLog(log)) 
        // lastSnapshot = _.cloneDeep(currentSnapshot)
        return migrator.handleVassalReplacement(newSnapshot, _.cloneDeep(log));
    
    return currentSnapshot
}

function isModifyingGameLog(log: GameLogData): boolean {
  return ReplayConstants.modifyingGameLogTypes.has(log.type);
}

function isReplacementGameLog(log: GameLogData): boolean {
  return ReplayConstants.replacementLogTypes.has(log.type);
}