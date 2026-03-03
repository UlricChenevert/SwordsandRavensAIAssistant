from typing import Callable, Generic, List, Any, TypeVar

from Contracts.ExtractionContracts import ScrapedData
from Contracts.AnalysisContracts import AnalyzedData

T = TypeVar('T')


class GameDataAnalyzer(Generic[T]):
    analyzer: Callable[[ScrapedData], T]
    trial_combination: Callable[[List[T], AnalyzedData], None]

    def __init__(
        self,
        analyzer: Callable[[ScrapedData], T],
        trial_combination: Callable[[List[T], AnalyzedData], None],
    ) -> None:
        self.analyzer = analyzer
        self.trial_combination = trial_combination


def analyze_data(
    unique_trials: List[ScrapedData],
    analysis_functions: List[GameDataAnalyzer[Any]],
    analyzed_data: AnalyzedData,
) -> AnalyzedData:
    for analysis_function in analysis_functions:
        trial_data: List[Any] = [analysis_function.analyzer(trial) for trial in unique_trials]
        analysis_function.trial_combination(trial_data, analyzed_data)

    return analyzed_data
