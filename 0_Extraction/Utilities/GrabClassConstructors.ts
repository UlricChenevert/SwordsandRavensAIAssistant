import { EntireGameSnapshot, IngameGameState, SnapshotMigrator } from "../Contracts/GameTypes.js";

type Constructor<T> = new (...args: unknown[]) => T;

export function grabSnapshotConstructors (gameState: IngameGameState) {
    gameState.replayManager.selectLog(1);
    const entireGameSnapshotClass : Constructor<EntireGameSnapshot> = Object.getPrototypeOf(gameState.replayManager.selectedSnapshot as EntireGameSnapshot).constructor
    gameState.replayManager.reset();
    const SnapshotMigratorClass : Constructor<SnapshotMigrator> = Object.getPrototypeOf(gameState.replayManager.migrator).constructor;

    EntireGameSnapshotConstructor = entireGameSnapshotClass
    SnapshotMigratorConstructor = SnapshotMigratorClass

    return {EntireGameSnapshotConstructor: entireGameSnapshotClass, SnapshotMigratorConstructor: SnapshotMigratorClass}
}

export var EntireGameSnapshotConstructor : Constructor<EntireGameSnapshot>;
export var SnapshotMigratorConstructor : Constructor<SnapshotMigrator>;