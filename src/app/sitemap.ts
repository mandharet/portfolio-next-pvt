import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tejas.mandhare.com",
      lastModified: new Date(),
    },
    {
      url: "https://tejas.mandhare.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://tejas.mandhare.com/experience",
      lastModified: new Date(),
    },
    {
      url: "https://tejas.mandhare.com/contact",
      lastModified: new Date(),
    },
  ];
}
