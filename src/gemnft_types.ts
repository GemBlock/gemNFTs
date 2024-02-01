import { Kind } from "./gemnft_types/kind";
import {
  GemClarity,
  Clarity,
  clarityDetails,
  ClarityDescription,
  ClarityRank,
} from "./gemnft_types/clarity";
import { GemFinish, Cut, Shape } from "./gemnft_types/cut";
import {
  GemColour,
  Hue,
  Tone,
  Intensity,
  Grade,
  hueDetails,
  toneDetails,
  intensityDetails,
  gradeDetails,
  HueGIAAbreviation,
  GradeRank,
  HueDescription,
  ToneName,
  SaturationName,
} from "./gemnft_types/colour";

import { GemAppraisal, GemVaultAudit } from "./gemnft_types/appraisal";

interface GemstoneDetails
  extends GemFinish,
    GemColour,
    GemClarity,
    GemAppraisal,
    GemVaultAudit {
  // Type of Gemstone
  kind: Kind;

  // Gemstone Measurements
  carat: number;
  measurements: string;

  // Gemstone Origin
  origin: "Natural" | "Synthetic" | "Treated" | "Lab-Created";
  country: string;
  certification?: string;
  minedOn: Date;

  //
  // Explicitely Rewriting all the types from the extended interfaces
  //

  // GemFinish - Cut, Shape, and Finish
  cut: Cut;
  shape: Shape;
  treatment: string;
  polish: "Excellent" | "Very Good" | "Good" | "Fair" | "Poor";
  symmetry: "Excellent" | "Very Good" | "Good" | "Fair" | "Poor";

  // GemColour - Colour Grading, Hue, Tone, and Intensity
  grade: Grade;
  hue: Hue;
  tone: Tone;
  intensity: Intensity;
  gradeRank: GradeRank;
  hueDescription: HueDescription;
  toneDescription: ToneName;
  intensityDescription: SaturationName;

  // GemClarity - Clarity Grading
  clarity: Clarity;
  clarityDescription: ClarityDescription;
  clarityRank: ClarityRank;

  // GemVault - Vaulting Information
  vaultedOn: Date;
  vaultLocation: string;
  vaultingCompany: string;
  vaultingCompanyWebsite: string;

  // GemVaultAudit - Vault Audit Information
  vaultAuditNumber: number; // incrementing number
  vaultAuditedOn: Date;
  vaultAuditUnixTimestamp: number;
  vaultAuditCertificateLink: string;
  vaultAuditor: {
    // VaultAuditor;
    vaultAuditorName: string;
    vaultAuditorCompany: string;
    vaultAuditorWebsite: string;
  };

  // GemAppraisal - Appraisal Information
  appraisalNumber: number; //version 1 - incrementing number
  appraisedOn: Date;
  appraisalUnixTimestamp: number;
  appraisalUSDValue: number;
  appraisalCertificateLink: string;
  appraiser: {
    // Appraiser;
    appraiserName: string;
    appraiserCompany: string;
    appraiserLocation: string;
    appraiserWebsite: string;
  };
}

enum OpenSeaAttributeDisplayType {
  "number" = "number",
  "boost_percentage" = "boost_percentage",
  "boost_number" = "boost_number",
  "boost_currency" = "boost_currency",
  "date" = "date",
  "url" = "url",
  "image" = "image",
  "markdown" = "markdown",
  "address" = "address",
  "static" = "static",
  "hidden" = "hidden",
}
interface OpenSeaAttribute {
  trait_type: string;
  max_value?: string;
  display_type: ;
  include_in_traits?: boolean;
}

interface GemstoneNFT {
  tokenId: number;
  name: string;
  description: string;
  external_url: string;
  image: string;
  animation_url: string;
  characteristics: GemstoneDetails;
}

const baseURL = "https://gemblock.co/gemstone";

for (let id = 1; id <= 100; id++) {
  const paddedTokenId = String(id).padStart(4, "0");
  console.log("Creating Gemstone NFT: ", paddedTokenId);

  const kind: GemstoneKind =
    Object.values(GemstoneKinds)[id % Object.values(GemstoneKinds).length];
  const name = `${kind} #${paddedTokenId}`;

  const external_url = `${baseURL}/${id}`;
  const image = `${baseURL}/${id}/image.png`;
  const description = `A stunningly beautiful ${kind} with excellent cut and clarity, appraised by a certified gemologist.`;

  let gemstoneNFT: GemstoneNFT = {
    tokenId: id,
    name: `Gemstone #${id}`,
    description: `A beautiful gemstone with a grade of AAA and a hue of ${
      HueDescriptions[Hue.R]
    }.`,
    external_url: `https://gemstone.com/gemstone/${id}`,
    image: `https://gemstone.com/images/gemstone-${id}.png`,
    animation_url: `https://gemstone.com/animations/gemstone-${id}.mp4`,
    characteristics: {
      grade: Grade.AAA,
      gradeRank: GradeRank.AAA,
      hue: Hue.R,
      hueDescription: HueDescriptions[Hue.R],
      tone: 5,
      toneDescription: ToneDescriptions[5],
      intensity: 6,
      intensityDescription: SaturationDescriptionsWarm[6],
    },
  };
}

export {
  GemstoneColour,
  Grade,
  Hue,
  Tones as Tone,
  Saturation as Intensity,
  HueType,
};
