# Harborline Reference Architecture and Integration Sandbox

## Purpose

This document turns the existing sales demonstration into a credible **technical-stack reference build**. The objective is to show the real application shape, system boundaries, message contracts, and operational controls that a production Harborline implementation would use, without representing any external service as connected or sending any customer communication.

> **Product boundary:** Harborline is a governed communication-operations layer. It complements systems of record; it does not replace CRM, ERP, ordering, inventory, pricing, allocation, or legal-compliance systems.

## Selected implementation posture

The reference build follows the current repository’s Cloudflare delivery path but evolves the static demo into a thin application shell with a dedicated edge API, durable workflow execution, asynchronous event handling, and auditable data model. The public `/stack` experience uses fixture-backed responses and labels every event as a sandbox event. The server reference layer uses the same event contracts a production Worker would own, letting the visual demo and technical proof reinforce one another.

| Concern | Reference technology | Why it belongs in the product | Showcase proof |
| --- | --- | --- | --- |
| Product interface | **React 19, TypeScript, Vite, Tailwind CSS, Wouter** | Retains the existing, fast product interface and controlled route structure. | A new `/stack` route provides interactive system tracing beside the sales demo. |
| Web delivery | **Cloudflare Pages** | Matches the existing GitHub-triggered demo deployment. | The UI remains static-deployable, with safe fixture fallback if the optional reference API is absent. |
| API and integration façade | **Cloudflare Workers + Hono-style TypeScript handlers** | Keeps provider credentials, webhook verification, and workflow commands outside the browser. | Express reference endpoints mirror Worker request/response and event shapes for local/demo deployment. |
| System of record | **Cloudflare D1 + Drizzle ORM** | Provides a relational store for account references, workflow versions, approvals, communications, exceptions, and immutable audit events. | The stack view exposes the bounded schema and shows which record each step writes. |
| Durable orchestration | **Cloudflare Workflows** | A workflow can pause for rep approval, resume from an approved event, and retry safe integration steps instead of depending on a long HTTP request. | The trace visibly advances from trigger through approval, delivery receipt, and exception handoff. |
| Asynchronous event transport | **Cloudflare Queues with a dead-letter queue** | Decouples ingestion, delivery, reply handling, and audit persistence; failures remain observable. | Each trace exposes an event envelope, queue status, retry posture, and failure boundary. |
| AI service boundary | **Server-side structured-output LLM adapter** | Supports bounded drafting and reply classification only. It cannot determine prices, allocation, policy exceptions, or delivery. | The trace displays a typed, policy-scoped draft/classification result and the required human control. |
| Source-system adapters | **CRM, ERP/order, inventory, and identity adapter interfaces** | Distributor installations differ; Harborline must normalize source events rather than claim it owns all source data. | Clickable source cards show read-only input contracts and adapter status, not invented integrations. |
| Delivery adapters | **Approved email/SMS provider interfaces** | Channel and consent must be enforced at a server-side gateway. | The sandbox records a simulated receipt only; no live delivery provider is configured. |
| Observability and secrets | **Cloudflare logs/analytics, OpenTelemetry-compatible events, Worker secrets** | Gives operators diagnostics while keeping credentials and client data out of the browser and repository. | The stack view highlights redaction, correlation IDs, audit events, and server-only secrets. |

Cloudflare documents Workers as a serverless platform for full-stack applications and integrations, with bindings for durable workflows, queues, and data products.[1] Cloudflare Workflows support multi-step durable execution, waiting for external events or approval, retries, and observability—features well aligned with human approval gates.[2] D1 is a managed serverless SQL store available from Workers and Pages, and Queues supports asynchronous delivery, batching, retries, and dead-letter paths.[3] [4]

## The reference workflow: allocation alert

The interactive stack trace will use **New Allocation Alert (AL-09)** because it proves the full governed loop without asserting that the product makes allocation or commercial decisions. The trace has a fixed sample account and a deterministic outcome.

