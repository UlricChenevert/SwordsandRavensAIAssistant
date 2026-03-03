from typing import Dict, List, Any, Optional, TypeVar, cast

from Contracts.ExtractionContracts import ScrapedData, CombatLog
from Data.GameConstants import possible_factions, possible_locations

K = TypeVar('K')


def extract_combat_logs(data: ScrapedData) -> List[CombatLog]:
    inner: Dict[str, Any] = list(data.values())[0]
    return cast(List[CombatLog], inner['combatLogs'])


def _card_sum_distribution_factory() -> Dict[str, Any]:
    return {'SumDistribution': {}, 'Total': 0}


def _card_probably_distribution_factory() -> Dict[str, Any]:
    return {'Probability': {}, 'Total': 0}


def working_card_total_distribution_factory() -> Dict[str, Any]:
    final_buckets: Dict[str, Any] = {}
    for faction in possible_factions:
        location_dists: Dict[str, Any] = {loc: _card_sum_distribution_factory() for loc in possible_locations}
        final_buckets[faction] = {
            'LocationDistributions': location_dists,
            'OppositeSideStrengthDistributions': {},
            'NonCardStrengthDistributions': {},
        }
    return final_buckets


def empty_average_card_distribution_factory() -> Dict[str, Any]:
    final_buckets: Dict[str, Any] = {}
    for faction in possible_factions:
        location_dists: Dict[str, Any] = {loc: _card_probably_distribution_factory() for loc in possible_locations}
        final_buckets[faction] = {
            'LocationDistributions': location_dists,
            'OppositeSideStrengthDistributions': {},
            'NonCardStrengthDistributions': {},
        }
    return final_buckets


def increment_card_distribution(record: Dict[str, Any], house_card: str) -> None:
    counts: Dict[str, int] = record['SumDistribution']
    counts[house_card] = counts.get(house_card, 0) + 1
    record['Total'] = cast(int, record['Total']) + 1


def increment_card_distribution_for_map(
    map_dict: Dict[K, Dict[str, Any]], key: K, house_card: str
) -> None:
    if key not in map_dict:
        map_dict[key] = _card_sum_distribution_factory()
    increment_card_distribution(map_dict[key], house_card)


def combine_card_distributions(
    new_distribution: Optional[Dict[str, Any]],
    target_distribution: Optional[Dict[str, Any]],
) -> None:
    if new_distribution is None or target_distribution is None:
        return

    new_total: int = cast(int, target_distribution['Total']) + cast(int, new_distribution['Total'])

    new_probs: Dict[str, float] = new_distribution['Probability']
    target_probs: Dict[str, float] = target_distribution['Probability']
    target_total: int = cast(int, target_distribution['Total'])
    new_dist_total: int = cast(int, new_distribution['Total'])

    for house_card, new_prob in new_probs.items():
        target_prob = target_probs.get(house_card)
        if target_prob is None:
            target_probs[house_card] = new_prob
        else:
            target_probs[house_card] = (
                (target_prob * target_total + new_prob * new_dist_total) / new_total
            )

    target_distribution['Total'] = new_total


def combine_card_distribution_for_map(
    distribution_map: Dict[K, Dict[str, Any]],
    key: K,
    new_prob_dist: Dict[str, Any],
) -> None:
    if key not in distribution_map:
        distribution_map[key] = {
            'Probability': dict(cast(Dict[str, float], new_prob_dist['Probability'])),
            'Total': new_prob_dist['Total'],
        }
    else:
        combine_card_distributions(new_prob_dist, distribution_map[key])


def increment_card_distribution_from_battle_participant(
    location: str,
    main_participant: Dict[str, Any],
    secondary_participant: Dict[str, Any],
    working_card_distributions: Dict[str, Any],
) -> None:
    main_card: Optional[str] = main_participant.get('HouseCard')
    if not main_card:
        return

    main_non_card_strength: int = (
        cast(int, main_participant['Total']) - cast(int, main_participant['HouseCardStrength'])
    )
    secondary_strength: int = cast(int, secondary_participant['Total'])
    faction_dists: Dict[str, Any] = working_card_distributions[main_participant['House']]

    increment_card_distribution(faction_dists['LocationDistributions'][location], main_card)
    increment_card_distribution_for_map(
        faction_dists['NonCardStrengthDistributions'], main_non_card_strength, main_card
    )
    increment_card_distribution_for_map(
        faction_dists['OppositeSideStrengthDistributions'], secondary_strength, main_card
    )


def average_all_distributions(
    working_card_distributions: Dict[str, Any],
    target_card_distribution: Dict[str, Any],
) -> Dict[str, Any]:
    for location in possible_locations:
        working_loc: Dict[str, Any] = working_card_distributions['LocationDistributions'][location]
        total: int = cast(int, working_loc['Total'])
        if total == 0:
            continue
        target_probs: Dict[str, float] = target_card_distribution['LocationDistributions'][location]['Probability']
        for house_card, count in cast(Dict[str, int], working_loc['SumDistribution']).items():
            target_probs[house_card] = count / total
        target_card_distribution['LocationDistributions'][location]['Total'] = total

    for strength, dist in working_card_distributions['NonCardStrengthDistributions'].items():
        dist_total: int = cast(int, dist['Total'])
        prob_dist = _card_probably_distribution_factory()
        for house_card, count in cast(Dict[str, int], dist['SumDistribution']).items():
            cast(Dict[str, float], prob_dist['Probability'])[house_card] = count / dist_total
        prob_dist['Total'] = dist_total
        target_card_distribution['NonCardStrengthDistributions'][strength] = prob_dist

    for strength, dist in working_card_distributions['OppositeSideStrengthDistributions'].items():
        dist_total = cast(int, dist['Total'])
        prob_dist = _card_probably_distribution_factory()
        for house_card, count in cast(Dict[str, int], dist['SumDistribution']).items():
            cast(Dict[str, float], prob_dist['Probability'])[house_card] = count / dist_total
        prob_dist['Total'] = dist_total
        target_card_distribution['OppositeSideStrengthDistributions'][strength] = prob_dist

    return target_card_distribution
