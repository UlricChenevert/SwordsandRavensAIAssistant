import { analysisTypes, AnalyzedData, IGameDataAnalyzer, ITrialCombination } from "../../Contracts/AnalysisContracts.js"
import { ScrapedData } from "../../Contracts/ExtractionContracts.js"

export class GameDataAnalyzer<AnalyzedObject extends object> {
    constructor(
        public analyzer : IGameDataAnalyzer<AnalyzedObject>,
        public trialCombination : ITrialCombination<AnalyzedObject>,
    ) 
    {}
}

export const AnalyzeData = (uniqueTrials : ScrapedData[], analysisFunctions : GameDataAnalyzer<analysisTypes>[], analyzedData : AnalyzedData) => {
    analysisFunctions.forEach((analysisFunction)=>{
        const trialData = uniqueTrials.map(trial=>analysisFunction.analyzer(trial))

        // console.log(trialData)

        analysisFunction.trialCombination(trialData, analyzedData)
    })

    return analyzedData
}