import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllProjects } from "@/lib/project";
import { getAllExperiences } from "@/lib/experience";
import { getSiteConfig } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteConfig = getSiteConfig();
  const baseUrl = siteConfig.domain;

  const posts = getAllPosts();
  const projects = getAllProjects();
  const experiences = getAllExperiences();

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const experienceUrls = experiences.map((exp) => ({
    url: `${baseUrl}/experience/${exp.slug}`,
    lastModified: new Date(exp.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
    ...projectUrls,
    ...experienceUrls,
  ];
}
