/** Shape of the payload the contact form POSTs to /api/lead. */
export interface LeadInput {
  name: string;
  email: string;
  service?: string;
  budget?: string;
  message: string;
  /** Honeypot — real users never fill this; bots do. Must stay empty. */
  company_website?: string;
}

/** Response shape returned by /api/lead. */
export interface LeadResponse {
  ok: boolean;
  error?: string;
  /** Field keys that failed validation, when error is a validation failure. */
  fields?: string[];
}
