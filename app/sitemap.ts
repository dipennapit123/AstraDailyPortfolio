import type { MetadataRoute } from "next";
import { site } from "@/src/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.metadataBaseUrl.replace(/\/+$/, "");
  const now = new Date();

  const pages = [
    "/",
    "/features",
    "/screenshots",
    "/demo",
    "/about",
    "/contact",
    "/privacy",
    "/blog",
  ];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

