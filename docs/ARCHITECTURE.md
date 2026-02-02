# 🏗️ Architecture

## Overview

Portfolio built with Next.js 15 App Router using YAML for configuration and MDX for content.

---

## YAML Configuration System

**Location:** `src/config/*.yaml`  
**Loader:** `src/lib/config.ts`

All site settings stored in YAML files and loaded at build time using `js-yaml` library.

**Config Files:**

- `site.yaml` - Global settings, SEO metadata
- `personal.yaml` - Social links, resume
- `home.yaml` - Homepage content
- `about.yaml` - About page content
- `navigation.yaml` - Navigation menu

**Type Safety:** TypeScript interfaces in `src/types/config.ts` ensure YAML structure is valid.

---

## MDX Content System

**Location:** `src/content/**/*.mdx`  
**Parser:** `gray-matter` (frontmatter) + `next-mdx-remote` (rendering)

Content written in MDX format with YAML frontmatter for metadata.

**Content Types:**

- `blogs/` - Blog posts
- `projects/` - Project showcases
- `experiences/` - Work experience

**Loading:** `src/lib/blog.ts`, `src/lib/project.ts`, `src/lib/experience.ts`

---

## SEO Implementation

**Dynamic Metadata:**

- Loaded from YAML config (`src/config/site.yaml`)
- Generated per-page in `generateMetadata()` functions
- Includes Open Graph, Twitter Cards, canonical URLs

**Sitemap:**

- Auto-generated in `src/app/sitemap.ts`
- Reads all content from MDX files
- Uses domain from `site.yaml`

**Structured Data (JSON-LD):**

- Components in `src/components/jsonLD/`
- Person, BlogPosting, SoftwareSourceCode schemas
- Data loaded from YAML config

---

## Project Structure

```
src/
├── app/              # Next.js pages & routes
├── components/       # React components
├── config/          # YAML configuration files
├── content/         # MDX content files (blogs, projects, experiences)
├── lib/             # Utilities (YAML loaders, content parsers)
└── types/           # TypeScript type definitions
```

---

## Data Flow

```
Build Time:
  YAML files → js-yaml → TypeScript types → Components
  MDX files → gray-matter → next-mdx-remote → Pages

Runtime:
  Pre-rendered static HTML (no client-side data loading)
```

---

## Key Features

- **Server Components** - All pages rendered server-side
- **Static Generation** - Pre-rendered at build time
- **Type Safety** - TypeScript for all configs and content
- **Zero JS for Content** - SEO-friendly, fast loading

---

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- MDX (next-mdx-remote)
- YAML (js-yaml)
- gray-matter (frontmatter parsing)

---

## Customization

**Add New Config:**

1. Create YAML file in `src/config/`
2. Define TypeScript type in `src/types/config.ts`
3. Create loader function in `src/lib/config.ts`

**Add New Content:**

1. Create MDX file in `src/content/`
2. Define TypeScript type in `src/types/`
3. Create utility functions in `src/lib/`
4. Create page route in `src/app/`

---

## Development

```bash
bun run dev      # Development server
bun run build    # Production build
bun run lint     # Lint code
```
