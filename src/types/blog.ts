export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  series?: string;
  seriesOrder?: number;
  relatedPosts?: string[];
  readingTime?: string;
}

export interface BlogSeries {
  name: string;
  description: string;
  posts: string[];
}
