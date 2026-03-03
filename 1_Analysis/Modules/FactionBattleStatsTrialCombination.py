from typing import Dict, Any, List, Optional

from Contracts.AnalysisConstants import AnalyzedKeys
from Contracts.AnalysisContracts import AnalyzedData

MiliaryFactionStatistics = Dict[str, Any]

_ALL_FACTIONS = ["baratheon", "tyrell", "lannister", "arryn", "greyjoy", "targaryen", "martell", "stark"]


def faction_battle_stats_trial_combination(
    trials: List[MiliaryFactionStatistics], combined_data: AnalyzedData
) -> None:
    if AnalyzedKeys.MiliaryFactionStatistics not in combined_data:
        combined_data[AnalyzedKeys.MiliaryFactionStatistics] = {f: None for f in _ALL_FACTIONS}

    result: Dict[str, Any] = combined_data[AnalyzedKeys.MiliaryFactionStatistics]

    for trial in trials:
        trial_stats: Dict[str, Any] = trial[AnalyzedKeys.MiliaryFactionStatistics]
        for faction in _ALL_FACTIONS:
            result[faction] = _combine_faction_stats(result[faction], trial_stats[faction])


def _combine_faction_stats(
    working: Optional[Dict[str, Any]],
    new: Optional[Dict[str, Any]],
) -> Optional[Dict[str, Any]]:
    if new is None:
        return working
    if working is None:
        return new

    working['wins'] += new['wins']
    working['losses'] += new['losses']
    working['totalBattles'] += new['totalBattles']
    working['winRate'] = (
        working['wins'] / working['totalBattles'] if working['totalBattles'] else 0.0
    )
    working['avgArmySize'] = (working['avgArmySize'] + new['avgArmySize']) / 2
    working['avgEnemyArmy'] = (working['avgEnemyArmy'] + new['avgEnemyArmy']) / 2

    for card, count in new['winningHouseCards'].items():
        working['winningHouseCards'][card] = working['winningHouseCards'].get(card, 0) + count

    for region, count in new['regionVictories'].items():
        working['regionVictories'][region] = working['regionVictories'].get(region, 0) + count

    for region, count in new['regionLosses'].items():
        working['regionLosses'][region] = working['regionLosses'].get(region, 0) + count

    working['winRateOverTime'].extend(new['winRateOverTime'])

    return working
