# Harborline Communication Ops — Sales Demo Runbook

## Purpose

This runbook is for the live **three-workflow product demo**. It presents Harborline as a controlled communication-operations layer—not a generic CRM, ERP, order marketplace, or autonomous salesperson.

> **Central message:** Harborline turns different account moments into one governed operating sequence: event, audience, permitted message, human control, exception, and evidence.

The demonstration uses fictional data and simulated delivery states. It is not connected to a prospect’s systems, inboxes, customer data, price lists, approval program, or live communication channels.

## Before the meeting

| Check | What to do |
| --- | --- |
| **Starting state** | Open `/` and confirm that **Workflow Center** displays all three workflows: Reorder Reminder, New Allocation Alert, and Price / Promotion Notice. |
| **Demo order** | Show Reorder first, Allocation second, and the Policy-Gated Notice third. The sequence moves from routine coverage to scarce inventory to policy-sensitive communication. |
| **Reset control** | If an interaction goes wrong, select **Reset demo** in the command rail: lower-left on a laptop, top-of-page on a tablet or phone. |
| **Truthfulness** | Say that all accounts, contacts, products, program details, terms references, and delivery states are fictional/simulated. |
| **Opening question** | Ask: “Which retailer communication is most likely to be missed, inconsistently handled, or hard to govern on your team today?” |

## Twelve-minute seller script

| Time | Click or action | What to say | Buyer takeaway |
| --- | --- | --- | --- |
| **0:00–1:00** | Begin at **Workflow Center**. | “This is a communication operating layer. It does not replace your CRM, ERP, ordering portal, or reps. It makes a controlled account workflow visible when a team needs to act.” | Harborline has a narrow, credible job. |
| **1:00–4:00** | Open **Reorder Reminder — Juniper Bottle House**. Show the cadence trigger, account context, rep-approved mode, availability-check template, simulated send, and the pricing reply exception. | “A routine reorder moment is detected. We verify owner, contact, channel, and template before we act. The system can prepare coverage, but it stops when a buyer asks for commercial judgment.” | A rep retains control while routine coverage becomes more consistent. |
| **4:00–7:00** | Return to Workflow Center and open **New Allocation Alert — Fleetwood Spirits**. Record the draft, simulate Marcus-approved send, then show the quantity/price exception. | “This is a different business moment: limited inventory. Harborline qualifies an audience and prepares an interest check, but it does not promise cases, set price, or allocate inventory. Marcus owns that decision.” | One system handles scarcity with explicit human judgment. |
| **7:00–10:00** | Return to Workflow Center and open **Price / Promotion Notice**. Show the locked 12-account audience and terms-packet reference. Select **Verify terms & audience**, then simulate distribution. | “This is not a price engine. The system makes the reviewed audience, reference, owner, and policy gate visible before a notice can be simulated. The demo deliberately contains no actual commercial terms.” | Policy-sensitive communication can be controlled without hiding the boundary. |
| **10:00–11:00** | Open **Replies & Exceptions** from any workflow. | “The question is not whether automation exists. The question is where it stops. Price, quantity, allocation, eligibility exceptions, complaints, and special treatment remain with a named person.” | Harborline protects relationships and accountability. |
| **11:00–12:00** | Open **Audit & Policy**. | “Every workflow creates the same inspection trail: the event, the audience rule, the template boundary, control posture, action state, exception, and responsible owner.” | The product is consistent across workflows and ready to configure around a client’s reality. |

## Direct pitch-recovery states

These address-bar states are controlled demo entry points, not production links.

| URL state | Useful when |
| --- | --- |
| `/` | Normal start with all three workflow cards. |
| `/#workflow` | Begin directly at the Juniper Reorder Reminder. |
| `/?demo=drafted#workflow` | Resume after Renee’s availability-check draft is recorded (Draft-for-rep mode). |
| `/?demo=exception#replies` | Begin at the Reorder Reminder’s price exception. |
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
| “Is this connected to our systems?” | “Not in this demonstration. After scope is agreed, the client’s approved records, owners, communication channel, rules, and controls are configured into the same operating experience.” |
| “Does it send messages automatically?” | “The product supports different control postures. Reorder starts rep-approved; allocation starts as a draft; a policy-sensitive notice cannot move until the defined review gate is recorded. Live delivery is a later client implementation decision.” |
| “Can it make pricing or allocation decisions?” | “No. It prepares and records a governed communication path. Price, quantity, allocation, terms, disputes, eligibility exceptions, and relationship-sensitive questions remain with qualified people.” |
| “Does it replace our CRM or sales reps?” | “No. Its immediate job is consistent communication coverage and visible accountability around a defined workflow.” |
| “What happens after we decide to proceed?” | “We map one workflow’s trigger, data context, ownership, audience rule, permitted message, delivery channel, approval gates, exception policy, and evidence record before enabling activity.” |

## Recovery guide

| Situation | What to do |
| --- | --- |
| You lose the narrative. | Press **Reset demo**, return to Workflow Center, and restart with Reorder Reminder. |
| The buyer wants to see limited inventory. | Open `/?workflow=allocation#workflow` and explain the interest-check versus allocation-decision boundary. |
| The buyer asks about promotions or pricing. | Open `/?workflow=promo#workflow` and explain that the demo shows controls and an audience gate, not commercial terms. |
| The buyer focuses on relationship risk. | Open either exception URL and show the named-human boundary first. |
| The buyer asks about governance. | Open the workflow’s Audit & Policy screen and trace the record from event to handoff. |

## Do not say

1. Do not say it is connected to live data, delivery channels, policy engines, price lists, or a legal approval program.
2. Do not say it guarantees revenue, cost savings, regulatory compliance, message deliverability, or client adoption.
3. Do not call it an autonomous salesperson, CRM replacement, automatic pricing tool, allocation decision engine, or policy determination system.

## Close the conversation

> “Which of these three moments—missed reorder, new allocation, or policy-sensitive notice—would be most useful for us to map around your team’s actual process first?”

Record the answer in [`../operations/INTERVIEW_EVIDENCE_LOG.md`](../operations/INTERVIEW_EVIDENCE_LOG.md). It becomes evidence for the first client-specific pilot decision.

## References

[1] [Sandbox Build Brief — original product definition](../reference-library/originals/Sandbox_Build_Brief.docx)
[2] [Reorder Reminder Workflow Specification](REORDER_REMINDER_WORKFLOW_SPEC.md)
[3] [Three-Workflow Demo Suite Specification](MULTI_WORKFLOW_SUITE_SPEC.md)
