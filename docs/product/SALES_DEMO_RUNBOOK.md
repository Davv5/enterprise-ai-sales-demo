# Harborline Communication Ops — Sales Demo Runbook

## Purpose

This runbook is for the **corrected premium live demo**. It presents Harborline as a controlled communication-operations product—not a generic CRM or a dashboard that happens to contain messages.

> **Central message:** Harborline turns routine account moments into a governed communication workflow. The product makes the trigger, controls, evidence, and responsible human visible before it takes any action.

The demonstration uses fictional data and simulated delivery states. It is not connected to a prospect’s ERP, CRM, inbox, telephone system, customer data, or live compliance program.

## Before the meeting

| Check | What to do |
| --- | --- |
| **Starting state** | Open `/` and confirm **Workflow Center** displays the Juniper Reorder Reminder as **Needs rep approval**. |
| **Core demonstration** | Use **Rep-approved send** as the default automation mode. It is the clearest early-pilot posture: human approval remains visible. |
| **Reset control** | If an interaction goes wrong, select **Reset demo** in the lower-left rail. |
| **Truthfulness** | Say that accounts, contacts, events, and message delivery are fictional and simulated. |
| **Opening question** | Ask: “Which routine retailer communication is most likely to be missed or inconsistently handled by your team today?” |

## Eight-minute seller script

| Time | Click or action | What to say | Buyer takeaway |
| --- | --- | --- | --- |
| **0:00–1:00** | Begin at **Workflow Center**. | “This is the communication operating layer. It is not another CRM dashboard; it shows the controlled account workflow that needs a decision now.” | The product has a narrow and credible job. |
| **1:00–2:00** | Point to the workflow cards and open **Solara Coastal Spritz · Juniper Bottle House**. | “The system can support reorders, allocations, and policy-gated notices. We start with reorders because the rule, owner, and action are easy to inspect.” | The product can expand by workflow instead of becoming generic. |
| **2:00–3:30** | Show the trigger, eligible account, assigned rep, preferred channel, and mode selector. | “Juniper is 38 days since its last Solara order against a 21-day cadence. Before communication is prepared, we verify the contact, assigned rep, channel, and level of human control.” | Automation is evidence-led and human-governed. |
| **3:30–4:30** | Keep **Rep-approved send** selected and show the message. | “This is an availability check, not a commercial offer. The template excludes pricing, promotion, and terms. Renee owns the decision to approve it.” | The system extends coverage without negotiating for the rep. |
| **4:30–5:30** | Click **Approve & simulate send**. | “This records a simulated, rep-approved action. In implementation, the client configures the delivery channel, permissions, workflow rules, and review process.” | The demo is realistic without pretending to be live production software. |
| **5:30–6:30** | Click **Simulate non-routine reply**. | “The buyer asks about prior pricing. That needs commercial judgment, so the product does not create a reply. It routes the conversation to the human exception inbox.” | The system stops at the correct boundary. |
| **6:30–7:15** | In **Replies & Exceptions**, select **Assign to Renee**. | “The original message, the question, the reason for escalation, and the accountable rep are visible together.” | A person—not automation—owns relationship-sensitive work. |
| **7:15–8:00** | Open **Audit & Policy**. | “This is the evidence trace: trigger, eligibility, template, automation mode, send state, exception, and named handoff.” | The workflow is inspectable and defensible. |

## Direct pitch-recovery states

These address-bar states help the seller recover quickly during a meeting. They are demo controls, not production links.

| URL state | Useful when |
| --- | --- |
| `/` | Normal start at Workflow Center. |
| `/#workflow` | Begin directly at Juniper’s Reorder Reminder. |
| `/?demo=sent#workflow` | Resume the workflow after the simulated send. |
| `/?demo=exception#replies` | Begin at the non-routine reply in the exception inbox. |
| `/?demo=exception&assigned=true#replies` | Begin with the exception already assigned to Renee. |
| `/?demo=exception#audit` | Begin with the exception-ready audit record. |

## Safe responses to difficult questions

| Buyer question | Response |
| --- | --- |
| “Is this connected to our systems?” | “Not in this demonstration. After scope is agreed, the client’s approved records, owners, communication channel, rules, and controls are configured into the same operating experience.” |
| “Does it send messages automatically?” | “The product supports different automation modes. The demo uses rep-approved send because the responsible person remains visible. Policy-approved delivery is a later configuration decision, not a default assumption.” |
| “Can it make pricing or allocation decisions?” | “No. It prepares the governed communication and records the evidence. Commercial terms, price, allocation decisions, disputes, and relationship-sensitive questions remain with qualified people.” |
| “Does it replace our CRM or sales reps?” | “No. Its immediate job is more consistent communication coverage and clearer human follow-up around a defined workflow.” |
| “What happens after we decide to proceed?” | “We map the first workflow’s trigger, account data, ownership, audience/eligibility, templates, delivery channel, approval gates, and evidence policy before enabling activity.” |

## Recovery guide

| Situation | What to do |
| --- | --- |
| You lose the narrative. | Press **Reset demo**, return to Workflow Center, and restart with the active Reorder Reminder. |
| The buyer opens Accounts early. | Explain that account records are supporting relationship context, then select **Open Juniper workflow**. |
| The buyer focuses on the exception. | Go to `/?demo=exception#replies` and show the handoff boundary first. |
| The buyer asks about governance. | Go to `/?demo=exception#audit` and trace the seven recorded decision points. |
| The buyer wants every workflow. | Complete the Reorder Reminder first; explain that allocation and promotion messages reuse the same controlled workflow structure after validation. |

## Do not say

1. Do not say it is connected to live data, delivery channels, policy engines, or a legal approval program.
2. Do not say it guarantees reorder revenue, cost savings, or regulatory compliance.
3. Do not call it an autonomous salesperson, CRM replacement, automatic pricing tool, or allocation decision engine.

## Close the conversation

> “If we configured one controlled communication workflow around the accounts your team most often misses, where would the first improvement in coverage and accountability appear?”

Record the prospect’s response in [`../operations/DECISION_LOG.md`](../operations/DECISION_LOG.md). It becomes evidence for the first client-specific workflow decision.

## References

[1] [Sandbox Build Brief — original product definition](../reference-library/originals/Sandbox_Build_Brief.docx)
[2] [Reorder Reminder Workflow Specification — active product acceptance test](REORDER_REMINDER_WORKFLOW_SPEC.md)
