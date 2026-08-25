# Competitive Landscape & Harborline Product Thesis

**Prepared by:** Manus AI  
**Research date:** August 25, 2026  
**Purpose:** Define where Harborline should fit in a market that already has credible beverage CRM, ERP, distributor-intelligence, and B2B ordering products.

## Executive conclusion

The beverage-alcohol software market is **not missing software**. It already has credible systems for field-sales execution, beverage-specific CRM and ERP, distributor AI and recommendations, market intelligence, and B2B ordering. AccountTouch, Leadbeam, Ohanafy, Proton, Encompass, Overproof, and Provi each cover meaningful parts of the distributor/brand/retailer operating stack.[1] [2] [3] [4] [5] [6] [7]

Harborline should therefore **not** position itself as “an AI CRM for alcohol distributors,” “an ERP replacement,” or “a marketplace.” Those are broad categories with established products and long implementation expectations. The strongest current thesis is narrower:

> **Harborline is the governed communication-operations layer for beverage distributors: it turns a defined account moment into the right controlled communication, keeps a named human responsible for judgment, and leaves a clear evidence record behind.**

That is a promising hypothesis, not a verified market gap. It becomes real only if sales managers, representatives, and retailer buyers confirm that their current tools do not make the workflow sufficiently clear, trusted, and easy to execute.

## What the market already solves

| Product / category | Verified public focus | What this means for Harborline |
| --- | --- | --- |
| **AccountTouch** | Beverage field CRM, route planning, visit/activity logging, account/placement management, depletion visibility, follow-ups, and manager dashboards.[1] | Do not rebuild a basic field CRM or route planner. |
| **Leadbeam** | Cross-industry field-sales companion on top of existing CRM: territory intelligence, route planning, voice/photo logging, rep briefings, follow-up tasks, and leadership visibility.[2] | Do not compete on generic activity capture or “AI writes a follow-up.” |
| **Ohanafy** | Beverage-native CRM and ERP capabilities across accounts, orders, visits, routes, inventory, finance, reporting, integration APIs, and AI-assisted operational work.[3] [4] | Do not pitch Harborline as the system of record or a replacement operating system. |
| **Proton** | Distributor-wide CRM opportunity signals, product information, ecommerce recommendations, and AI-assisted order/quote work.[5] | Do not claim unique ownership of at-risk account detection, cross-sell signals, or order drafting. |
| **Encompass** | Beverage distribution ERP with warehouse, logistics, delivery, reporting, finance, sales, ordering, pricing, promotions, and mobile operations.[6] | Treat existing ERPs as an integration context, not a displaced incumbent. |
| **Overproof** | Alcohol-brand account targeting, market strategy, field activity, depletion data, market intelligence, and enterprise commercial tooling.[7] | Avoid positioning as generic alcohol market intelligence or brand-sales software. |
| **Provi** | B2B alcohol ordering, product search, distributor/rep messaging, order requests, reorder support, storefronts, and click-to-order sell sheets.[8] [9] [10] | Do not build a competing marketplace, catalog search engine, cart, or retailer order portal as the first product. |

## The space between existing categories

The reviewed products broadly solve **record keeping**, **field execution**, **operational systems**, **recommendations**, or **buyer ordering**. Public materials from the reviewed sources do not establish that any one of them is centered on the full, governed account-communication path below. This is not proof that no capability exists; it is the precise workflow Harborline must test in discovery.

```text
Operational event
  → account and audience/eligibility check
  → approved message and automation posture
  → delivery through the client’s approved channel
  → non-routine reply or exception
  → named representative handoff
  → evidence record and supervisor review
```

The key difference is not simply “send more messages.” Provi already makes messaging and ordering easier for buyers and reps, while other products already create tasks, reminders, and sales signals.[2] [5] [8] The proposed Harborline value is a **governed decision-and-execution lane** for proactive account communication: the team can see *why* a message exists, *who* is allowed to approve or own it, *what* terms are excluded, *where* a reply goes, and *what* was recorded.

## What “the Apple of this industry” should mean

“Apple” should not mean copying Apple’s visuals, charging a premium by default, or trying to own every system a distributor uses. In this category, it should mean a product that makes an important workflow feel dramatically more coherent than the status quo.

