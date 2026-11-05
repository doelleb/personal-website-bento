import { stripBase } from "./base";

export const PORTFOLIO_LAST_PATH_KEY = "portfolio:last-pathname";

export const PORTFOLIO_HAS_VISITED_NON_HOME_KEY =
  "portfolio:has-visited-non-home";

export function normalizePathname(path: string): string {
  const p = stripBase((path || "/").replace(/\/$/, "") || "/");
  return p.startsWith("/") ? p : `/${p}`;
}
