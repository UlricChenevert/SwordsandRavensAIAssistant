import sys
import os

# Ensure the project root is on sys.path so package imports work
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from Analysis.Framework.LoadAndStoreData import (
    load_scraped_data,
    load_analyzed_data,
    remove_redundant_data,
    store_data,
)
from Analysis.Framework.RefinementEngine import analyze_data
from Analysis.ConfiguredAnalyzers import faction_battle_analyzer, bid_analyzer, card_choice_analyzer


def main() -> None:
    scraped_data = remove_redundant_data(load_scraped_data(-1))
    already_analyzed = load_analyzed_data()

    newly_analyzed = analyze_data(
        scraped_data,
        [faction_battle_analyzer, bid_analyzer, card_choice_analyzer],
        already_analyzed,
    )

    store_data(newly_analyzed)
    print(f"Analysis complete. Processed {len(scraped_data)} game(s).")


if __name__ == '__main__':
    main()
