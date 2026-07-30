import type { MetadataRoute } from "next";

// Healthcare pages (medical-billing, rpm-support) are intentionally excluded
// from the sitemap — they carry noindex directives pending a final product decision.
// The thank-you page is also excluded (noindex conversion confirmation page).
const routes = [
  "",
  "/services",
  "/industries",
  "/how-it-works",
  "/savings-calculator",
  "/resources",
  "/guide",
  "/about",
  "/contact",
  "/careers",
  "/qsr-staffing",
  "/general-business",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://meridiemglobal.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/qsr-staffing" || route === "/contact"
        ? 0.9
        : 0.8,
    lastModified: new Date(),
  }));
}
