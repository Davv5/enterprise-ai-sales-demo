# Source of Truth — Enterprise AI Sales Demo

## What we are building

We are building a **premium live sales-demo version** of an account-communication product for wine and spirits distributors. A sales partner should be able to open the system in a client meeting and demonstrate exactly how a distributor would identify reorder risk, communicate through an approved workflow, preserve a record of that activity, and return complex conversations to the assigned sales rep.

**Canonical code repository:** `https://github.com/Davv5/enterprise-ai-sales-demo.git` on branch `main`. Read [`../operations/GITHUB_WORKFLOW.md`](../operations/GITHUB_WORKFLOW.md) before starting an implementation session in another environment.

The demo should look and behave like the product a client will buy. It uses fictional or preloaded data. After a sale, the same experience would be configured with the client’s users, data, business rules, approved communication channel, and controls.

## The buyer problem

Distributor sales representatives manage many retail accounts and can miss routine moments to follow up. The product’s purpose is to increase meaningful account coverage without pretending to replace the rep or autonomously resolve relationship-sensitive issues.

## The first story the demo must tell

> A manager sees several accounts at reorder risk. They open one account, see a product-level order pattern and a clear reason for the alert, preview an approved outreach, trigger the controlled demo action, then open the audit timeline. A non-routine reply is visibly assigned to the human rep.

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
| Premium live product demo | Not yet built. |
| Real client integration, consent management, delivery channel, and production controls | Not yet built. |

## Current Build Task

**Task name:** Sales-demo blueprint and first dashboard.

**Outcome:** A product landing/dashboard screen that lets the partner begin a live client pitch with a believable distributor overview, a prioritized reorder-risk queue, and clear evidence that every recommendation leads to an accountable action.

**What success looks like:** A prospect immediately understands what needs attention, why it needs attention, and which rep owns the next step. The partner can transition from the dashboard to a specific account in under one minute.

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
3. Which demo channel should appear first: email, SMS, or an internal rep approval queue?
4. What three buyer pain points should the partner lead with in a ten-minute pitch?
