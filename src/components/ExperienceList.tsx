"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";
import { ArrowUpDown } from "lucide-react";

type Experience = {
  slug: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  date: string;
};

export default function ExperienceList({ experiences }: { experiences: Experience[] }) {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [experiences, sortOrder]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Experience</h1>
        <Button variant="outline" size="default" onClick={toggleSort}>
          <ArrowUpDown className="h-4 w-4 mr-2" />
          {sortOrder === "newest" ? "Newest" : "Oldest"}
        </Button>
      </div>

      <div className="space-y-6">
        {sortedExperiences.map((exp) => (
          <Link
            key={exp.slug}
            href={`/experience/${exp.slug}`}
            className="block"
          >
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>{exp.role}</CardTitle>
                <CardDescription>
                  {exp.company} • {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
