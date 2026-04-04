# Attenstra Site V1 Launch Workflow V1

## Purpose

Outline the recommended process to get the first version of the Attenstra.ai
site live and operating.

## Workflow

1. Lock the operating decisions.
   Treat the current stack as fixed for v1:
   `Cloudflare + Vercel + Buttondown + Figma`.

2. Define the v1 objective.
   The first version should do only three things well:
   - explain what Attenstra is
   - establish credibility around PACE and the product direction
   - capture emails for updates

3. Freeze the v1 information architecture.
   Keep the site to a single landing page with:
   - hero
   - thesis or problem
   - product direction
   - credibility or proof
   - waitlist capture
   - simple footer with privacy and contact links

4. Write the source messaging.
   Before design, write the exact copy for:
   - headline
   - subhead
   - CTA text
   - short company explanation
   - short PACE explanation
   - waitlist promise
   - privacy and consent microcopy

5. Design the landing page in Figma.
   Create the first design pass for desktop and mobile.
   The goal is not perfection; it is enough clarity and fidelity to drive
   implementation.

6. Define the Buttondown capture model.
   Decide:
   - which field or fields are collected at launch
   - whether segmentation is included at signup
   - the welcome email
   - the exact subscriber promise

7. Set up Buttondown.
   Create the publication, signup flow, tags or segments if needed, sender
   identity, and the embeddable or API-based form path.

8. Prepare the production domain path.
   In Cloudflare:
   - confirm the domain is healthy
   - decide whether `attenstra.ai` or `www.attenstra.ai` is canonical
   - plan redirects accordingly

9. Connect the repo to Vercel.
   Import the GitHub repo into Vercel, set the production branch, and confirm
   preview deploys work.

10. Implement the landing page in the repo.
    Build the first coded version from the approved Figma design.
    Keep it lightweight, fast, and mostly static.

11. Wire the waitlist form to Buttondown.
    Use either Buttondown embed or a direct submission flow.
    Make sure success and failure states are explicit.

12. Add required trust and legal surfaces.
    For v1, at minimum:
    - privacy page
    - basic contact path
    - clear consent wording near the signup form

13. Add analytics.
    Install one analytics layer only.
    The default recommendation is `Plausible` unless deeper event
    instrumentation is needed immediately.

14. QA before launch.
    Check:
    - mobile and desktop rendering
    - form submission behavior
    - domain routing
    - page speed
    - broken links
    - consent copy and privacy flow

15. Launch on the production domain.
    Point Cloudflare DNS to Vercel, verify SSL, and confirm the live site
    resolves correctly.

16. Start the post-launch operating loop.
    After launch:
    - monitor visits and signup conversion
    - improve copy before redesigning visuals
    - publish regular updates so the list stays warm

## Fastest Practical Execution Sequence

The fastest path is:

1. message
2. Figma design
3. Buttondown setup
4. Vercel project setup
5. implementation
6. domain cutover
7. launch QA
8. launch

## V1 Restraint Rules

- do not build a custom backend first
- do not add multiple pages unless they serve conversion
- do not over-collect signup data
- do not delay launch for brand perfection
