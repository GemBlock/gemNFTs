enum Clarity {
  FL = "FL",
  IF = "IF",
  VVS1 = "VVS1",
  VVS2 = "VVS2",
  VS1 = "VS1",
  VS2 = "VS2",
  SI1 = "SI1",
  SI2 = "SI2",
  I1 = "I1",
  I2 = "I2",
  I3 = "I3",
}

const clarityDescriptions = [
  "Flawless",
  "Internally Flawless",
  "Very, Very Slightly Included 1",
  "Very, Very Slightly Included 2",
  "Very Slightly Included 1",
  "Very Slightly Included 2",
  "Slightly Included 1",
  "Slightly Included 2",
  "Included 1",
  "Included 2",
  "Included 3",
] as const;

type ClarityDescription = (typeof clarityDescriptions)[number];
type ClarityRank = 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0;

interface ClarityInfo {
  rank: ClarityRank;
  description: ClarityDescription;
}

const clarityDetails: Record<Clarity, ClarityInfo> = {
  [Clarity.FL]: { rank: 10, description: "Flawless" },
  [Clarity.IF]: { rank: 9, description: "Internally Flawless" },
  [Clarity.VVS1]: { rank: 8, description: "Very, Very Slightly Included 1" },
  [Clarity.VVS2]: { rank: 7, description: "Very, Very Slightly Included 2" },
  [Clarity.VS1]: { rank: 6, description: "Very Slightly Included 1" },
  [Clarity.VS2]: { rank: 5, description: "Very Slightly Included 2" },
  [Clarity.SI1]: { rank: 4, description: "Slightly Included 1" },
  [Clarity.SI2]: { rank: 3, description: "Slightly Included 2" },
  [Clarity.I1]: { rank: 2, description: "Included 1" },
  [Clarity.I2]: { rank: 1, description: "Included 2" },
  [Clarity.I3]: { rank: 0, description: "Included 3" },
} as const;

interface GemClarity {
  clarity: Clarity;
  clarityDescription: ClarityDescription;
  clarityRank: ClarityRank;
}

export { GemClarity, Clarity, clarityDetails, ClarityRank, ClarityDescription };
