import { GameDataAnalyzer } from "../../../Refinement/Framework/AnalysisEngine.js";
import { analyzeFactionBattleStats, FactionBattleStatsTrialCombination } from "../../../Refinement/Modules/FactionBattleStats.js";
import { analyzeBidDistributions } from "../../Analysis Modules/Ecomony/AnalyzeBids.js";
import { analyzePossibleCardChoice } from "../../../Refinement/Modules/CardChoiceAnalysis.js";
import { CardChoiceTrialCombination } from "../../../Refinement/Modules/CardChoiceTrialCombination.js";
import { BidTrialCombination } from "../../Analysis Modules/Ecomony/BidTrialCombination.js";

export const FactionBattleAnalyzer = new GameDataAnalyzer(analyzeFactionBattleStats, FactionBattleStatsTrialCombination)
export const BidAnalyzer = new GameDataAnalyzer(analyzeBidDistributions, BidTrialCombination)
export const CardChoiceAnalyzer = new GameDataAnalyzer(analyzePossibleCardChoice, CardChoiceTrialCombination)