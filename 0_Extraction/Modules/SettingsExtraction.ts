import { IGameDataExtractor, SettingsExtraction } from "../../!Contracts/ExtractionContracts.js"
import { GameClient } from "../Contracts/GameTypes.js"

export const extractSettingsData : IGameDataExtractor<SettingsExtraction> = (client : GameClient) => {
    if (client.entireGame === null)
        throw "Cannot fetch settings!"

    return { Settings: client.entireGame.gameSettings }
}