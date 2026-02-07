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
  github?: string[];
  link?: string[];
  papers?: string[];
}

export interface BlogSeries {
  name: string;
  description: string;
  posts: string[];
}
