// Supabase Auth requires an email, so each username maps to a synthetic address
// on a subdomain we control. No mail is ever sent to it (email confirmation is off
// and the subdomain has no MX record). Users never see it.
const SYNTHETIC_DOMAIN = "anon.benchmarkmybloodtest.com";

export const USERNAME_PATTERN = /^[a-z]+-[a-z]+-[0-9]{4}$/;
export const MIN_PASSWORD_LENGTH = 10;

export function normalizeUsername(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, "-");
}

export function usernameToEmail(username: string): string {
  return `${normalizeUsername(username)}@${SYNTHETIC_DOMAIN}`;
}
