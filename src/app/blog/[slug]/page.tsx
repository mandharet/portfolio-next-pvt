import BlogPostStructuredData from "@/components/jsonLD/BlogPostStructuredData";
import { CodeBlock } from "@/components/ui/aceternity/code-block";
import { ScrollProgress } from "@/components/ui/aceternity/scroll-progress";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { ArticleContainer } from "@/components/ui/wrapper/article-container";
import { StickyBreadcrumb } from "@/components/ui/wrapper/sticky-breadcrumb";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getSiteConfig } from "@/lib/config";
import { Calendar, ChevronLeft, ChevronRight, Clock, ExternalLink, FileText, Github } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) return { title: "Post Not Found" };

  const siteConfig = getSiteConfig();
  const canonicalUrl = `${siteConfig.domain}/blog/${slug}`;

  return {
    title: result.post.title,
    description: result.post.description,
    keywords: result.post.tags,
    authors: [{ name: siteConfig.name }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: result.post.title,
      description: result.post.description,
      type: "article",
      url: canonicalUrl,
      publishedTime: result.post.date,
      authors: [siteConfig.name],
      tags: result.post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: result.post.title,
      description: result.post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result = getPostBySlug(slug);

  if (!result) {
    notFound();
  }

  const { post, content } = result;
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const multiplePosts = allPosts.length > 1;

  return (
    <>
      <BlogPostStructuredData post={post} />
      <ScrollProgress />

      <StickyBreadcrumb
        items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <ArticleContainer>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time suppressHydrationWarning>
                {new Date(post.date).toLocaleDateString()}
              </time>
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
          <p className="text-xl text-muted-foreground">{post.description}</p>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {post.link?.map((url, i) => (
              <Link key={i} href={url} target="_blank">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Link {post.link && post.link.length > 1 ? i + 1 : ''}
                </Button>
              </Link>
            ))}
            {post.github?.map((url, i) => (
              <Link key={i} href={url} target="_blank">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  Source {post.github && post.github.length > 1 ? i + 1 : ''}
                </Button>
              </Link>
            ))}
            {post.papers?.map((url, i) => (
              <Link key={i} href={url} target="_blank">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Paper {post.papers && post.papers.length > 1 ? i + 1 : ''}
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

        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
              <div className="space-y-2">
                {post.relatedPosts.map((slug) => {
                  const relatedPost = getPostBySlug(slug);
                  if (!relatedPost) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/blog/${slug}`}
                      className="block text-primary hover:underline"
                    >
                      {relatedPost.post.title}
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {multiplePosts && (
          <div className="pt-6 border-t">
            <div className="flex flex-wrap justify-between gap-3">
              {prevPost && (
                <Link href={`/blog/${prevPost.slug}`}>
                  <Button variant="outline" className="justify-start">
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-muted-foreground">
                        Previous
                      </span>
                      <span className="hidden sm:block font-medium">
                        {prevPost.title}
                      </span>
                    </div>
                  </Button>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`}>
                  <Button variant="outline" className="justify-end">
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-muted-foreground">
                        Next
                      </span>
                      <span className="hidden sm:block font-medium">
                        {nextPost.title}
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
