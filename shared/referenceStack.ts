export type StackLayer = "source" | "orchestration" | "control" | "delivery" | "evidence";

export type StackNode = {
  id: string;
  layer: StackLayer;
  name: string;
  technology: string;
  status: "authoritative" | "configured" | "sandbox" | "protected";
  short: string;
  detail: string;
  reads?: string[];
  writes?: string[];
};

export type ReferenceEvent = {
  id: string;
  sequence: number;
  name: string;
  occurredAt: string;
  correlationId: string;
  actor: { type: "system" | "user" | "provider"; id: string };
  classification: "sandbox";
  redaction: "none" | "restricted";
  summary: string;
  nodeId: string;
  payload: Record<string, string | number | boolean | string[]>;
};

export type TraceStage = {
  id: string;
  order: number;
  title: string;
  eyebrow: string;
  outcome: string;
  control: string;
  nodeIds: string[];
  event: ReferenceEvent;
};

export type StackSnapshot = {
  environment: "sandbox";
  workflow: {
    id: "AL-09";
    name: string;
    purpose: string;
    policy: string;
  };
  nodes: StackNode[];
  contracts: {
    inputs: string[];
    tables: string[];
    protections: string[];
  };
  trace: TraceStage[];
};

export const REFERENCE_CORRELATION_ID = "run_al09_2026_08_26_018";

const sourceNodes: StackNode[] = [
  {
    id: "erp",
    layer: "source",
    name: "Order & inventory source",
    technology: "ERP / inventory adapter",
    status: "authoritative",
    short: "Read-only source event",
    detail: "A provider-specific adapter normalizes an allocation signal. Inventory, available quantity, price, and allocation decisions remain in the source system.",
    reads: ["allocation event", "product reference", "source version"],
  },
  {
    id: "crm",
    layer: "source",
    name: "Account relationship source",
    technology: "CRM adapter",
    status: "authoritative",
    short: "Read-only account context",
    detail: "The adapter retrieves account ownership, approved contacts, channel preference, consent state, and relationship metadata by external ID.",
    reads: ["account owner", "approved contact", "channel preference", "consent state"],
  },
];

const productNodes: StackNode[] = [
  {
    id: "edge-api",
    layer: "orchestration",
    name: "Integration façade",
    technology: "Cloudflare Workers",
    status: "configured",
    short: "Signed webhooks + typed API",
    detail: "The edge façade verifies inbound webhooks, maps provider objects into Harborline events, and exposes an authenticated command API. Secrets never reach the browser.",
    reads: ["versioned inbound event"],
    writes: ["canonical event", "workflow command"],
  },
  {
    id: "queue",
    layer: "orchestration",
    name: "Event transport",
    technology: "Cloudflare Queues",
    status: "configured",
    short: "Retryable async handoff",
    detail: "Queues decouple ingestion, delivery, reply processing, and audit persistence. A dead-letter queue retains failed messages for controlled investigation.",
    reads: ["canonical event"],
    writes: ["queued job", "failure record"],
  },
  {
    id: "workflow",
    layer: "orchestration",
    name: "Durable workflow",
    technology: "Cloudflare Workflows",
    status: "configured",
    short: "Stateful human-in-the-loop run",
    detail: "A durable run evaluates a versioned rule, pauses for approval, resumes only from a trusted approval event, and retries safe technical steps without re-sending communication.",
    reads: ["queued job", "workflow definition", "approval event"],
    writes: ["workflow state", "next command"],
  },
  {
    id: "policy",
    layer: "control",
    name: "Policy & eligibility engine",
    technology: "Versioned deterministic rules",
    status: "protected",
    short: "Visible rule boundary",
    detail: "Eligibility, approved channel, consent, template, and policy versions are evaluated deterministically. An exception never silently passes a rule.",
    reads: ["source facts", "policy version", "audience rule"],
    writes: ["eligibility result", "control decision"],
  },
  {
    id: "ai",
    layer: "control",
    name: "Bounded AI adapter",
    technology: "Structured-output LLM",
    status: "protected",
    short: "Draft + classify only",
    detail: "The model can draft from an approved template or classify a reply into a typed exception. It cannot set price, quantity, terms, eligibility exceptions, or delivery state.",
    reads: ["approved template", "permitted account context"],
    writes: ["typed draft", "exception classification"],
  },
  {
    id: "approval",
    layer: "control",
    name: "Human approval gate",
    technology: "Named accountable owner",
    status: "protected",
    short: "Rep action required",
    detail: "A named representative reviews a bounded draft and creates an approval event. The delivery adapter cannot receive a command without a linked approval record.",
    reads: ["typed draft", "policy decision"],
    writes: ["approval record"],
  },
];

