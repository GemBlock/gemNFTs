const gemstoneKinds = [
  "Sapphire",
  "Ruby",
  "Emerald",
  "Alexandrite",
  "Tanzanite",
  "Tourmaline",
  "Aquamarine",
] as const;

type Kind = (typeof gemstoneKinds)[number];

export { Kind, gemstoneKinds };
