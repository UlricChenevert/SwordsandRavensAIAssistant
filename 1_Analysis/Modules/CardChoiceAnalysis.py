from typing import Dict, Any, List, cast

from Contracts.AnalysisConstants import AnalyzedKeys
from Contracts.ExtractionContracts import ScrapedData, CombatLog
from Data.GameConstants import possible_factions
from Utilities.MiltaryAnalysisUtilities import (
    extract_combat_logs,
    working_card_total_distribution_factory,
    increment_card_distribution_from_battle_participant,
    empty_average_card_distribution_factory,
    average_all_distributions,
)


def analyze_possible_card_choice(data: ScrapedData) -> Dict[str, Any]:
    combat_logs: List[CombatLog] = extract_combat_logs(data)
    working_card_distributions: Dict[str, Any] = working_card_total_distribution_factory()

    for log in combat_logs:
        location: str = cast(str, log['BattleData']['AttackedRegion'])
        increment_card_distribution_from_battle_participant(
            location,
            dict(log['WinnerData']),
            dict(log['LoserData']),
            working_card_distributions,
        )
        increment_card_distribution_from_battle_participant(
            location,
            dict(log['LoserData']),
            dict(log['WinnerData']),
            working_card_distributions,
        )

    faction_card_probabilities: Dict[str, Any] = empty_average_card_distribution_factory()

    for faction in possible_factions:
        average_all_distributions(
            working_card_distributions[faction],
            faction_card_probabilities[faction],
        )

    return {AnalyzedKeys.CardChoices: faction_card_probabilities}
