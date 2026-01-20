# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

Personal research website hosted on GitHub Pages. The site showcases research papers, projects, CV/resume, and occasional technical write-ups.

## Commands

```bash
npm run dev      # Start local dev server (http://localhost:4321)
npm run build    # Build for production (output: ./dist)
npm run preview  # Preview production build locally
```

## Architecture

**Framework**: Astro 4.x (static output mode)

**Structure**:
- `src/pages/` - Page routes (index, research, projects, news, contact)
- `src/layouts/` - BaseLayout (shared shell) and NewsLayout (markdown news posts)
- `src/components/` - Navbar, Footer, NewsCard
- `src/styles/` - global.css (variables, typography) and layout.css (layout utilities)
- `src/content/news/` - Markdown news posts with frontmatter (title, date, description)
- `public/` - Static assets served at root (resume.pdf, favicon.svg)

**Layouts**: Pages use BaseLayout which provides Navbar, Footer, and container. News markdown files use NewsLayout (wraps BaseLayout) via frontmatter `layout` property.

## Deployment

Automatic via GitHub Actions on push to `main`. Builds with Node 20, deploys to GitHub Pages. See `.github/workflows/astro.yml`.

## Resume Handling

- Current location: `public/resume.pdf` (accessible at `/personal_website/resume.pdf`)
- Also: `public/PrabhuVellaisamyResume_2025.pdf` (legacy path)
- When updating, overwrite existing file to maintain stable URLs

## Important: Base Path

Site is deployed at `/personal_website` subpath. Use relative paths or Astro's built-in URL handling—avoid hardcoded absolute paths starting with `/`.

## Guidelines

**Priorities:**
- Keep it lightweight and simple
- Research-focused UX: publications, projects, and CV should be easy to find
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
