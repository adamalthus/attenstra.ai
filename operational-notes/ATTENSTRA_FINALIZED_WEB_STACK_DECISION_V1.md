# Attenstra Finalized Web Stack Decision V1

## Purpose

Record the finalized early-stage web infrastructure decision for Attenstra.ai.

## Decision

The approved Attenstra.ai web stack is:

- `Cloudflare` for domain, DNS, SSL, and edge/network control
- `Vercel` for website hosting and deployment
- `Buttondown` for waitlist capture and subscriber updates

## Context

This decision follows the current operating constraints:

- `attenstra.ai` is already registered with Cloudflare
- an active Vercel account already exists
- the primary purpose of the site is to create interest and capture email
  identities for product and company updates

## Why This Stack Is Correct

- It minimizes infrastructure burden at the current company stage.
- It keeps the public site fast, simple, and easy to iterate through Git-based
  deployment.
- It avoids building a custom subscriber backend too early.
- It preserves a clean path to richer product-web behavior later if needed.

## Operating Model

- GitHub repo is the source of truth for the site
- Vercel is connected to the repo for deployment
- Cloudflare DNS points the domain to Vercel
- Buttondown handles waitlist capture and ongoing updates

## Current Recommendation

Treat this stack as the default operating baseline unless a later explicit
decision supersedes it.
