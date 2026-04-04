# Attenstra Landing Page Design Tool Decision V1

## Purpose

Record the recommended design tool decision for the Attenstra.ai landing page.

## Decision

Use `Figma`, not `Gamma`, as the primary design tool for the Attenstra.ai
landing page.

## Why Figma Is The Better Choice

- The Attenstra landing page is intended to be a brand-forward custom startup
  landing page, not just a presentable narrative document.
- The site is likely to evolve into a richer product and web surface over time.
- The repo is already code-backed and connected to a Vercel and GitHub workflow.
- Figma is better suited to precise brand expression, reusable components,
  developer handoff, and long-term design system growth.

Figma now explicitly supports website design and publishing workflows through
`Figma Sites`, including responsive web design, library reuse, preview and
publish flow, and web-specific interactions.

## Why Gamma Is Not The Primary Choice

- Gamma is strong for quickly turning ideas or outlines into polished narrative
  pages and publishable story surfaces.
- Gamma is better suited to presentation-like artifacts, teaser pages, and
  fast narrative communication.
- Gamma is not the best default system when the target is a bespoke landing page
  expected to connect closely to a broader design and engineering workflow.

## Recommended Role Split

- `Figma`: primary design system and landing page design tool
- `Gamma`: optional secondary tool for investor-style narratives, lightweight
  story artifacts, or pitch-oriented pages

## Current Recommendation

Treat `Figma` as the default design environment for the Attenstra.ai website
unless a later explicit decision supersedes it.

## Sources

- https://help.figma.com/hc/en-us/articles/31230436657815-Explore-Figma-Sites
- https://www.figma.com/blog/introducing-figma-sites/
- https://gamma.app/
- https://help.gamma.app/en/articles/11047576-can-i-publish-or-disable-my-gamma-site
