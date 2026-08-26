import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Brackets,
  Check,
  ChevronRight,
  CircleDotDashed,
  Cloud,
  Code2,
  Database,
  FileCheck2,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  MailCheck,
  Network,
  Play,
  RefreshCw,
  Route,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  TimerReset,
  UserRoundCheck,
  Waypoints,
} from "lucide-react";
import {
  createReferenceTrace,
  referenceStackSnapshot,
  type ReferenceEvent,
  type StackLayer,
  type StackNode,
  type StackSnapshot,
  type TraceStage,
} from "@shared/referenceStack";

type TraceResponse = {
  traceId: string;
  environment: "sandbox";
  createdAt: string;
  workflow: StackSnapshot["workflow"];
  stages: TraceStage[];
};

const layerLabels: Record<StackLayer, string> = {
  source: "Source systems",
  orchestration: "Harborline orchestration",
  control: "Control plane",
  delivery: "Approved output",
  evidence: "Evidence & operations",
};

const layerIcons: Record<StackLayer, typeof Database> = {
  source: Cloud,
  orchestration: Waypoints,
  control: ShieldCheck,
  delivery: MailCheck,
  evidence: FileCheck2,
};

const statusCopy: Record<StackNode["status"], string> = {
  authoritative: "System of record",
  configured: "Reference component",
  sandbox: "Sandbox-only",
  protected: "Guardrailed",
};

function jsonForEvent(event: ReferenceEvent) {
  return JSON.stringify(
    {
      id: event.id,
      name: event.name,
      occurredAt: event.occurredAt,
      correlationId: event.correlationId,
      actor: event.actor,
      classification: event.classification,
      redaction: event.redaction,
      payload: event.payload,
    },
    null,
    2,
  );
}

const visualFlowSteps = [
  {
    id: "signal",
    phase: "01 · SIGNAL",
    title: "Your existing tools see the change first.",
    short: "ERP + CRM",
    detail: "A product, inventory, order, or account signal comes from the systems your team already uses. Harborline reads the relevant facts; it does not replace those systems.",
    note: "Source systems remain authoritative.",
    icon: Cloud,
    tone: "source",
  },
  {
    id: "ingest",
    phase: "02 · CONNECT",
    title: "One secure gateway turns it into a usable event.",
    short: "Cloud Run + Pub/Sub",
    detail: "An authenticated Cloud Run integration façade verifies the source and gives the event a stable ID. Pub/Sub separates an incoming signal from the work that follows.",
    note: "Credentials and webhooks stay off the browser.",
    icon: Waypoints,
    tone: "orchestration",
  },
  {
    id: "govern",
    phase: "03 · GOVERN",
    title: "The workflow checks what is allowed before anything happens.",
    short: "Workflows + Vertex AI",
    detail: "Google Cloud Workflows applies the approved audience rule, channel, template, and policy boundary. Vertex AI may prepare a typed draft, but it cannot decide price, quantity, or terms.",
    note: "Controls are evaluated before output, not after.",
    icon: ShieldCheck,
    tone: "control",
  },
  {
    id: "approve",
    phase: "04 · DECIDE",
    title: "A named person keeps commercial judgment.",
    short: "Human approval",
    detail: "The right rep or operations owner sees the prepared context and decides whether the action is appropriate. Their approval becomes part of the workflow record.",
    note: "People own the moments that require judgment.",
    icon: UserRoundCheck,
    tone: "human",
  },
  {
    id: "evidence",
    phase: "05 · PROVE",
    title: "The outcome is recorded so the team can trust it.",
    short: "Cloud SQL + audit",
    detail: "Only an approved path can reach an output adapter. Cloud SQL then retains the receipt, exception handoff, and decision trail as evidence—this page simulates that step only.",
    note: "No live message is sent in this reference build.",
    icon: FileCheck2,
    tone: "evidence",
  },
] as const;

function VisualArchitectureStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = visualFlowSteps[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="story" className="visual-story" aria-labelledby="visual-story-title">
      <div className="visual-story-heading">
        <div>
          <p className="stack-kicker"><Route size={14} /> THE BUILD, EXPLAINED VISUALLY</p>
          <h2 id="visual-story-title">From a business signal<br /><em>to a trusted action.</em></h2>
          <p>Think of Harborline as the governed bridge between the systems that hold your data and the people who should make the final call. Select any station to see what happens and why it matters.</p>
        </div>
        <div className="visual-story-key"><span><i className="visual-key-dot source" /> Existing systems</span><span><i className="visual-key-dot control" /> Harborline controls</span><span><i className="visual-key-dot human" /> Human judgment</span><span><i className="visual-key-dot evidence" /> Evidence</span></div>
      </div>

      <div className={`visual-flow-shell active-${active.tone}`}>
        <div className="visual-flow-header"><span>FOLLOW THE WORKFLOW</span><div><b>AL-09</b><small>New Allocation Alert · fictional sandbox scenario</small></div><span className="visual-flow-progress">{String(activeIndex + 1).padStart(2, "0")} <small>/ 05</small></span></div>
        <div className="visual-flow-canvas">
          <svg className="visual-flow-lines" viewBox="0 0 1000 154" preserveAspectRatio="none" aria-hidden="true">
            <path d="M125 77 H272" /><path d="M327 77 H472" /><path d="M528 77 H674" /><path d="M728 77 H875" />
            {visualFlowSteps.slice(0, -1).map((step, index) => <circle key={step.id} className={index < activeIndex ? "complete" : index === activeIndex ? "current" : ""} cx={[250, 450, 652, 852][index]} cy="77" r="7" />)}
          </svg>
          {visualFlowSteps.map((step, index) => {
            const Icon = step.icon;
            const selected = index === activeIndex;
            const complete = index < activeIndex;
            return <button key={step.id} className={`visual-flow-node ${step.tone} ${selected ? "selected" : ""} ${complete ? "complete" : ""}`} onClick={() => setActiveIndex(index)} aria-pressed={selected}>
              <span className="visual-flow-number">{complete ? <Check size={13} /> : String(index + 1).padStart(2, "0")}</span>
              <span className="visual-flow-icon"><Icon size={21} /></span>
              <span className="visual-flow-label"><small>{step.phase}</small><strong>{step.short}</strong></span>
            </button>;
          })}
        </div>
        <div className="visual-explainer-panel">
          <div className={`visual-explainer-mark ${active.tone}`}><ActiveIcon size={20} /></div>
          <div className="visual-explainer-copy"><span>{active.phase}</span><h3>{active.title}</h3><p>{active.detail}</p></div>
          <aside><ShieldCheck size={15} /><div><small>WHY THIS MATTERS</small><strong>{active.note}</strong></div></aside>
        </div>
      </div>

      <div className="visual-story-caption"><span><CircleDotDashed size={15} /> The event travels through a controlled path—not a black box.</span><p>Every handoff has a purpose: source systems provide facts, the workflow applies rules, a human makes the business decision, and the system preserves the evidence.</p></div>
    </section>
  );
}

