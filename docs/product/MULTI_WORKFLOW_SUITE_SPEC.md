# Harborline Three-Workflow Demo Suite

## Purpose

The demo should prove a **repeatable communication-operations system**, not a single special-case reorder screen. Each workflow must show the same disciplined backbone:

> **Event → eligibility/audience → message boundary → human-control mode → simulated action → non-routine exception → named human owner → audit evidence**

The workflows use entirely fictional people, products, account data, and delivery states. They do not represent live communication, legal approval, pricing, or promotional terms.

## Workflow 1 — Reorder Reminder

| Field | Demo scenario |
| --- | --- |
| **Workflow ID** | RR-04 |
| **Event** | Juniper Bottle House has not reordered Solara Coastal Spritz Citrus 4-pack for 38 days versus a 21-day expected cadence. |
| **Owner** | Renee Lewis, Account Owner. |
| **Initial control mode** | Rep-approved send. |
| **Message boundary** | Availability check only; no price, promotion, allocation, or commercial terms. |
| **Exception** | Buyer asks about previous pricing. |
| **Human handoff** | Renee owns the reply. |

## Workflow 2 — New Allocation Alert

| Field | Demo scenario |
| --- | --- |
| **Workflow ID** | AL-09 |
| **Event** | Nila Reserve Gin receives a fictional 48-case limited allocation. |
| **Audience rule** | Accounts must be active premium-spirit retailers, have a recent gin-category purchase, have no unresolved account hold in the demo, and remain assigned to the named rep. |
| **Qualified accounts** | Fleetwood Spirits, Alder & Oak Bottle Shop, and Kingsley Market. |
| **Primary account / owner** | Fleetwood Spirits; Marcus Vale, Portfolio Specialist. |
| **Initial control mode** | Draft for rep. The product prepares an **interest check**, not a case commitment. |
| **Message boundary** | May describe a limited new allocation and request interest; may not promise quantity, state price, negotiate terms, or decide allocation. |
| **Exception** | Buyer asks, “How many cases can we have, and what is our price?” |
| **Human handoff** | Marcus must decide and reply. |
| **Evidence record** | Allocation event, qualification rule version, qualified audience, message template, draft/simulated state, exception, and ownership handoff. |

## Workflow 3 — Policy-Gated Price / Promotion Notice

| Field | Demo scenario |
| --- | --- |
| **Workflow ID** | PN-18 |
| **Event** | A fictional Solara Coastal Spritz seasonal program notice is prepared for an eligible off-premise account audience. |
| **Audience rule** | Active off-premise accounts in the seasonal-program segment, valid account profile in the fictional data, and named sales ownership. The initial audience contains 12 accounts. |
| **Owner** | Alicia Chen, Sales Operations. |
| **Initial control mode** | Policy-gated only. No draft or send simulation is available until terms and the audience review are marked complete. |
| **Terms boundary** | The demo intentionally contains no real price, discount, commercial terms, or legal conclusion. It shows a fictional **terms packet reference** and an effective-window field only. |
| **Audience control** | The eligible-audience count, rule version, and review result remain visible. A user cannot treat the notice as ready by selecting a different audience from the screen. |
| **Message boundary** | May notify eligible accounts that an approved program communication is available through the selected channel; it does not generate, alter, or negotiate commercial terms. |
| **Exception** | An account asks for eligibility clarification or special treatment. |
| **Human handoff** | Alicia and the assigned account owner must review the request. |
| **Evidence record** | Terms packet reference, audience rule/version, audience count, reviewer state, policy gate, simulated distribution record, exception, and named handoff. |

## What must remain consistent across all three

| Product rule | Requirement |
| --- | --- |
| **No fictional automation becomes a real-world claim** | Every action state says it is simulated and no production message was delivered. |
| **Human ownership is visible** | Each workflow shows an owner before the message or exception. |
| **Commercial judgment does not auto-resolve** | Price, quantity, allocation, terms, special treatment, complaint, or dispute questions route to a person. |
| **Evidence is first-class** | The audit screen records the event, controls, action, exception, and owner. |
| **The workflows do not imitate three separate products** | The same page structure and control language should make it obvious that Harborline is one operating system. |

## Seller narrative

The partner should say: “These are three different business moments—a missed reorder, a limited allocation, and a policy-sensitive program notice. The product stays consistent: it makes the rule, the audience, the permitted message, the accountable person, and the evidence visible before the team acts.”

## References

[1] [Sandbox Build Brief — original workflow scope](../reference-library/originals/Sandbox_Build_Brief.docx)  
[2] [Reorder Reminder Workflow Specification](REORDER_REMINDER_WORKFLOW_SPEC.md)
