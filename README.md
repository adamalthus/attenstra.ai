# attenstra.ai

Public website repository for Attenstra.ai, the company behind PACE and its
product portfolio.

## Purpose

The initial site is optimized for two things:

- create interest in Attenstra.ai and the PACE product direction
- collect email identities from people who want updates as the company evolves

## Structure

- `index.html` - landing page
- `styles.css` - site styling
- `script.js` - waitlist interaction logic

## Waitlist behavior

The current implementation is static-site friendly.

- If the form is configured with a real endpoint, submissions post there.
- If no endpoint is configured, the form falls back to opening the user's mail
  client with a pre-filled email to `hello@attenstra.ai`.

To wire a real collector later, set the `data-waitlist-endpoint` attribute on
the form in `index.html`.
