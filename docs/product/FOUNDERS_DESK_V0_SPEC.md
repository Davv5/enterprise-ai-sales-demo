# Founder’s Desk V0 — Company Pulse Specification

## Job to be done

Founder’s Desk gives the market-facing partner a clear answer to: **What is the company building, what changed, why does it matter, what is ready to use, and what needs proof next?**

It is a separate founder product. It does not share client-demo navigation, product branding, or delivery path.

## First experience

The Company Pulse home is a concise shared briefing. It is organized around a company objective, a real build update feed, a product reality map, ready-to-use market assets, and a founder next move. The update feed is interactive: a partner can filter the meaningful changes and open the business translation for each one.

## V0 boundaries

V0 is static and share-safe. It contains no authentication, data storage, real prospect details, private contact information, fabricated buyer activity, AI automation, or claim that it is a secure workspace. Its purpose is to prove that the partner values this shared visibility before the company invests in saved signals, decisions, or meetings.

## Separate deployment

The `founder-desk/` directory is a standalone static Cloudflare Pages application. It should receive a separate Pages project and public address. The current client-facing sales demo remains on its own Cloudflare project and is not refactored as part of V0.