| Step | Produces | Control boundary | Event contract |
| --- | --- | --- | --- |
| 1. Source event | Inventory allocation signal and product reference | Inventory remains authoritative in the source system. | `allocation.recorded.v1` |
| 2. Audience evaluation | Eligible-account list with rule version | Eligibility is deterministic and visible; exceptions do not auto-pass. | `audience.evaluated.v1` |
| 3. Draft preparation | Structured message proposal with prohibited fields absent | AI may draft within a template; it cannot add quantity, price, terms, or a commitment. | `draft.prepared.v1` |
| 4. Human approval | Named rep approval request | A rep must approve the send path. | `approval.requested.v1` |
| 5. Simulated delivery | Fixture receipt and correlation ID | The sandbox never calls an email or SMS provider. | `delivery.simulated.v1` |
| 6. Non-routine reply | Exception record assigned to the named owner | AI only classifies and routes; no commercial response is produced. | `exception.assigned.v1` |
| 7. Audit evidence | Append-only sequence of event records | Each record retains actor, workflow version, correlation ID, and redaction status. | `audit.appended.v1` |

## Data and event contracts

Production data models should remain narrowly scoped: external references and minimal operational metadata are stored locally; systems of record retain their primary data ownership. The initial tables are `accounts`, `contacts`, `workflow_definitions`, `workflow_runs`, `approvals`, `communication_attempts`, `exceptions`, and `audit_events`. Use stable external IDs, versioned rule/template identifiers, and one correlation ID per workflow run.

Every integration event should follow a versioned envelope:

```ts
type HarborlineEvent<T> = {
  id: string;
  name: string;                 // e.g. "audience.evaluated.v1"
  occurredAt: string;
  correlationId: string;
  tenantId: string;
  actor: { type: "system" | "user" | "provider"; id: string };
  payload: T;
  classification: "sandbox" | "production";
  redaction: "none" | "restricted";
};
```

Provider adapters should consume and produce these contract types, rather than leaking provider-specific objects into the workflow engine. Webhook handlers must verify provider signatures, write a canonical event, return quickly, and hand off longer work to a queue or durable workflow. Client-side code never has provider API keys, direct delivery credentials, or permission to bypass a policy or approval check.

## Clickable scope

The `/stack` route will be built as an interactive architecture explorer rather than a slide or a generic admin dashboard. A visitor will select the allocation workflow and press **Run sandbox trace**. The UI will progressively reveal the source signal, eligible audience, constrained AI output, rep approval gate, simulated delivery receipt, exception routing, and audit ledger. Visitors can inspect an event payload at each step and toggle between a system diagram, data records, and control explanation.

The reference API will expose `GET /api/reference/stack` and `POST /api/reference/traces`. It returns only static fixture data and records the resulting event sequence in process memory for the duration of the running reference build. This endpoint is deliberately not a production API, does not accept free-form message content, and cannot contact an external service.

## Explicitly excluded

The first reference build does not include authentication, a tenant database, actual CRM/ERP connections, model calls, webhook receivers, real email/SMS, file uploads, analytics exports, or an automated policy decision. The code and documentation will identify where each capability belongs when a design partner and source-system choice make live integration appropriate.

## Production evolution

The next technical milestone after a validated design partner is a **single read-only source adapter plus draft-for-rep workflow**. This should begin with one agreed CRM/ERP/order source and one approved channel, applied to a small consented account set. Add real authentication and tenant isolation before accepting any customer data. Enable sending only after the customer’s policy, consent, delivery, and exception handling rules are reviewed, tested, and assigned to accountable people.

## References

[1]: https://developers.cloudflare.com/workers/ "Cloudflare Workers documentation"
[2]: https://developers.cloudflare.com/workflows/ "Cloudflare Workflows documentation"
[3]: https://developers.cloudflare.com/d1/ "Cloudflare D1 documentation"
[4]: https://developers.cloudflare.com/queues/ "Cloudflare Queues documentation"
