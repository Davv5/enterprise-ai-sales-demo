# Harborline Google Cloud Reference Architecture

## Purpose

This reference architecture explains the **Google Cloud–native build path** for Harborline. It demonstrates how a governed communication-operations layer can connect systems of record to an approved communication path without acting as a CRM, ERP, inventory system, pricing engine, allocation engine, or autonomous seller.

> **Core principle:** The platform may detect a signal, apply visible rules, prepare a bounded draft, and preserve evidence. A named person retains commercial judgment; the application never invents price, quantity, terms, eligibility exceptions, or an external send authority.

## Target stack

The target implementation prioritizes serverless Google Cloud services that match the product’s event-driven, approval-gated shape. The current public page remains a fixture-backed visual reference; it deliberately does not connect to live customer systems or invoke a provider.

| Concern | Google Cloud service | Reference responsibility |
| --- | --- | --- |
| Product UI and integration API | **Cloud Run** | Serves the React application and authenticated API/webhook façade from a containerized service. Cloud Run is fully managed and serverless, and it can host services, jobs, and worker processes. [1] |
| Source-event transport | **Pub/Sub** | Decouples inbound CRM/ERP/order/inventory events from downstream processing. Topics, subscriptions, retry policy, and a dead-letter topic form the controlled handoff. [2] |
| Durable workflow | **Google Cloud Workflows** | Orchestrates the versioned business process: evaluate eligibility, prepare a bounded draft, pause at a human approval callback, resume after a trusted approval, and write evidence. Workflows can hold state, retry, and wait for callbacks. [3] |
| Deterministic policy logic | **Cloud Run policy service** | Evaluates audience rule, template version, channel, consent, policy state, and action boundary in code rather than in an LLM prompt. |
| AI boundary | **Vertex AI Gemini** | Creates schema-bound draft or exception-classification output from allowed fields only. Gemini has no provider credentials, no ability to emit delivery commands, and no authority to change a business decision. [4] |
| Operational and audit records | **Cloud SQL for PostgreSQL** | Stores tenant-scoped workflow runs, approvals, communication attempts, exceptions, versioned policies, and append-only audit events. Cloud SQL provides managed PostgreSQL operations including backups, monitoring, and logging. [5] |
| Secrets and external connectors | **Secret Manager + service accounts** | Keeps API keys, webhook secrets, and connector credentials out of the browser and source control, with IAM-scoped access and versioned secret lifecycle. [6] |
| Platform observability | **Cloud Logging + Cloud Audit Logs** | Captures Cloud Run, Workflows, and platform activity, while application-level audit events preserve the product evidence trail. [3] |
| Periodic trigger checks | **Cloud Scheduler** | Starts controlled routines such as reorder-cadence evaluation without an always-on worker. [3] |
| Build and deployment | **Cloud Build / Cloud Deploy** | A later production release path can build the Cloud Run container from the GitHub repository and promote explicitly reviewed releases. |

## Visual workflow: allocation alert

The interactive stack explorer uses **New Allocation Alert (AL-09)** as the reference path. It is deliberately narrow: the product can determine which accounts meet an approved rule and prepare an interest check, but it cannot promise an allocation or set commercial terms.

| Stage | Google Cloud path | Governing boundary |
| --- | --- | --- |
| 1. Signal | ERP or inventory adapter → authenticated **Cloud Run** ingestion API | The ERP/inventory system remains authoritative for allocation and availability. |
| 2. Connect | Cloud Run API → versioned event → **Pub/Sub** topic | A verified source is normalized and decoupled from later work. Failures route to a controlled dead-letter topic. |
| 3. Govern | Pub/Sub consumer → **Workflows** → Cloud Run rule service → **Vertex AI** adapter | Deterministic policy checks precede a schema-bound AI draft. Prohibited fields include price, quantity, terms, and allocation commitments. |
| 4. Decide | Workflows callback waits for the named rep’s approval event | A person accepts or rejects a bounded action. The callback is not a browser bypass; the API validates role, scope, policy, and workflow state. |
| 5. Prove | Approved command → optional Cloud Run delivery adapter → **Cloud SQL** audit record and **Cloud Logging** | The public reference simulates a receipt only. Any later production send must retain the approval, channel, consent, template version, receipt, exception state, and correlation ID. |

## Event and data contracts

Every integration event should carry a stable correlation ID, a versioned name, a tenant ID, an actor, a sandbox/production classification, and redaction posture. Provider-specific payloads should terminate in a Cloud Run adapter and be converted to a canonical Harborline event before Workflows or other domain services consume them.

```ts
type HarborlineEvent<T> = {
  id: string;
  name: string; // e.g. "audience.evaluated.v1"
  occurredAt: string;
  correlationId: string;
  tenantId: string;
  actor: { type: "system" | "user" | "provider"; id: string };
  payload: T;
  classification: "sandbox" | "production";
  redaction: "none" | "restricted";
};
```

Cloud SQL should own only the local operational model: `accounts`, `contacts`, `workflow_definitions`, `workflow_runs`, `approvals`, `communication_attempts`, `exceptions`, and `audit_events`. Source-system identifiers remain external references. The CRM, ERP, inventory, and delivery platforms retain their primary data ownership.

## Credit-conscious rollout

The initial public demonstrator uses static fixture data and has no Google Cloud runtime dependency. The first connected proof of concept should introduce only the components that prove the workflow boundary: Cloud Run, Pub/Sub, Workflows, Secret Manager, Cloud Logging, and an agreed minimal data store. Begin with one read-only source adapter and a **draft-for-rep** flow for a small consented account set.

Introduce Cloud SQL once the proof needs durable multi-user workflow records, relational audit queries, and managed PostgreSQL behavior. Do not activate a live delivery adapter merely because the infrastructure is available. Before delivery is enabled, require tenant isolation, least-privilege service accounts, validated webhooks, consent and channel policy, named approval ownership, retry/recovery handling, and audit review.

> **Release gate:** Live actions are enabled only after the client’s operating owners agree the data map, consent basis, policy boundary, exception process, recovery routine, and evidence review. Google Cloud infrastructure supports the workflow; it does not replace those product controls.

## Explicitly excluded from the reference build

The current build has no customer data, authentication, live source integrations, webhook verification, paid model invocation, Cloud SQL instance, provider secret, email/SMS delivery, or autonomous commercial decision. It remains a clickable reference layer that shows exactly where those capabilities will belong once the client and workflow scope are validated.

## References

[1]: https://cloud.google.com/run/docs "Cloud Run documentation"
[2]: https://cloud.google.com/pubsub/docs/overview "Google Cloud Pub/Sub overview"
[3]: https://cloud.google.com/workflows/docs/overview "Google Cloud Workflows overview"
[4]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview "Google Cloud Gemini Enterprise Agent Platform beginner’s guide"
[5]: https://cloud.google.com/sql/docs/introduction "Cloud SQL overview"
[6]: https://cloud.google.com/secret-manager/docs/overview "Google Cloud Secret Manager overview"
