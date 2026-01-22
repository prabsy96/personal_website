# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

Personal research website hosted on GitHub Pages. The site showcases research publications, CV/resume, news, and contact information.

## Commands

```bash
npm run dev      # Start local dev server (http://localhost:4321)
npm run build    # Build for production (output: ./dist)
npm run preview  # Preview production build locally
```

## Architecture

**Framework**: Astro 4.x (static output mode)

**Structure**:
- `src/pages/` - Page routes (index, research, publications, news, contact)
- `src/layouts/` - BaseLayout (shared shell) and NewsLayout (markdown news posts)
- `src/components/` - Navbar, Footer, NewsCard
- `src/styles/` - global.css (variables, typography) and layout.css (layout utilities)
- `src/content/news/` - Markdown news posts with frontmatter (title, date, description)
- `public/` - Static assets served at root (resume.pdf, favicon.svg)

**Layouts**: Pages use BaseLayout which provides Navbar, Footer, and container. News markdown files use NewsLayout (wraps BaseLayout) via frontmatter `layout` property.

**News posts**: Files in `src/content/news/` require frontmatter: `title`, `date`, `description`, and `layout: ../../layouts/NewsLayout.astro`.

## Deployment

Automatic via GitHub Actions on push to `main`. Builds with Node 20, deploys to GitHub Pages. See `.github/workflows/astro.yml`.

## Resume Handling

- Primary file: `public/PrabhuVellaisamyResume_2025.pdf`
- Placeholder: `public/resume.pdf` (currently empty, intended for stable URL)
- When updating, replace the primary PDF and consider copying to `resume.pdf` for a stable link

## Important: Base Path

Site is deployed at root (`/`) at https://prabsy96.github.io/. For internal links, use `import.meta.env.BASE_URL` to remain compatible with potential subpath deployments:

```astro
const base = import.meta.env.BASE_URL;
<a href={`${base}/research`}>Research</a>
```

This pattern allows for easy reconfiguration if deployment needs change.

## Guidelines

**Priorities:**
- Keep it lightweight and simple
- Research-focused UX: publications and CV should be easy to find
- Mobile responsive
- Minimal dependencies

**Content style:**
- Tone: concise, clear, professional
- Audience: researchers, engineers, curious readers
- Include links to papers, code, datasets, slides when relevant

**Avoid:**
- Analytics/tracking without explicit request
- Flashy UI that distracts from content
- Hardcoded absolute URLs (use relative paths)
- Heavy client-side JavaScript
- Dependencies that complicate GitHub Pages deployment

When in doubt, ask for clarification before making structural changes.
