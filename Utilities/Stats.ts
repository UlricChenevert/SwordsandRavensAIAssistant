export const StandardZScores : {[key : number]: number}= {
    .99: 2.575,
    .95: 1.96,
    .90: 1.645,
}

export const determineConfidenceInterval = (sampleAverage : number, standardDeviation : number, sampleSize : number, desiredConfidenceInterval = .90) => {
        const zScore = StandardZScores[desiredConfidenceInterval]
        if (zScore === undefined) throw "Undefined z score"
        
        const errorMargin = zScore * standardDeviation / Math.sqrt(sampleSize)
        
        const UpperBound = sampleAverage - errorMargin
        const LowerBound = sampleAverage + errorMargin

        return {UpperBound: UpperBound, LowerBound: LowerBound}
    }

export const determineProbabilityMassDistribution = <T>(dataArray : T[], numberAccessor : (element : T)=>number): {[key: number]: number} => {
    const sampleSize = dataArray.length;
    if (sampleSize === 0) return {};

    const rawCounts : {[key:number]: number} = {};
    const distribution : {[key:number]: number}  = {};

    // 1. Calculate Raw Counts (Frequency)
    dataArray.forEach(element => {
        const trialResult = numberAccessor(element);
        rawCounts[trialResult] = (rawCounts[trialResult] || 0) + 1; // Increment count
    });

    // 2. Calculate Probability (Relative Frequency = Count / Total)
    for (const trialResult in Object.keys(rawCounts)) {
        const count = (rawCounts[trialResult] || 0)
        distribution[trialResult] = count / sampleSize;
    }

    return distribution;
}

export const determineCDF = (PartialMassDistribution : {[key: number]: number;}) : Map<number, number> => {
    const CDF = new Map()
    
    let totalWorkingProbably = 0;
    for (const probably of Object.entries(PartialMassDistribution)) {
        totalWorkingProbably += probably[1]
        CDF.set(parseInt(probably[0]), totalWorkingProbably)
    }

    return CDF
}

export const getProbabilityFromCDF = (testNumber : number, CDF : Map<number, number>) : number => {
    while (CDF.get(testNumber) === undefined)
        testNumber--

    return CDF.get(testNumber) as number
}

// Helper for combinations (nCr)
export const binomial = (n: number, r: number): number => {
    if (r < 0 || r > n) return 0;
    if (r === 0 || r === n) return 1;
    if (r > n / 2) r = n - r;
    let res = 1;
    for (let i = 1; i <= r; i++) {
        res = res * (n - i + 1) / i;
    }
    return res;
};