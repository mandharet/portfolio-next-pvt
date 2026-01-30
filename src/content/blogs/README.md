# Blog System

## Adding New Blog Posts

1. Create a new `.mdx` file in `src/content/blogs/`
2. Add frontmatter with metadata
3. Write your content in Markdown/MDX
4. The post will automatically appear on the blog page

## Frontmatter Format

```yaml
---
title: "Your Post Title"
description: "Brief description of your post"
date: "2024-01-15"
tags: ["Tag1", "Tag2", "Tag3"]
readingTime: "5 min read"
series: "Series Name" # Optional
seriesOrder: 1 # Optional
relatedPosts: ["other-post-slug"] # Optional
---
```

## Example Post

```mdx
---
title: "My First Post"
description: "This is my first blog post"
date: "2024-01-15"
tags: ["Next.js", "React"]
readingTime: "3 min read"
---

# My First Post

This is the content of my post.

## Section 1

Some content here.

\`\`\`javascript
const hello = "world";
\`\`\`
```

## Features

- ✅ MDX support (Markdown + JSX)
- ✅ Code syntax highlighting
- ✅ Blog series support
- ✅ Related posts
- ✅ Tags and categories
- ✅ Reading time
- ✅ Auto-deployment ready
