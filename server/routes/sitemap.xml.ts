import { queryCollection } from "@nuxt/content/server";

const SITE_URL = "https://vartech.id";
const publicRoutes = [
  "/",
  "/about-us",
  "/contact",
  "/services",
  "/services/registration-system",
  "/services/custom-photobooth",
  "/services/ai-photobooth",
  "/services/gamification",
  "/services/interactive-experience",
  "/works",
  "/works/nhpv-journey",
  "/works/quiz-nhpv",
  "/works/realtime-photobooth-allianz",
  "/works/indomaret-Scream",
  "/works/beforeafter-blackmores",
  "/works/scrabble-game-fif",
  "/works/vaccine-photobooth-qdenga",
  "/works/presentation-qdenga",
  "/works/digital-information-nhpv",
  "/blog",
];

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const withSiteUrl = (path: string) => {
  const normalizedPath = path === "/" ? "/" : path;
  return encodeURI(`${SITE_URL}${normalizedPath}`);
};

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, "blog")
    .select("path", "date")
    .all();

  const urls = [
    ...publicRoutes.map((path) => ({ path })),
    ...posts.map((post) => ({
      path: post.path,
      lastmod: post.date,
    })),
  ];

  const uniqueUrls = Array.from(
    new Map(urls.map((url) => [url.path, url])).values(),
  ).sort((a, b) => a.path.localeCompare(b.path));

  const urlEntries = uniqueUrls
    .map((url) => {
      const loc = `<loc>${xmlEscape(withSiteUrl(url.path))}</loc>`;
      const lastmod = url.lastmod
        ? `<lastmod>${xmlEscape(url.lastmod)}</lastmod>`
        : "";

      return `  <url>${loc}${lastmod}</url>`;
    })
    .join("\n");

  setHeader(event, "content-type", "application/xml; charset=utf-8");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlEntries,
    "</urlset>",
  ].join("\n");
});
