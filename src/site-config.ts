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
    // TODO: replace with your LinkedIn profile URL.
    linkedin: "https://www.linkedin.com/",
    email: "doellebhattacharya@gmail.com",
  },
  // Highlighted on the globe card / page.
  visitedCountries: presentedCountries,
};
