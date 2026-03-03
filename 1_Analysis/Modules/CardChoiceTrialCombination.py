from typing import List, Dict, Any

from Contracts.AnalysisConstants import AnalyzedKeys
from Contracts.AnalysisContracts import AnalyzedData
from Data.GameConstants import possible_factions, possible_locations
from Utilities.MiltaryAnalysisUtilities import (
    combine_card_distributions,
    combine_card_distribution_for_map,
    empty_average_card_distribution_factory,
)

CardChoiceAnalysisData = Dict[str, Any]


def card_choice_trial_combination(
    trials: List[CardChoiceAnalysisData], combined_data: AnalyzedData
) -> None:
    if AnalyzedKeys.CardChoices not in combined_data:
        combined_data[AnalyzedKeys.CardChoices] = empty_average_card_distribution_factory()

    result: Dict[str, Any] = combined_data[AnalyzedKeys.CardChoices]

    for trial in trials:
        for faction in possible_factions:
            trial_faction_stats: Dict[str, Any] = trial[AnalyzedKeys.CardChoices][faction]

            for location in possible_locations:
                combine_card_distributions(
                    trial_faction_stats['LocationDistributions'][location],
                    result[faction]['LocationDistributions'][location],
                )

            for strength, prob_dist in trial_faction_stats['NonCardStrengthDistributions'].items():
                combine_card_distribution_for_map(
                    result[faction]['NonCardStrengthDistributions'],
                    strength,
                    prob_dist,
                )

            for strength, prob_dist in trial_faction_stats['OppositeSideStrengthDistributions'].items():
                combine_card_distribution_for_map(
                    result[faction]['OppositeSideStrengthDistributions'],
                    strength,
                    prob_dist,
                )
