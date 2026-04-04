# Attenstra PACE BoP Context Summary V1

## Purpose

Capture the Attenstra-relevant context from the active PACE BoP rehydration
entry so the company website repo has a concise statement of what PACE currently
is and how it should be understood.

## Source

Primary source:

- `/Users/Jonathan/Library/CloudStorage/Dropbox/Developer/pace-governed-build/docs/bop/indexes/PACE_BOP_REHYDRATION_ENTRY_V1.md`

Supporting source:

- `/Users/Jonathan/Library/CloudStorage/Dropbox/Developer/pace-governed-build/README.md`

## Core Rule

In the `pace-governed-build` repository, BoP is the primary rehydration and
system-reference surface.

Rehydration is governed to start from:

- current canon
- current runtime boundaries
- current deployment surfaces

It must not start from stale packet-head, forward-build, or vault-era
assumptions.

## Current PACE State Summary

The current PACE state, as described by the BoP entry, is:

- an event-driven service architecture in canon
- a service-by-service Core refactor in progress
- a standalone frontend UX stack in canon and local deployment
- a Go API runtime capable of `api_only` operation
- a live connector and calendar ingestion path under active implementation
- a hardened but still maturing Factory runtime

## Runtime And Deployment Context

The PACE local deployment model currently includes:

- frontend UX at `http://127.0.0.1:4174`
- backend API at `http://127.0.0.1:8081`
- backend allowed to run in `api_only` mode
- frontend and backend treated as separate runtime concerns

## Strategic Relevance For Attenstra

This context matters for Attenstra.ai because the company site should describe
PACE consistently with the current canonical position.

At the present time, the Attenstra site should understand PACE as:

- a governed AI and product-operating system effort
- grounded in event-driven service architecture
- actively under Core refactor and runtime hardening
- already spanning frontend UX, backend runtime, and Factory infrastructure

The company site should avoid describing PACE as a finished, static, or fully
sealed commercial product if that would contradict the active canon.

## Website Interpretation Guidance

For Attenstra.ai website and messaging work:

- treat PACE as the foundational system behind the company
- describe it in a way that is faithful to the active architecture and runtime
  posture
- emphasize governed AI systems, operational discipline, and portfolio
  direction
- avoid relying on stale packet-era or vault-era descriptions when deciding how
  to position the company publicly
