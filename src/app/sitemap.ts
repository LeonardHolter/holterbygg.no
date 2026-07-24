import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.holterbygg.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/blogg/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blogg`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postEntries,
    {
      url: `${siteUrl}/personvern`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
