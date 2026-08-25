# Significant Improvement Backlog

## Status update — superseded product model

> **Important:** The dashboard-first P0 recommendations below were completed as an exploratory prototype and then superseded by the documented product-model review. The active build order is now governed by [`../product/RECOMMENDED_PRODUCT_ARCHITECTURE.md`](../product/RECOMMENDED_PRODUCT_ARCHITECTURE.md) and [`../product/REORDER_REMINDER_WORKFLOW_SPEC.md`](../product/REORDER_REMINDER_WORKFLOW_SPEC.md): Workflow Center → controlled communication workflow → Replies & Exceptions → Audit & Policy.

## The main finding

The strategy, source library, AI interpretation layer, repository, and continuity workflow are now unusually well prepared. The **largest remaining gap is product reality**: the current application is a polished strategy fieldbook, not yet the interactive distributor sales-demo product your partner will run in a client pitch.

> **Recommendation:** Do not spend the next build session improving documentation or adding minor website polish. Build the first real sales-demo screen and its scenario data.

## Priority order

| Priority | Improvement | Why it is significant | Success condition | When to do it |
| --- | --- | --- | --- | --- |
| **P0** | Build the actual sales-demo application shell | The current app explains the idea but does not yet let a seller demonstrate the product workflow. | The partner opens a believable distributor operations dashboard and can enter one account story in under one minute. | Next build task. |
| **P0** | Define a reusable fictional demo dataset and scenario contract | A premium demo needs coherent accounts, orders, products, reps, risks, messages, and audit events—not random placeholders. | Every screen tells the same believable story for a fictional distributor; a reset returns the scenario to its starting state. | Before or alongside the first product screen. |
| **P0** | Create a seller-operated pitch mode | The demo must be easy to run live, not merely impressive when explored casually. | The partner can follow a ten-minute click path with a start point, clear transitions, and a safe reset/recovery action. | Immediately after the dashboard and account story work. |
| **P1** | Add the account-detail and controlled-outreach flow | This is the product’s proof moment: why an account needs attention, what would be sent, and who owns the exception. | A seller can show risk reason → approved outreach → audit record → rep handoff in one continuous flow. | First full demo milestone. |
| **P1** | Add an implementation/readiness boundary screen | A premium demo must clearly distinguish “what you are seeing” from “what gets configured after the sale.” | A prospect sees a concise implementation view covering data connection, users, rules, channels, controls, and rollout. | Before presenting to serious buyers. |
| **P1** | Create a sales-partner demo runbook | A great product can still underperform if the seller does not have a disciplined story, recovery path, and answers to likely objections. | One short script tells the partner what to open, say, click, and ask at each moment in the pitch. | Before the first live pitch. |
| **P2** | Add build verification and release discipline | Future AI implementation sessions need an objective way to show that the demo is stable before a client meeting. | One command runs type-check and production build; each pitch-ready version gets a named GitHub release or tag. | After the first demo flow is working. |
| **P2** | Add an implementation-configurator concept | Buyers will eventually ask, “How does this become ours?” | A configuration view demonstrates that account fields, message templates, cadence, ownership, and permissions are client-specific—not hard-coded. | After the core seller flow is credible. |
| **P3** | Add multi-client branding and role views | Useful for mature selling, but not required to prove the core value. | The demo can switch among realistic distributor identities and manager/rep views without breaking the core story. | After the first pilot conversation. |

## What not to build yet

| Do not build now | Why it would slow the project |
| --- | --- |
| A generic AI chat assistant | It weakens the operational product story and does not prove the reorder workflow. |
| Real SMS/email delivery | It adds compliance, consent, and operational risk before the demo story is proven. |
| A full CRM replacement | It creates an oversized build, conflicts with the narrow wedge strategy, and is not needed for the pitch. |
| The financial-model application | It is a separate product track with methodology review still required. |
| Invented ROI, revenue, or compliance claims | A polished demo must remain credible; unsupported numbers damage trust. |

## Recommended first build task

### Sales-demo dashboard plus scenario data

**Goal:** Replace the current “strategy report as product” starting point with a dedicated demo application entry screen for a fictional distributor.

The screen should show a premium manager overview, a prioritized reorder-risk queue, three to five clear account signals, named rep ownership, and a one-click route into the strongest account story. The page must feel operational, not analytical: it should answer “what needs my attention today?” rather than “what is our strategy?”

**Success condition:** A sales partner can open the app and say, “This is your daily account coverage command center. Here are the accounts that need attention, why they need it, and who owns the next move,” then open a compelling account in under one minute.

## Suggested demo-data contract

| Entity | Minimum data the scenario needs | Purpose in the pitch |
| --- | --- | --- |
| Distributor | Name, region, active accounts, revenue band label, team members. | Makes the top-level dashboard believable. |
| Retail account | Store name, city, account segment, preferred channel, assigned rep, risk state. | Gives the product a customer story. |
| Product | Brand, category, package, reorder cadence, stock/allocation state. | Explains what the account has or has not ordered. |
| Reorder signal | Last order date, expected cadence, risk reason, confidence/status. | Explains why the system recommends action. |
| Outreach | Approved template, channel, eligibility state, preview, scheduled/sent state. | Demonstrates controlled communication. |
| Audit event | Timestamp, actor, action, status, linked account. | Demonstrates accountability and traceability. |
| Escalation | Reason, assigned rep, priority, next action. | Demonstrates that a human relationship remains in control. |

## Decision rule

Start the actual demo build when the project lead and sales partner agree on one fictional distributor persona and one primary account story. Do not wait for every client detail; the demo needs one coherent, high-quality story—not every possible workflow.
