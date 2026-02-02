import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/BlogList";
import { Card, CardContent } from "@/components/ui/shadcn/card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles and insights on software engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageLayout>
      <div className="space-y-8 pb-30 pt-10">
        <div>
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-muted-foreground">
            Technical articles and insights
          </p>
        </div>

        {posts.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center py-8">
                No blog posts yet. Add MDX files to src/content/blogs/
              </p>
            </CardContent>
          </Card>
        ) : (
          <BlogList posts={posts} />
        )}
      </div>
    </PageLayout>
  );
}
