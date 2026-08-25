# AI Interpretation Memo

## Why this document exists

The original documents preserve the project’s research, ideas, and evidence. This memo states the **current interpretation** of those materials so an AI, developer, or project lead does not accidentally combine separate products, treat assumptions as facts, or build beyond the agreed scope.

> **Rule of use:** Treat the original documents as evidence. Treat this memo, `../product/PRODUCT_BRIEF.md`, `../operations/DECISION_LOG.md`, and `../operations/TASKS.md` as the current execution interpretation. When they differ, pause and record the conflict; do not silently choose the broader or riskier interpretation.

## The five labels every AI must distinguish

| Label | Meaning | How an AI should behave |
| --- | --- | --- |
| **Current decision** | A choice that has been made for the present project. | Follow it unless the project lead explicitly changes it. |
| **Working assumption** | A useful starting point that has not been validated. | Label it; do not present it as fact or a client promise. |
| **Constraint** | A boundary that protects accuracy, trust, compliance, or scope. | Never bypass it for a more impressive demo. |
| **Later-scope item** | A valid idea that is not part of the active build. | Do not implement it unless it becomes the Current Build Task. |
| **Open question** | A missing decision or evidence gap. | Surface it rather than inventing an answer. |

## Executive interpretation

The active effort is a **premium live sales-demo** for a distributor account-communication product. It is designed to let a sales partner show a realistic operating experience in a client meeting. The product story begins with a reorder-risk workflow: identify an account, explain the signal, preview approved outreach, show an audit trail, and route non-routine replies to a human sales rep.

The demo should feel like the product the buyer will receive, but it uses fictional/preloaded data and must not imply real client integrations, live message sending, compliance approval, or a deployed enterprise implementation. Production integration comes only after a client agrees to proceed and the client’s data, permissions, delivery channel, and required reviews have been addressed.

## Source-by-source interpretation

| Source | What it contributes | Current interpretation | Classification |
| --- | --- | --- | --- |
| [Sandbox Build Brief](originals/Sandbox_Build_Brief.docx) | Three communication workflows, data fields, compliance log, rep escalation, mock-data demo boundary. | **Track A** is the lead product. Start with reorder risk; show audit and human handoff. Allocation and price/promo communications are later workflows. | Current decision + constraints |
| [Strategic Analysis and Roadmap](originals/Strategic_Analysis_and_Roadmap.docx) | Competitive context, no-replacement framing, research-first discipline, compliance risk, mid-market wedge. | Position the product as extending rep capacity. Build a narrow proof workflow; do not market an unproven “AI CRM replacement.” | Current decision + constraints |
| [Financial Model Build Brief](originals/Financial_Model_Build_Brief.docx) | A future beverage new-SKU feasibility model and its review requirements. | **Track B** is a separate future product. Do not merge its screens, numbers, tax assumptions, or buyer story into the active communication demo. | Later-scope item + constraints |
| [Master Research Document](originals/Master_Research_Document.docx) | Agency/pilot/positioning lessons, discovery principles, proof-of-work and retention thinking. | Use it as commercial-process input: narrow the offer, show a visible outcome, collect feedback, and earn expansion through evidence. It is not a product-specification document. | Strategy input |
| Enterprise AI architecture video analysis | Data foundation, reusable logic, customization, controlled execution, KPI visibility, human-in-the-loop. | Use the architecture as a build discipline: structured inputs first, transparent rules second, visible human ownership before automation. | Current design principle |

## Current decisions an AI must preserve

| ID | Current decision | Evidence basis | Build implication |
| --- | --- | --- | --- |
| **D-01** | Lead with the distributor communication product. | Sandbox Brief; Strategic Analysis. | Build the sales demo around distributor operations, not the financial model. |
| **D-02** | Begin with reorder risk. | Sandbox Brief priority order. | Make this the first **controlled communication workflow**: trigger, eligibility, approved message, automation mode, exception, human handoff, and audit trace. |
| **D-03** | Extend the rep; do not replace the rep. | Strategic Analysis. | Every relevant screen must show a responsible human owner and exception path. |
| **D-04** | The demo is a realistic product experience, not a slide deck. | Project-lead decision. | Build operational screens and controlled interactions; use fictional data. |
| **D-05** | Track B financial modeling remains separate. | Financial Model Brief; project roadmap. | Do not add financial-model modules to the active sales demo. |
| **D-06** | Compliance, permissioning, eligibility, and auditability are product requirements. | Sandbox Brief; Strategic Analysis; public guidance.[1] [2] | Show controlled states and avoid claims that a workflow is live or legally approved. |
| **D-07** | GitHub `main` is the shared code source of truth. | Project operating decision. | Start from and return tested work to `main`. |

## Working assumptions — useful but not proven

| Assumption | How to use it safely |
| --- | --- |
| Mid-market distributors are an attractive initial customer segment. | Use this to shape a fictional demo persona; validate through real buyer interviews. |
| A direct automated reminder may be useful to retail accounts. | Show it as a controlled product capability; verify channel preference and relationship acceptance before a pilot. |
| The product can support a premium implementation sale. | Demonstrate premium value through clarity, control, and workflow realism; do not invent pricing or ROI. |
| The financial-model product can become a separate paid offering. | Preserve it as a documented option until specialist methodology review is complete. |

## Non-negotiable constraints

1. Use fictional/preloaded data unless a client explicitly authorizes an approved test setup.
2. Do not claim a live ERP/CRM integration, real message delivery, production permissions, legal compliance approval, or real client ROI when those items are not implemented.
3. Do not add price/promotion automation as a casual feature. It requires approved audience/terms logic and state-specific review.
4. Do not generate or present a financial conclusion from unreviewed tax, accounting, classification, or channel-margin assumptions.
5. Do not expand the active product into a generic “AI CRM.” Build the next visible, testable capability only.

## Open questions that require human input

| Question | Owner | Why it matters |
| --- | --- | --- |
| Which distributor profile should the demo represent? | Sales partner + project lead | It determines language, account volume, products, and pitch relevance. |
| Which outreach channel is shown first: email, SMS, or rep-approval queue? | Sales partner + prospective users | It affects trust, control, and the pitch narrative. |
| Which workflow-specific buyer pains create the strongest urgency? | Sales partner | It determines the active Workflow Center priorities and the first client-specific pilot. |
| Who will review a future live workflow? | Project lead + client | It sets the boundary between a sales demo and production implementation. |

## Conflict-resolution rules

| If a document appears to say | Interpret it this way |
| --- | --- |
| “Build a quick no-code sandbox” | The sales demo can be a polished application; the later production stack is still a separate implementation decision. |
| “Automate outreach” | Show controlled workflow capability, not unsupervised relationship management. |
| “Offer a financial model too” | Keep it as a separate product track, not an active module in the distributor demo. |
| “AI can do more” | More capability is not permission to make unsupported claims or ignore controls. |

## Interpretation-layer verification

This layer is implemented only when all of the following are true:

- The original documents are preserved in `originals/`.
- This memo maps each original source to its current project meaning.
- The current product brief names the active build task.
- The decision log records changes in direction.
- The task list records what is complete and what remains.
- `AI_CONTEXT.md` and the implementation prompt require this memo before work begins.

## References

[1] [Federal Communications Commission, “Stop Unwanted Robocalls and Texts.”](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts)  
[2] [New Jersey Division of Alcoholic Beverage Control, “Current Price List (CPL).”](https://www.njoag.gov/about/divisions-and-offices/division-of-alcoholic-beverage-control-home/licensing-bureau-applications-and-information/current-price-list-cpl/)
