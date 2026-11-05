// The site may be served from a sub-path (e.g. GitHub Pages project sites at
// /personal-website-bento/). Use these helpers for every internal URL.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

/** Prefix a root-relative path ("/research") with the configured base. */
export function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (BASE && (path === BASE || path.startsWith(`${BASE}/`))) return path;
  return `${BASE}${path}` || "/";
}

/** Strip the configured base from a pathname ("/base/research" -> "/research"). */
export function stripBase(pathname: string): string {
  if (BASE && (pathname === BASE || pathname.startsWith(`${BASE}/`))) {
    return pathname.slice(BASE.length) || "/";
  }
  return pathname;
}
