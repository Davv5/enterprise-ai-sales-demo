# Technical Stack Reference: Deployment and Extension Guide

## What is deployable now

The repository now includes a **public, static-safe architecture explorer at `/stack`** and an optional, fixture-only reference API. The route is intentionally useful in both of the deployment modes below.

| Deployment mode | Command or platform | What works | What does not happen |
| --- | --- | --- | --- |
| Existing Cloudflare Pages demo | GitHub-triggered static build, as configured for `ai-operations-demo.pages.dev` | The `/stack` interface, all architecture components, the full six-step clickable trace, contract inspection, and the route back to the product demo. The client automatically falls back to typed static fixtures. | The browser has no `/api/reference/*` endpoint on a static-only Pages deployment. It remains in **Static Fixture Mode**, which is expected and safe. |
| Local or Node-hosted reference build | `pnpm build && pnpm start` | Everything above, plus `GET /api/reference/stack` and `POST /api/reference/traces`. The UI marks the API as connected and uses those safe fixture responses. | The API does not create a database record, call a provider, invoke a model, read credentials, or deliver a communication. |
| Future connected application | Cloudflare Worker-based API with Pages/static UI | Authenticated API, verified webhooks, source adapters, durable workflow runs, async jobs, database records, and approved output adapters. | Commercial decisions, policy exceptions, and real delivery remain disabled until client-specific operating controls are implemented and tested. |

The build continues to use the repository’s existing React, TypeScript, Vite, and Tailwind application. The new optional local API is deliberately an **Express fixture façade**, not a claim that production should run an Express server on Cloudflare Pages. It mirrors the versioned contracts that should later be hosted in a dedicated edge API.

## Build and verification

Run the following from the repository root:

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm start
```

The production reference server listens on `http://localhost:3000`. Verify both safe endpoints with:

```bash
curl -fsS http://localhost:3000/api/reference/stack
curl -fsS -X POST http://localhost:3000/api/reference/traces \
  -H 'Content-Type: application/json' \
  -d '{"workflow":"AL-09"}'
```

Both endpoints return only `sandbox` data. The trace endpoint returns the static `AL-09` sequence with six versioned events; it accepts no free-form message, contact, delivery, or credential input.

## Cloudflare delivery posture

Keep the current public demo on its static Cloudflare Pages deployment. The `/stack` page will function there without any configuration change because it carries a fixture-backed implementation path. This is the appropriate posture for a partner-facing reference demonstration.

When a validated implementation is ready for authenticated inputs, create a separate Worker-based API boundary. Cloudflare Workers supports full-stack API workloads, data bindings, durable workflows, queues, and observability.[1] Cloudflare documents Workflows as durable multi-step execution that can pause for external events or approvals and retry failed technical steps.[2] Use Queues to decouple inbound events, delivery commands, reply processing, and audit writes; configure a dead-letter consumer before live integration.[3]

| Production responsibility | Cloudflare-oriented implementation | Required control before activation |
| --- | --- | --- |
| Edge API | Worker route handlers behind authenticated application access | Tenant authentication, authorization, rate limiting, request validation, and server-side secrets. |
| Data | D1 with migrations and an ORM such as Drizzle | Tenant-scoped schema, backup/recovery strategy, retention policy, and tested audit immutability. D1 is a managed serverless SQL database available from Workers and Pages.[4] |
| Orchestration | Cloudflare Workflows | Idempotency keys, named approval event, pause/resume semantics, retry policy, and termination/kill-switch procedure. |
| Event transport | Cloudflare Queues + dead-letter queue | Consumer ownership, failure investigation workflow, replay approval, and data redaction policy. |
| Source adapters | CRM/ERP/order/inventory provider adapters | Signed webhook verification or read-only credential access, source-of-truth mapping, data-minimization review, and source version tracking. |
| AI adapter | Server-side structured-output service | Locked schema, template version, permitted source fields, prompt/evaluation review, refusal/fallback behavior, and no-delivery authority. |
| Output adapter | Server-side email/SMS provider interface | Consent, channel preference, approval linkage, provider verification, delivery/reply event handling, and human escalation rules. |

## Recommended build sequence

Begin with a single client-approved **read-only source adapter** and a **draft-for-rep** workflow. Do not ingest broad CRM or ERP extracts. Identify a small consented pilot audience and map only the external IDs and facts that the workflow needs: account, approved contact, owner, preferred channel, consent status, product reference, and trigger metadata.

Next, persist workflow runs, approvals, exceptions, and append-only audit events in a tenant-scoped database. At this stage, a durable workflow may pause for a named person’s approval, but its only downstream result should remain a reviewable draft or internal task. Test retry, duplicate-event, rule-version, policy-gate, and exception paths before enabling any delivery adapter.

Only after the operating owners sign off on the channel, consent, templates, exception process, and evidence requirements should an approved delivery provider be introduced. Deliveries must be emitted only from server-side code after the workflow sees the required policy and approval records. A browser must never have the credentials or authority to bypass that chain.

> **Release gate:** A real external action is not enabled because a technical connector exists. It is enabled only after the client has a defined workflow owner, data map, consent basis, policy boundary, failure/recovery routine, and audit review process.

## Repository map

| File | Purpose |
| --- | --- |
| `client/src/pages/StackReference.tsx` | Interactive architecture explorer and six-stage fixture trace. |
| `shared/referenceStack.ts` | Versioned, shared stack components, event types, and deterministic fixture data. |
| `server/index.ts` | Static server plus two fixture-only reference API endpoints. |
| `docs/product/TECH_STACK_REFERENCE_ARCHITECTURE.md` | Architecture decision, stack, contracts, data model, and explicit non-goals. |
| `docs/operations/TECH_STACK_SHOWCASE_ASSESSMENT.md` | Current-demo assessment and verification record. |
| `docs/operations/TECH_STACK_DEPLOYMENT_AND_EXTENSION.md` | This deployment and production-evolution guide. |

## References

[1]: https://developers.cloudflare.com/workers/ "Cloudflare Workers documentation"
[2]: https://developers.cloudflare.com/workflows/ "Cloudflare Workflows documentation"
[3]: https://developers.cloudflare.com/queues/ "Cloudflare Queues documentation"
[4]: https://developers.cloudflare.com/d1/ "Cloudflare D1 documentation"
