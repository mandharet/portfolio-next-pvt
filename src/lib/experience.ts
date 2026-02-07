import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ExperienceMeta {
  slug: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  date: string;
  github?: string[];
  link?: string[];
  papers?: string[];
}

const experiencesDirectory = path.join(
  process.cwd(),
  "src/content/experiences",
);

export function getAllExperiences(): ExperienceMeta[] {
  const fileNames = fs.readdirSync(experiencesDirectory);
  const experiences = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(experiencesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as Omit<ExperienceMeta, "slug">),
        github: Array.isArray(data.github) ? data.github : data.github ? [data.github] : undefined,
        link: Array.isArray(data.link) ? data.link : data.link ? [data.link] : undefined,
        papers: Array.isArray(data.papers) ? data.papers : data.papers ? [data.papers] : undefined,
      };
    });

  return experiences.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getExperienceBySlug(slug: string) {
  try {
    const fullPath = path.join(experiencesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      experience: {
        slug,
        ...(data as Omit<ExperienceMeta, "slug">),
        github: Array.isArray(data.github) ? data.github : data.github ? [data.github] : undefined,
        link: Array.isArray(data.link) ? data.link : data.link ? [data.link] : undefined,
        papers: Array.isArray(data.papers) ? data.papers : data.papers ? [data.papers] : undefined,
      },
      content,
    };
  } catch {
    return null;
  }
}
