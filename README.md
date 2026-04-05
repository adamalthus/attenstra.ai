# Attenstra.ai

Main product marketing and customer engagement property for Attenstra.

## Purpose

This repo is the public web property for Attenstra. It is intended to evolve
from a launch landing page into the company's primary marketing, audience
capture, and customer engagement surface.

Current responsibilities:

- company positioning and launch messaging
- email capture and subscription confirmation flow
- social preview and search metadata
- analytics instrumentation
- public brand assets needed for distribution

## Active Architecture

The production site is a Vite + React application.

- `index.html` - document shell and public metadata
- `src/` - active app source
- `public/` - public assets and static engagement pages

### App structure

- `src/config/` - site-level configuration and external integration settings
- `src/content/` - marketing copy and homepage messaging data
- `src/components/` - reusable marketing-site UI components
- `src/App.tsx` - current homepage assembly
- `src/styles.css` - current global site styling

### Public surfaces

- `public/privacy.html` - public privacy notice
- `public/confirm.html` - post-submit subscription page
- `public/confirmed.html` - post-confirmation subscription page
- `public/robots.txt` - crawler directives
- `public/sitemap.xml` - sitemap
- `public/og-image.png` - social preview card

## Brand assets

Brand and social assets live in `assets/`.

The repo currently uses the PNG wordmark as the source of truth for live brand
rendering. A true vector master has not yet been established.

## Legacy implementation

The original static-site implementation is preserved in:

- `archive/legacy-static-site/`

It is kept only for reference and should not be treated as the active product
marketing stack.

## Development

```bash
npm install
npm run dev
npm run build
```

## Operating notes

Strategic and operational canon notes live in:

- `operational-notes/`

These notes capture positioning, launch workflow, audience capture strategy,
and related decisions that shape the public property.
