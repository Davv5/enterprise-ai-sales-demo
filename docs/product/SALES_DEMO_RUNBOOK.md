# Harborline Communication Ops — AI Operations Lead Demo Runbook

## Purpose

This runbook is for the live **AI Operations Lead sales demo**. It presents Harborline as a governed communication-operations layer that begins by organizing a distributor operating day—not as a generic CRM, ERP, order marketplace, dashboard, or autonomous salesperson.

> **Central message:** The AI Operations Lead runs the process so your people can own the relationships and decisions that matter.

The demonstration uses fictional data and simulated delivery states. It is not connected to a prospect’s systems, inboxes, customer data, price lists, approval program, or live communication channels. In this demo, “AI Operations Lead” is a product role shown through visible, rule-backed operating context; it does not make a live model call or autonomous business decision.

## Before the meeting

| Check | What to do |
| --- | --- |
| **Starting state** | Open `/` and confirm the **Daily Operating Brief** displays a fictional Sales Operations morning briefing. |
| **Demo order** | Start with the operating day, then open Reorder, Allocation, Policy-Gated Notice, the customer exception, and Operating Memory. |
| **Reset control** | If an interaction goes wrong, select **Reset demo** in the command rail: lower-left on a laptop, top-of-page on a tablet or phone. |
| **Truthfulness** | Say that every account, product, program detail, rule, count, and delivery state is fictional/simulated. |
| **Opening question** | Ask: “At the start of a normal day, where does your team lose the thread—knowing what needs attention, making the decision, or following through after a customer replies?” |

## Six-minute seller script

| Time | Click or action | What to say | Buyer takeaway |
| --- | --- | --- | --- |
| **0:00–0:45** | Begin at the **Daily Operating Brief**. | “This is the AI Operations Lead’s morning brief. It has organized the account moments that need attention and separated work that is ready from work that still needs a person.” | The product helps run the day rather than displaying a list of messages. |
| **0:45–1:15** | Point to the operating posture ledger and the Human Decision Queue. | “You can see what is prepared, what needs a named decision, what is held at a policy gate, and which customer question cannot be automated.” | Human control is a feature, not a fallback. |
| **1:15–2:30** | Open **Juniper Reorder Reminder**. Show the cadence trigger, account context, controlled message, and rep-owned decision. | “The product found a coverage moment and prepared an availability check. It does not make a commercial offer. Renee decides whether the simulated communication proceeds.” | The system creates context and discipline without replacing the rep. |
| **2:30–3:30** | Return to the Brief; open **Fleetwood Allocation Alert**. | “This is limited inventory. The system identifies qualified accounts and prepares an interest check, but it cannot promise quantity, set price, or allocate cases. Marcus owns that judgment.” | The AI Operations Lead knows the boundary between preparation and commitment. |
| **3:30–4:30** | Return to the Brief; open **Policy-Gated Notice**. | “The audience is locked and the terms reference is visible, but distribution remains blocked until Alicia records the review. The demo deliberately contains no commercial terms.” | Policy-sensitive work is inspectable before it moves. |
| **4:30–5:15** | Select **Lina Cho needs a person** or open Replies & Exceptions. | “When Lina asks about prior pricing, the system preserves the context and routes it to Renee. It does not negotiate, invent a response, or treat a relationship question as a workflow error.” | The product protects the relationship at the exact point automation should stop. |
| **5:15–6:00** | Open **Operating Memory** / Audit & Policy. | “Tomorrow, the team can see why the moment surfaced, what was permitted, who acted, what the buyer asked, and who owns the next decision—without chasing inboxes and spreadsheets.” | The system creates operating memory, not merely a log. |

## Direct pitch-recovery states

These address-bar states are controlled demo entry points, not production links.

