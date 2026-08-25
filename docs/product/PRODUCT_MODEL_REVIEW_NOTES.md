# Product-Model Review Notes

## Extracted product facts from the original briefs

| Original source | Explicit product requirement | Implication for the actual software form |
| --- | --- | --- |
| [Sandbox Build Brief](../reference-library/originals/Sandbox_Build_Brief.docx) | A working demo of an **automated communication layer** that keeps retail accounts informed through reorder reminders, allocation/new-product alerts, and price/promo notices. | The core product is a workflow layer that triggers, prepares/delivers communication, receives replies, and records outcomes—not primarily a manager analytics product. |
| [Sandbox Build Brief](../reference-library/originals/Sandbox_Build_Brief.docx) | Build the reorder/restock reminder first; it should be configurable by elapsed time since a store’s order. | The first working experience should begin from a reusable trigger rule and an account/action queue. |
| [Sandbox Build Brief](../reference-library/originals/Sandbox_Build_Brief.docx) | Use a contact/account table with store, contact, channel preference, ordering pattern, last order, assigned rep, and promo eligibility. | The product needs account records and a workflow/inbox surface; extensive reporting is secondary. |
| [Sandbox Build Brief](../reference-library/originals/Sandbox_Build_Brief.docx) | Every price/promo message must preserve terms, eligibility, audience, and timestamp; promo messages must reach the full eligible list. | A compliance log and campaign/audience review surface are core for promotion use cases. |
| [Sandbox Build Brief](../reference-library/originals/Sandbox_Build_Brief.docx) | Non-simple replies, complaints, disputes, and repeated non-response should flag to the assigned rep. | A **human exception inbox** is a primary end-user experience, not a detail buried inside an account dashboard. |
| [Sandbox Build Brief](../reference-library/originals/Sandbox_Build_Brief.docx) | “Done” means a new allocation event triggers a personalized message to a mock segment, a no-reorder account gets a nudge, and a visible log shows what was sent, to whom, and under what terms. | The demo must visibly show event → segment/audience → message → delivery state → response/escalation → compliance record. |
| [Strategic Analysis](../reference-library/originals/Strategic_Analysis_and_Roadmap.docx) | The category’s competitors largely act as rep-facing copilots; genuine controlled direct outbound to retailers may be an opening only if primary research supports it. | The product should distinguish itself with a carefully controlled **communication operations hub**, while never presenting autonomous relationship management as a settled market need. |
| [Strategic Analysis](../reference-library/originals/Strategic_Analysis_and_Roadmap.docx) | Lead with one narrow wedge workflow, not a full AI CRM replacement. | A full command-center dashboard may exist, but it should serve the core workflow rather than become a pretend CRM. |

## Preliminary discrepancy with the current prototype

The existing Harborline Command prototype has useful elements: the signal, account context, controlled outreach, audit record, and human handoff are aligned. However, it currently treats the **manager dashboard** as the center of the product. The original Sandbox Build Brief treats the **communication workflow** as the center: trigger, audience/eligibility, approved message, delivery state, reply/exception, and traceable log.

This means the next product-model decision is not “make the dashboard prettier.” It is whether to reorient the software around a communication operations console, with dashboards as supporting oversight rather than the primary user experience.

## Open validation question

The original strategy explicitly says the team must learn whether direct system-to-retailer communication is welcome or relationship-damaging before treating it as the long-term product. Until that research happens, the demo should present configurable automation levels: **draft for rep**, **rep-approved send**, and **policy-approved automated send**—not a single universal automation posture.
