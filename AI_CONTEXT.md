# AI Context — Read Before Working

## Mission

Build a **premium live sales-demo** for a distributor account-communication product. A seller must be able to show a distributor executive a believable workflow in under ten minutes.

## The product story

1. A manager opens a concise operations dashboard.
2. They see accounts at reorder risk and why each requires attention.
3. They open one account, review order context, and preview an approved outreach.
4. They demonstrate the controlled action and audit timeline.
5. Any non-routine reply goes back to the accountable sales rep.

## Read these files in order

1. [`docs/reference-library/AI_INTERPRETATION_MEMO.md`](docs/reference-library/AI_INTERPRETATION_MEMO.md) — how to interpret evidence, decisions, assumptions, constraints, and open questions.
2. [`docs/product/PRODUCT_BRIEF.md`](docs/product/PRODUCT_BRIEF.md) — the current scope and build task.
3. [`docs/operations/AI_IMPLEMENTATION_PROMPTS.md`](docs/operations/AI_IMPLEMENTATION_PROMPTS.md) — the required implementation protocol.
4. [`docs/operations/DECISION_LOG.md`](docs/operations/DECISION_LOG.md) — prior decisions and current evidence.
5. [`docs/operations/TASKS.md`](docs/operations/TASKS.md) — active work checklist.
6. [`docs/operations/SESSION_VERIFICATION_CHECKLIST.md`](docs/operations/SESSION_VERIFICATION_CHECKLIST.md) — the required session safety check.

## Non-negotiable product rules

- Use fictional/preloaded demonstration data only.
- The product extends the sales rep; it never claims to replace the rep.
- Show evidence, ownership, eligibility, approval, and auditability before automation.
- Do not claim real client integrations, live message delivery, legal compliance approval, or financial outcomes that do not exist.
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
