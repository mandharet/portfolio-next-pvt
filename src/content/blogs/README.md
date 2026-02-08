# Blog System

## Adding New Blog Posts

1. Create a new `.mdx` file in `src/content/blogs/`
2. Add frontmatter with metadata
3. Write your content in Markdown/MDX
4. The post will automatically appear on the blog page

---

## Frontmatter Format

```yaml
---
title: "Your Post Title"
description: "Brief description of your post"
date: "2024-01-15"
tags: ["Tag1", "Tag2", "Tag3"]
readingTime: "5 min read" # Optional
series: "Series Name" # Optional
seriesOrder: 1 # Optional
relatedPosts: ["other-post-slug"] # Optional
---
```

---

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

---

## Advanced Features

### Using CodeBlock Component

For multi-file code examples with tabs:

```mdx
<CodeBlock
  language="typescript"
  filename="app.ts"
  code={\`const greeting = "Hello World";
console.log(greeting);\`}
/>
```

**Multiple files with tabs:**

```mdx
<CodeBlock
  language="typescript"
  filename=""
  tabs={[
    {
      name: "app.ts",
      code: \`export function greet(name: string) {
  return \\\`Hello, \${name}!\\\`;
}\`,
      language: "typescript"
    },
    {
      name: "test.ts",
      code: \`import { greet } from './app';

console.log(greet('World'));\`,
      language: "typescript"
    }
  ]}
/>
```

**With line highlighting:**

```mdx
<CodeBlock
  language="javascript"
  filename="config.js"
  highlightLines={[2, 3]}
  code={\`module.exports = {
  name: "My App",
  version: "1.0.0",
  port: 3000
}\`}
/>
```

---

### Mermaid Diagrams

```mdx
\`\`\`mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
\`\`\`
```

---

### Markdown Tables

```mdx
| Feature   | Supported |
| --------- | --------- |
| Markdown  | ✅        |
| MDX       | ✅        |
| Tables    | ✅        |
```

---

## Features

- ✅ **MDX support** - Markdown + JSX components
- ✅ **Code syntax highlighting** - Beautiful code blocks with copy button
- ✅ **CodeBlock component** - Multi-file tabs and line highlighting
- ✅ **Mermaid diagrams** - Visualize architecture and workflows
- ✅ **Markdown tables** - GitHub Flavored Markdown support
- ✅ **Giscus comments** - GitHub Discussions powered comments
- ✅ **Blog series** - Group related posts
- ✅ **Related posts** - Link to similar content
- ✅ **Tags** - Categorize your posts
- ✅ **Reading time** - Estimated read duration
- ✅ **SEO optimized** - Metadata and structured data
- ✅ **Auto-deployment** - Static generation ready

---

## Tips

- Use descriptive titles and descriptions for better SEO
- Add relevant tags to help readers find related content
- Use CodeBlock component for complex code examples
- Add mermaid diagrams to visualize concepts
- Enable Giscus comments for reader engagement
- Link related posts to keep readers on your site
- Update `date` in YYYY-MM-DD format for proper sorting
