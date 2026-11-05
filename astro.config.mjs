import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

import { unified } from "@astrojs/markdown-remark";

// Set by the GitHub Pages workflow (.github/workflows/deploy.yml).
// SITE_URL is the origin, e.g. https://doelleb.github.io
// BASE_PATH is the sub-path, e.g. /personal-website-bento ("/" for a root site).
const site = (process.env.SITE_URL ?? "https://doelleb.github.io").replace(
  /\/+$/,
  "",
);
const base = `/${(process.env.BASE_PATH ?? "").replace(/^\/+|\/+$/g, "")}`;
const siteNoTrailingSlash = `${site}${base === "/" ? "" : base}`;

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "CabinetGrotesk",
      cssVariable: "--font-cabinet-grotesk",
      display: "swap",
      fallbacks: ["system-ui", "sans-serif"],
      optimizedFallbacks: true,
      options: {
        variants: [
          {
            weight: "100 1000",
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Variable.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Satoshi",
      cssVariable: "--font-satoshi",
      display: "swap",
      fallbacks: ["system-ui", "sans-serif"],
      optimizedFallbacks: true,
      options: {
        variants: [
          {
            weight: "100 1000",
            style: "normal",
            src: ["./src/assets/fonts/Satoshi-Variable.woff2"],
          },
          {
            weight: "100 1000",
            style: "italic",
            src: ["./src/assets/fonts/Satoshi-VariableItalic.woff2"],
          },
        ],
      },
    },
  ],
  site,
  base,
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/playground"),
    }),
    robotsTxt({
      sitemap: [
        `${siteNoTrailingSlash}/sitemap-index.xml`,
        `${siteNoTrailingSlash}/sitemap-0.xml`,
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: unified({
    remarkPlugins: [remarkReadingTime],
  }),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  // Fully static so it can be hosted on GitHub Pages.
  output: "static",
  vite: {
    assetsInclude: "**/*.riv",
  },
});
