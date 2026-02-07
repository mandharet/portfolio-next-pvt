"use client";

import { ExternalLink, Github, FileText } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import Image from "next/image";

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
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group border rounded-lg overflow-hidden hover:border-primary transition-all h-full flex flex-col hover:shadow-lg">
        {project.image && (
          <div className="relative w-full h-48 bg-muted overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.link?.[0] && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(project.link![0], "_blank");
                }}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>

          <p className="text-muted-foreground mb-4 flex-1 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.tech.length - 4}
              </Badge>
            )}
          </div>

          <div className="flex gap-2">
            {project.github?.map((url, i) => (
              <Button
                key={i}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(url, "_blank");
                }}
              >
                <Github className="h-4 w-4" />
              </Button>
            ))}
            {project.papers?.map((url, i) => (
              <Button
                key={i}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(url, "_blank");
                }}
              >
                <FileText className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
