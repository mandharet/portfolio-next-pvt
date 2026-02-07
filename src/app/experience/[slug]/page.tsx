import ExperienceStructuredData from "@/components/jsonLD/ExperienceStructuredData";
import { CodeBlock } from "@/components/ui/aceternity/code-block";
import { ScrollProgress } from "@/components/ui/aceternity/scroll-progress";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import { ArticleContainer } from "@/components/ui/wrapper/article-container";
import { StickyBreadcrumb } from "@/components/ui/wrapper/sticky-breadcrumb";
import { getAllExperiences, getExperienceBySlug } from "@/lib/experience";
import { Calendar, ChevronLeft, ChevronRight, ExternalLink, FileText, Github } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const experiences = getAllExperiences();
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getExperienceBySlug(slug);
  if (!result) return { title: "Experience Not Found" };

  return {
    title: `${result.experience.role} at ${result.experience.company}`,
    description: result.experience.description,
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Artificial delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const result = getExperienceBySlug(slug);

  if (!result) {
    notFound();
  }

  const { experience, content } = result;
  const allExperiences = getAllExperiences();
  const currentIndex = allExperiences.findIndex((e) => e.slug === slug);
  const prevExp = currentIndex > 0 ? allExperiences[currentIndex - 1] : null;
  const nextExp =
    currentIndex < allExperiences.length - 1
      ? allExperiences[currentIndex + 1]
      : null;
  const multipleExperiences = allExperiences.length > 1;
  return (
    <>
      <ExperienceStructuredData experience={experience} />
      <ScrollProgress />
      <StickyBreadcrumb
        items={[
          { label: "Experience", href: "/experience" },
          { label: experience.role },
        ]}
      />

      <ArticleContainer>
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

          <div className="flex flex-wrap gap-3">
            {experience.link?.map((url, i) => (
              <Link key={i} href={url} target="_blank">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Link {experience.link && experience.link.length > 1 ? i + 1 : ''}
                </Button>
              </Link>
            ))}
            {experience.github?.map((url, i) => (
              <Link key={i} href={url} target="_blank">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  Source {experience.github && experience.github.length > 1 ? i + 1 : ''}
                </Button>
              </Link>
            ))}
            {experience.papers?.map((url, i) => (
              <Link key={i} href={url} target="_blank">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Paper {experience.papers && experience.papers.length > 1 ? i + 1 : ''}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote 
            source={content} 
            components={{ 
              CodeBlock,
              pre: (props: React.HTMLAttributes<HTMLPreElement>) => {
                const children = props.children as React.ReactElement<{ children: string; className?: string }>;
                const code = children?.props?.children;
                const lang = children?.props?.className?.replace('language-', '');
                if (lang === 'mermaid') {
                  return <div className="mermaid">{code}</div>;
                }
                return <pre {...props} />;
              },
              table: (props: React.HTMLAttributes<HTMLTableElement>) => <div className="overflow-x-auto"><table {...props} /></div>
            }} 
          />
        </div>
        {multipleExperiences && (
          <div className="pt-6 border-t">
            <div className="flex flex-wrap justify-between gap-3">
              {prevExp && (
                <Link href={`/experience/${prevExp.slug}`}>
                  <Button variant="outline" className="justify-start">
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-muted-foreground">
                        Previous
                      </span>
                      <span className="hidden sm:block font-medium">
                        {prevExp.role}
                      </span>
                    </div>
                  </Button>
                </Link>
              )}
              {nextExp && (
                <Link href={`/experience/${nextExp.slug}`}>
                  <Button variant="outline" className="justify-end">
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-muted-foreground">
                        Next
                      </span>
                      <span className="hidden sm:block font-medium">
                        {nextExp.role}
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
