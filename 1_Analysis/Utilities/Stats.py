import math
from typing import Callable, Dict, List, TypeVar

T = TypeVar('T')

STANDARD_Z_SCORES: Dict[float, float] = {
    0.99: 2.575,
    0.95: 1.96,
    0.90: 1.645,
}


def determine_confidence_interval(sample_average: float, standard_deviation: float,
                                   sample_size: int, desired_confidence_interval: float = 0.90) -> Dict[str, float]:
    z_score = STANDARD_Z_SCORES.get(desired_confidence_interval)
    if z_score is None:
        raise ValueError(f"Undefined z score for confidence interval {desired_confidence_interval}")

    error_margin = z_score * standard_deviation / math.sqrt(sample_size)

    # Note: bounds are intentionally swapped to match TypeScript source behaviour
    upper_bound = sample_average - error_margin
    lower_bound = sample_average + error_margin

    return {'UpperBound': upper_bound, 'LowerBound': lower_bound}


def determine_probability_mass_distribution(data_array: List[T],
                                             number_accessor: Callable[[T], float]) -> Dict[float, float]:
    sample_size = len(data_array)
    if sample_size == 0:
        return {}

    raw_counts: Dict[float, int] = {}
    for element in data_array:
        trial_result = number_accessor(element)
        raw_counts[trial_result] = raw_counts.get(trial_result, 0) + 1

    distribution: Dict[float, float] = {}
    for key, count in raw_counts.items():
        distribution[key] = count / sample_size

    return distribution


def determine_cdf(partial_mass_distribution: Dict[float, float]) -> Dict[float, float]:
    cdf: Dict[float, float] = {}
    total = 0.0
    for key in sorted(partial_mass_distribution.keys()):
        total += partial_mass_distribution[key]
        cdf[key] = total
    return cdf


def get_probability_from_cdf(test_number: float, cdf: Dict[float, float]) -> float:
    if not cdf:
        return 0.0
    min_key = min(cdf.keys())
    while test_number not in cdf:
        test_number -= 1
        if test_number < min_key:
            return 0.0
    return cdf[test_number]


def binomial(n: int, r: int) -> int:
    if r < 0 or r > n:
        return 0
    return math.comb(n, r)
