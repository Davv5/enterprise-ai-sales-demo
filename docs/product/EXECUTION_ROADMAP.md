# Project leadership roadmap — Enterprise AI Strategy & Build Plan

## Executive recommendation

> **Run two tracks, but one lead motion.** Use the distributor communication sandbox as the initial proof-of-capability and market-learning vehicle. Keep the new-product financial model on a parallel **methodology-validation track** until a qualified reviewer signs off on the mechanics.

The products share a buyer-adjacent universe—beverage-alcohol operators—but they solve different jobs and carry different validation burdens. The communication sandbox is a controlled workflow product. The financial model is a decision-support product whose credibility depends on tax, accounting, and channel-economics methodology. Treating them as one combined build would dilute the discovery process and introduce unnecessary risk.

| Decision | Recommendation | Why it matters now |
| --- | --- | --- |
| First product to demonstrate | **Reorder / restock reminder** using mock data and a consented internal recipient only | It has the clearest trigger, lowest message-complexity risk, and easiest audit trail. |
| Commercial framing | **Extend rep reach; do not replace reps** | Makes warm introductions safer and aligns incentives with the people closest to the customer. |
| Technical approach | Begin with a low-code automation platform and a structured spreadsheet/Airtable-style dataset | The early proof point is workflow logic, evidence, and controls—not custom code. |
| Price/promo capability | Design it as a later gated workflow | It must attach to an approved eligibility and price/terms record and pass state-specific review. |
| Financial model format | Spreadsheet-first, formula-driven, reviewer-approved | This fits buyer expectations and makes sources, assumptions, and sensitivities inspectable. |

## Portfolio structure

### Track A — Distributor account-communication sandbox

The first product is a **controlled communications layer** for a mid-market wine and spirits distributor. It listens for an event in an account/order dataset, applies a deterministic eligibility rule, produces an approved message through the recipient’s selected channel, logs exactly what happened, and routes non-routine replies to a named rep.

The first workflow should be: “if an opted-in mock account has not reordered a selected product within the approved threshold, prepare and deliver a reminder using the approved template; if the reply is not a simple confirmation, create a rep task.” This demonstrates the core value proposition without forcing the team to resolve product allocation logic, offer eligibility, or tax/promotion treatment before there is evidence of demand.

### Track B — New-product financial-model foundation

The second product is a reusable **new-SKU feasibility model** for wine, spirits, and RTD brands. It should model product classification, per-unit economics, regulatory/timeline gates, channel margin cascade, cash-to-first-sale, and a clearly labeled breakeven/scenario view. It should not imply that a generic AI output has determined legal classification or tax treatment.

The first deliverable is not a client-ready model. It is a **model design review pack**: input dictionary, formula map, required decisions, source hierarchy, scenario architecture, and two to three test cases. Build the spreadsheet only once the finance/accounting reviewer approves the logic.

## Target operating architecture

| Layer | Distributor communication sandbox | New-product financial model | Minimum control |
| --- | --- | --- | --- |
| Data foundation | Account, contact, consent, channel preference, product, order-history, rep-owner, eligibility records | Product spec, manufacturing assumptions, state/channel inputs, cost assumptions, regulatory status, source metadata | Stable IDs, source/date field, version owner, no untracked hardcodes. |
| Reusable logic | Trigger thresholds, segment rules, templates, escalation rules, audit-event schema | Volume/cost buildup, launch-gate sequence, channel margin cascade, scenario driver framework | Logic is deterministic, visible, testable, and versioned. |
| Client-specific logic | Account-specific cadence, approved messaging tone, real sales/CRM mappings | Product category, ABV/classification flags, actual co-packer/packaging/channel terms | Client changes are explicit configuration, not hidden prompt edits. |
| Execution | Draft/send through approved SMS/email channel; task to human rep | Spreadsheet outputs, scenario comparison, decision memo export | Human approval where commercial, legal, or exception risk is present. |
| Observability | Send log, consent status, eligible audience, delivery/reply/handoff events, kill switch | Assumption register, formula checks, scenario labels, source/change log | Weekly control review and a clear accountable owner. |

## Eight-week sequence

### Weeks 1–2: Discovery, evidence, and constraints

Your first leadership task is to run a genuine discovery sprint, not a sales-validation exercise. Interview **5–8 retail operators** and **3–5 distributor-side reps/operators** using the supplied question set. Ask what messages are actually received, preferred channels, contact-frequency boundaries, account relationship sensitivities, and exact situations where automation would be unwelcome. Capture the answers in a structured research log—not anecdotal notes.

