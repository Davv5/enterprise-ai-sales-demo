# Founder’s Desk — V0

Founder’s Desk is a separate, static founder-facing Company Pulse. It is intentionally distinct from the client-facing sales demo.

## V0 boundary

This version contains curated, share-safe content only. It is not authenticated and must not be used for private prospect notes, contact details, deal information, contracts, customer data, or internal messages.

## Cloudflare Pages setup

Create a new Cloudflare Pages project from the existing `Davv5/enterprise-ai-sales-demo` repository with these values:

| Setting | Value |
| --- | --- |
| Project name | `founders-desk` (temporary) |
| Production branch | `main` |
| Root directory | `founder-desk` |
| Build command | `mkdir -p dist && cp index.html styles.css app.js dist/` |
| Build output directory | `dist` |

The sales-demo Pages project remains unchanged. This new Pages project should receive its own URL. Only after the founders demonstrate repeated use should the product gain authentication, saved signals, decisions, or shared editing.
