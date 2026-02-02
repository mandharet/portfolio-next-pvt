"use client";

import { ExternalLink, Github, FileText } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";

type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  paper?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="border rounded-lg p-6 hover:border-primary transition-colors h-full flex flex-col relative">
        {project.link && (
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={(e) => {
                e.preventDefault();
                window.open(project.link, "_blank");
              }}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        )}

        <h3 className="font-semibold text-lg mb-2 pr-12">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {project.github && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={(e) => {
                e.preventDefault();
                window.open(project.github, "_blank");
              }}
            >
              <Github className="h-4 w-4" />
            </Button>
          )}
          {project.paper && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={(e) => {
                e.preventDefault();
                window.open(project.paper, "_blank");
              }}
            >
              <FileText className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}
