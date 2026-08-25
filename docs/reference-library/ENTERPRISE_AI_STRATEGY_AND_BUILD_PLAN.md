# Enterprise AI Strategy & Build Plan

## Purpose

This is the integrated project plan created from the original Sandbox Build Brief, Strategic Analysis and Roadmap, Financial Model Build Brief, Master Research Document, and Enterprise AI architecture material. It converts research and product ideas into a practical sequence for building, demonstrating, validating, and eventually implementing a premium distributor-facing system.

> **Core decision:** Build the proof before the platform. Lead with a premium live sales-demo for one controlled distributor communication workflow; treat the new-product financial model as a separate product track that requires specialist methodology review.

## What the business is building

The primary product is a distributor account-communication system for the wine and spirits industry. It helps a distributor identify routine account moments that require attention—starting with reorder risk—prepare controlled outreach, preserve an audit record, and route non-routine communication back to the assigned sales representative.

The product must be positioned as **rep capacity extension**, not sales-rep replacement. The intended outcome is more meaningful account coverage, faster awareness of reorder opportunities, and fewer routine communication gaps while preserving the human relationship where judgment matters.[1] [2]

## The premium sales-demo objective

The first build is not a slide deck or a disconnected design mockup. It is a high-end, interactive version of the product experience that a sales partner can run live during a client meeting.

The core ten-minute story is:

| Moment in the pitch | What the client sees | What it proves |
| --- | --- | --- |
| **1. Open the operations view** | A distributor overview with an actionable reorder-risk queue. | The product understands where attention is needed. |
| **2. Open a specific account** | Order pattern, account context, risk reason, and named rep owner. | The system explains why an action is recommended. |
| **3. Review controlled outreach** | Eligibility, approved message, delivery choice, and a clear next action. | Automation operates through rules and approval, not opaque guessing. |
| **4. Show the evidence** | Communication timeline and audit record. | Every action is traceable. |
| **5. Show human escalation** | A non-routine reply routed to the accountable sales representative. | The product protects the relationship rather than replacing it. |

The demonstration uses fictional or preloaded data. After a sale, the same experience is configured around the client’s real users, records, approved channels, rules, and implementation controls.

## Two product tracks

| Track | Product | First objective | Current status |
| --- | --- | --- | --- |
| **Track A** | Distributor account-communication workflow | Build the premium live demo around a controlled reorder-risk story. | Active lead track. |
| **Track B** | Beverage new-product financial model | Define and validate model methodology before a client-facing spreadsheet is built. | Separate future track. |

These tracks may share a commercial audience, but they should not be merged into one first build. Track A demonstrates operational workflow value. Track B is decision-support work whose credibility depends on correct tax, cost, margin, and scenario methodology.[1] [3]

## Product operating model

| Layer | What must exist | Why it matters |
| --- | --- | --- |
| **Data foundation** | Account, product, order-history, preferred-channel, consent/permission, rep-owner, and eligibility records. | The workflow needs clear, stable inputs before it can be trusted. |
| **Reusable workflow logic** | Trigger rules, templates, audience eligibility, escalation rules, and audit-event schema. | The business logic must be inspectable and repeatable. |
| **Client configuration** | Client-specific cadence, tone, CRM mappings, and business rules. | Each customer should see their own operating reality without hidden logic. |
| **Controlled execution** | A visible action, a durable record, and a human exception path. | The system must remain accountable during client operations. |

## Initial control boundaries

1. The sales demonstration uses fictional or approved test data only.
2. The first workflow is a reorder-risk reminder because it has the clearest trigger and audit story.
3. Price/promotion notices are a later controlled capability. They require approved audience/terms logic and state-specific review before live deployment.
4. Live commercial messaging needs appropriate consent, channel, and legal/compliance review. FCC consumer guidance notes that commercial texts require written consent; New Jersey maintains Current Price List materials for relevant licensees.[4] [5]
5. The financial model does not autonomously decide product classification, tax treatment, accounting treatment, or return methodology. Those are named review gates.

## Execution sequence

### Gate 1 — Discover the real workflow

Interview retailers and distributor-side representatives about actual communication patterns, preferred channels, frequency boundaries, and relationship sensitivities. The goal is to verify the buyer problem, identify a credible pilot story, and document the situations automation should avoid.

**Output:** A concise problem statement, a do-not-automate list, approved sample message tone, and a target buyer profile.

### Gate 2 — Build the controlled demo

Build the interactive sales-demo dashboard, account view, action queue, approved-message preview, audit timeline, and rep escalation state. The demo should be visually polished and operationally believable, but it should not claim active production integrations.

**Output:** A seller-operated ten-minute live demo with fictional data.

### Gate 3 — Validate market response

Show the demo to warm contacts as a controlled discovery and pilot conversation. Measure which story resonates, which workflow creates urgency, whether buyers accept direct automation or prefer rep approval, and what implementation scope is credible.

**Output:** A narrowed pilot offer and a prioritized implementation backlog.

### Gate 4 — Implement for a client

Once a buyer agrees to proceed, connect the product to approved client data, configure permissions and user ownership, establish controlled delivery paths, perform required compliance review, train users, and measure outcomes against a baseline.

**Output:** A client-specific operating system—not merely the sales demo.

## Roles

| Role | Primary responsibility |
| --- | --- |
| **Project / Build Lead** | Convert feedback into requirements, own the demo experience, coordinate implementation, test the product, preserve decisions, and manage the shared project source. |
| **Market / Sales Partner** | Bring customer access, run buyer conversations, shape the commercial story, and collect objections and feedback. |
| **Implementation AI or developer** | Build one clear, testable capability at a time from the current product brief and implementation prompt. |
| **Qualified reviewers** | Review regulated messaging, alcohol trade practices, finance/accounting, tax, and client-specific implementation decisions when the product moves beyond a fictional demo. |

## Repository operating rule

The codebase lives on the `main` branch of `Davv5/enterprise-ai-sales-demo`. The sequence is **decide → brief → build → test → save → review**. Every implementation session starts from the latest `main` and returns its tested changes there. Read `../operations/GITHUB_WORKFLOW.md` and `../operations/WORKFLOW.md` for the exact operating routine.

## References

[1] [Sandbox Build Brief (original).](originals/Sandbox_Build_Brief.docx)  
[2] [Strategic Analysis and Roadmap (original).](originals/Strategic_Analysis_and_Roadmap.docx)  
[3] [Financial Model Build Brief (original).](originals/Financial_Model_Build_Brief.docx)  
[4] [Federal Communications Commission, “Stop Unwanted Robocalls and Texts.”](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts)  
[5] [New Jersey Division of Alcoholic Beverage Control, “Current Price List (CPL).](https://www.njoag.gov/about/divisions-and-offices/division-of-alcoholic-beverage-control-home/licensing-bureau-applications-and-information/current-price-list-cpl/)
