from typing import Dict, Any, List

from Contracts.AnalysisContracts import AnalyzedData
from Utilities.Stats import determine_cdf, get_probability_from_cdf, binomial

BidAnalysisData = Dict[str, Any]


def bid_trial_combination(trials: List[BidAnalysisData], combined_data: AnalyzedData) -> None:
    if not trials:
        return

    combined_data['Iron Throne Distribution'] = _average_distribution('Iron Throne Distribution', trials)
    combined_data['Fiefdom Distribution'] = _average_distribution('Fiefdom Distribution', trials)
    combined_data["King's Court Distribution"] = _average_distribution("King's Court Distribution", trials)

    combined_data['Average Bid'] = sum(t.get('Average Bid', 0) for t in trials) / len(trials)

    combined_data['Iron Throne Bid Chart'] = _determine_bidding_placement(
        combined_data['Iron Throne Distribution']
    )
    combined_data['Fiefdom Bid Chart'] = _determine_bidding_placement(
        combined_data['Fiefdom Distribution']
    )
    combined_data["King's Court Bid Chart"] = _determine_bidding_placement(
        combined_data["King's Court Distribution"]
    )


def _average_distribution(key: str, trials: List[BidAnalysisData]) -> Dict[float, float]:
    sums: Dict[float, float] = {}
    for trial in trials:
        dist: Dict[float, float] = trial.get(key, {})
        for k, v in dist.items():
            n = float(k)
            sums[n] = sums.get(n, 0.0) + float(v)

    return {k: v / len(trials) for k, v in sums.items()}


def _determine_bidding_placement(
    bid_partial_mass_distribution: Dict[float, float],
    player_count: int = 8,
    max_bid: int = 20,
) -> List[List[Dict[str, Any]]]:
    cdf = determine_cdf(bid_partial_mass_distribution)
    num_opponents = player_count - 1

    placement_charts: List[List[Dict[str, Any]]] = [[] for _ in range(player_count)]

    for bid in range(max_bid + 1):
        probability = get_probability_from_cdf(bid, cdf)

        for outbid_by in range(num_opponents + 1):
            prob_of_rank = (
                binomial(num_opponents, outbid_by)
                * (1 - probability) ** outbid_by
                * probability ** (num_opponents - outbid_by)
            )
            placement_charts[outbid_by].append({'amount': bid, 'probability': prob_of_rank})

    return placement_charts
