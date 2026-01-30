# Portfolio Project Structure

## 📁 Directory Overview

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing & detail pages
│   ├── experience/        # Experience listing & detail pages
│   ├── projects/          # Projects listing & detail pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   ├── robots.ts          # SEO: robots.txt
│   └── sitemap.ts         # SEO: dynamic sitemap
│
├── components/
│   ├── pages/             # Page-specific content components
│   │   ├── HomeContent.tsx
│   │   └── AboutContent.tsx
│   ├── ui/
│   │   ├── aceternity/    # Custom UI components
│   │   │   ├── code-block.tsx
│   │   │   ├── dot-pattern.tsx
│   │   │   └── scroll-progress.tsx
│   │   └── shadcn/        # shadcn/ui components
│   ├── jsonLD/            # Structured data for SEO
│   ├── BlogList.tsx       # Blog listing component
│   ├── ProjectCard.tsx    # Project card component
│   ├── Navbar.tsx         # Navigation bar
│   ├── PageLayout.tsx     # Page wrapper layout
│   ├── Modetoggle.tsx     # Dark/light mode toggle
│   └── ThemeProvider.tsx  # Theme context provider
│
├── content/               # MDX content files
│   ├── blogs/            # Blog posts in MDX
│   ├── experiences/      # Experience details in MDX
│   └── projects/         # Project details in MDX
│
├── data/                 # Static data (legacy, use MDX instead)
│   ├── experience.ts
│   └── projects.ts
│
├── lib/                  # Utility functions
│   ├── blog.ts          # Blog MDX file readers
│   ├── experience.ts    # Experience MDX file readers
│   ├── project.ts       # Project MDX file readers
│   └── utils.ts         # General utilities
│
└── types/               # TypeScript type definitions
    ├── blog.ts
    └── project.ts
```

## 🎯 Key Features

- **SEO Optimized**: Metadata, Open Graph, Twitter Cards, Sitemap, Structured Data
- **MDX Support**: Blog posts, projects, and experiences in MDX format
- **Dark Mode**: Full dark/light theme support
- **Responsive**: Mobile-first design with bottom navigation
- **Type Safe**: Full TypeScript coverage

## 📝 Adding Content

### Blog Posts
Create `.mdx` files in `src/content/blogs/`

### Projects
Create `.mdx` files in `src/content/projects/`

### Experiences
Create `.mdx` files in `src/content/experiences/`

## 🚀 Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```
