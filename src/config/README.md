# Configuration Files

This folder contains YAML configuration files for the portfolio site.

## Files

### `site.yaml`

Global site configuration including name, domain, email, and SEO keywords.

### `personal.yaml`

Personal information including social media links and resume settings.

### `home.yaml`

Homepage content including hero section and call-to-action buttons.

### `about.yaml`

About page content including bio, skills, and interests.

### `navigation.yaml`

Navigation menu configuration for navbar and mobile navigation.

## Editing

Simply edit the YAML files to update content. Changes will be reflected after rebuilding the site.

### Example:

```yaml
# home.yaml
hero:
  title: "Your Name"
  subtitle: "Your Title"
  description: "Your description here"
```

## Type Safety

All configs have TypeScript types defined in `src/types/config.ts` for type safety and autocomplete.
