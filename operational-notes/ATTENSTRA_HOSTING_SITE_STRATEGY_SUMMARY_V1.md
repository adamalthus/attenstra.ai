# Attenstra Hosting Site Strategy Summary V1

## Purpose

Capture the recommended hosting and deployment posture for the Attenstra.ai web
presence as an early-stage venture in 2026.

## Summary

As of April 4, 2026, the best hosting strategy for an early-stage venture is
usually:

`marketing site` and `audience capture` on a fast managed frontend platform,
with as little custom infrastructure as possible.

For Attenstra.ai, the best-in-class posture is:

- Host the public site on `Vercel` if the site is expected to become a modern
  app-like surface with rapid iteration, preview deployments, and likely
  React or Next usage.
- Use `Cloudflare` for DNS, SSL, CDN protection, and optionally email routing
  or security at the edge.
- Use a managed email or waitlist system instead of building a subscriber
  backend first.
- Keep the site stateless at launch. The website should be cheap, fast, and
  hard to break.

## Recommended Stack

The practical recommendation is:

- `Vercel` for website deployment
- `Cloudflare DNS` in front of the domain
- `Buttondown`, `ConvertKit`, `Mailchimp`, or `Beehiiv` for the email list
- A form integration that writes directly into that email platform
- `PostHog` or `Plausible` for analytics
- No custom database until there is a real reason

## Why This Is Usually Correct

- Vercel is strong for startup speed, Git-based deploys, preview environments,
  and frontend workflow.
- Cloudflare Pages is also strong, especially for cost efficiency and
  edge-first deployments, while Cloudflare itself is excellent for DNS and
  security.
- Netlify remains a viable option, especially when built-in form handling and
  simple deployment workflow are a priority.

## Shortest Path To Launch

If the objective is the shortest path to launch, the recommended choice is:

- `Domain`: Cloudflare
- `Website deploy`: Vercel
- `Email capture`: external provider, not custom code
- `Analytics`: Plausible for lightweight privacy-friendly measurement, or
  PostHog for deeper event analysis
- `Transactional email` later via `Resend` or `Postmark`, not on day one

## Stage-Based Guidance

### Now

- Static or mostly static site
- One waitlist form
- One analytics tool
- One email platform
- No backend unless required

### Soon

- Add CMS or lightweight content publishing for updates
- Add segmented email flows
- Add an investor or design-partner contact path

### Later

- Move to a fuller app architecture only when the website itself becomes a
  product surface

## Attenstra-Specific Recommendation

Do not self-host, do not overbuild, and do not make the waitlist backend the
first product. Use a managed frontend host plus a managed email capture stack.

## Sources

- https://vercel.com/pricing
- https://vercel.com/docs/manage-cdn-usage
- https://developers.cloudflare.com/pages/
- https://docs.netlify.com/
- https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/direct-marketing-guidance/plan-direct-marketing/