export default function StackReference() {
  const [snapshot, setSnapshot] = useState<StackSnapshot>(referenceStackSnapshot);
  const [apiState, setApiState] = useState<"fixture" | "reference-api">("fixture");
  const [activeStageId, setActiveStageId] = useState("signal");
  const [activeNodeId, setActiveNodeId] = useState("workflow");
  const [trace, setTrace] = useState<TraceResponse | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [contractPanel, setContractPanel] = useState<"event" | "data" | "protection">("event");

  useEffect(() => {
    let mounted = true;

    async function loadReference() {
      try {
        const response = await fetch("/api/reference/stack", {
          headers: { Accept: "application/json" },
        });
        if (!response.ok) return;
        const body = (await response.json()) as StackSnapshot;
        if (mounted && body?.workflow?.id === "AL-09") {
          setSnapshot(body);
          setApiState("reference-api");
        }
      } catch {
        // Static Cloudflare Pages delivery intentionally falls back to local fixtures.
      }
    }

    void loadReference();
    return () => {
      mounted = false;
    };
  }, []);

  const stages = trace?.stages ?? snapshot.trace;
  const activeStage = stages.find((stage) => stage.id === activeStageId) ?? stages[0];
  const activeNode = snapshot.nodes.find((node) => node.id === activeNodeId) ?? snapshot.nodes[0];
  const visibleStages = stages.slice(0, visibleCount);
  const focusedNodeIds = new Set(activeStage.nodeIds);

  const nodesByLayer = useMemo(() => {
    return (Object.keys(layerLabels) as StackLayer[]).map((layer) => ({
      layer,
      nodes: snapshot.nodes.filter((node) => node.layer === layer),
    }));
  }, [snapshot.nodes]);

  const startTrace = async () => {
    if (running) return;
    setRunning(true);
    setVisibleCount(0);
    setActiveStageId("signal");
    setActiveNodeId("erp");

    let nextTrace = createReferenceTrace() as TraceResponse;
    try {
      const response = await fetch("/api/reference/traces", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ workflow: "AL-09" }),
      });
      if (response.ok) {
        const body = (await response.json()) as TraceResponse;
        if (body?.stages?.length) {
          nextTrace = body;
          setApiState("reference-api");
        }
      }
    } catch {
      // The public static deployment remains fully demonstrable with fixture events.
    }

    setTrace(nextTrace);
    for (let index = 0; index < nextTrace.stages.length; index += 1) {
      const stage = nextTrace.stages[index];
      await new Promise((resolve) => window.setTimeout(resolve, index === 0 ? 180 : 480));
      setVisibleCount(index + 1);
      setActiveStageId(stage.id);
      setActiveNodeId(stage.nodeIds[stage.nodeIds.length - 1]);
    }
    setRunning(false);
  };

  const resetTrace = () => {
    setTrace(null);
    setVisibleCount(0);
    setActiveStageId("signal");
    setActiveNodeId("workflow");
  };

  const chooseStage = (stage: TraceStage) => {
    setActiveStageId(stage.id);
    setActiveNodeId(stage.nodeIds[stage.nodeIds.length - 1]);
  };

  return (
    <div className="stack-shell">
      <header className="stack-topbar">
        <a href="/" className="stack-brand" aria-label="Return to Harborline demo">
          <span className="stack-brand-mark"><Route size={19} /></span>
          <span><strong>HARBORLINE</strong><small>REFERENCE BUILD</small></span>
        </a>
        <nav className="stack-nav" aria-label="Reference navigation">
          <a href="#story">Story</a>
          <a href="#trace">Trace</a>
          <a href="#architecture">Architecture</a>
          <a href="#contracts">Contracts</a>
        </nav>
        <a href="/" className="stack-return"><ArrowLeft size={15} /> Product demo</a>
      </header>

      <main>
        <section className="stack-hero" aria-labelledby="stack-title">
          <div className="stack-hero-copy">
            <div className="stack-kicker"><Network size={14} /> GOOGLE CLOUD REFERENCE · {apiState === "reference-api" ? "REFERENCE API CONNECTED" : "STATIC FIXTURE MODE"}</div>
            <h1 id="stack-title">A Google Cloud operating stack,<br /><em>shown without theater.</em></h1>
            <p>Harborline sits between systems of record and approved customer communication. This reference build makes the Google Cloud data path, decision boundaries, and technical contracts visible—without connecting to a CRM, ERP, model, or delivery provider.</p>
            <div className="stack-hero-actions">
              <button className="stack-primary" onClick={startTrace} disabled={running}>
                {running ? <RefreshCw size={16} className="stack-spin" /> : <Play size={16} />}
                {running ? "Running sandbox trace" : "Run allocation trace"}
                <ArrowRight size={15} />
              </button>
              <a href="#architecture" className="stack-secondary"><Layers3 size={16} /> Inspect the stack</a>
            </div>
          </div>
          <aside className="stack-hero-rail">
            <div className="stack-sandbox-seal"><ShieldCheck size={17} /><span><strong>Sandbox guardrail</strong><small>No credentials · no client data · no live delivery</small></span></div>
            <dl className="stack-run-facts">
              <div><dt>REFERENCE WORKFLOW</dt><dd>{snapshot.workflow.id} · {snapshot.workflow.name}</dd></div>
              <div><dt>EVENT CONTRACT</dt><dd>Versioned · correlated · redacted</dd></div>
              <div><dt>DECISION POSTURE</dt><dd>Human approval before output</dd></div>
            </dl>
            <p>{snapshot.workflow.policy}</p>
          </aside>
        </section>

        <VisualArchitectureStory />

        <section className="stack-principles" aria-label="Reference build principles">
          <div><span><ServerCog size={17} /></span><strong>Systems stay authoritative</strong><p>CRM, ERP, ordering, inventory, and pricing remain outside Harborline’s ownership boundary.</p></div>
          <div><span><BrainCircuit size={17} /></span><strong>AI is narrowly typed</strong><p>It drafts from approved content or classifies an exception; it cannot decide commercial terms.</p></div>
          <div><span><UserRoundCheck size={17} /></span><strong>People own judgment</strong><p>Named approval and exception records make commercial and policy decisions inspectable.</p></div>
          <div><span><FileCheck2 size={17} /></span><strong>Every transition is evidence</strong><p>Events retain an actor, a correlation ID, a version, and an explicit redaction posture.</p></div>
        </section>

        <section id="trace" className="stack-trace-section" aria-labelledby="trace-title">
          <div className="stack-section-heading">
            <div><p className="stack-kicker"><CircleDotDashed size={14} /> CLICKABLE SYSTEM TRACE</p><h2 id="trace-title">One allocation event. <em>Six controlled transitions.</em></h2><p>The same event envelope travels through every layer. Select any step to inspect the outcome, control, and typed payload.</p></div>
            <div className="stack-trace-meta"><span>{visibleCount || 0}<small>/ 6 visible</small></span><button className="stack-reset" onClick={resetTrace} disabled={!trace && visibleCount === 0}><RefreshCw size={14} /> Reset</button></div>
          </div>

          <div className="stack-trace-layout">
            <div className="stack-trace-rail" aria-label="Allocation trace steps">
              {stages.map((stage, index) => {
                const stageVisible = index < visibleCount;
                const active = stage.id === activeStage.id;
                return <button key={stage.id} className={`stack-trace-step ${stageVisible ? "visible" : ""} ${active ? "active" : ""}`} onClick={() => chooseStage(stage)}>
                  <span className="stack-trace-index">{stageVisible ? <Check size={13} /> : String(stage.order).padStart(2, "0")}</span>
                  <span className="stack-trace-copy"><small>{stage.eyebrow}</small><strong>{stage.title}</strong><em>{stage.event.name}</em></span>
                  <ChevronRight size={16} />
                </button>;
              })}
            </div>

            <article className="stack-stage-detail">
              <div className="stack-stage-topline"><span>{activeStage.eyebrow}</span><code>{activeStage.event.name}</code></div>
              <h3>{activeStage.title}</h3>
              <div className="stack-stage-columns">
                <div><p className="stack-label">WHAT THE SYSTEM PRODUCES</p><p>{activeStage.outcome}</p></div>
                <div className="stack-control-callout"><ShieldCheck size={17} /><div><p className="stack-label">CONTROL BOUNDARY</p><p>{activeStage.control}</p></div></div>
              </div>
              <div className="stack-stage-route"><span>EVENT ROUTE</span>{activeStage.nodeIds.map((nodeId, index) => {
                const node = snapshot.nodes.find((item) => item.id === nodeId);
                return <span className="stack-route-node" key={nodeId}>{index > 0 ? <ArrowRight size={14} /> : null}<button onClick={() => setActiveNodeId(nodeId)}>{node?.name}</button></span>;
              })}</div>
              <div className="stack-event-preview"><div><span>EVENT #{String(activeStage.event.sequence).padStart(2, "0")}</span><strong>{activeStage.event.summary}</strong></div><button onClick={() => setContractPanel("event")}><Brackets size={15} /> Inspect envelope</button></div>
            </article>
          </div>
        </section>

        <section id="architecture" className="stack-architecture" aria-labelledby="architecture-title">
          <div className="stack-section-heading">
            <div><p className="stack-kicker"><GitBranch size={14} /> DEPLOYABLE REFERENCE ARCHITECTURE</p><h2 id="architecture-title">The Google Cloud shape <em>behind the product.</em></h2><p>Every box is a concrete implementation concern. The colored focus path reflects the selected allocation-trace stage.</p></div>
            <div className="stack-legend"><span className="source">Sources</span><span className="orchestration">Orchestration</span><span className="control">Controls</span><span className="delivery">Output</span><span className="evidence">Evidence</span></div>
          </div>

          <div className="stack-architecture-grid">
            <div className="stack-node-map">
              {nodesByLayer.map(({ layer, nodes }) => {
                const Icon = layerIcons[layer];
                return <section key={layer} className={`stack-layer stack-layer-${layer}`}><div className="stack-layer-title"><span><Icon size={15} /></span><div><small>LAYER</small><strong>{layerLabels[layer]}</strong></div></div><div className="stack-node-row">{nodes.map((node) => {
                  const focused = focusedNodeIds.has(node.id);
                  const selected = node.id === activeNode.id;
                  return <button key={node.id} className={`stack-node ${focused ? "focused" : ""} ${selected ? "selected" : ""}`} onClick={() => setActiveNodeId(node.id)}><span className={`stack-node-status ${node.status}`} /> <small>{node.technology}</small><strong>{node.name}</strong><em>{node.short}</em></button>;
                })}</div></section>;
              })}
            </div>

            <aside className="stack-node-inspector" aria-live="polite">
              <div className="stack-inspector-mark"><Code2 size={18} /></div><p className="stack-label">SELECTED COMPONENT</p><h3>{activeNode.name}</h3><span className={`stack-status-tag ${activeNode.status}`}>{statusCopy[activeNode.status]}</span><p>{activeNode.detail}</p>
              <div className="stack-read-write"><div><span>READS</span>{activeNode.reads?.length ? activeNode.reads.map((item) => <small key={item}>{item}</small>) : <small>—</small>}</div><div><span>WRITES</span>{activeNode.writes?.length ? activeNode.writes.map((item) => <small key={item}>{item}</small>) : <small>—</small>}</div></div>
              <div className="stack-inspector-note"><LockKeyhole size={15} /><p>Provider credentials and the ability to perform external actions stay on the server side of this boundary.</p></div>
            </aside>
          </div>
        </section>

        <section id="contracts" className="stack-contracts" aria-labelledby="contract-title">
          <div className="stack-section-heading"><div><p className="stack-kicker"><ScanSearch size={14} /> IMPLEMENTATION CONTRACTS</p><h2 id="contract-title">Inspectable by design, <em>replaceable by provider.</em></h2><p>The reference code shares a typed event model between the explorer and API. Production adapters will map provider objects inside authenticated Cloud Run services instead of leaking them through the application.</p></div></div>
          <div className="stack-contract-tabs" role="tablist" aria-label="Contract details">
            <button role="tab" aria-selected={contractPanel === "event"} className={contractPanel === "event" ? "active" : ""} onClick={() => setContractPanel("event")}><Brackets size={15} /> Event envelope</button>
            <button role="tab" aria-selected={contractPanel === "data"} className={contractPanel === "data" ? "active" : ""} onClick={() => setContractPanel("data")}><Database size={15} /> Operational data</button>
            <button role="tab" aria-selected={contractPanel === "protection"} className={contractPanel === "protection" ? "active" : ""} onClick={() => setContractPanel("protection")}><KeyRound size={15} /> Protections</button>
          </div>
          <div className="stack-contract-body">
            {contractPanel === "event" ? <><div className="stack-contract-copy"><span className="stack-status-tag sandbox">Fixture event</span><h3>{activeStage.event.name}</h3><p>Every state transition carries a stable correlation ID, a named actor, an explicit sandbox/production classification, and a redaction designation. Provider-specific payloads stop at their adapter boundary.</p><dl><div><dt>CORRELATION ID</dt><dd>{activeStage.event.correlationId}</dd></div><div><dt>ACTOR</dt><dd>{activeStage.event.actor.type} · {activeStage.event.actor.id}</dd></div><div><dt>REDACTION</dt><dd>{activeStage.event.redaction}</dd></div></dl></div><pre aria-label="Event envelope example"><code>{jsonForEvent(activeStage.event)}</code></pre></> : null}
            {contractPanel === "data" ? <><div className="stack-contract-copy"><span className="stack-status-tag configured">Minimal local record</span><h3>Operational facts, not a data takeover.</h3><p>Harborline stores only the information it needs to govern a workflow and retain evidence. External IDs point back to the CRM, ERP, inventory, and delivery systems that remain authoritative.</p><dl><div><dt>WORKFLOW RUN</dt><dd>Rule, template, actor, state</dd></div><div><dt>COMMUNICATION</dt><dd>Channel, consent, receipt, status</dd></div><div><dt>EXCEPTION</dt><dd>Classification, owner, handoff</dd></div></dl></div><div className="stack-record-list">{snapshot.contracts.tables.map((table) => <div key={table}><Database size={15} /><code>{table}</code><Check size={15} /></div>)}</div></> : null}
            {contractPanel === "protection" ? <><div className="stack-contract-copy"><span className="stack-status-tag protected">Non-negotiable boundary</span><h3>The browser never has authority to deliver.</h3><p>Operational safeguards are implementation requirements, not visual decoration. They are checked before an approved command is created and recorded in the audit path.</p><dl><div><dt>TRUST</dt><dd>Signed provider inputs</dd></div><div><dt>AUTHORITY</dt><dd>Human approval + policy</dd></div><div><dt>RECOVERY</dt><dd>Retry + dead-letter path</dd></div></dl></div><div className="stack-protection-list">{snapshot.contracts.protections.map((protection) => <div key={protection}><ShieldCheck size={16} /><span>{protection}</span></div>)}</div></> : null}
          </div>
        </section>

        <section className="stack-next-step">
          <div><p className="stack-kicker"><TimerReset size={14} /> BUILD SEQUENCE</p><h2>Start connected only when<br /><em>the operating boundary is agreed.</em></h2></div>
          <div className="stack-next-grid"><div><span>01</span><p><strong>Choose one source</strong>Begin with a read-only CRM, ERP, or order data adapter and stable external IDs.</p></div><div><span>02</span><p><strong>Prove draft-for-rep</strong>Run a single consented workflow before enabling an approved channel adapter.</p></div><div><span>03</span><p><strong>Add Google Cloud controls</strong>Introduce Cloud IAM, tenant isolation, Secret Manager, Cloud Logging, and audited policy configuration before customer data.</p></div></div>
        </section>
      </main>

      <footer className="stack-footer"><span>HARBORLINE REFERENCE BUILD · SANDBOX ONLY</span><span>React + TypeScript · Google Cloud–native target architecture · fixture-backed contracts</span></footer>
    </div>
  );
}
