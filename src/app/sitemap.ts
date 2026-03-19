import type { MetadataRoute } from "next";

const routes = ["", "/services", "/how-it-works", "/savings-calculator", "/about", "/contact", "/qsr-staffing", "/medical-billing", "/rpm-support", "/general-business"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://meridiemglobal.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
    lastModified: new Date(),
  }));
}
