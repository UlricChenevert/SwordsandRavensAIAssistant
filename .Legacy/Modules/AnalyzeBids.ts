import { BidAnalysisData, CleanBiddingData, ScrapedData } from "../../Contracts/ExtractionContracts.js";
import { binomial, determineCDF, determineProbabilityMassDistribution, getProbabilityFromCDF } from "../../Utilities/Stats.js";

export const analyzeBidDistributions = (data: ScrapedData): BidAnalysisData => {
    const gameData = Object.values(data)[0]
    if (!gameData) throw "Empty json?"

    const bids: CleanBiddingData[] = gameData.TrackBids

    const ironThroneData = bids.filter((bidData) => bidData.Track == "Iron Throne");
    const fiefdomData = bids.filter((bidData) => bidData.Track == "Fiefdom");
    const kingsCourtData = bids.filter((bidData) => bidData.Track == "King's Court");

    const bidDataAccessor = (element : CleanBiddingData) => element.Amount;

    const ironThroneDistribution = determineProbabilityMassDistribution(ironThroneData, bidDataAccessor);
    const fiefdomDistribution = determineProbabilityMassDistribution(fiefdomData, bidDataAccessor);
    const kingsCourtDistribution = determineProbabilityMassDistribution(kingsCourtData, bidDataAccessor);

    const averageBid =
        bids.length > 0
            ? bids.reduce((sum, bid) => sum + bid.Amount, 0) / bids.length
            : 0;

    return {
        "Iron Throne Distribution": ironThroneDistribution,
        "Fiefdom Distribution": fiefdomDistribution,
        "King's Court Distribution": kingsCourtDistribution,
        "Iron Throne Bid Chart": determineBiddingPlacement(ironThroneDistribution),
        "Fiefdom Bid Chart": determineBiddingPlacement(fiefdomDistribution),
        "King's Court Bid Chart": determineBiddingPlacement(kingsCourtDistribution),
        "Average Bid": averageBid,
    };
};

// Returns one series per placement (index 0 = 1st place, 1 = 2nd place, …).
// Each series contains { amount, probability } for every bid amount, letting
// you read off: "to finish Nth, bid X gives you Y% success".
const determineBiddingPlacement = (BidPartialMassDistribution: {[key: number]: number}, playerCount: number = 8, maxBid = 20) => {
    const CDF = determineCDF(BidPartialMassDistribution);
    const numOpponents = playerCount - 1;

    const placementCharts: { amount: number; probability: number }[][] =
        Array.from({ length: playerCount }, () => []);

    for (let bid = 0; bid <= maxBid; bid++) {
        const probability = getProbabilityFromCDF(bid, CDF);

        for (let outbidBy = 0; outbidBy <= numOpponents; outbidBy++) {
            // outbidBy = number of opponents who bid strictly higher than you
            const probOfRank =
                binomial(numOpponents, outbidBy)
                * Math.pow(1 - probability, outbidBy)
                * Math.pow(probability, numOpponents - outbidBy);

            placementCharts[outbidBy]!.push({ amount: bid, probability: probOfRank });
        }
    }

    return placementCharts;
}