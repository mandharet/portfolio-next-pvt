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
import { Calendar, ArrowUpDown } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/shadcn/pagination";
import { BlogPost } from "@/types/blog";

const POSTS_PER_PAGE = 10;

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [posts]);

  const filteredAndSortedPosts = useMemo(() => {
    const filtered = selectedTag
      ? posts.filter((post) => post.tags.includes(selectedTag))
      : posts;

    return filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [posts, selectedTag, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredAndSortedPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const handleTagFilter = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
            onClick={() => handleTagFilter(null)}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => handleTagFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={toggleSort}>
          <ArrowUpDown className="h-4 w-4 mr-2" />
          {sortOrder === "newest" ? "Newest First" : "Oldest First"}
        </Button>
      </div>

      {/* Posts */}
      {paginatedPosts.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              No posts found with the selected filter.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {paginatedPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <time>{new Date(post.date).toLocaleDateString()}</time>
                    {post.readingTime && <span>• {post.readingTime}</span>}
                  </div>
                  <CardTitle className="hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                {post.tags.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(page);
                  }}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
