# Recommended Product Architecture — Harborline Command

## Verdict

> **The current demo is not yet the right core product form.** It is a polished management-and-evidence prototype, but it overstates the role of the executive dashboard and understates the actual communication workflow described in the original Sandbox Build Brief.

The product should be positioned and designed as a **controlled communication operations hub for distributors**. Its job is to turn a defined business event into a governed communication process: detect the moment, identify the eligible audience, apply the approved message and automation level, route exceptions to a human, and preserve evidence of what happened. This is directly supported by the original workflow requirements.[1]

## What to preserve, reposition, and remove from the current prototype

| Current demo element | Product-model decision | Reason |
| --- | --- | --- |
| Signal-ranked coverage queue | **Preserve, but reposition as an Action Queue.** | The reorder trigger and account context are essential, but the queue should be one operational inbox among multiple workflow types. |
| Juniper account detail | **Preserve as an Account Timeline or drawer.** | Account ordering history, preferred channel, and assigned rep are required inputs; the page should support an action, not act as the product’s central destination.[1] |
| Outreach preview and controlled send | **Promote to the central product moment.** | The core brief is specifically about trigger-driven messages, not reporting about potential messages.[1] |
| Audit trail | **Preserve and make cross-cutting.** | Exact terms, audience, time, and eligibility need to be inspectable for regulated promotional communication.[1] |
| Human handoff | **Promote to a Reply and Exceptions Inbox.** | The original brief explicitly routes non-simple replies, complaints, disputes, and repeated non-response to the assigned rep.[1] |
| Fleetwood allocation review | **Preserve, but reframe as a Campaign / Workflow type.** | New allocation alerts should operate as audience/eligibility workflows, not as a special standalone account page.[1] |
| Implementation Design screen | **Move out of the end-user product.** | It is useful in a sales presentation, but it is an implementation artifact—not a daily distributor-user workspace. |
| Coverage metrics dashboard | **Keep as secondary manager oversight.** | Helpful after the core workflow exists, but not the primary interface or buyer proof. |

## Recommended user roles

| Role | What they need to accomplish | Primary screen |
| --- | --- | --- |
| **Sales representative** | Review account moments, approve/draft outreach, and handle non-routine replies. | My Action Queue and Reply Inbox. |
| **Sales or operations manager** | Configure workflow rules, review campaign activity, monitor exceptions, and inspect coverage. | Workflow Center and Oversight. |
| **Compliance-aware approver** | Inspect eligibility, required audience, message terms, delivery record, and exception history. | Campaign review and Audit Log. |

## Recommended core screen architecture

The product should feel like a concise operating workspace, not a broad CRM. The initial architecture should have five primary destinations.

| Screen | First visible question it answers | Essential contents |
| --- | --- | --- |
| **Action Queue** | “What must a person decide or do now?” | Reorder, allocation, and escalation cards; named owner; evidence; action button; automation mode. |
| **Workflow Center** | “What communication process is running or ready to run?” | Reorder rules, allocation alerts, price/promo notices, audience/eligibility preview, template, mode, and status. |
| **Reply & Exceptions Inbox** | “Which conversations need human judgment?” | Reply context, assigned rep, original message, recommended next action, and escalation state. |
| **Accounts** | “What do we know about this store and relationship?” | Account timeline, order history, channel preference, prior workflow activity, and assigned rep. |
| **Audit & Policy** | “What was sent, to whom, under what terms and controls?” | Searchable send log, audience criteria, template version, exact terms, event history, and export control. |

## The central demo flow to build next

The next high-value demo should not open on a coverage dashboard. It should open on a believable **Workflow Center** and then run this product sequence:

1. A manager opens an active **New Allocation Alert** workflow.
2. The product shows the rule that triggered it and the eligible audience—such as accounts with the relevant category/order history.
3. The manager sees the approved message, the excluded commercial terms, and the selected automation mode: draft for rep, rep-approved send, or policy-approved send.
4. The system simulates delivery to the eligible mock audience and writes the exact event to the audit log.
5. A recipient asks a non-routine question. The message appears in the **Reply & Exceptions Inbox** and is assigned to the named rep.
6. The manager opens the audit record to see the original trigger, audience criteria, message version, and assignment outcome.

That sequence demonstrates all three original workflows as variations of one valuable system rather than unrelated pages: **reorder reminder**, **allocation/new-product alert**, and **price/promo notice**.[1]

## Automation-level requirement

The original strategy says direct retailer communication is a differentiated possibility, not a proven universal preference; the project must validate whether retailers and reps welcome it before treating it as the default.[2] Therefore, the product should visibly support three modes:

| Mode | Appropriate initial use |
| --- | --- |
| **Draft for rep** | Relationship-sensitive accounts or unvalidated workflow. |
| **Rep-approved send** | Early pilots where each message needs a named human confirmation. |
| **Policy-approved send** | Narrow, pre-approved, repeatable notices with validated audience, copy, channel, and oversight. |

## Build decision

Do **not** continue adding dashboard pages. Keep the visual language and reuse the existing account, audit, and handoff components, but redesign the product around the five operating destinations above. The first replacement screen should be **Workflow Center → New Allocation Alert**, because it visibly proves the original sandbox requirement of event, segment, message, delivery, escalation, and log in one flow.[1]

## References

[1] [Sandbox Build Brief — original project source](../reference-library/originals/Sandbox_Build_Brief.docx)  
[2] [Strategic Analysis and Roadmap — original project source](../reference-library/originals/Strategic_Analysis_and_Roadmap.docx)
