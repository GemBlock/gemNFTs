type Shape =
  | "Trillion"
  | "Octagon"
  | "Hexagon"
  | "Square"
  | "Emerald"
  | "Kite"
  | "Pear"
  | "Heart"
  | "Marquise"
  | "Trapezoid"
  | "Square Cut Corner"
  | "Round"
  | "Oval"
  | "Baguette"
  | "Cushion"
  | "Antique Cushion"
  | "Drop"
  | "Flanders"
  | "Flower"
  | "Cabochon";

type Cut =
  | "Normal"
  | "Brilliant"
  | "Checkerboard"
  | "Radiant"
  | "Fancy"
  | "Step"
  | "CKB Diagonal"
  | "CKB Straight"
  | "Typical"
  | "Briolette"
  | "Asscher"
  | "Rose"
  | "Roll Top"
  | "Princess"
  | "Uncut"
  | "Other"
  | "Cabochon";

  interface GemFinish {
    cut: Cut;
    shape: Shape;
    treatment: string;
    polish: "Excellent" | "Very Good" | "Good" | "Fair" | "Poor";
    symmetry: "Excellent" | "Very Good" | "Good" | "Fair" | "Poor";
  }

export { Shape, Cut, GemFinish };