const outputNodes: StackNode[] = [
  {
    id: "delivery",
    layer: "delivery",
    name: "Approved channel gateway",
    technology: "Email / SMS adapter interface",
    status: "sandbox",
    short: "Simulated receipt in this build",
    detail: "Production routes through a server-side provider adapter that enforces the approved channel and consent state. This reference build produces only a simulated receipt and has no delivery credentials.",
    reads: ["approved command", "contact channel", "consent state"],
    writes: ["delivery receipt", "provider status"],
  },
  {
    id: "database",
    layer: "evidence",
    name: "Operational data store",
    technology: "Cloudflare D1 + Drizzle ORM",
    status: "configured",
    short: "Tenant-scoped relational records",
    detail: "D1 holds Harborline’s minimal operational records: external references, workflow runs, approvals, communication attempts, exceptions, and audit events. Source systems remain authoritative for their domain data.",
    writes: ["workflow run", "approval", "exception", "audit event"],
  },
  {
    id: "audit",
    layer: "evidence",
    name: "Evidence & observability",
    technology: "Append-only audit + edge logs",
    status: "protected",
    short: "Correlated and redacted",
    detail: "Each transition shares a correlation ID, actor, rule/template version, and redaction posture. Operational logs support diagnosis without exposing message content or credentials.",
    reads: ["all canonical events"],
    writes: ["append-only audit record", "observability signal"],
  },
];

const event = (
  id: string,
  sequence: number,
  name: string,
  nodeId: string,
  summary: string,
  actor: ReferenceEvent["actor"],
  payload: ReferenceEvent["payload"],
): ReferenceEvent => ({
  id,
  sequence,
  name,
  nodeId,
  summary,
  actor,
  payload,
  occurredAt: `2026-08-26T14:${String(10 + sequence).padStart(2, "0")}:00.000Z`,
  correlationId: REFERENCE_CORRELATION_ID,
  classification: "sandbox",
  redaction: sequence === 6 ? "restricted" : "none",
});

