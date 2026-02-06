# 🚀 Portfolio - Next.js

> **Open Source Portfolio Template** - Clone it, customize it, make it yours!

A modern, SEO-optimized portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Perfect for developers, designers, and creators who want a professional online presence.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Why This Template?

- 🎨 **Beautiful Design** - Modern UI with dark/light mode
- ⚙️ **YAML Configuration** - Update your info without touching code
- 📝 **MDX Blog** - Write posts in Markdown with React components
- 🔍 **SEO Ready** - Sitemap, metadata, structured data included
- 📱 **Mobile First** - Fully responsive on all devices
- 🚀 **Fast** - Static generation, optimized performance
- 🎯 **Type Safe** - Full TypeScript support

---

## 🎉 Get Started in 3 Steps

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/portfolio-next.git
cd portfolio-next
bun install
```

### 2. Update Your Info

Edit `src/config/site.yaml`:

```yaml
name: "Your Name"
title: "Your Title"
domain: "https://yoursite.com"
email: "your@email.com"
description: "Your description"
keywords: ["Your", "Keywords"]
```

Edit `src/config/personal.yaml`, `src/config/home.yaml`, and `src/config/about.yaml` with your information.

**Note:** After updating YAML files, also update:
- `src/app/opengraph-image.tsx` (lines 4, 27, 35, 43) - for social media previews
- `public/og-image.svg` (optional fallback)

### 3. Run & Deploy

```bash
bun run dev      # Preview locally
bun run build    # Build for production
```

Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) in one click!

---

## 📝 Easy Customization

### YAML Configuration (No Code!)

All your information is in simple YAML files:

- `src/config/site.yaml` - Name, title, SEO settings
- `src/config/personal.yaml` - Social links, resume
- `src/config/home.yaml` - Homepage content
- `src/config/about.yaml` - About page, skills

### Add Content in Markdown

Create `.mdx` files in `src/content/`:

**Blog Post** (`src/content/blogs/my-post.mdx`):

```mdx
---
title: "My First Post"
description: "Brief description"
date: "2024-01-20"
tags: ["React", "Next.js"]
readingTime: "5 min read" # Optional
---

# Hello World!

Your content here...
```

**Project** (`src/content/projects/my-project.mdx`):

```mdx
---
title: "My Project"
description: "Brief description"
date: "2024-01-20"
tech: ["React", "Node.js"]
github: "https://github.com/you/project"
link: "https://demo.com" # Optional
---

# My Awesome Project

Project details...
```

**Experience** (`src/content/experiences/my-job.mdx`):

```mdx
---
company: "Company Name"
role: "Software Engineer"
period: "2023 - Present"
description: "Brief description"
technologies: ["React", "Node.js"]
date: "2023-01-01"
---

# My Experience

Details about your role...
```

That's it! Your content appears automatically.

---

## 🎨 What You Get

- ✅ Homepage with hero section
- ✅ About page with skills & bio
- ✅ Blog with MDX support
- ✅ Project showcase
- ✅ Experience timeline
- ✅ Dark/Light mode toggle
- ✅ Mobile-friendly navigation
- ✅ SEO optimized (sitemap, metadata, structured data)
- ✅ Fast loading (static generation)

---

## 🚀 Deploy Your Portfolio

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy - Done! 🎉

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build: `bun run build` | Publish: `out`
5. Deploy - Done! 🎉

---

## 📚 Documentation

- **[docs/README.md](./docs/README.md)** - Quick overview
- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Technical details

---

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **MDX** - Markdown with React components
- **YAML** - Configuration files
- **shadcn/ui** - UI components

---

## 📄 License

**MIT License** - Free to use for personal and commercial projects!

Feel free to:

- ✅ Use for your portfolio
- ✅ Modify as you like
- ✅ Deploy anywhere
- ✅ Remove attribution (optional, but appreciated!)

---

## 🤝 Contributing

Found a bug? Have a feature idea? Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Submit a pull request

---

## 💡 Tips

- Update `domain` in `src/config/site.yaml` for proper SEO
- Add your resume PDF to `public/resume.pdf`
- Customize colors in `src/app/globals.css`
- Write regularly - fresh content helps SEO!

---

## 🌟 Show Your Support

If you find this template helpful:

- ⭐ Star this repository
- 🐛 Report bugs
- 💡 Suggest features
- 🔀 Share with others

---

## 📞 Need Help?

- Check [docs/](./docs/) for documentation
- Open an [issue](https://github.com/yourusername/portfolio-next/issues)
- Join discussions

---

<div align="center">

**Built with ❤️ for the open source community**

[Demo](https://your-demo.vercel.app) • [Documentation](./docs/) • [Issues](https://github.com/yourusername/portfolio-next/issues)

</div>

---

**Ready to build your portfolio?** Clone this repo and make it yours! 🚀
