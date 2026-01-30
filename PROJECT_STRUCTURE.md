# Portfolio Project Structure

## 📁 Directory Overview

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing & detail pages
│   │   └── [slug]/        # Dynamic blog post pages
│   ├── experience/        # Experience listing & detail pages
│   │   └── [slug]/        # Dynamic experience detail pages
│   ├── projects/          # Projects listing & detail pages
│   │   └── [slug]/        # Dynamic project detail pages
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
│   │   │   ├── code-block.tsx      # Syntax highlighted code blocks
│   │   │   ├── dot-pattern.tsx     # Background pattern
│   │   │   └── scroll-progress.tsx # Reading progress indicator
│   │   └── shadcn/        # shadcn/ui components
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── pagination.tsx
│   │       └── sonner.tsx
│   ├── jsonLD/            # Structured data for SEO
│   │   ├── PersonStructuredData.tsx
│   │   ├── ProjectStructuredData.tsx
│   │   └── StructuredData.tsx
│   ├── BlogList.tsx       # Blog listing component
│   ├── ProjectCard.tsx    # Project card component
│   ├── Navbar.tsx         # Navigation bar
│   ├── PageLayout.tsx     # Page wrapper layout
│   ├── Modetoggle.tsx     # Dark/light mode toggle
│   └── ThemeProvider.tsx  # Theme context provider
│
├── config/                # YAML configuration files
│   ├── site.yaml         # Global site settings
│   ├── personal.yaml     # Social links, resume
│   ├── home.yaml         # Homepage content
│   ├── about.yaml        # About page content
│   ├── navigation.yaml   # Navigation menu
│   └── README.md         # Config documentation
│
├── content/               # MDX content files
│   ├── blogs/            # Blog posts in MDX
│   ├── experiences/      # Experience details in MDX
│   └── projects/         # Project details in MDX
│
├── lib/                  # Utility functions
│   ├── blog.ts          # Blog MDX file readers
│   ├── config.ts        # YAML config loader
│   ├── experience.ts    # Experience MDX file readers
│   ├── project.ts       # Project MDX file readers
│   └── utils.ts         # General utilities
│
└── types/               # TypeScript type definitions
    ├── blog.ts
    ├── config.ts        # Config types
    └── project.ts
```

## 🎯 Key Features

- **SEO Optimized**: Metadata, Open Graph, Twitter Cards, Sitemap, Structured Data
- **YAML Configuration**: Easy content management without code changes
- **MDX Support**: Blog posts, projects, and experiences in MDX format
- **Dark Mode**: Full dark/light theme support
- **Responsive**: Mobile-first design with bottom navigation
- **Type Safe**: Full TypeScript coverage
- **Scroll Progress**: Visual reading progress indicator
- **Code Highlighting**: Syntax highlighted code blocks with copy functionality

## 📝 Content Management

### YAML Configuration (Simple Content)
Edit files in `src/config/` for:
- Site settings (name, domain, email)
- Personal info (social links, resume)
- Homepage content (hero, CTAs)
- About page (bio, skills, interests)
- Navigation menu

### MDX Files (Rich Content)
Create `.mdx` files for:
- **Blog Posts**: `src/content/blogs/`
- **Projects**: `src/content/projects/`
- **Experiences**: `src/content/experiences/`

## 🚀 Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Content**: MDX + YAML
- **Icons**: Lucide React, Tabler Icons
- **Syntax Highlighting**: react-syntax-highlighter
- **Theme**: next-themes

## 📦 Key Dependencies

- `next` - React framework
- `next-mdx-remote` - MDX content rendering
- `js-yaml` - YAML parsing
- `gray-matter` - Frontmatter parsing
- `react-syntax-highlighter` - Code highlighting
- `@tabler/icons-react` - Icon library
- `lucide-react` - Icon library
- `next-themes` - Theme management
- `sonner` - Toast notifications
