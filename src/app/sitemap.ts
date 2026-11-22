import type { MetadataRoute } from "next";
import { LEGAL_PAGES, SITE_URL } from "@/components/sites/cuadercampo/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    ...LEGAL_PAGES.map((p) => ({
      url: `${SITE_URL}/legal/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
