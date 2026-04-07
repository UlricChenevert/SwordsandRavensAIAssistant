import asyncio
from typing import List
from langchain_community.vectorstores import Chroma
from langchain_text_splitters import MarkdownHeaderTextSplitter
from Configuration.Constants import  RULES_DATA_PATH
from Services.EmbeddingsService import embeddings
from Services.DatabaseService import ruleDBConnection, combatDBConnection, bidTrackDBConnection



from Utilities.LoadJSONData import loadScrappedData
from Utilities.ConvertExtractedJSONToString import buildContextForEvent, convertCombatToPlainText, convertPlayerToPlainText, convertSettingsToPlainText
from Utilities.ConvertExtractedJSONToString import convertTrackBidListToPlainText, convertWildlingBidListToPlainText
from Utilities.JoinJSONData import joinTrackBidsByRound, joinWildlingBidsByRound

async def main():
    games = await loadScrappedData(-1)

    # Rules Conversion
    with open(RULES_DATA_PATH, encoding='utf-8', errors="replace") as file:
        text = file.read()

    splitter = MarkdownHeaderTextSplitter(
        headers_to_split_on=[("#", "Header 1"), ("##", "Header 2"), ("###", "Header 3")]
    )
    ruleDBConnection.add_documents(splitter.split_text(text))

    # Combat Embeddings
    documents = []
    for game in games:
        documentStrings: List[str] = []
        playerString = convertPlayerToPlainText(game["Players"])
        settingsString = convertSettingsToPlainText(game.get("Settings")) if game.get("Settings") is not None else "None found"

        for combatEvent in game["combatLogs"]:
            context = buildContextForEvent(playerString, settingsString, combatEvent["CorrespondingTurnIndex"], game["GameID"], game["Rounds"])
            
            action = convertCombatToPlainText(combatEvent)
            documentStrings.append(f"Context\n {context} \nCombat {action}")

        documents.append("\n".join(documentStrings))

    combatDBConnection.add_texts(documents)

    # Track Bid Embeddings
    documents = []
    for game in games:
        documentStrings = []
        joinedBids = joinTrackBidsByRound(game["TrackBids"])
        playerString = convertPlayerToPlainText(game["Players"])
        settingsString = convertSettingsToPlainText(game.get("Settings")) if game.get("Settings") is not None else "No settings found"

        for roundID in joinedBids.keys():
            context = buildContextForEvent(playerString, settingsString, roundID, game["GameID"], game["Rounds"])

            biddingText = convertTrackBidListToPlainText(joinedBids[roundID])
            documentStrings.append(f"Context\n {context} \nTrack Bidding {biddingText}")

        documents.append("\n".join(documentStrings))

    bidTrackDBConnection.add_texts(documents)

    # Wildling Bid Embeddings
    print("Wildling Bid Embeddings")
    documents = []
    for game in games:
        documentStrings = []
        playerString = convertPlayerToPlainText(game["Players"])
        settingsString = convertSettingsToPlainText(game.get("Settings")) if game.get("Settings") is not None else "None found"

        joinedBids = joinWildlingBidsByRound(game["WildlingBids"])

        for roundID in joinedBids.keys():
            context = buildContextForEvent(playerString, settingsString, roundID, game["GameID"], game["Rounds"])

            biddingText = convertWildlingBidListToPlainText(joinedBids[roundID])
            documentStrings.append(f"Context\n {context} \nWilding Bidding {biddingText}")

        documents.append("\n".join(documentStrings))

    combatDBConnection.add_texts(documents)

asyncio.run(main())
