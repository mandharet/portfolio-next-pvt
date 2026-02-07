import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "src/content/blogs");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        tags: data.tags || [],
        series: data.series,
        seriesOrder: data.seriesOrder,
        relatedPosts: data.relatedPosts,
        readingTime: data.readingTime,
        github: Array.isArray(data.github) ? data.github : data.github ? [data.github] : undefined,
        link: Array.isArray(data.link) ? data.link : data.link ? [data.link] : undefined,
        papers: Array.isArray(data.papers) ? data.papers : data.papers ? [data.papers] : undefined,
      } as BlogPost;
    });

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(
  slug: string,
): { post: BlogPost; content: string } | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const post: BlogPost = {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      tags: data.tags || [],
      series: data.series,
      seriesOrder: data.seriesOrder,
      relatedPosts: data.relatedPosts,
      readingTime: data.readingTime,
      github: Array.isArray(data.github) ? data.github : data.github ? [data.github] : undefined,
      link: Array.isArray(data.link) ? data.link : data.link ? [data.link] : undefined,
      papers: Array.isArray(data.papers) ? data.papers : data.papers ? [data.papers] : undefined,
    };

    return { post, content };
  } catch {
    return null;
  }
}
