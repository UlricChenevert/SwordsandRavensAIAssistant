from typing import Dict, Any, List, cast

from Contracts.ExtractionContracts import ScrapedData
from Utilities.Stats import (
    determine_probability_mass_distribution,
    determine_cdf,
    get_probability_from_cdf,
    binomial,
)


def analyze_bid_distributions(data: ScrapedData) -> Dict[str, Any]:
    inner: Dict[str, Any] = list(data.values())[0]
    if not inner:
        raise ValueError("Empty json?")

    bids: List[Dict[str, Any]] = cast(List[Dict[str, Any]], inner['TrackBids'])

    iron_throne_data = [b for b in bids if b['Track'] == 'Iron Throne']
    fiefdom_data = [b for b in bids if b['Track'] == 'Fiefdom']
    kings_court_data = [b for b in bids if b['Track'] == "King's Court"]

    def bid_accessor(element: Dict[str, Any]) -> float:
        return float(element['Amount'])

    iron_throne_dist = determine_probability_mass_distribution(iron_throne_data, bid_accessor)
    fiefdom_dist = determine_probability_mass_distribution(fiefdom_data, bid_accessor)
    kings_court_dist = determine_probability_mass_distribution(kings_court_data, bid_accessor)

    avg_bid = sum(float(b['Amount']) for b in bids) / len(bids) if bids else 0.0

    return {
        'Iron Throne Distribution': iron_throne_dist,
        'Fiefdom Distribution': fiefdom_dist,
        "King's Court Distribution": kings_court_dist,
        'Iron Throne Bid Chart': _determine_bidding_placement(iron_throne_dist),
        'Fiefdom Bid Chart': _determine_bidding_placement(fiefdom_dist),
        "King's Court Bid Chart": _determine_bidding_placement(kings_court_dist),
        'Average Bid': avg_bid,
    }


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
