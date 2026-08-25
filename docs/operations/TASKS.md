# Project Lead Workbook — Delivery Checklist

- [x] Translate the two product tracks into plain-English purpose statements.
- [x] Create partner-facing talking points that explain the build order and core decisions.
- [x] Define the user’s project-lead responsibilities versus the partner’s market-facing responsibilities.
- [x] Add a meeting agenda, question bank, and decision log template.
- [x] Add a practical “what I am building next” checklist without technical jargon.
- [x] Deliver the finished workbook with concise instructions for using it in conversations.

# Premium Demo and Commercial Framing — Delivery Checklist

- [ ] Define the distinction between a premium demonstration, a paid pilot, and a full implementation.
- [ ] Research publicly available competitor positioning and implementation signals in beverage-alcohol and wholesale workflow software.
- [ ] Translate buyer outcomes and delivery scope into tiered pricing hypotheses.
- [ ] Specify what the premium demo must visibly prove without claiming unbuilt production integrations.
- [ ] Deliver a partner-ready commercial framing brief with recommended next decisions.

# Manus and Claude Continuity — Delivery Checklist

- [x] Define what Manus owns and what Claude reviews in the project workflow.
- [x] Create a concise project handoff guide and reusable Claude prompts.
- [x] Assemble a local archive of the project source, working documents, and uploaded source materials.
- [x] Deliver the workflow guide and the downloadable archive.

# Tool-Agnostic Local Handoff — Delivery Checklist

- [x] Write the one-page implementation workflow for Fable/Claude and review sessions.
- [x] Create a single source-of-truth brief containing product context, current scope, and build priorities.
- [x] Create reusable prompts for implementation, bug-fixing, and handoff review.
- [x] Package the project, documentation, and original source files in a portable local archive.

# GitHub Source-of-Truth Setup — Delivery Checklist

- [x] Inspect the current GitHub connection and available repository ownership path.
- [x] Confirm the project source is ready for export without local build artifacts.
- [x] Connect or create the project repository under the user’s GitHub account.
- [x] Add the plain-English GitHub routine to the local workflow documentation.

# AI-Friendly Repository Organization — Delivery Checklist

- [x] Audit the current file layout and identify documents that should be grouped.
- [x] Create a concise root guide and an AI-first entry-point file.
- [x] Move project strategy, workflow, and record documents into intuitive folders.
- [x] Verify the moved documents are referenced correctly and publish the clean structure.

# Original Reference Library — Delivery Checklist

- [x] Add the four original partner-provided source documents to the repository reference library.
- [x] Add the Enterprise AI Strategy & Build Plan as a standalone reference document.
- [x] Update the documentation index and AI context with the source-library location.
- [x] Verify and publish the expanded reference library.

# AI Interpretation Layer — Delivery Checklist

- [x] Define which evidence, decisions, assumptions, constraints, and open questions every AI must distinguish.
- [x] Create an AI Interpretation Memo linking each original source to its current project meaning.
- [x] Add a source-to-decision map and a verification checklist for future work sessions.
- [x] Require the AI entry point and implementation prompt to read the interpretation memo.
- [x] Verify and publish the interpretation layer.

# Significant Improvement Audit — Delivery Checklist

- [x] Assess product-demo readiness, sales workflow, AI implementation reliability, and project continuity.
- [x] Separate essential improvements from later enhancements.
- [x] Define the recommended first improvement and its success condition.
- [x] Deliver the prioritized improvement backlog.

# Premium Sales Demo — Milestone 1 Checklist

- [x] Define the fictional distributor, account portfolio, products, reps, and reorder-risk story.
- [x] Write the seller’s ten-minute click path from dashboard to rep handoff.
- [x] Add the reusable demo scenario data and product vocabulary to the source of truth.
- [x] Design and build the dashboard entry experience.
- [x] Build the account-detail, controlled-outreach, audit, and rep-handoff flow.
- [x] Test the seller path and publish the first demo-ready version.

# Premium Sales Demo — Milestone 2 Checklist

- [x] Define the second account workflow and its distinct business purpose.
- [x] Define the client-configuration concepts a serious buyer needs to see.
- [x] Build the second account story and direct pitch entry point.
- [x] Build the client configuration experience and implementation narrative.
- [x] Test both flows and publish the next demo milestone.

# Core Product-Model Review — Delivery Checklist

- [x] Re-extract the intended end-user workflow from the original briefs.
- [x] Compare the intended product model with the current dashboard-led prototype.
- [x] Identify which parts of the existing demo are core, secondary, or misdirected.
- [x] Specify the recommended user roles, first-use moment, and core screen architecture.
- [x] Present the product-model verdict before further redesign work.

# Communication Operations Hub — Reset Checklist

- [x] Preserve the current visual system, audit components, account context, and human-handoff elements as reusable assets.
- [x] Retire the dashboard-led hierarchy from the active product specification.
- [x] Specify the first controlled workflow: event, audience, eligibility, message, automation mode, reply, escalation, and audit event.
- [x] Rebuild the home experience as a Workflow Center rather than a generic command dashboard.
- [x] Test the full event-to-escalation path against the original Sandbox Build Brief.

# Demo Integrity Slice — Active Checklist

Source: `FABLE_FIRST_REVIEW.md` (2026-08-25). Every item below was reproduced against `main` @ `1c6486c`; each is independently testable.

- [ ] Model a real drafted state for the Reorder workflow so "Record draft for Renee" records a draft event, not a simulated send, and the audit trail matches the clicks exactly.
- [ ] Close the promo-gate URL loophole: no reachable state may show "Policy-gated distribution simulated" without a recorded gate event.
- [ ] Correct state-pill truthfulness: style the drafted pill, show "Needs assignment" until an exception is assigned, and use policy language for the promo post-gate state.
- [ ] Fix the automation-mode card grid so mode descriptions no longer wrap one word per line in the 18px icon column.
- [ ] Replace the stale browser-tab identity in `client/index.html`: Harborline title, honest description, working favicon (current one 404s), in dev and production build.
- [ ] Load Manrope and IBM Plex Mono so the documented typography system actually renders.
- [ ] Restore navigation, Reset demo, and a persistent sandbox disclosure below 1024px; make Accounts reachable on mobile.
- [ ] Reword the "LIVE DECISION RECORD" stamp to avoid the word "live"; decide (with the project lead) whether dead chrome (search, bell, status filter) is removed or made honest.
- [ ] Re-verify all runbook recovery URLs, typecheck, and production build; record a corrective decision-log entry for the mobile-verification claim.
- [ ] Project-lead decision requested: keep or remove the Manus runtime/analytics injection from client-facing pitch builds (privacy and payload trade-off documented in the review).

# Three-Workflow Sales Demo — Completed Checklist

- [x] Define the Allocation Alert and Policy-Gated Price/Promotion workflow scenarios.
- [x] Design and build each scenario as a full controlled communication flow.
- [x] Extend the exception and audit experiences across workflow types.
- [x] Verify desktop, mobile, and direct pitch-entry states.
- [x] Update seller guidance and synchronize the expanded suite.
