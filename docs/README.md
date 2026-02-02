# 📚 Documentation

## Overview

This portfolio uses **YAML-based configuration** for easy customization without code changes.

## Files

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical architecture and how the system works

## Key Concepts

### YAML Configuration

All site settings are managed through YAML files in `src/config/`:

- `site.yaml` - Site metadata, SEO settings
- `personal.yaml` - Social links, resume
- `home.yaml` - Homepage content
- `about.yaml` - About page content
- `navigation.yaml` - Navigation menu

### MDX Content

Content is written in MDX format in `src/content/`:

- `blogs/` - Blog posts
- `projects/` - Project showcases
- `experiences/` - Work experience

### Dynamic SEO

All SEO metadata is generated dynamically from YAML configuration:

- Sitemap auto-generated from content
- Metadata loaded from `site.yaml`
- Structured data (JSON-LD) from config

## Quick Reference

```
Configuration: src/config/*.yaml
Content: src/content/**/*.mdx (blogs, projects, experiences)
Components: src/components/
Pages: src/app/
```

For detailed technical information, see [ARCHITECTURE.md](./ARCHITECTURE.md).