export const referenceStackSnapshot: StackSnapshot = {
  environment: "sandbox",
  workflow: {
    id: "AL-09",
    name: "New Allocation Alert",
    purpose: "Turn a supplier allocation signal into a governed interest-check workflow without promising quantity, price, or terms.",
    policy: "No commercial commitment or external delivery exists in this reference build.",
  },
  nodes: [...sourceNodes, ...productNodes, ...outputNodes],
  contracts: {
    inputs: ["allocation.recorded.v1", "account.profile.read.v1", "contact.consent.read.v1"],
    tables: ["workflow_definitions", "workflow_runs", "approvals", "communication_attempts", "exceptions", "audit_events"],
    protections: ["server-only secrets", "signed webhooks", "tenant-scoped external IDs", "versioned rules and templates", "policy before delivery", "dead-letter investigation path"],
  },
  trace: [
    {
      id: "signal",
      order: 1,
      eyebrow: "SOURCE EVENT",
      title: "A new allocation is normalized",
      outcome: "The ERP adapter records a fictional Nila Reserve Gin allocation event and a source reference.",
      control: "The source system remains authoritative; Harborline does not decide inventory or allocation.",
      nodeIds: ["erp", "edge-api", "queue"],
      event: event("evt_001", 1, "allocation.recorded.v1", "erp", "Fictional 48-case allocation recorded for workflow evaluation.", { type: "provider", id: "erp-adapter" }, { productRef: "nila-reserve-gin", allocationRef: "alloc_demo_48", inventoryAuthoritative: true }),
    },
    {
      id: "audience",
      order: 2,
      eyebrow: "DETERMINISTIC CONTROL",
      title: "The eligible audience is evaluated",
      outcome: "The policy engine evaluates a versioned category-fit and account-hold rule against CRM-owned account facts.",
      control: "The rule produces a reviewable audience. It cannot quietly add an ineligible account.",
      nodeIds: ["crm", "workflow", "policy", "database"],
      event: event("evt_002", 2, "audience.evaluated.v1", "policy", "Three fictional accounts meet the active audience rule.", { type: "system", id: "policy-engine" }, { ruleVersion: "AL-09.v3", eligibleCount: 3, excludedReason: "account hold", audienceLocked: true }),
    },
    {
      id: "draft",
      order: 3,
      eyebrow: "BOUNDED AI OUTPUT",
      title: "A constrained interest check is prepared",
      outcome: "The AI adapter returns a typed draft from the approved template with no quantity, price, or allocation commitment fields.",
      control: "The LLM is restricted to drafting/classification and cannot decide commercial terms or policy exceptions.",
      nodeIds: ["ai", "workflow", "database"],
      event: event("evt_003", 3, "draft.prepared.v1", "ai", "Interest-check draft prepared from template AL-09 with restricted commercial fields omitted.", { type: "system", id: "structured-output-adapter" }, { templateVersion: "AL-09.v2", mode: "draft-for-rep", prohibitedFields: ["price", "quantity", "terms"] }),
    },
    {
      id: "approval",
      order: 4,
      eyebrow: "HUMAN CONTROL",
      title: "The named rep creates the approval event",
      outcome: "Marcus reviews the bounded draft and records a sandbox approval tied to the workflow run.",
      control: "No delivery command can be emitted without a named approver, current policy decision, and linked consent/channel facts.",
      nodeIds: ["approval", "workflow", "database"],
      event: event("evt_004", 4, "approval.recorded.v1", "approval", "Sandbox approval recorded by the named portfolio specialist.", { type: "user", id: "marcus-vale" }, { approver: "Marcus Vale", approvalScope: "interest-check only", deliveryPermitted: false }),
    },
    {
      id: "delivery",
      order: 5,
      eyebrow: "SANDBOX OUTPUT",
      title: "A receipt is simulated, never sent",
      outcome: "The channel adapter returns a fixture receipt to show the post-approval contract and provider correlation path.",
      control: "There are no delivery credentials, provider requests, or production contacts in this repository.",
      nodeIds: ["delivery", "queue", "database", "audit"],
      event: event("evt_005", 5, "delivery.simulated.v1", "delivery", "Sandbox delivery receipt recorded; no provider request was made.", { type: "system", id: "delivery-gateway" }, { provider: "not-configured", simulated: true, recipientRef: "contact_demo_001", receipt: "sim_001" }),
    },
    {
      id: "exception",
      order: 6,
      eyebrow: "HUMAN HANDOFF",
      title: "A non-routine reply becomes an exception",
      outcome: "A fictional buyer question about quantity and price is classified as a commercial exception and assigned to Marcus.",
      control: "The system preserves the context but does not draft a commercial reply, promise inventory, or alter the audience.",
      nodeIds: ["ai", "workflow", "database", "audit"],
      event: event("evt_006", 6, "exception.assigned.v1", "audit", "Commercial question routed to Marcus; response generation blocked.", { type: "system", id: "exception-router" }, { classification: "commercial-judgment", assignedTo: "Marcus Vale", responseGenerated: false, evidenceRetained: true }),
    },
  ],
};

export function createReferenceTrace() {
  return {
    traceId: REFERENCE_CORRELATION_ID,
    environment: "sandbox" as const,
    createdAt: "2026-08-26T14:10:00.000Z",
    workflow: referenceStackSnapshot.workflow,
    stages: referenceStackSnapshot.trace,
  };
}
