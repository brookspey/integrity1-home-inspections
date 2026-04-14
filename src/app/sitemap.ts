import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://integrity1-home-inspections.vercel.app";

  const mainPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/your-report`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const servicePages = [
    "buyers-inspection", "pre-listing-inspection", "4-point-inspection",
    "wind-mitigation", "builders-warranty-inspection", "commercial-inspection",
    "pool-inspection", "home-maintenance-inspection",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const areaPages = [
    "west-palm-beach", "boca-raton", "jupiter", "delray-beach",
    "boynton-beach", "wellington", "palm-beach-gardens", "lake-worth",
  ].map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainPages, ...servicePages, ...areaPages];
}
