import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectMeta } from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): ProjectMeta[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as Omit<ProjectMeta, "slug">),
      };
    });

  return projects.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getProjectBySlug(slug: string) {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      project: {
        slug,
        ...(data as Omit<ProjectMeta, "slug">),
      },
      content,
    };
  } catch {
    return null;
  }
}
