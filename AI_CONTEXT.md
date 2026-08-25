# AI Context — Read Before Working

## Mission

Build a **premium live sales-demo** for a distributor account-communication product. A seller must be able to show a distributor executive a believable workflow in under ten minutes.

## The product story

1. A sales manager / operations lead opens a fictional **Daily Operating Brief** shaped by the AI Operations Lead—not a generic CRM dashboard.
2. The brief organizes the day’s account moments into prepared work, human decisions, policy review, and customer exceptions while making each named owner visible.
3. The Reorder Reminder demonstrates cadence signal → rep-approved availability check → pricing exception → named handoff.
4. The New Allocation Alert demonstrates allocation event → qualified audience → interest-check draft → quantity/terms exception → named handoff.
5. The Policy-Gated Notice demonstrates locked audience → terms-packet reference → review gate → simulated distribution → eligibility exception.
6. Every workflow records the same evidence chain: trigger, audience/eligibility, message boundary, control mode, action, exception, and accountable owner.

## Read these files in order

1. [`docs/reference-library/AI_INTERPRETATION_MEMO.md`](docs/reference-library/AI_INTERPRETATION_MEMO.md) — how to interpret evidence, decisions, assumptions, constraints, and open questions.
2. [`docs/product/PRODUCT_BRIEF.md`](docs/product/PRODUCT_BRIEF.md) — the current scope and build task.
3. [`docs/product/RECOMMENDED_PRODUCT_ARCHITECTURE.md`](docs/product/RECOMMENDED_PRODUCT_ARCHITECTURE.md) — the source-backed product-model verdict and core screen architecture.
4. [`docs/product/REORDER_REMINDER_WORKFLOW_SPEC.md`](docs/product/REORDER_REMINDER_WORKFLOW_SPEC.md) — the initial end-to-end workflow specification and acceptance test.
5. [`docs/product/MULTI_WORKFLOW_SUITE_SPEC.md`](docs/product/MULTI_WORKFLOW_SUITE_SPEC.md) — the active three-workflow suite, control boundaries, and fictional scenario details.
6. [`docs/product/OPERATOR_EXPERIENCE_AND_NAMING_RESET.md`](docs/product/OPERATOR_EXPERIENCE_AND_NAMING_RESET.md) — the approved shift toward an immersive operator experience and provisional brand-reset rules.
7. [`docs/product/AI_OPERATIONS_LEAD_DAILY_BRIEF_SPEC.md`](docs/product/AI_OPERATIONS_LEAD_DAILY_BRIEF_SPEC.md) — the active specification for the new Daily Operating Brief experience and the AI Operations Lead control boundaries.
8. [`docs/operations/AI_IMPLEMENTATION_PROMPTS.md`](docs/operations/AI_IMPLEMENTATION_PROMPTS.md) — the required implementation protocol.
9. [`docs/operations/DECISION_LOG.md`](docs/operations/DECISION_LOG.md) — prior decisions and current evidence.
10. [`docs/operations/TASKS.md`](docs/operations/TASKS.md) — active work checklist.
11. [`docs/operations/SESSION_VERIFICATION_CHECKLIST.md`](docs/operations/SESSION_VERIFICATION_CHECKLIST.md) — the required session safety check.

## Non-negotiable product rules

- Use fictional/preloaded demonstration data only.
- The product extends the sales rep; it never claims to replace the rep.
- Show evidence, ownership, eligibility, approval, and auditability before automation.
- The AI Operations Lead may organize, prepare, explain, route, and preserve operating memory. It may not decide price, terms, quantity, allocation, eligibility exceptions, policy interpretation, or whether a customer message is authorized to send.
- Do not claim real client integrations, live message delivery, legal compliance approval, or financial outcomes that do not exist.
- The Daily Operating Brief is the planned primary home. The Workflow Center, Reorder Reminder, New Allocation Alert, Policy-Gated Notice, Replies & Exceptions, Accounts, and Audit & Policy are its operational drill-downs. A generic management dashboard is not the primary product home.
- The existing name is provisional. Do not rename code or create new identity assets until a replacement brand direction is selected and screened.
- Preserve existing design quality and do not rewrite unrelated screens to solve a small task.

## Implementation routine

Implement **one visible, testable task** at a time. State the user-visible outcome, changed files, and acceptance criteria before coding. At the end, list changes and test steps. Return tested work to the `main` branch.

## Code locations

| Need | Primary location |
| --- | --- |
| Main sales-demo page | `client/src/pages/Home.tsx` |
| Global visual system | `client/src/index.css` |
| Application routing | `client/src/App.tsx` |
| Reusable interface components | `client/src/components/` |

## Need more context?

Read [`README.md`](README.md) for the repository map, then [`docs/README.md`](docs/README.md) for document purposes. For the original source documents, integrated strategy plan, and interpretation layer, use [`docs/reference-library/README.md`](docs/reference-library/README.md).
