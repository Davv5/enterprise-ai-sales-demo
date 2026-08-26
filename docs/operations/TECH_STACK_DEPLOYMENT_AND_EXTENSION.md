# Google Cloud Deployment and Extension Guide

## Current state versus target state

The public reference page is currently a **static fixture showcase**. It remains safe to share because it uses no client data, secrets, provider credentials, or live delivery path. The target implementation is Google Cloud–native and should be introduced progressively in a dedicated Google Cloud project.

| Stage | Deployment posture | What it proves | What remains intentionally disabled |
| --- | --- | --- | --- |
| Current visual reference | Static React build at `/stack` | The system flow, Google Cloud service boundaries, human approval model, and auditable event contracts. | All live integrations, secrets, model calls, database writes, and delivery. |
| Google Cloud proof of concept | Cloud Run API + Pub/Sub + Workflows + Secret Manager + Cloud Logging | One source event can become a governed, draft-for-rep workflow under named human ownership. | Automatic sending, commercial decisioning, broad data ingestion, and unvalidated provider connectors. |
| Controlled pilot | Add Cloud SQL, authenticated tenants, one source adapter, and one approved output adapter | A real but bounded client workflow with durable evidence, role controls, and exception routing. | Cross-client data access, autonomous policy exceptions, autonomous offers, and uncapped source sync. |

## Target Google Cloud deployment topology

The intended deployment starts with a Cloud Run application service that exposes authenticated user/API routes and a separate Cloud Run integration service for inbound webhooks and provider adapters. Cloud Run provides a fully managed environment for containerized services; it also supports application APIs and webhook-style business integrations.[1]

Pub/Sub becomes the asynchronous event backbone. An authenticated ingestion service verifies and normalizes a source event, assigns a correlation ID, writes a minimal record where necessary, then publishes an event to a topic. Subscriptions trigger the relevant process, while retry policy and a dead-letter topic preserve failed events for controlled investigation. Pub/Sub decouples producers from consumers and is suitable for service integration and task parallelization.[2]

Google Cloud Workflows represents the governed business sequence. It calls Cloud Run policy and integration services, records state, retries safe technical steps, and waits for an authenticated callback from the approval service. Workflows can combine Cloud Run, HTTP APIs, and other Google Cloud services in an observable serverless process; it can wait on callbacks and hold state rather than relying on a long-lived request.[3]

Cloud SQL for PostgreSQL is the target persistent operational store once the proof needs durable multi-user workflow records. It retains workflow runs, approvals, exceptions, communication attempts, and append-only audit events. Cloud SQL supplies managed relational-database functions such as backups, monitoring, logging, and optional high availability.[4]

| Responsibility | GCP service | Required implementation boundary |
| --- | --- | --- |
| UI and user/API service | Cloud Run | Authenticate every non-public route; use separate service accounts for UI/API and integration work. |
| Inbound source event | Cloud Run integration service | Verify webhook signatures; normalize provider payloads; return quickly; publish canonical event to Pub/Sub. |
| Event handoff | Pub/Sub + dead-letter topic | Apply IAM per topic/subscription; define retry, dead-letter, and replay ownership. |
| Orchestration | Google Cloud Workflows | Use idempotency keys, versioned definitions, explicit human approval callback, retry policy, and a termination procedure. |
| Policy evaluation | Cloud Run policy service | Evaluate policy and eligibility deterministically; never encode commercial authority in a model prompt. |
| AI boundary | Vertex AI Gemini | Enforce a schema, field allowlist, refusal/fallback behavior, and evaluation review. Gemini cannot call delivery providers directly. |
| Data and audit | Cloud SQL for PostgreSQL | Tenant-scope all tables; retain correlation IDs, actor, version, redaction state, and immutable audit append records. |
| Secrets | Secret Manager | Use least-privilege service account access; rotate secrets; keep secret values out of browser code and Git. [5] |
| Observability | Cloud Logging + Cloud Audit Logs | Use platform logs for technical diagnosis and application audit records for operational evidence. |
| Scheduled triggers | Cloud Scheduler | Trigger controlled periodic jobs such as reorder evaluation; avoid always-on polling workers. [3] |

## Recommended activation sequence

Start by creating a dedicated Google Cloud project with a budget alert, billing owner, separate environments, and a region selected for the intended data residency. Enable only the APIs required for the first proof: Cloud Run, Pub/Sub, Workflows, Secret Manager, Cloud Logging, Cloud Scheduler, and IAM. Keep Cloud SQL optional until the proof actually needs durable relational records.

Build one Cloud Run integration endpoint for one read-only source adapter. The adapter should normalize a single business event—such as a new allocation or a reorder cadence signal—into the versioned event contract. It should publish the canonical event to Pub/Sub and retain enough metadata to detect duplicates. Do not replicate a customer’s entire CRM or ERP data set.

Create a Workflows definition that invokes the deterministic policy service and then either records a typed draft or starts an internal approval task. Where Gemini is used, the service must enforce a structured response schema and only send approved, minimized context. The workflow must then wait for the named approver’s authenticated callback instead of treating a browser click as an authorization bypass.

After the client’s policy, consent, channel, owner, recovery, and audit expectations are agreed, add Cloud SQL and one output adapter. A delivery command must originate inside the server-side workflow path and require a linked approval record. The public visual reference does **not** exercise this path; its delivery result remains simulated.

> **Implementation rule:** The Google Cloud project should make a small governed workflow easier to inspect and operate. It should not be used to justify a broad CRM replacement, unrestricted data ingestion, or an autonomous sales agent.

## Current build commands

The present repository remains a static reference application. Its local fixture API is available when running the Node reference server, but the production design moves authenticated runtime services to Cloud Run.

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm start
```

## Google Cloud references

[1]: https://cloud.google.com/run/docs "Cloud Run documentation"
[2]: https://cloud.google.com/pubsub/docs/overview "Google Cloud Pub/Sub overview"
[3]: https://cloud.google.com/workflows/docs/overview "Google Cloud Workflows overview"
[4]: https://cloud.google.com/sql/docs/introduction "Cloud SQL overview"
[5]: https://cloud.google.com/secret-manager/docs/overview "Google Cloud Secret Manager overview"
