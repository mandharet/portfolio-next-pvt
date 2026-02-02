import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge";
import { getAllExperiences } from "@/lib/experience";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience building backend systems, APIs, and distributed services.",
};

export default function ExperiencePage() {
  const experiences = getAllExperiences();

  return (
    <PageLayout>
      <div className="space-y-8 pb-30 pt-10">
        <h1 className="text-4xl font-bold">Experience</h1>

        <div className="space-y-6">
          {experiences.map((exp) => (
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
      </div>
    </PageLayout>
  );
}
