# AI Context — Read Before Working

## Mission

Build a **premium live sales-demo** for a distributor account-communication product. A seller must be able to show a distributor executive a believable workflow in under ten minutes.

## The product story

1. A manager opens the **Workflow Center** and sees three controlled communication workflows—not a generic CRM dashboard.
2. The Reorder Reminder demonstrates cadence signal → rep-approved availability check → pricing exception → named handoff.
3. The New Allocation Alert demonstrates allocation event → qualified audience → interest-check draft → quantity/terms exception → named handoff.
4. The Policy-Gated Notice demonstrates locked audience → terms-packet reference → review gate → simulated distribution → eligibility exception.
5. Every workflow records the same evidence chain: trigger, audience/eligibility, message boundary, control mode, action, exception, and accountable owner.

## Read these files in order

1. [`docs/reference-library/AI_INTERPRETATION_MEMO.md`](docs/reference-library/AI_INTERPRETATION_MEMO.md) — how to interpret evidence, decisions, assumptions, constraints, and open questions.
2. [`docs/product/PRODUCT_BRIEF.md`](docs/product/PRODUCT_BRIEF.md) — the current scope and build task.
3. [`docs/product/RECOMMENDED_PRODUCT_ARCHITECTURE.md`](docs/product/RECOMMENDED_PRODUCT_ARCHITECTURE.md) — the source-backed product-model verdict and core screen architecture.
4. [`docs/product/REORDER_REMINDER_WORKFLOW_SPEC.md`](docs/product/REORDER_REMINDER_WORKFLOW_SPEC.md) — the initial end-to-end workflow specification and acceptance test.
5. [`docs/product/MULTI_WORKFLOW_SUITE_SPEC.md`](docs/product/MULTI_WORKFLOW_SUITE_SPEC.md) — the active three-workflow suite, control boundaries, and fictional scenario details.
6. [`docs/operations/AI_IMPLEMENTATION_PROMPTS.md`](docs/operations/AI_IMPLEMENTATION_PROMPTS.md) — the required implementation protocol.
7. [`docs/operations/DECISION_LOG.md`](docs/operations/DECISION_LOG.md) — prior decisions and current evidence.
8. [`docs/operations/TASKS.md`](docs/operations/TASKS.md) — active work checklist.
9. [`docs/operations/SESSION_VERIFICATION_CHECKLIST.md`](docs/operations/SESSION_VERIFICATION_CHECKLIST.md) — the required session safety check.

## Non-negotiable product rules

- Use fictional/preloaded demonstration data only.
- The product extends the sales rep; it never claims to replace the rep.
- Show evidence, ownership, eligibility, approval, and auditability before automation.
- Do not claim real client integrations, live message delivery, legal compliance approval, or financial outcomes that do not exist.
- The Workflow Center, Reorder Reminder, New Allocation Alert, Policy-Gated Notice, Replies & Exceptions, Accounts, and Audit & Policy are the active product architecture. A management dashboard is secondary oversight, not the primary product home.
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
