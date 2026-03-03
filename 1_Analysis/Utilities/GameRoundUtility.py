from typing import List, Dict, Any


def find_corresponding_round(target_index: int, mapping: List[Dict[str, Any]]) -> Dict[str, Any]:
    next_round_index = next(
        (i for i, r in enumerate(mapping) if r['index'] >= target_index),
        -1
    )

    if next_round_index == -1:
        return mapping[-1]

    return mapping[next_round_index - 1]
