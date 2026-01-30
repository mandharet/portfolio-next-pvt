import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/shadcn/badge";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/ui/aceternity/code-block";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/shadcn/breadcrumb";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) return { title: "Post Not Found" };

  return {
    title: result.post.title,
    description: result.post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = getPostBySlug(slug);

  if (!result) {
    notFound();
  }

  const { post, content } = result;

  return (
    <PageLayout>
      <article className="space-y-6 pb-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>{new Date(post.date).toLocaleDateString()}</time>
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
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote source={content} components={{ CodeBlock }} />
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
      </article>
    </PageLayout>
  );
}
