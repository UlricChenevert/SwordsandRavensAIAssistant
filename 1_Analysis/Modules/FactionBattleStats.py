from typing import Dict, Any, List, cast

from Contracts.AnalysisConstants import AnalyzedKeys
from Contracts.ExtractionContracts import ScrapedData, CombatLog
from Utilities.MiltaryAnalysisUtilities import extract_combat_logs

_ALL_FACTIONS: List[str] = [
    "baratheon", "tyrell", "lannister", "arryn",
    "greyjoy", "targaryen", "martell", "stark",
]


def _empty_faction_stats() -> Dict[str, Any]:
    return {
        'wins': 0,
        'losses': 0,
        'totalBattles': 0,
        'winRate': 0.0,
        'avgArmySize': 0.0,
        'avgEnemyArmy': 0.0,
        'winningHouseCards': {},
        'regionVictories': {},
        'regionLosses': {},
        'winRateOverTime': [],
    }


def analyze_faction_battle_stats(data: ScrapedData) -> Dict[str, Any]:
    combat_logs: List[CombatLog] = extract_combat_logs(data)
    faction_stats: Dict[str, Dict[str, Any]] = {f: _empty_faction_stats() for f in _ALL_FACTIONS}

    for combat in combat_logs:
        winner: str = cast(str, combat['WinnerData']['House'])
        loser: str = cast(str, combat['LoserData']['House'])
        round_num: int = cast(int, combat['round'])
        region: str = cast(str, combat['BattleData']['AttackedRegion'])

        winner_stats = faction_stats[winner]
        winner_stats['totalBattles'] += 1
        winner_stats['wins'] += 1
        winner_stats['regionVictories'][region] = winner_stats['regionVictories'].get(region, 0) + 1

        n: int = winner_stats['totalBattles']
        winner_total: float = cast(float, combat['WinnerData']['Total'])
        loser_total: float = cast(float, combat['LoserData']['Total'])
        winner_stats['avgArmySize'] = (winner_stats['avgArmySize'] * (n - 1) + winner_total) / n
        winner_stats['avgEnemyArmy'] = (winner_stats['avgEnemyArmy'] * (n - 1) + loser_total) / n

        winner_card: Any = combat['WinnerData'].get('HouseCard')
        if winner_card:
            winner_stats['winningHouseCards'][winner_card] = (
                winner_stats['winningHouseCards'].get(winner_card, 0) + 1
            )

        loser_stats = faction_stats[loser]
        loser_stats['totalBattles'] += 1
        loser_stats['losses'] += 1
        loser_stats['regionLosses'][region] = loser_stats['regionLosses'].get(region, 0) + 1

        m: int = loser_stats['totalBattles']
        loser_stats['avgArmySize'] = (loser_stats['avgArmySize'] * (m - 1) + loser_total) / m
        loser_stats['avgEnemyArmy'] = (loser_stats['avgEnemyArmy'] * (m - 1) + winner_total) / m

        winner_stats['winRateOverTime'].append({'timestamp': round_num, 'winRate': 1})
        loser_stats['winRateOverTime'].append({'timestamp': round_num, 'winRate': 0})

    return {AnalyzedKeys.MiliaryFactionStatistics: faction_stats}
