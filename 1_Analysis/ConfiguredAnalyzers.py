from Analysis.Framework.RefinementEngine import GameDataAnalyzer
from Analysis.Modules.FactionBattleStats import analyze_faction_battle_stats
from Analysis.Modules.AnalyzeBids import analyze_bid_distributions
from Analysis.Modules.CardChoiceAnalysis import analyze_possible_card_choice
from Analysis.Modules.FactionBattleStatsTrialCombination import faction_battle_stats_trial_combination
from Analysis.Modules.BidTrialCombination import bid_trial_combination
from Analysis.Modules.CardChoiceTrialCombination import card_choice_trial_combination

faction_battle_analyzer: GameDataAnalyzer[dict] = GameDataAnalyzer(
    analyze_faction_battle_stats,
    faction_battle_stats_trial_combination,
)

bid_analyzer: GameDataAnalyzer[dict] = GameDataAnalyzer(
    analyze_bid_distributions,
    bid_trial_combination,
)

card_choice_analyzer: GameDataAnalyzer[dict] = GameDataAnalyzer(
    analyze_possible_card_choice,
    card_choice_trial_combination,
)
