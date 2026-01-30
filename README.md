# 🚀 Modern Portfolio Website

A beautiful, SEO-optimized portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a blog, project showcase, experience timeline, and easy YAML-based content management.

![Next.js](https://img.shields.io/badge/Next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with dark/light mode
- 📱 **Fully Responsive** - Mobile-first design with bottom navigation
- 🔍 **SEO Optimized** - Meta tags, Open Graph, sitemap, structured data
- 📝 **Blog System** - Write posts in MDX with syntax highlighting
- 💼 **Project Showcase** - Detailed project pages with code examples
- 🏢 **Experience Timeline** - Professional experience with rich content
- ⚙️ **YAML Configuration** - Easy content management without code changes
- 🎯 **Type Safe** - Full TypeScript support
- ⚡ **Fast Performance** - Optimized builds and static generation

## 🎯 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio-next.git
cd portfolio-next
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
```

## 📝 Customization Guide

### Step 1: Update Site Configuration

Edit `src/config/site.yaml`:

```yaml
name: "Your Name"
title: "Your Title"
domain: "https://yoursite.com"
email: "your.email@example.com"
description: "Your description"
keywords:
  - "Your Keyword 1"
  - "Your Keyword 2"
```

### Step 2: Update Personal Information

Edit `src/config/personal.yaml`:

```yaml
social:
  github: "https://github.com/yourusername"
  linkedin: "https://linkedin.com/in/yourusername"
  twitter: "https://twitter.com/yourusername"  # Optional

resume:
  url: "/resume.pdf"
  enabled: true  # Set to false to hide resume button
```

### Step 3: Customize Homepage

Edit `src/config/home.yaml`:

```yaml
hero:
  title: "Your Name"
  subtitle: "Your Professional Title"
  description: "Brief description about yourself and what you do."

cta:
  primary:
    text: "View Projects"
    link: "/projects"
  secondary:
    text: "About Me"
    link: "/about"
  resume:
    text: "Resume"
    link: "/resume.pdf"
```

### Step 4: Update About Page

Edit `src/config/about.yaml`:

```yaml
bio:
  - "First paragraph about yourself..."
  - "Second paragraph..."

skills:
  - name: "Backend"
    items:
      - "Node.js"
      - "Python"
      - "Go"
  - name: "Frontend"
    items:
      - "React"
      - "Vue.js"

interests:
  - "Machine Learning"
  - "Open Source"
```

### Step 5: Add Your Resume

Place your resume PDF in the `public` folder:
```
public/resume.pdf
```

### Step 6: Update Favicon

Replace `src/app/favicon.ico` with your own favicon.

## 📚 Adding Content

### Adding Blog Posts

1. Create a new `.mdx` file in `src/content/blogs/`:

```mdx
---
title: "Your Blog Post Title"
description: "Brief description"
date: "2024-01-20"
tags: ["React", "Next.js"]
readingTime: "5 min read"
---

# Your Blog Post Title

Your content here...

## Code Example

<CodeBlock
  language="javascript"
  filename="example.js"
  code={`console.log("Hello World!");`}
/>
```

2. The blog post will automatically appear on `/blog`

### Adding Projects

1. Create a new `.mdx` file in `src/content/projects/`:

```mdx
---
title: "Project Name"
description: "Project description"
date: "2024-01-15"
tech: ["React", "Node.js", "MongoDB"]
link: "https://project-demo.com"  # Optional
github: "https://github.com/you/project"  # Optional
paper: "https://paper-link.com"  # Optional
---

# Project Name

Detailed project description...
```

2. The project will automatically appear on `/projects`

### Adding Experience

1. Create a new `.mdx` file in `src/content/experiences/`:

```mdx
---
company: "Company Name"
role: "Your Role"
period: "2023 - Present"
description: "Brief description"
technologies: ["Tech1", "Tech2"]
date: "2023-01-01"
---

# Your Role at Company Name

Detailed experience description...
```

2. The experience will automatically appear on `/experience`

## 🎨 Customizing Styles

### Colors

Edit `src/app/globals.css` to change theme colors:

```css
:root {
  --primary: oklch(0.205 0 0);  /* Change primary color */
  --background: oklch(1 0 0);   /* Change background */
}
```

### Fonts

Update fonts in `src/app/layout.tsx` or use Tailwind's font utilities.

## 🔧 Configuration Files Reference

### `src/config/site.yaml`
Global site settings, SEO metadata

### `src/config/personal.yaml`
Social links, resume settings

### `src/config/home.yaml`
Homepage hero section and CTAs

### `src/config/about.yaml`
About page bio, skills, interests

### `src/config/navigation.yaml`
Navigation menu items

## 📦 Project Structure

```
portfolio-next/
├── src/
│   ├── app/                    # Next.js pages
│   │   ├── about/
│   │   ├── blog/
│   │   ├── experience/
│   │   ├── projects/
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── pages/             # Page-specific components
│   │   ├── ui/                # Reusable UI components
│   │   └── ...
│   ├── config/                # YAML configuration files
│   ├── content/               # MDX content
│   │   ├── blogs/
│   │   ├── experiences/
│   │   └── projects/
│   ├── lib/                   # Utilities
│   └── types/                 # TypeScript types
├── public/                    # Static files
└── package.json
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

### Build for Production

```bash
npm run build
npm run start
```

## 🔍 SEO Configuration

The site is pre-configured with:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Dynamic sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs

Update the domain in:
- `src/config/site.yaml`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

## 🎯 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Content**: MDX (Markdown + JSX)
- **Configuration**: YAML
- **Icons**: Lucide React
- **Syntax Highlighting**: react-syntax-highlighter
- **Theme**: next-themes

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 💡 Tips

1. **Keep it updated** - Regularly add new projects and blog posts
2. **Optimize images** - Use WebP format and proper sizing
3. **Write good content** - Quality over quantity
4. **Test on mobile** - Most visitors will be on mobile devices
5. **Update resume** - Keep your resume current

## 🆘 Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Styles not loading
```bash
# Rebuild Tailwind
npm run dev
```

### MDX not rendering
- Check frontmatter format (must be valid YAML)
- Ensure file extension is `.mdx`
- Verify file is in correct content folder

## 📞 Support

If you have questions or need help:
1. Check existing issues on GitHub
2. Create a new issue with details
3. Provide error messages and screenshots

## 🌟 Show Your Support

If you found this template helpful, please:
- ⭐ Star the repository
- 🐛 Report bugs
- 💡 Suggest features
- 🔀 Fork and customize

---

**Built with ❤️ using Next.js**

Happy coding! 🚀
