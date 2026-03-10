export const extractSettingsData = (client) => {
    if (client.entireGame === null)
        throw "Cannot fetch settings!";
    return { Settings: client.entireGame.gameSettings };
};
