# Attenstra To PACE Engineering Handoff Bridge V1
status: canon_bridge
source_basis: repo_inspected

## Purpose

Provide a clean, simple bridge from the Attenstra company/marketing canon to
the current engineering system-of-record in `pace-governed-build`.

## Governing Rule

Attenstra is the company-level marketing and strategic wrapper.

`pace-governed-build` remains the current engineering, runtime, product-system,
and BoP rehydration authority for the underlying product work.

## Use This Bridge When

Use this artifact when a task starts in the Attenstra repo but needs to connect
to product truth in the engineering repo.

Typical examples:

- product positioning needs engineering verification
- company messaging needs current product-state grounding
- launch or investor material must be checked against active product reality
- someone needs to rehydrate quickly across both repos

## Current Engineering Repo

- `/Users/Jonathan/Library/CloudStorage/Dropbox/Developer/pace-governed-build`

## First Engineering Load Surface

Start with:

- `/Users/Jonathan/Library/CloudStorage/Dropbox/Developer/pace-governed-build/docs/bop/indexes/PACE_BOP_REHYDRATION_ENTRY_V1.md`

## Current Cross-Repo Rule

Attenstra-facing materials should:

- stay company-level by default
- avoid overstating unfinished product functionality
- remain consistent with the current PACE canon and live engineering posture

## What Attenstra Owns

Attenstra owns:

- company narrative
- category framing
- public marketing property
- audience capture and engagement surfaces
- public launch and distribution logic

## What PACE Engineering Repo Owns

`pace-governed-build` owns:

- product-system truth
- technical canon
- runtime and deployment truth
- product architecture
- engineering implementation state

## Handoff Questions

When handing from Attenstra to engineering, answer:

- what company-level claim is being made
- what product truth needs validation
- what level of public detail is actually necessary
- whether the claim belongs at the company level or product level

## Minimal Rehydration Sequence

1. Read `docs/boa/indexes/ATTENSTRA_BOA_REHYDRATION_ENTRY_V1.md`
2. Read this bridge artifact
3. Read the PACE BoP rehydration entry in `pace-governed-build`

That should be the default minimum handoff path across the two repos.
