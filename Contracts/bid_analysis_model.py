from dataclasses import dataclass, asdict
from typing import Dict, List, Any, Optional

# JSON keys used by the original TypeScript/JSON format
IRON_THRONE_DISTRIBUTION = "Iron Throne Distribution"
FIEFDOM_DISTRIBUTION = "Fiefdom Distribution"
KINGS_COURT_DISTRIBUTION = "King's Court Distribution"
AVERAGE_BID = "Average Bid"
IRON_THRONE_BID_CHART = "Iron Throne Bid Chart"
FIEFDOM_BID_CHART = "Fiefdom Bid Chart"
KINGS_COURT_BID_CHART = "King's Court Bid Chart"


@dataclass
class ProbablyDistribution:
    Probability: Dict[str, float]
    Total: int


@dataclass
class BidAnalysis:
    ironThroneDistribution: Optional[Dict[int, int]] = None
    fiefdomDistribution: Optional[Dict[int, int]] = None
    kingsCourtDistribution: Optional[Dict[int, int]] = None
    averageBid: Optional[float] = None
    ironThroneBidChart: Optional[List[List[ProbablyDistribution]]] = None
    fiefdomBidChart: Optional[List[List[ProbablyDistribution]]] = None
    kingsCourtBidChart: Optional[List[List[ProbablyDistribution]]] = None


def _convert_chart(chart_raw: Any) -> Optional[List[List[ProbablyDistribution]]]:
    if chart_raw is None:
        return None
    result: List[List[ProbablyDistribution]] = []
    for row in chart_raw:
        converted_row: List[ProbablyDistribution] = []
        for item in row:
            # item expected as { Probability: {<key>: <float>, ...}, Total: int }
            prob = item.get("Probability") if isinstance(item, dict) else None
            total = item.get("Total") if isinstance(item, dict) else None
            converted_row.append(ProbablyDistribution(Probability=prob or {}, Total=total or 0))
        result.append(converted_row)
    return result


def bid_analysis_from_json(data: Dict[str, Any]) -> BidAnalysis:
    """Parse the JSON-like dict into a `BidAnalysis` dataclass.

    Expects the original human-readable keys (with spaces) in `data`.
    """
    return BidAnalysis(
        ironThroneDistribution=data.get(IRON_THRONE_DISTRIBUTION),
        fiefdomDistribution=data.get(FIEFDOM_DISTRIBUTION),
        kingsCourtDistribution=data.get(KINGS_COURT_DISTRIBUTION),
        averageBid=data.get(AVERAGE_BID),
        ironThroneBidChart=_convert_chart(data.get(IRON_THRONE_BID_CHART)),
        fiefdomBidChart=_convert_chart(data.get(FIEFDOM_BID_CHART)),
        kingsCourtBidChart=_convert_chart(data.get(KINGS_COURT_BID_CHART)),
    )


def bid_analysis_to_json(obj: BidAnalysis) -> Dict[str, Any]:
    """Serialize a `BidAnalysis` dataclass back to the JSON-keyed dict.

    Converts nested dataclasses into plain dicts suitable for JSON dumping.
    """
    out: Dict[str, Any] = {}
    if obj.ironThroneDistribution is not None:
        out[IRON_THRONE_DISTRIBUTION] = obj.ironThroneDistribution
    if obj.fiefdomDistribution is not None:
        out[FIEFDOM_DISTRIBUTION] = obj.fiefdomDistribution
    if obj.kingsCourtDistribution is not None:
        out[KINGS_COURT_DISTRIBUTION] = obj.kingsCourtDistribution
    if obj.averageBid is not None:
        out[AVERAGE_BID] = obj.averageBid

    def _chart_to_raw(chart: Optional[List[List[ProbablyDistribution]]]):
        if chart is None:
            return None
        raw = []
        for row in chart:
            raw_row = []
            for pd in row:
                raw_row.append(asdict(pd))
            raw.append(raw_row)
        return raw

    iron_raw = _chart_to_raw(obj.ironThroneBidChart)
    if iron_raw is not None:
        out[IRON_THRONE_BID_CHART] = iron_raw
    fief_raw = _chart_to_raw(obj.fiefdomBidChart)
    if fief_raw is not None:
        out[FIEFDOM_BID_CHART] = fief_raw
    kings_raw = _chart_to_raw(obj.kingsCourtBidChart)
    if kings_raw is not None:
        out[KINGS_COURT_BID_CHART] = kings_raw

    return out


__all__ = ["ProbablyDistribution", "BidAnalysis", "bid_analysis_from_json", "bid_analysis_to_json"]
