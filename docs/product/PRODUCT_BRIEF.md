# Source of Truth — AI Operations Lead Sales Demo

## What we are building

We are building a **premium live sales-demo** for a distributor AI Operations Lead. A seller must be able to put a distributor executive in the seat of a sales manager or operations lead and demonstrate how the product organizes the operating day, prepares controlled account work, preserves human ownership, routes sensitive exceptions, and keeps operating memory.

**Canonical code repository:** `https://github.com/Davv5/enterprise-ai-sales-demo.git` on branch `main`.

The demo should look and behave like the product a client will buy. It uses fictional/preloaded data. It is not connected to a real distributor, live model, delivery channel, price list, policy program, or customer database.

## The product promise

> **The AI Operations Lead runs the process so your people can own the relationships and decisions that matter.**

The product observes approved operating signals, organizes account moments, prepares bounded work, explains why it surfaced, routes non-routine customer questions, and preserves an evidence record. It does not replace a CRM, ERP, ordering portal, distributor rep, or commercial decision-maker.

## The buyer problem

Distributor teams manage many retail accounts across signals, inboxes, spreadsheets, orders, and human memory. Routine moments can be missed; responsible people may not know what needs them; and sensitive customer questions can lose their context between systems.

The product’s purpose is to create clearer account coverage and operating accountability without pretending that AI should decide pricing, allocation, terms, policy interpretation, or relationship-sensitive responses.

## The first story the demo must tell

1. A fictional Sales Manager / Operations Lead opens the **Daily Operating Brief**.
2. The AI Operations Lead has organized the simulated day into prepared work, human decisions, policy review, and customer exceptions.
3. The manager opens a Reorder Reminder, Allocation Alert, or Policy-Gated Notice to see the signal, permitted action, named owner, and decision boundary.
4. A qualified person makes or records the next action; a non-routine reply becomes a named human handoff.
5. Operating Memory shows the connected signal, control, person, simulated action, exception, and next decision.

## Product principles

| Principle | Meaning in the demo |
| --- | --- |
| **AI leads the process, humans own judgment** | AI organizes, prepares, explains, routes, and remembers. People decide price, terms, quantity, allocation, policy interpretation, exceptions, and sensitive communication. |
| **Evidence before automation** | Every visible action has a reason, timestamp, owner, control posture, and next state. |
| **Operating day before workflow detail** | The first screen makes team coverage, decisions, gates, and exceptions intelligible before the buyer enters a specific workflow. |
| **Rep extension, not replacement** | A rep or qualified owner remains accountable for the account relationship and non-routine work. |
| **Premium, not gimmicky** | The product feels like an operating environment a distributor could trust—not a generic AI chat tool or metrics dashboard. |
| **Demo data is not production data** | Fictional data and simulated actions are visibly disclosed. Real integrations, delivery, and permissions are later implementation work. |

## Active demo architecture

| Surface | Role in the demo |
| --- | --- |
| **Daily Operating Brief** | Primary opening. Displays the fictional operating day, posture, priority account moments, human decision queue, and operating-memory preview. |
| **Workflow Library** | Secondary browse surface for the three governed workflow types. |
| **Reorder Reminder** | Shows cadence signal, bounded availability check, rep approval/draft, pricing exception, and Renee handoff. |
| **New Allocation Alert** | Shows qualified audience, interest-check draft, Marcus approval, and quantity/price boundary. |
| **Policy-Gated Notice** | Shows locked audience, terms reference, recorded review gate, and Alicia handoff. |
| **Replies & Exceptions** | Makes the point where automation stops visible and owned. |
| **Accounts** | Provides supporting relationship or audience context—not a replacement CRM. |
| **Operating Memory / Audit** | Preserves what surfaced, why, what was permitted, who acted, and what remains owned. |

## What is already complete

| Item | Current status |
| --- | --- |
| Strategy, original-source interpretation, project-lead materials, and GitHub continuity | Complete. |
| Premium three-workflow fictional demo and integrity pass | Complete. |
| AI Operations Lead Daily Operating Brief demo slice | Complete; fictional and simulated only. |
| Real client workspace, data ingestion, database, live LLM call, authentication, delivery channel, consent/policy program, and production integrations | Not built. |

## Current build direction

The active demo direction is specified in [`AI_OPERATIONS_LEAD_DAILY_BRIEF_SPEC.md`](AI_OPERATIONS_LEAD_DAILY_BRIEF_SPEC.md). Future implementation must retain the Daily Operating Brief as the primary home and treat individual workflows as its drill-down evidence.

The current name is provisional. Do not rename product code or generate a new identity until a replacement naming direction is selected and appropriately screened.

## Decision owners

| Decision | Primary owner | Input required |
| --- | --- | --- |
| Which buyer story creates the strongest urgency | Partner | Distributor and retailer conversations. |
| Product story, name, visual direction, and demo flow | You | Partner feedback and product review. |
| Implementation quality and technical sequence | Manus | Product specifications and verified test criteria. |
| Whether a live workflow can send regulated communications | Qualified reviewer and client | State, channel, consent, and operating context. |

## Current open questions

1. What replacement brand direction best carries the AI Operations Lead promise?
2. What type of distributor will the demo represent most closely: regional, multi-state, or an ideal fictional client?
3. Which workflow should become the first real customer implementation: reorder, allocation, or a policy-sensitive notice?
4. Which approved system will eventually provide the first real source signal?
5. Which narrow, reviewable AI assistance would be useful only after the controlled product core works?
