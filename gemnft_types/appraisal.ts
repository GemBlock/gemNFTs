interface Appraiser {
  appraiserName: string;
  appraiserCompany: string;
  appraiserLocation: string;
  appraiserWebsite: string;
}

interface GemAppraisal {
  appraisalNumber: number; //version 1 - incrementing number
  //   firstAppraisal: Date;
  appraisedOn: Date;
  appraisalUnixTimestamp: number;
  appraisalUSDValue: number;
  appraisalCertificateLink: string;
  appraiser: Appraiser;
}

interface GemVault {
  vaultedOn: Date;
  vaultLocation: string;
  vaultingCompany: string;
  vaultingCompanyWebsite: string;
}
interface VaultAuditor {
  vaultAuditorName: string;
  vaultAuditorCompany: string;
  vaultAuditorWebsite: string;
}

interface GemVaultAudit {
  vaultAuditNumber: number; // incrementing number
  vaultAuditedOn: Date;
  vaultAuditUnixTimestamp: number;
  vaultAuditCertificateLink: string;
  vaultAuditor: VaultAuditor;
}

export { GemAppraisal, GemVault, GemVaultAudit };
