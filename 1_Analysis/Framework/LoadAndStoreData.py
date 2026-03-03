import json
import os
from typing import List, Dict, Any

DEFAULT_READ_DIR = './Data/CollectedData/'
DEFAULT_WRITE_DIR = './Data/AnalyzedData/'
ANALYZED_DATA_NAME = 'AnalyzedData.json'

def remove_redundant_data(scraped_data_list: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    seen_ids: set[str] = set()
    final_data: List[Dict[str, Any]] = []

    for file_data in scraped_data_list:
        game_id = next(iter(file_data.keys()))

        if game_id in seen_ids:
            continue

        seen_ids.add(game_id)
        final_data.append(file_data)
    
    return final_data


def load_scraped_data(amount: int = 1) -> List[Dict[str, Any]]:
    files = os.listdir(DEFAULT_READ_DIR)
    if amount < 0:
        amount = len(files)
    files = files[:amount]

    result: List[Dict[str, Any]] = []
    for filename in files:
        path = os.path.join(DEFAULT_READ_DIR, filename)
        with open(path, 'r', encoding='utf-8') as f:
            result.append(json.load(f))
    return result


def load_analyzed_data() -> Dict[str, Any]:
    path = os.path.join(DEFAULT_WRITE_DIR, ANALYZED_DATA_NAME)
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


def store_data(data: Dict[str, Any], override: bool = True) -> None:
    os.makedirs(DEFAULT_WRITE_DIR, exist_ok=True)
    if override:
        for filename in os.listdir(DEFAULT_WRITE_DIR):
            os.remove(os.path.join(DEFAULT_WRITE_DIR, filename))

    path = os.path.join(DEFAULT_WRITE_DIR, ANALYZED_DATA_NAME)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
