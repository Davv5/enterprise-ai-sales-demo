# Fictional Demo Scenario & Current Pitch Flow

## Purpose

This document supplies the stable fictional names, records, and demonstration sequence for the active **Communication Operations Hub**. The controlling product behavior is defined in [`REORDER_REMINDER_WORKFLOW_SPEC.md`](REORDER_REMINDER_WORKFLOW_SPEC.md); this file supplies the story context.

## Fictional operating environment

| Field | Demo value |
| --- | --- |
| Distributor | Harborline Beverage Distribution |
| Operating model | Fictional regional wine and spirits distributor with relationship-led retail account coverage. |
| First live-demo workflow | Solara Coastal Spritz Reorder Reminder, workflow ID RR-04. |
| Retail account | Juniper Bottle House, Montclair, NJ. |
| Contact | Lina Cho, Buyer. |
| Product | Solara Coastal Spritz · Citrus 4-pack. |
| Assigned representative | Renee Lewis. |
| Trigger | 38 days since last order; expected reorder cadence is 21 days. |
| Channel and mode | Rep-approved email. |
| Non-routine exception | Lina asks about prior pricing; the system assigns the conversation to Renee without generating a response. |

## Correct product route

> **Workflow Center → Reorder Reminder → Trigger and eligibility → Approved message + rep-approved mode → Simulated send → Replies & Exceptions → Renee assignment → Audit & Policy**

| Moment | What the seller shows | Product proof |
| --- | --- | --- |
| **Workflow Center** | Juniper as the active reorder workflow; allocation and promotion are visible as future workflow types. | The product is a communication hub, not a generic dashboard. |
| **Trigger and eligibility** | Cadence rule, last order, account, contact, owner, and preferred channel. | Every action has a defined operational basis. |
| **Message and mode** | Availability check RR-04; “Rep-approved send” selected; terms explicitly excluded. | Human control and content boundaries are visible before action. |
| **Simulated send** | A fictional send event is recorded; the interface states that no production message was delivered. | The demo is operationally credible without claiming a live integration. |
| **Reply & Exceptions** | Lina’s price-related question, original context, and Renee as assigned owner. | The product routes commercial judgment to the human representative. |
| **Audit & Policy** | Trigger, controls, template, mode, send event, exception, and handoff trace. | The workflow is inspectable end to end. |

## Later workflow types

| Workflow type | Current status | Why it exists |
| --- | --- | --- |
| **New allocation / new product alert** | Design placeholder only. | Demonstrates the next expansion of the same audience, message, exception, and audit model. |
| **Price / promotion notice** | Policy-gated placeholder only. | Requires validated eligibility, terms, audience, review, and documentation before a client deployment. |

## Truth boundary

All people, accounts, events, messages, and delivery states in the demo are fictional. The product must not claim live client data, deployed channel connectivity, automatic commercial decisions, legal compliance approval, or real financial outcomes.

## References

[1] [Sandbox Build Brief — original first-workflow requirement](../reference-library/originals/Sandbox_Build_Brief.docx)
