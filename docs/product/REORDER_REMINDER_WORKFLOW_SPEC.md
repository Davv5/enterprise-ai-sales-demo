# Reorder Reminder Workflow — Build Specification

## Product job

This is the first **actual product workflow**, not an executive dashboard. It helps a distributor run a controlled reorder reminder when an account has not reordered a product within the configured cadence window. The workflow must preserve human ownership, automation choice, and evidence at every stage.

> **The product promise:** Harborline makes a routine account moment visible, prepares the right controlled action, and returns judgment to the representative when the relationship needs a person.

## Fictional demonstration context

| Item | Demo value |
| --- | --- |
| Distributor | Harborline Beverage Distribution |
| Workflow | Solara Coastal Spritz reorder reminder |
| Trigger rule | No order for 30 days, where the account’s expected cadence is 21 days |
| Eligible account | Juniper Bottle House, Montclair, NJ |
| Assigned representative | Renee Lewis |
| Contact and channel | Lina Cho; rep-approved email |
| Automation mode | Rep-approved send |
| Exception event | Recipient asks a pricing-related question; the system assigns it to Renee and does not generate a reply. |

## Workflow state model

| State | What the user sees | Required evidence | Allowed next action |
| --- | --- | --- | --- |
| **1. Trigger detected** | “Juniper has not reordered Solara for 38 days.” | Cadence rule, last order, expected order date. | Open workflow review. |
| **2. Eligibility checked** | Named account, contact, assigned rep, preferred channel, and policy status. | Account and channel data; ownership and eligibility status. | Prepare controlled outreach. |
| **3. Message prepared** | Exact availability-check copy and a visible automation mode. | Template version, prohibited terms note, message audience. | Rep approves or edits/holds. |
| **4. Controlled send recorded** | Demo delivery state; no claim of live production delivery. | Timestamp, recipient, mode, template, owner. | View reply or audit record. |
| **5. Reply exception** | Recipient asks a non-routine question. | Original message and reply context. | Assign Renee; no automated answer. |
| **6. Human handoff** | Renee owns the next response. | Assignment timestamp and reason. | Open account context or close as resolved. |
| **7. Audit record** | One compact trace of the entire sequence. | Trigger, eligibility, message, mode, send, reply, owner. | Export in future production scope. |

## First-use screen architecture

### 1. Workflow Center — the new home screen

The first visible page is a **Workflow Center**, not a broad dashboard. It contains a concise list of active workflow cards with their current state and named owner.

| Region | Contents |
| --- | --- |
| **Active Workflows** | Reorder Reminder, New Allocation Alert, and Price/Promo Notice; only the reorder workflow is interactive in this milestone. |
| **Needs Human Review** | Juniper’s prepared message, a sample no-response follow-up, and any exception requiring a rep. |
| **Workflow health** | Counts by status—prepared, awaiting rep approval, exception assigned—not generic performance metrics. |
| **Primary action** | “Open Reorder Reminder” takes the user straight to the governed workflow. |

### 2. Reorder Workflow — the core detail screen

This is a step-based communication workspace. The left side shows the state sequence; the main panel shows the evidence and the action for the current state.

| Panel | Required contents |
| --- | --- |
| **Trigger and account context** | Cadence rule, last order, product, account, contact, rep, and channel. |
| **Audience and eligibility** | Clear indication that this is a single-account reorder action; contact/ownership/policy status. |
| **Message and mode** | Exact copy, template label, “rep-approved send” mode, and a note that price or promotion terms are excluded. |
| **Action control** | “Approve & simulate send” only; no autonomous-looking general send button. |
| **Evidence rail** | Events appear as the workflow advances. |

### 3. Reply & Exceptions Inbox

When the simulated reply asks about price, the UI moves to an inbox-style exception card, not merely an audit page. The rep sees who asked, what was sent, why this requires judgment, and a named ownership state.

### 4. Audit drawer

The audit record should open from any workflow state. It is a compact structured trace, not a separate management product: rule, account, mode, exact template, send state, reply, and handoff.

## Automation-mode control

The product must visibly support—but initially only simulate—the following modes.

| Mode | User-facing meaning | Demo behavior |
| --- | --- | --- |
| **Draft for rep** | The system prepares a message but never sends it. | Show a “review draft” action. |
| **Rep-approved send** | A named representative confirms the message before it is delivered. | **Default for the Juniper demo.** |
| **Policy-approved send** | A narrowly defined and pre-approved workflow may send without per-message rep approval. | Display as a later configuration choice; do not make it active in this milestone. |

## Acceptance test

The build is aligned when a user can complete these actions in order without leaving the product workflow:

1. Open **Workflow Center** and see the Reorder Reminder in a “needs rep approval” state.
2. Open **Juniper Reorder Reminder** and verify its trigger, product, account, owner, channel, and automation mode.
3. Review the exact approved availability-check message and see that terms are excluded.
4. Approve the simulated send.
5. Open **Reply & Exceptions** and simulate Lina’s pricing-related question.
6. See Renee Lewis assigned, with no AI-generated response.
7. Open the audit drawer and verify the event trail from trigger through handoff.

## Component reuse from the existing prototype

Retain the Harborline visual system, the Juniper account data, the message preview, the audit event trail, the rep avatar/ownership state, and the signal color semantics. Retire the executive command dashboard as the home screen; it may return later as a secondary **Oversight** view.
