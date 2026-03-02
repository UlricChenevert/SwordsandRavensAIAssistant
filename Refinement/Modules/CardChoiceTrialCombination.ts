import { possibleFactions, possibleLocations, possibleHouseCards } from "../../../Data/GameConstants.js";
import { ITrialCombination, ProbablyDistribution, AnalyzedData, CardChoiceAnalysisData } from "../../../Contracts/AnalysisContracts.js";
import { HouseCard } from "../../../Data/GameTypes.js";
import { combineCardDistributionForMap, combineCardDistributions, emptyAverageCardDistributionFactory } from "../../../Utilities/MiltaryAnalysisUtilities.js";
import { AnalyzedKeys } from "../../../Contracts/AnalysisConstants.js";

export const CardChoiceTrialCombination : ITrialCombination<CardChoiceAnalysisData> = (trials, combinedData: AnalyzedData)=>{
    if (combinedData[AnalyzedKeys.CardChoices] === undefined) combinedData[AnalyzedKeys.CardChoices] = emptyAverageCardDistributionFactory()
    
    const result = combinedData[AnalyzedKeys.CardChoices]
    
    trials.forEach((trial)=>{
        possibleFactions.forEach((faction)=>{
            const trialFactionStats = trial[AnalyzedKeys.CardChoices][faction]

            possibleLocations.forEach((location)=>{
                combineCardDistributions(
                    trialFactionStats.LocationDistributions[location], 
                    result[faction].LocationDistributions[location]
                )
            })

            trialFactionStats.NonCardStrengthDistributions.forEach((probablyDistribution, strength)=>{
                combineCardDistributionForMap(result[faction].NonCardStrengthDistributions, strength, probablyDistribution)
            })

            trialFactionStats.OppositeSideStrengthDistributions.forEach((probablyDistribution, strength)=>{
                combineCardDistributionForMap(result[faction].OppositeSideStrengthDistributions, strength, probablyDistribution)
            })
        })
    })

    return result
}
