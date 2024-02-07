//www.gemsociety.org/article/colored-gem-grading-code-meaning/
// Naming: Hue Tone/Saturation (eg. "slpR 3/4")

// prettier-ignore
type HueGIAAbreviation =
  | "R"
  | "oR"
  | "RO" | "OR"
  | "rO"
  | "O"
  | "yO"
  | "oY"
  | "Y"
  | "gY"
  | "YG" | "GY"
  | "styG"
  | "yG"
  | "G"
  | "vslbG"
  | "bG"
  | "vstbG"
  | "GB" | "BG"
  | "vstgB"
  | "vslgB"
  | "B"
  | "vB"
  | "bV"
  | "V"
  | "vP"
  | "P"
  | "rP"
  | "RP" | "PR"
  | "stpR"
  | "slpR"
  | "Pk" // exception
  | "Brn"; // exception

/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
enum Hue {
  R = "R",
  oR = "oR",
  RO = "RO",
  OR = "RO", // same as RO
  rO = "rO",
  O = "O",
  yO = "yO",
  oY = "oY",
  Y = "Y",
  gY = "gY",
  YG = "YG",
  GY = "YG", // same as YG
  styG = "styG",
  yG = "yG",
  G = "G",
  vslbG = "vslbG",
  bG = "bG",
  vstbG = "vstbG",
  GB = "GB",
  BG = "GB", // same as GB
  vstgB = "vstgB",
  vslgB = "vslgB",
  B = "B",
  vB = "vB",
  bV = "bV",
  V = "V",
  vP = "vP",
  P = "P",
  rP = "rP",
  RP = "RP",
  PR = "RP", // same as RP
  stpR = "stpR",
  slpR = "slpR",
  Pk = "Pk", // exception
  Brn = "Brn", // exception
}
/* eslint-enable @typescript-eslint/no-duplicate-enum-values */

const hueNames = [
  "Red",
  "Orangy Red",
  "Red-Orange",
  "Red-Orange",
  "Reddish Orange",
  "Orange",
  "Yellowish Orange",
  "Orangy Yellow",
  "Yellow",
  "Greenish Yellow",
  "Yellow-Green",
  "Yellow-Green",
  "Strongly Yellowish Green",
  "Yellowish Green",
  "Green",
  "Very Slightly Bluish Green",
  "Bluish Green",
  "Very Strongly Bluish Green",
  "Green-Blue",
  "Green-Blue",
  "Very Strongly Greenish Blue",
  "Very Slightly Greenish Blue",
  "Blue",
  "Violetish Blue",
  "Bluish Violet",
  "Violet",
  "Violetish Purple",
  "Purple",
  "Reddish Purple",
  "Red-Purple",
  "Red-Purple",
  "Strongly Purplish Red",
  "Slightly Purplish Red",
  "Pink",
  "Brown",
] as const;
type HueDescription = (typeof hueNames)[number];

interface HueInfo {
  description: HueDescription;
  warmth: "Warm" | "Cool";
}

const hueDetails: Record<Hue, HueInfo> = {
  [Hue.R]: { description: "Red", warmth: "Warm" },
  [Hue.oR]: { description: "Orangy Red", warmth: "Warm" },
  [Hue.RO]: { description: "Red-Orange", warmth: "Warm" },
  // [Hue.OR]: { description: "Red-Orange", warmth: "Warm" },
  [Hue.rO]: { description: "Reddish Orange", warmth: "Warm" },
  [Hue.O]: { description: "Orange", warmth: "Warm" },
  [Hue.yO]: { description: "Yellowish Orange", warmth: "Warm" },
  [Hue.oY]: { description: "Orangy Yellow", warmth: "Warm" },
  [Hue.Y]: { description: "Yellow", warmth: "Warm" },
  [Hue.gY]: { description: "Greenish Yellow", warmth: "Warm" },
  [Hue.YG]: { description: "Yellow-Green", warmth: "Warm" },
  // [Hue.GY]: { description: "Yellow-Green", warmth: "Warm" },
  [Hue.styG]: { description: "Strongly Yellowish Green", warmth: "Warm" },
  [Hue.yG]: { description: "Yellowish Green", warmth: "Warm" },
  [Hue.G]: { description: "Green", warmth: "Cool" },
  [Hue.vslbG]: { description: "Very Slightly Bluish Green", warmth: "Cool" },
  [Hue.bG]: { description: "Bluish Green", warmth: "Cool" },
  [Hue.vstbG]: { description: "Very Strongly Bluish Green", warmth: "Cool" },
  [Hue.GB]: { description: "Green-Blue", warmth: "Cool" },
  // [Hue.BG]: { description: "Green-Blue", warmth: "Cool" },
  [Hue.vstgB]: { description: "Very Strongly Greenish Blue", warmth: "Cool" },
  [Hue.vslgB]: { description: "Very Slightly Greenish Blue", warmth: "Cool" },
  [Hue.B]: { description: "Blue", warmth: "Cool" },
  [Hue.vB]: { description: "Violetish Blue", warmth: "Cool" },
  [Hue.bV]: { description: "Bluish Violet", warmth: "Cool" },
  [Hue.V]: { description: "Violet", warmth: "Cool" },
  [Hue.vP]: { description: "Violetish Purple", warmth: "Cool" },
  [Hue.P]: { description: "Purple", warmth: "Cool" },
  [Hue.rP]: { description: "Reddish Purple", warmth: "Cool" },
  [Hue.RP]: { description: "Red-Purple", warmth: "Cool" },
  // [Hue.PR]: { description: "Red-Purple", warmth: "Cool" },
  [Hue.stpR]: { description: "Strongly Purplish Red", warmth: "Warm" },
  [Hue.slpR]: { description: "Slightly Purplish Red", warmth: "Warm" },
  [Hue.Pk]: { description: "Pink", warmth: "Warm" },
  [Hue.Brn]: { description: "Brown", warmth: "Warm" },
} as const;

