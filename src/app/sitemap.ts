import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://dweche.africa";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/articles`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...getArticles().map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: new Date(`${article.date}T12:00:00Z`),
      priority: 0.6,
    })),
  ];
}
