export const extractPlayerData = (client) => {
    const GameState = client.entireGame?.childGameState;
    if (GameState === undefined)
        throw "Cannot fetch player list!";
    const finalPlayerList = [];
    GameState.players.forEach(playerEntry => {
        const finalPlayerData = {
            playerID: playerEntry.user.id,
            playerName: playerEntry.user.name
        };
        finalPlayerList.push(finalPlayerData);
    });
    return { Players: finalPlayerList };
};
