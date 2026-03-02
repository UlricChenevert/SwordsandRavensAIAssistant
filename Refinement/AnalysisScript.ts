import { loadAnalyzedData, loadScrappedData, RemoveRedundantData, storeData } from './Framework/LoadAndStoreData.js';
import { AnalyzeData } from './Framework/AnalysisEngine.js';
import { BidAnalyzer, CardChoiceAnalyzer, FactionBattleAnalyzer } from '../Scripts/AnalysisScript/Typescript/ConfiguredAnalyzers.js';

const scrappedData = RemoveRedundantData(await loadScrappedData())
const alreadyAnalyzedData = await loadAnalyzedData()

const newlyAnalyzedData = AnalyzeData(
    scrappedData, 
    [FactionBattleAnalyzer, BidAnalyzer, CardChoiceAnalyzer],
    alreadyAnalyzedData
)

storeData (newlyAnalyzedData)