| Apple-like principle | Harborline implementation |
| --- | --- |
| **One job, exceptionally clear** | Start with one visible workflow: Reorder Reminder. The product should make its trigger, owner, message, approval mode, outcome, and exception obvious in seconds. |
| **Integrated experience, not a fragmented toolkit** | The workflow should not force the user to assemble a signal from one place, approval from another, replies from an inbox, and evidence from a spreadsheet. |
| **Human-centered simplicity** | Show the representative as the accountable relationship owner; do not hide human judgment behind an “autonomous agent” claim. |
| **Trust by design** | Make terms exclusions, audience/eligibility, automation mode, audit record, and escalation state visible—not buried in configuration. |
| **Fits the existing world** | Read from and write back to existing ERP/CRM/order systems when appropriate. Do not require a rip-and-replace sale to prove the first workflow. |
| **Premium restraint** | Build fewer workflows with better control and a more coherent user experience before adding dashboard sprawl, generic chat, or dozens of disconnected automation templates. |

## Recommended Harborline position

**Category:** Beverage distributor communication operations.  
**Buyer-facing promise:** “Run the right retailer communication at the right account moment—without losing rep ownership or the evidence behind the action.”  
**Product boundary:** A workflow layer that can receive approved signals from a client’s source systems and coordinate approved delivery through the client’s existing channel or ordering surface.

This positioning deliberately sits **next to**, rather than directly against, an incumbent system:

| Existing client asset | Harborline’s proposed role |
| --- | --- |
| ERP / distributor system (e.g., Encompass or Ohanafy) | Receives account/order/inventory events from it; does not replace it. |
| CRM / field-sales tool (e.g., AccountTouch or Leadbeam) | Receives ownership and account context; returns an exception or action record when appropriate. |
| Buyer order surface (e.g., Provi or a client storefront) | Hands the buyer to the approved order/request flow; does not rebuild its catalog or cart. |
| Email, SMS, or other approved delivery channel | Uses a client-approved integration later; the first pilot starts with draft or rep-approved send. |

## What could make the thesis fail

The product should not be treated as valuable merely because it looks polished. The thesis can fail if a distributor’s existing CRM/ERP already handles the workflow well enough, if reps consider proactive automated outreach harmful to relationships, if retailer buyers prefer existing order portals, or if policy/approval requirements make the workflow too specific to generalize.

These failure conditions are useful. They tell us the first commercial task is **workflow discovery**, not a broader feature build.

## Validation plan before feature expansion

Conduct five to eight short interviews: two distributor sales leaders, two to three field representatives, one to two operations/compliance stakeholders, and two retailer buyers. Use the Harborline demo to ask about the actual current path rather than asking whether they “like AI.”

| Interview question | Decision it informs |
| --- | --- |
| “Walk me through what happens when a good account has not reordered on time.” | Confirms the current trigger, data sources, and manual gaps. |
| “Which message types are safe to prepare, approve, or send—and which must always stay human?” | Defines the initial automation posture. |
| “Where does the rep lose context today: the signal, approval, delivery, reply, or follow-up?” | Locates the real value gap. |
| “What system do you already trust for account data, orders, and customer communication?” | Defines integration boundaries and a no-rip-and-replace approach. |
| “Would a visible evidence record make this easier to manage, or would it add work?” | Tests whether auditability is a buying feature or implementation requirement. |
| “What would make you refuse a system like this?” | Surfaces adoption, relationship, and policy risks early. |

## Immediate product recommendation

Keep the completed Reorder Reminder demo. Do **not** add a full CRM, ERP, catalog, cart, generic agent chat, or broad management dashboard next. Instead, make the next controlled workflow an **allocation or new-product alert** only after the interviews confirm the right audience rules, approval owner, delivery channel, and exception type.

The near-term goal is not to prove that Harborline has more features than incumbents. It is to prove that one high-frequency, relationship-sensitive communication workflow can be **simpler, safer, and more accountable** than the current mix of memory, inboxes, text threads, spreadsheets, and disconnected systems.

## References

[1] [AccountTouch — Intelligence Platform for Beverage Sales Teams](https://www.accounttouch.com/)  
[2] [Leadbeam — AI-Native Operating System for Field Sales](https://www.leadbeam.ai/)  
[3] [Ohanafy CRM — Beverage CRM](https://www.ohanafy.com/crm)  
[4] [Ohanafy AI — AI Built for Beverage](https://www.ohanafy.com/ai)  
[5] [Proton.ai — AI for Distributors](https://www.proton.ai/)  
[6] [Encompass Technologies — Distribution Cloud](https://www.encompasstech.com/distribution/erp)  
[7] [Overproof — AI Solutions for Beverage Alcohol](https://overproof.com/)  
[8] [Provi — B2B Alcohol Marketplace](https://www.provi.com/)  
[9] [Provi for Buyers](https://www.provi.com/buyers)  
[10] [Provi Distributor Toolkit](https://www.provi.com/company-news/provi-beverage-alcohol-distributor-toolkit)
