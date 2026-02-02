import { notFound } from "next/navigation";
import { getExperienceBySlug, getAllExperiences } from "@/lib/experience";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/shadcn/badge";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/ui/aceternity/code-block";
import { ScrollProgress } from "@/components/ui/aceternity/scroll-progress";
import { Button } from "@/components/ui/shadcn/button";

export async function generateStaticParams() {
  const experiences = getAllExperiences();
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = getExperienceBySlug(slug);
  if (!result) return { title: "Experience Not Found" };

  return {
    title: `${result.experience.role} at ${result.experience.company}`,
    description: result.experience.description,
  };
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Artificial delay to show loading state
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const result = getExperienceBySlug(slug);

  if (!result) {
    notFound();
  }

  const { experience, content } = result;
  const allExperiences = getAllExperiences();
  const currentIndex = allExperiences.findIndex((e) => e.slug === slug);
  const prevExp = currentIndex > 0 ? allExperiences[currentIndex - 1] : null;
  const nextExp = currentIndex < allExperiences.length - 1 ? allExperiences[currentIndex + 1] : null;
  const multipleExperiences= allExperiences.length > 1;
  return (
    <>
      <ScrollProgress />
      <PageLayout>
        <article className="space-y-6 pb-20">
          <div className="flex items-center justify-between">
            <Link href="/experience">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Experience
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{experience.period}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">{experience.role}</h1>
            <p className="text-2xl text-muted-foreground">{experience.company}</p>
            <p className="text-lg">{experience.description}</p>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote source={content} components={{ CodeBlock }} />
          </div>
          {multipleExperiences && (
            <div className="pt-6 border-t">
              <div className="flex flex-wrap justify-between gap-3">
                {prevExp && (
                  <Link href={`/experience/${prevExp.slug}`}>
                    <Button variant="outline" className="justify-start">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-muted-foreground">Previous</span>
                        <span className="hidden sm:block font-medium">{prevExp.role}</span>
                      </div>
                    </Button>
                  </Link>
                )}
                {nextExp && (
                  <Link href={`/experience/${nextExp.slug}`}>
                    <Button variant="outline" className="justify-end">
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-muted-foreground">Next</span>
                        <span className="hidden sm:block font-medium">{nextExp.role}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </article>
      </PageLayout>
    </>
  );
}
