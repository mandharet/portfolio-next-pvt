"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/shadcn/button";
import { ArrowUpDown } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string[];
  github?: string[];
  papers?: string[];
  image?: string;
  tags?: string[];
  date: string;
};

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [projects, sortOrder]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Projects</h1>
        <Button variant="outline" size="default" onClick={toggleSort}>
          <ArrowUpDown className="h-4 w-4 mr-2" />
          {sortOrder === "newest" ? "Newest" : "Oldest"}
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
