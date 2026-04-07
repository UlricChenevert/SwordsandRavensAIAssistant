from typing import Dict, List

from Contracts.ExtractionContracts import BattleLog, BattleParticipantLog, CleanHouseSnapshot, CombatLog, ExtractedRoundData, GameLocation, GameSettings, PlayerInfo, ScrapedGameEntry, UnitState, CleanBiddingData, WildingTrackData

def convertPlayerToPlainText(players: List[PlayerInfo]):
    final = ""

    for player in players:
        final += player["playerName"] + " "

    return final

def convertSettingsToPlainText(settings: GameSettings):
    finalOutput = ""

    for property, value in settings.items():
        finalOutput += f"{property}: {value}"

    return finalOutput

def convertBattleLogToPlainText(battle: BattleLog):
    return f"Faction {battle["Attacker"]} attacked {battle["Defender"]} in {battle["AttackedRegion"]} from {battle["AttackerRegion"]}"

def convertSupportIntoPlainText(participant : BattleParticipantLog):
    if (participant["SupportStrength"] == 0): return ""
    
    support = f"Through the factions {" ".join(participant["SupportingFactions"])}, {participant["House"]} gained a total of {participant["SupportStrength"]} support"
    
    if (participant["RefusedSupport"]):
        support += " and refused support"

    support += "."

    return support

def convertBattleParticipantLogToPlainText(participant: BattleParticipantLog) -> str:
    army_units  = " ".join(participant.get("ArmyUnits",    []))
    wounded     = participant.get("WoundedUnits", [])
    order_type  = participant.get("OrderType",       "used")
    tides_card  = participant.get("TidesOfBattleCard", "Unknown")
    support     = convertSupportIntoPlainText(participant)

    wounded_line = (
        f"{participant['House']} also has wounded troops: {' '.join(wounded)}"
        if wounded else ""
    )
    vsb_line = "Used the Valyrian Steel Blade" if participant["ValyrianSteelBlade"] != 0 else ""

    return f"""
    {participant["House"]} {order_type} with a bonus of {participant["OrderBonus"]}, {army_units}, and the house card {participant["HouseCard"]}.
    {support}
    {wounded_line}
    These factors resulted in these scores for {participant["House"]}:
    Army: {participant["ArmyStrength"]}
    Support: {participant["SupportStrength"]}
    House Card: {participant["HouseCardStrength"]}
    Tides of Battle Card: {tides_card}
    {vsb_line}
    Total: {participant["Total"]}
    """

def convertCombatToPlainText(combat: CombatLog):
    return f"""
    {convertBattleLogToPlainText(combat["BattleData"])}

    {convertBattleParticipantLogToPlainText(combat['WinnerData'])}

    {convertBattleParticipantLogToPlainText(combat['LoserData'])}

    {combat['WinnerData']["House"]} won!
    """

def convertTrackBidListToPlainText(trackBidList: List[CleanBiddingData]) -> str:
    plainText = ""
    for trackBid in trackBidList:
        plainText += f"""
    {convertTrackBidToPlainText(trackBid)}"""
    return plainText

def convertWildlingBidListToPlainText(wildlingBidList: List[WildingTrackData]) -> str:
    plainText = ""
    for wildlingBid in wildlingBidList:
        plainText += f"""
    {convertWildlingBidToPlainText(wildlingBid)}"""
    return plainText

def convertHouseSnapshotToPlainText(house : CleanHouseSnapshot):
    return f"""
    {house["FactionName"].capitalize()} Stats:
    Supply Tier: {house["SupplyTier"]}
    Power Tokens: {house["PowerTokens"]}
    Land: {" ".join(house["LandAreas"])} ({house["LandAreaCount"]} total)
    Castle Count (calculated at round's end): {house["RoundEndCastleCount"]}
    """

def convertUnitLocationsAndOrdersToPlainText(UnitLocationSnapshotData: Dict[GameLocation, List[UnitState]], OrderTokenChoices: Dict[GameLocation, str]):
    unitLocationsAndOrders = []
    for location, units in UnitLocationSnapshotData.items():
        if (units.__len__() == 0): continue

        orderToken = OrderTokenChoices.get(location, "no")

        unitTypes = [unit["type"] for unit in units]

        output = f"Faction {units[0]['house']} has a {orderToken} order on {location} with units:{",".join(unitTypes)}"

        unitLocationsAndOrders.append(output)

    return "\t" + "\n\t".join(unitLocationsAndOrders)

def convertTrackBidToPlainText(trackBid: CleanBiddingData) -> str:
    return f"Faction {trackBid['Faction']} bid {trackBid['Amount']} on track {trackBid['Track']}"

def convertWildlingBidToPlainText(wildlingBid: WildingTrackData) -> str:
    return f"Faction {wildlingBid['Faction']} bid {wildlingBid['Amount']}"

def convertTrackToPlainText(name: str, track: list[str] | None) -> str:
    if not track:
        return f"{name}: N/A"
    entries = "\n".join(f"\t\t{i+1}. {house}" for i, house in enumerate(track))
    return f"{name}:\n{entries}"

def convertRoundToPlainText(round: ExtractedRoundData) -> str:
    faction_lines = [
        convertHouseSnapshotToPlainText(faction)
        for faction in round["HouseSnapshotData"].values()
        if faction["SupplyTier"] != -1
    ]

    unit_orders = convertUnitLocationsAndOrdersToPlainText(
        round.get('UnitLocationSnapshotData', {}),
        round.get('OrderTokenChoices', {})
    )

    output = f"""
    Round {round['Round']} Stats:

    {convertTrackToPlainText('Iron Throne Track', round.get('IronThroneTrack'))}
    {convertTrackToPlainText('Fiefdom Track',     round.get('FiefdomTrack'))}
    {convertTrackToPlainText('Kings Court Track', round.get('KingsCourtThroneTrack'))}

    {"\n".join(faction_lines)}

    Unit Locations and Orders:
    {unit_orders}
    """
    return output

def convertLogIndexToRoundPlainText(currentGameStateReferenceIndex : int, roundData : List[ExtractedRoundData]):
    # Could do this more efficiently with binary search and an array implementation
    for round in roundData:
        if (currentGameStateReferenceIndex != round["LogIndex"]): continue
        return convertRoundToPlainText(round)
    
    raise IndexError(f"{currentGameStateReferenceIndex} index could not be found")

def buildContextForEvent(playerString : str, settingSettings : str, currentGameStateReferenceIndex : int, gameID : str, roundData : List[ExtractedRoundData]):
    return f"""
    Game: 
    {gameID}

    Settings:
    {settingSettings}

    Players:
    {playerString}
    
    {convertLogIndexToRoundPlainText(currentGameStateReferenceIndex, roundData)}
    """ 
from Contracts.RequestContracts import GameContext
def buildGameStateString(context: GameContext) -> str:
    parts = [
        f"Players: {convertPlayerToPlainText(context.players)}",
        convertRoundToPlainText(context.gameState),
    ]
    if context.trackBids:
        parts.append(f"Track Bids:\n{convertTrackBidListToPlainText(context.trackBids)}")
    if context.wildlingBids:
        parts.append(f"Wildling Bids:\n{convertWildlingBidListToPlainText(context.wildlingBids)}")
    if context.combat:
        parts.append(f"Last Combat:\n{convertCombatToPlainText(context.combat)}")
    return "\n\n".join(parts)