| URL state | Useful when |
| --- | --- |
| `/` | Normal start at the AI Operations Lead Daily Operating Brief. |
| `/#workflows` | Browse the governed workflow library. |
| `/?demo=drafted#workflow` | Resume after Renee’s availability-check draft is recorded. |
| `/?demo=exception#replies` | Begin at the Juniper pricing exception. |
| `/?workflow=allocation#workflow` | Begin at the Allocation Alert draft. |
| `/?workflow=allocation&demo=drafted#workflow` | Resume after Marcus’s interest-check draft is recorded. |
| `/?workflow=allocation&demo=sent#workflow` | Resume after the simulated allocation interest check. |
| `/?workflow=allocation&demo=exception#replies` | Begin at the Fleetwood quantity-and-price exception. |
| `/?workflow=promo#workflow` | Begin at the Policy-Gated Notice review state. |
| `/?workflow=promo&terms=verified#workflow` | Begin after the fictional terms/audience gate has been recorded. |
| `/?workflow=promo&terms=verified&demo=sent#workflow` | Begin after the simulated policy-gated distribution. |
| `/?workflow=promo&terms=verified&demo=exception#replies` | Begin at the eligibility/special-treatment exception. |

## Safe responses to difficult questions

| Buyer question | Response |
| --- | --- |
| “Is this an AI agent that runs sales for us?” | “No. The AI Operations Lead organizes approved operating signals, prepares bounded work, explains the context, and routes exceptions. People retain pricing, allocation, terms, policy, customer-response, and approval decisions.” |
| “What model is it using?” | “This demonstration does not make a live model call. The AI Operations Lead is the product role we are showing: a governed layer built around approved signals, rules, ownership, and evidence. Any future AI assistance would be narrowed to support work—not commercial decisions.” |
| “Is this connected to our systems?” | “Not in this demonstration. A real implementation would configure approved source records, owners, rules, channels, and controls into the same operating experience.” |
| “Does it send messages automatically?” | “The product supports different control postures. Reorder starts rep-approved; allocation starts as a draft; policy-sensitive notices cannot move until their gate is recorded. Live delivery is a later client implementation decision.” |
| “Can it make pricing or allocation decisions?” | “No. It prepares and records a governed communication path. Price, quantity, allocation, terms, disputes, eligibility exceptions, and relationship-sensitive questions remain with qualified people.” |
| “Does it replace our CRM or reps?” | “No. Its job is to make the operating moment between existing systems and human relationship ownership clearer, more consistent, and easier to manage.” |

## Recovery guide

| Situation | What to do |
| --- | --- |
| You lose the narrative. | Press **Reset demo**, return to the Daily Operating Brief, and restart with the morning operating picture. |
| The buyer wants limited inventory. | Open `/?workflow=allocation#workflow` and show the interest-check versus allocation-decision boundary. |
| The buyer asks about promotions or pricing. | Open `/?workflow=promo#workflow` and explain the locked audience and terms-reference control without displaying commercial terms. |
| The buyer focuses on relationship risk. | Open an exception URL and show the named-human boundary before discussing automation. |
| The buyer asks about governance. | Open the workflow’s Operating Memory / Audit screen and trace the record from event to handoff. |

## Do not say

1. Do not say the demo uses a live LLM, real data, live delivery channels, policy engines, price lists, or a legal approval program.
2. Do not say it guarantees revenue, cost savings, regulatory compliance, message deliverability, or client adoption.
3. Do not call it an autonomous salesperson, CRM replacement, automatic pricing tool, allocation decision engine, policy determination system, or legal-compliance engine.

## Close the conversation

> “If an AI Operations Lead could organize one part of your team’s operating day without taking commercial judgment away from your people, where would you want it to start?”

Record the answer in [`../operations/INTERVIEW_EVIDENCE_LOG.md`](../operations/INTERVIEW_EVIDENCE_LOG.md). It becomes evidence for the first client-specific workflow decision.

## References

[1] [AI Operations Lead Daily Operating Brief Specification](AI_OPERATIONS_LEAD_DAILY_BRIEF_SPEC.md)
[2] [Operator Experience and Naming Reset](OPERATOR_EXPERIENCE_AND_NAMING_RESET.md)
[3] [Three-Workflow Demo Suite Specification](MULTI_WORKFLOW_SUITE_SPEC.md)
