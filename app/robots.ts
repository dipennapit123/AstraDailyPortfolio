import type { MetadataRoute } from "next";
import { site } from "@/src/content/site";

export default function robots(): MetadataRoute.Robots {
  const base = new URL(site.metadataBaseUrl);

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AdMob app-ads.txt crawler (allow all)
      { userAgent: "Google-adstxt", allow: "/" },
      { userAgent: "Mediapartners-Google", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    sitemap: new URL("/sitemap.xml", base).toString(),
  };
}
