import { presentedCountries } from "./data/cv";

// TODO: set this to your real domain once you have one.
export const DOMAIN = "doellebhattacharya.com";

export const SITE = {
  site: {
    domain: DOMAIN,
    url: `https://${DOMAIN}/`,
  },
  author: {
    firstName: "Doelle",
    lastName: "Bhattacharya",
    fullName: "Doelle Bhattacharya",
    shortName: "Doelle",
    jobTitle: "AI Alignment Researcher & Student",
  },
  location: {
    city: "Chestnut Hill, MA",
    countryName: "Boston",
    countryCode: "US",
    timezone: "America/New_York",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/doelle-bhattacharya/",
    email: "doellebhattacharya@gmail.com",
    github: "https://github.com/doelleb",
    openReview: "https://openreview.net/profile?id=~Doelle_Bhattacharya1",
  },
  // Highlighted on the globe card / page.
  visitedCountries: presentedCountries,
};

/** Profile links shown in the contact card, research page and SEO metadata. */
export const PROFILES = [
  { label: "LinkedIn", href: SITE.links.linkedin },
  { label: "GitHub", href: SITE.links.github },
  { label: "OpenReview", href: SITE.links.openReview },
].filter((p) => p.href);

/** Research profiles only (for the Research & Talks page). */
export const RESEARCH_PROFILES = PROFILES.filter(
  (p) => p.label === "OpenReview",
);
