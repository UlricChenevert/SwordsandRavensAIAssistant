export function grabSnapshotConstructors(gameState) {
    gameState.replayManager.selectLog(1);
    const entireGameSnapshotClass = Object.getPrototypeOf(gameState.replayManager.selectedSnapshot).constructor;
    gameState.replayManager.reset();
    const SnapshotMigratorClass = Object.getPrototypeOf(gameState.replayManager.migrator).constructor;
    EntireGameSnapshotConstructor = entireGameSnapshotClass;
    SnapshotMigratorConstructor = SnapshotMigratorClass;
    return { EntireGameSnapshotConstructor: entireGameSnapshotClass, SnapshotMigratorConstructor: SnapshotMigratorClass };
}
export var EntireGameSnapshotConstructor;
export var SnapshotMigratorConstructor;
