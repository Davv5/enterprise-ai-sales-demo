# Source of Truth — Enterprise AI Sales Demo

## What we are building

We are building a **premium live sales-demo version** of an account-communication product for wine and spirits distributors. A sales partner should be able to open the system in a client meeting and demonstrate exactly how a distributor would identify reorder risk, communicate through an approved workflow, preserve a record of that activity, and return complex conversations to the assigned sales rep.

**Canonical code repository:** `https://github.com/Davv5/enterprise-ai-sales-demo.git` on branch `main`. Before implementation, read [`../reference-library/AI_INTERPRETATION_MEMO.md`](../reference-library/AI_INTERPRETATION_MEMO.md) for source-backed decisions and constraints, then read [`../operations/GITHUB_WORKFLOW.md`](../operations/GITHUB_WORKFLOW.md) for the shared-code routine.

The demo should look and behave like the product a client will buy. It uses fictional or preloaded data. After a sale, the same experience would be configured with the client’s users, data, business rules, approved communication channel, and controls.

## The buyer problem

Distributor sales representatives manage many retail accounts and can miss routine moments to follow up. The product’s purpose is to increase meaningful account coverage without pretending to replace the rep or autonomously resolve relationship-sensitive issues.

## The first story the demo must tell

> A manager opens an active reorder-reminder workflow, sees the rule that created it and the eligible account, checks the named rep and preferred channel, reviews the approved message and automation mode, records a controlled demonstration send, then sees a non-routine reply arrive in the assigned rep’s exception inbox with a complete audit record.

## Product principles

| Principle | Meaning in the demo |
| --- | --- |
| **Evidence before automation** | Every visible action has a reason, timestamp, owner, and next state. |
| **Rep extension, not replacement** | The rep appears as the accountable owner of the account and of exceptions. |
| **Control before scale** | The demo shows eligibility, approval, and audit visibility before it shows a send action. |
| **Premium, not gimmicky** | The product feels like an operations system a distributor could trust, not a generic AI chat interface. |
| **Demo data is not production data** | Fictional data is clearly used for the sales demonstration; real integrations are implementation work after a sale. |

## What is already complete

| Item | Current status |
| --- | --- |
| Strategic synthesis and roadmap | Complete. |
| Project Lead Workbook | Complete. |
| Interactive strategy report | Complete. |
| Dashboard-led sales prototype | Built as a visual and component foundation; retired as the active product hierarchy. |
| Correct communication-workflow product demo | Complete for the first Reorder Reminder vertical slice; fictional and simulated only. |
| Real client integration, consent management, delivery channel, and production controls | Not yet built. |

## Current Build Task

**Task name:** Reorder Reminder workflow and Workflow Center — complete first vertical slice.

**Outcome:** A communication operations workspace that lets a distributor user see an active reorder workflow, its trigger, eligible account, owner, message, automation mode, response exception, and evidence record without relying on an executive dashboard as the product’s primary surface.

**Implementation specification:** Build against [`REORDER_REMINDER_WORKFLOW_SPEC.md`](REORDER_REMINDER_WORKFLOW_SPEC.md). Use [`DEMO_SCENARIO_AND_PITCH_FLOW.md`](DEMO_SCENARIO_AND_PITCH_FLOW.md) for fictional names and business context; the Juniper → Renee path remains the first workflow, but it is now embedded in Workflow Center rather than a dashboard-first journey.

**What success looks like:** A prospect can follow the full governed sequence in under two minutes: trigger → eligible account → approved message and mode → controlled send → reply exception → assigned rep → audit record. This sequence is implemented and verified as a fictional sales-demo state; client integrations and live delivery remain later implementation work.

**Must not change:** The product must not present invented financial results, claim live client integrations, show real customer data, or imply that automated communication replaces the sales representative.

## Decision owners

| Decision | Primary owner | Input required |
| --- | --- | --- |
| Which buyer story creates the strongest urgency | Partner | Distributor and retailer conversations. |
| What the product looks like and how the demo flows | You | Partner feedback and Manus product review. |
| How the software is implemented | Fable / Claude | The current build brief and project source. |
| Whether a live workflow can send regulated communications | Qualified reviewer and client | State, channel, consent, and operating context. |

## Current open questions

1. Which kind of distributor will be represented in the demo: small regional wine and spirits distributor, multi-state distributor, or a specific fictional ideal client?
2. What exact customer communication tone should the demo use: concise operational, relationship-led, or product/allocation-forward?
3. Which automation mode will the first real pilot use: draft-for-rep, rep-approved send, or policy-approved send?
4. Which discovery evidence from retailers and reps is sufficient to move from a demo to a live pilot?
