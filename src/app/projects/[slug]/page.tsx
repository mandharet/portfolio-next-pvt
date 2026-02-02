import ProjectStructuredData from "@/components/jsonLD/ProjectStructuredData";
import { CodeBlock } from "@/components/ui/aceternity/code-block";
import { ScrollProgress } from "@/components/ui/aceternity/scroll-progress";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import { ArticleContainer } from "@/components/ui/wrapper/article-container";
import { StickyBreadcrumb } from "@/components/ui/wrapper/sticky-breadcrumb";
import { getSiteConfig } from "@/lib/config";
import { getAllProjects, getProjectBySlug } from "@/lib/project";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Github,
} from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getProjectBySlug(slug);
  if (!result) return { title: "Project Not Found" };

  const siteConfig = getSiteConfig();
  const canonicalUrl = `${siteConfig.domain}/projects/${slug}`;

  return {
    title: result.project.title,
    description: result.project.description,
    keywords: result.project.tech,
    authors: [{ name: siteConfig.name }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: result.project.title,
      description: result.project.description,
      type: "article",
      url: canonicalUrl,
      publishedTime: result.project.date,
      tags: result.project.tech,
    },
    twitter: {
      card: "summary_large_image",
      title: result.project.title,
      description: result.project.description,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Artificial delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const result = getProjectBySlug(slug);

  if (!result) {
    notFound();
  }

  const { project, content } = result;
  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;
  if (!project) notFound();
  const multipleProjects = allProjects.length > 1;

  return (
    <>
      <ProjectStructuredData project={project} />
      <ScrollProgress />
      <StickyBreadcrumb
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />
      <ArticleContainer>
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
        {multipleProjects && (
          <div className="pt-6 border-t">
            <div className="flex flex-wrap justify-between gap-3">
              {prevProject && (
                <Link href={`/projects/${prevProject.slug}`}>
                  <Button variant="outline" className="justify-start">
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-muted-foreground">
                        Previous
                      </span>
                      <span className="hidden sm:block font-medium">
                        {prevProject.title}
                      </span>
                    </div>
                  </Button>
                </Link>
              )}
              {nextProject && (
                <Link href={`/projects/${nextProject.slug}`}>
                  <Button variant="outline" className="justify-end">
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-muted-foreground">
                        Next
                      </span>
                      <span className="hidden sm:block font-medium">
                        {nextProject.title}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </ArticleContainer>
    </>
  );
}