// Tone Values:
// 0 = Colorless
// 1 = Extremely Light
// 2 = Very Light
// 3 = Light
// 4 = Medium Light
// 5 = Medium
// 6 = Medium Dark
// 7 = Dark
// 8 = Very Dark
// 9 = Extremely Dark
// 10 = Black

const tones = [
  "Colorless",
  "Extremely Light",
  "Very Light",
  "Light",
  "Medium Light",
  "Medium",
  "Medium Dark",
  "Dark",
  "Very Dark",
  "Extremely Dark",
  "Black",
] as const;

type ToneName = (typeof tones)[number];
type Tone = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const toneDetails: Record<Tone, ToneName> = {
  0: "Colorless",
  1: "Extremely Light",
  2: "Very Light",
  3: "Light",
  4: "Medium Light",
  5: "Medium",
  6: "Medium Dark",
  7: "Dark",
  8: "Very Dark",
  9: "Extremely Dark",
  10: "Black",
} as const;

// Saturation terms
// Warm colors:
// 1 = Brownish,
// 2 = Slightly Brownish,
// 3 = Very Slightly Brownish,
// 4 = Moderately Strong,
// 5 = Strong,
// 6 = Vivid.
//
// Cool colors:
// 1 = Grayish,
// 2 = Slightly Grayish,
// 3 = Very Slightly Grayish,
// 4 = Moderately Strong,
// 5 = Strong,
// 6 = Vivid.

const saturationNamesWarm = [
  "Brownish",
  "Slightly Brownish",
  "Very Slightly Brownish",
  "Moderately Strong",
  "Strong",
  "Vivid",
] as const;
const saturationNamesCool = [
  "Grayish",
  "Slightly Grayish",
  "Very Slightly Grayish",
  "Moderately Strong",
  "Strong",
  "Vivid",
] as const;

type SaturationNameWarm = (typeof saturationNamesWarm)[number];
type SaturationNameCool = (typeof saturationNamesCool)[number];
type SaturationName = SaturationNameWarm | SaturationNameCool;
type Saturation = 1 | 2 | 3 | 4 | 5 | 6;

const saturationDetails: Record<
  Saturation,
  { warm: SaturationNameWarm; cool: SaturationNameCool }
> = {
  1: { warm: "Brownish", cool: "Grayish" },
  2: { warm: "Slightly Brownish", cool: "Slightly Grayish" },
  3: { warm: "Very Slightly Brownish", cool: "Very Slightly Grayish" },
  4: { warm: "Moderately Strong", cool: "Moderately Strong" },
  5: { warm: "Strong", cool: "Strong" },
  6: { warm: "Vivid", cool: "Vivid" },
} as const;

enum Grade {
  AAA = "AAA",
  AA = "AA",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
}

type GradeRank = 0 | 1 | 2 | 3 | 4 | 5;

const gradeDetails: Record<Grade, GradeRank> = {
  [Grade.AAA]: 5,
  [Grade.AA]: 4,
  [Grade.A]: 3,
  [Grade.B]: 2,
  [Grade.C]: 1,
  [Grade.D]: 0,
} as const;

interface GemColour {
  grade: Grade;
  hue: Hue;
  tone: Tone;
  intensity: Saturation;

  gradeRank: GradeRank;
  hueDescription: HueDescription;
  toneDescription: ToneName;
  intensityDescription: SaturationName;
}

export {
  GemColour,
  Hue,
  Tone,
  Saturation,
  Grade,
  hueDetails,
  toneDetails,
  saturationDetails,
  gradeDetails,
  HueGIAAbreviation,
  GradeRank,
  HueDescription,
  ToneName,
  SaturationName,
};
