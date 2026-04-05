# Attenstra BoA Rehydration Entry V1
status: canon
source_basis: repo_inspected

## Purpose

Primary Book of Attenstra entrypoint for machine and human rehydration of the
current Attenstra repository state.

## Governing Rule

BoA is the primary company-reference and rehydration surface for this
repository.

Rehydration should start from:

- current company canon
- current positioning and go-to-market canon
- current live site and engagement surfaces
- the current engineering handoff bridge to `pace-governed-build`

It should not start from ad hoc launch notes or older static-site assumptions
without passing through the structured BoA surfaces below.

## Current State Summary

Attenstra currently operates as:

- the company-level public marketing and customer-engagement surface for the
  Attenstra brand
- the home of the company narrative around serious work and fragmented
  attention
- the public web property connected to live signup, analytics, social preview,
  and SEO surfaces
- the strategic wrapper around the underlying product and engineering work in
  `pace-governed-build`

## Machine-Readable Rehydration Surfaces

Load these first:

1. `docs/boa/indexes/ATTENSTRA_BOOK_OF_ATTENSTRA_REGISTRY_V1.yaml`
2. `docs/boa/indexes/ATTENSTRA_BOOK_OF_ATTENSTRA_SOURCE_MAP_V1.yaml`
3. `docs/boa/indexes/ATTENSTRA_BOOK_OF_ATTENSTRA_READING_GUIDE_V1.md`

## Human-Readable Rehydration Surfaces

Load these second:

1. `docs/boa/books/ATTENSTRA_BOOK_I_COMPANY_PURPOSE_AND_STRATEGIC_INTENT_V1.md`
2. `docs/boa/books/ATTENSTRA_BOOK_II_POSITIONING_AND_CATEGORY_STRATEGY_V1.md`
3. `docs/boa/books/ATTENSTRA_BOOK_III_PRODUCT_STRATEGY_AND_PORTFOLIO_MODEL_V1.md`
4. `docs/boa/books/ATTENSTRA_BOOK_IV_PRODUCT_MARKETING_AND_DISTRIBUTION_STRATEGY_V1.md`
5. `docs/boa/books/ATTENSTRA_BOOK_V_CUSTOMER_ENGAGEMENT_AND_AUDIENCE_SYSTEM_V1.md`
6. `docs/boa/handoff/ATTENSTRA_TO_PACE_ENGINEERING_HANDOFF_BRIDGE_V1.md`

## Live Site And Engagement Surfaces

Use these to recover the current live public-property model:

- `index.html`
- `src/App.tsx`
- `src/content/homepage.ts`
- `src/config/site.ts`
- `public/confirm.html`
- `public/confirmed.html`
- `public/privacy.html`
- `public/robots.txt`
- `public/sitemap.xml`

## Rehydration Failure Prevention Rule

Do not treat the following as the primary structured rehydration path:

- one-off social launch artifacts
- older root-level static-site files preserved in `archive/legacy-static-site/`
- freeform notes outside the BoA structure without checking the source map

These may remain useful as reference, but they are subordinate to the BoA
surfaces above.
