// EIP-7496 Dynamic NFT Metadata Standard
// Schema: https://eips.ethereum.org/assets/eip-7496/DynamicTraitsSchema.json


enum ValidateOnSale {
  None = "none",
  RequireEq = "requireEq",
  RequireUintGte = "requireUintGte",
  RequireUintLte = "requireUintLte",
}

enum DataType {
  String = "string",
  Decimal = "decimal",
  Boolean = "boolean",
  EpochSeconds = "epochSeconds",
}

interface StringDataType {
  type: DataType.String;
  acceptableValues?: (string | null)[];
  maxLength?: number;
  minLength?: number;
  valueMappings?: Record<string, string | null>;
}

interface DecimalDataType {
  type: DataType.Decimal;
  signed?: boolean;
  decimals?: number;
  minValue?: number;
  maxValue?: number;
  valueMappings?: Record<string, number | null>;
}

interface BooleanDataType {
  type: DataType.Boolean;
  valueMappings?: Record<string, boolean | null>;
}

interface EpochSecondsDataType {
  type: DataType.EpochSeconds;
  valueMappings?: Record<string, number | null>;
}

type TraitDataType =
  | StringDataType
  | DecimalDataType
  | BooleanDataType
  | EpochSecondsDataType;

interface TraitProperty {
  displayName?: string;
  validateOnSale?: ValidateOnSale;
  tokenOwnerCanUpdateValue?: boolean;
  dataType: TraitDataType;
}

interface Traits {
  [key: string]: TraitProperty;
}

interface EIP7496MetadataSchema {
  traits: Traits;
}

export { EIP7496MetadataSchema, Traits, TraitProperty, TraitDataType, ValidateOnSale, DataType };
