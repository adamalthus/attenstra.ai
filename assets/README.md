# Brand And Source Assets

This directory is the source-of-truth store for Attenstra brand and marketing
assets.

It is intended to hold:

- working logo variants
- wordmark variants
- social preview/source artwork
- editable source files such as PSD or AI exports

## Usage rules

- `assets/` is the canonical home for future brand/source assets.
- `public/` should contain only the specific runtime-ready files needed by the
  live site.
- If a source asset becomes part of the live site, export or copy the final
  runtime version into `public/` rather than treating `public/` as the working
  asset store.

## Current notes

- The live site currently uses PNG brand assets.
- A true vector master for the wordmark has not yet been established.
- Some legacy filenames contain historical spelling inconsistencies such as
  `Woirdmark` and `Sqaure`; these are preserved for continuity and can be
  normalized later if desired.
