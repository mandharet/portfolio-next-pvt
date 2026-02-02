import { getSiteConfig } from "@/lib/config";
import { BlogPost } from "@/types/blog";

interface BlogPostStructuredDataProps {
  post: BlogPost;
}

export default function BlogPostStructuredData({
  post,
}: BlogPostStructuredDataProps) {
  const siteConfig = getSiteConfig();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    url: `${siteConfig.domain}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    articleSection: post.tags[0] || "Technology",
    ...(post.readingTime && {
      timeRequired: post.readingTime,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
