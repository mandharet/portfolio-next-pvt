import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/project";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/shadcn/badge";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { ExternalLink, Github, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/ui/aceternity/code-block";
import { ScrollProgress } from "@/components/ui/aceternity/scroll-progress";
import { Button } from "@/components/ui/shadcn/button";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = getProjectBySlug(slug);
  if (!result) return { title: "Project Not Found" };

  return {
    title: result.project.title,
    description: result.project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = getProjectBySlug(slug);

  if (!result) {
    notFound();
  }

  const { project, content } = result;
  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
  if (!project) notFound();
  const multipleProjects = allProjects.length > 1;

  return (
    <>
      <ScrollProgress />
      <PageLayout>
        <article className="space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/projects">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Projects
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.link && (
                <Link href={project.link} target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </Link>
              )}
              {project.github && (
                <Link href={project.github} target="_blank">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </Link>
              )}
              {project.paper && (
                <Link href={project.paper} target="_blank">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Research Paper
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote source={content} components={{ CodeBlock }} />
          </div>
{multipleProjects&&(
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-3">
                {prevProject ? (
                  <Link href={`/projects/${prevProject.slug}`}>
                    <Button variant="outline" className="w-full h-auto py-3 flex-col items-start">
                      <span className="text-xs text-muted-foreground mb-1 flex items-center">
                        <ChevronLeft className="h-3 w-3 mr-1" />
                        Previous
                      </span>
                      <span className="text-sm font-medium line-clamp-2 text-left">{prevProject.title}</span>
                    </Button>
                  </Link>
                ) : (
                  <div />
                )}
                {nextProject ? (
                  <Link href={`/projects/${nextProject.slug}`}>
                    <Button variant="outline" className="w-full h-auto py-3 flex-col items-end">
                      <span className="text-xs text-muted-foreground mb-1 flex items-center">
                        Next
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </span>
                      <span className="text-sm font-medium line-clamp-2 text-right">{nextProject.title}</span>
                    </Button>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </CardContent>
          </Card>)}
        </article>
      </PageLayout>
    </>
  );
}