At the same time, identify the state for any future live pilot, retain or consult appropriate alcohol-beverage and messaging-compliance counsel, and define the permissible sandbox boundary: mock data, consented internal recipients only, no improvised promotions, no real customer claims.

**Exit gate:** A one-page problem statement has been signed off by the project lead, including a defined persona, a verified workflow gap, a do-not-automate list, and the criteria for a pilot sponsor.

### Weeks 3–4: Build the controlled sandbox

Implement a low-code proof-of-concept with an account/contact table, order-trigger records, an approved template library, a permissioned message-send action, and a write-only audit event log. The primary screen/demo must show four states: eligible event, drafted/sent message, reply/escalation routing, and a timestamped audit record. Use mock data and do not introduce any AI decision-making that is not inspectable.

Create a short live demonstration flow and screen-record it. The demonstration should make the human handoff visible: a reply or exception changes state and sends the named rep a task. The point is not that the system “talks like a person”; the point is that no account falls through the cracks.

**Exit gate:** A reviewer can trace each message from trigger, to eligibility, to approved copy, to recipient, to outcome, with no unlogged manual step.

### Weeks 5–6: Test the wedge and prepare a pilot offer

Present the demo to warm contacts strictly as research and capability feedback. Record objections and compare them with the competitor and compliance findings. If the response validates the workflow, package a tightly bounded offer: a communication-gap audit plus a single workflow setup and measurement plan. Do not pitch an “AI CRM replacement.”

In parallel, convene the finance/model review. Give the reviewer the financial-model build brief and ask for specific sign-off decisions: product classification logic, tax treatment, COGS, working capital, return metrics, three-tier modeling, and scenario variation. Convert the answers into a formula map before any client-facing output is produced.

**Exit gate:** One candidate distributor or brand has provided a clear problem statement and conditional pilot interest, and one qualified reviewer has either approved or redlined the model methodology.

### Weeks 7–8: Pilot readiness and proof package

If a pilot is approved, configure it around a small, opt-in/approved account subset and only the one validated workflow. Establish a pre-pilot baseline and a weekly review ritual. The deliverable is a proof package: workflow map, consent and audit design, message artifact, measured outcomes, issues/exception log, and a next-phase recommendation.

For the financial-model track, build a reviewer-approved spreadsheet skeleton with source links, units, and editable assumptions. Test it using the Altaneve-like hypothetical case as a stress test—not as a commercial conclusion—then document all unresolved assumptions.

**Exit gate:** Proceed only when baseline/result data and compliance approvals support a longer rollout; otherwise treat the result as a structured learning case and revise the wedge.

## Your leadership cadence

| Cadence | You lead | Builder owns | Reviewer / sponsor owns |
| --- | --- | --- | --- |
| Weekly 30-minute operating review | Scope choices, interview insights, blockers, sponsor communication | Workflow status, data mapping, test evidence | Approval questions and decision turnaround |
| Demo checkpoint | Narrative, outcome framing, what to show/not show | Sandbox reliability and audit trail | Buyer realism and compliance appropriateness |
| Methodology review | Gather open questions and preserve decision log | Translate approved logic into model/workflow configuration | Tax, finance, legal, and channel-economics validation |
| End-of-week decision memo | State evidence, risk, recommendation, next gate | Technical limitations and options | Accept/decline scope change |

## What to measure from day one

Do not manufacture ROI claims. Instrument the pilot so that it can later show a real before/after view. Record: eligible accounts, consented accounts, messages attempted, messages delivered, replies, valid reorder confirmations, exceptions/handoffs, rep response time, and repeat-order timing. Keep a separate qualitative log for retailer/reps’ perceived relationship impact and nuisance/spam concerns.

For the financial model, track assumption completeness, source quality, reviewer sign-offs, scenario inputs, formula-check status, and the decision sensitivity of each major variable. A user should be able to see which assumption moved the breakeven outcome; otherwise the model is presentation, not decision support.

## Next three actions for you

1. **Select the sandbox boundary:** confirm mock-only vs. consented test recipient, target geography, and whether the first demo stays email-only or includes an explicitly opted-in SMS recipient.
2. **Schedule the discovery sprint:** secure interviews with five retailers and three distributor-side people; ask for permission to use anonymized operational observations in the case study.
3. **Name reviewers:** identify one beverage-alcohol legal/compliance contact and one finance/accounting reviewer who can formally approve the respective gates before customer-facing use.

## Decision rule

Continue investing only when the next gate is passed by evidence. If retailers reject direct automation, pivot the sandbox to a rep-copilot that drafts and queues communication instead of sending it. If financial-model reviewers disagree on core tax or margin treatment, pause external selling and narrow the model to a transparent cost/timeline planning worksheet until the methodology is resolved.
