# Google Cloud Reference Stack Research

## Reference architecture fit

The technical-stack reference should move from a Cloudflare-oriented deployment model to a **Google Cloud–native governed workflow stack**. The intended pattern is a serverless application and API on Cloud Run, asynchronous integration via Pub/Sub, durable human-in-the-loop orchestration through Workflows, a managed relational audit store on Cloud SQL for PostgreSQL, bounded Gemini access through Vertex AI, and server-only credentials in Secret Manager.

| Product responsibility | Google Cloud service | Why it fits the Harborline reference build |
| --- | --- | --- |
| Web application and integration API | **Cloud Run** | Runs containerized UI/API services without infrastructure administration and can host authenticated APIs, webhook targets, and background-facing service endpoints. [1] |
| Business-process orchestration | **Workflows** | Provides a serverless, observable process definition that can call Cloud Run and HTTP APIs, hold state, retry, and wait for approvals or callbacks. [2] |
| Event transport and decoupling | **Pub/Sub** | Asynchronously decouples event producers and processors, supports service integration patterns, and includes dead-letter queue capabilities. [3] |
| Operational data and audit record | **Cloud SQL for PostgreSQL** | Provides managed relational storage with managed backup, high availability/failover options, monitoring, logging, and standard PostgreSQL semantics. [4] |
| Structured drafting and exception classification | **Vertex AI Gemini** | Provides managed generative models. The application boundary should limit model access to schema-bound drafting/classification; external actions remain under deterministic rules and human approval. [5] |
| Provider credentials and connector secrets | **Secret Manager** | Provides versioned secrets, IAM-based access, rotation, and audit logging, keeping secrets out of source control and the browser. [6] |
| Logging and investigation | **Cloud Logging and Cloud Audit Logs** | Workflows creates execution logs and exposes Audit Logs; the reference design will preserve application-level audit events alongside platform observability. [2] |
| Scheduled trigger evaluation | **Cloud Scheduler** | Starts controlled periodic evaluations such as reorder-cadence checks rather than requiring an always-on worker. [2] |

## Credit-conscious implementation posture

The visual reference will distinguish the **demonstration path** from the later production path. The demonstration remains a safe, static fixture experience. For a connected proof of concept, Cloud Run, Pub/Sub, Workflows, Secret Manager, Cloud Logging, and a minimal state store are the first services to activate. A managed PostgreSQL instance should be introduced when persistent multi-user workflow records and relational audit queries are required, rather than simply to power the initial showcase.

> Google Cloud’s Workflows can wait for a callback or external event without polling, which is a strong fit for a named human approval gate. The workflow—not the language model—should be responsible for the state transition from prepared draft to approved action. [2]

## Reference flow

1. A CRM, ERP, order, or inventory adapter calls an authenticated Cloud Run ingestion endpoint.
2. The API verifies the input and publishes a versioned event to Pub/Sub.
3. A Workflows execution begins and calls Cloud Run policy/eligibility services.
4. A Vertex AI adapter may prepare a typed draft or classify an inbound reply under a restricted schema.
5. Workflows pauses at a callback-backed human approval state; the named rep creates the approval event in the application.
6. After a valid approval, a Cloud Run output adapter may call a selected provider. The current public reference continues to record only a simulated receipt.
7. The audit service stores the workflow record, approval, receipt, exception, correlation ID, and redaction posture in Cloud SQL; platform execution information remains visible through Cloud Logging and Audit Logs.

## References

[1]: https://cloud.google.com/run/docs "Cloud Run documentation"
[2]: https://cloud.google.com/workflows/docs/overview "Google Cloud Workflows overview"
[3]: https://cloud.google.com/pubsub/docs/overview "Google Cloud Pub/Sub overview"
[4]: https://cloud.google.com/sql/docs/introduction "Cloud SQL overview"
[5]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview "Google Cloud Gemini Enterprise Agent Platform beginner’s guide"
[6]: https://cloud.google.com/secret-manager/docs/overview "Google Cloud Secret Manager overview"
