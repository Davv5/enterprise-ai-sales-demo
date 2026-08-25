/**
 * Operator's Fieldbook design reminder:
 * This page is an asymmetric, evidence-first operations dossier. Keep decisions and control gates
 * legible, use Signal Vermilion only for active risk/action, and avoid generic dashboard symmetry.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  FileText,
  Gauge,
  Layers2,
  LockKeyhole,
  Mail,
  MessageSquareText,
  Route,
  Scale,
  Send,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const trackCopy = {
  communications: {
    eyebrow: "TRACK A · PROOF OF CAPABILITY",
    title: "Start with the missed reorder—not a CRM replacement.",
    description:
      "The communication sandbox is a controlled workflow product. It watches for a defined account signal, applies an approved eligibility rule, sends an approved message, preserves the evidence, and gives non-routine replies back to the human rep.",
    outcome: "A narrow, credible demo that shows no account falls through the cracks.",
    points: [
      "Mock or explicitly consented test data only",
      "One deterministic reorder reminder trigger",
      "Visible audit event and human escalation",
    ],
  },
  financial: {
    eyebrow: "TRACK B · METHODOLOGY VALIDATION",
    title: "Make the model explainable before making it client-facing.",
    description:
      "The financial-model product is a spreadsheet-first feasibility system for new beverage SKUs. Its initial deliverable is a model design review pack—not a set of unsupported outputs—with a formula map, input dictionary, source register, and scenario logic awaiting expert approval.",
    outcome: "A reviewer-approved foundation for cost, timeline, channel, cash, and breakeven decisions.",
    points: [
      "Classify product and regulatory gates explicitly",
      "Show sources, units, inputs, and formula lineage",
      "Validate tax, margin cascade, and scenario method",
    ],
  },
} as const;

const roadmapData = [
  { phase: "Discover", weeks: 2, detail: "Interviews + constraints", color: "#E6533C" },
  { phase: "Sandbox", weeks: 2, detail: "Controlled workflow", color: "#23384A" },
  { phase: "Validate", weeks: 2, detail: "Pilot offer + review", color: "#526F62" },
  { phase: "Prove", weeks: 2, detail: "Readiness + evidence", color: "#A6A49C" },
];

const roadmapStages = [
  {
    id: "discover",
    index: "01",
    period: "Weeks 1–2",
    title: "Listen before automating",
    description:
      "Interview retailers and reps about real communication patterns, preferred channels, relationship boundaries, and no-go situations.",
    gate: "Problem statement + do-not-automate list",
  },
  {
    id: "sandbox",
    index: "02",
    period: "Weeks 3–4",
    title: "Build a traceable sandbox",
    description:
      "Demonstrate one mock-data workflow: trigger, eligibility check, approved message, reply routing, and audit event.",
    gate: "Every message traceable end to end",
  },
  {
    id: "validate",
    index: "03",
    period: "Weeks 5–6",
    title: "Validate the wedge",
    description:
      "Use warm conversations for feedback, package a constrained pilot, and obtain finance-model methodology review.",
    gate: "Pilot interest + expert review outcome",
  },
  {
    id: "prove",
    index: "04",
    period: "Weeks 7–8",
    title: "Earn the right to expand",
    description:
      "Prepare a controlled opt-in pilot and a reviewer-approved spreadsheet skeleton with real baseline instrumentation.",
    gate: "Evidence supports rollout, revision, or pivot",
  },
];

const architectureLayers = [
  {
    id: "data",
    label: "01 · Data foundation",
    title: "Make the operating record reliable first.",
    copy: "Use stable account and product IDs, order history, channel preference, consent evidence, escalation owner, source date, and version owner. Manual or fragmented records are a data-readiness issue, not an AI prompt issue.",
  },
  {
    id: "logic",
    label: "02 · Reusable logic",
    title: "Keep business rules inspectable.",
    copy: "Separate trigger thresholds, audience eligibility, message templates, escalation rules, and audit-event schemas from client-specific configuration. The rule should be explainable without reading a model output.",
  },
  {
    id: "custom",
    label: "03 · Client customization",
    title: "Configure the edge cases; do not hide them.",
    copy: "Cadence, approved tone, CRM mappings, product classification flags, and channel terms are explicit client configuration. Those decisions must be visible to the project owner and reviewer.",
  },
  {
    id: "execution",
    label: "04 · Controlled execution",
    title: "Automation must preserve a human exit.",
    copy: "Use approved email/SMS delivery or spreadsheet outputs only after a control gate. Replies, complaints, disputes, and exceptions become a named human task—not an attempt to autonomously resolve the relationship.",
  },
];

const sources = [
  {
    n: "01",
    name: "NJ ABC · Current Price List",
    url: "https://www.njoag.gov/about/divisions-and-offices/division-of-alcoholic-beverage-control-home/licensing-bureau-applications-and-information/current-price-list-cpl/",
    detail: "Primary state resource informing price/promotion control design.",
  },
  {
    n: "02",
    name: "TTB · Formulation guidance",
    url: "https://www.ttb.gov/formulation",
    detail: "Primary federal guidance informing product-approval timeline gates.",
  },
  {
    n: "03",
    name: "FCC · Robocalls and texts guidance",
    url: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts",
    detail: "Primary federal consumer guidance informing consent and opt-out controls.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  const [activeTrack, setActiveTrack] = useState<keyof typeof trackCopy>("communications");
  const [activeStage, setActiveStage] = useState("discover");
  const [activeLayer, setActiveLayer] = useState("data");
  const [activeNav, setActiveNav] = useState("thesis");
  const track = trackCopy[activeTrack];
  const selectedStage = roadmapStages.find((stage) => stage.id === activeStage) ?? roadmapStages[0];
  const selectedLayer = architectureLayers.find((layer) => layer.id === activeLayer) ?? architectureLayers[0];

  useEffect(() => {
    const sectionIds = ["thesis", "portfolio", "roadmap", "architecture", "controls", "next"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveNav(visible.target.id);
      },
      { rootMargin: "-24% 0px -56% 0px", threshold: [0.05, 0.25, 0.6] },
    );
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fieldbook-shell">
      <aside className="field-rail" aria-label="Report navigation">
        <a className="rail-mark" href="#top" aria-label="Return to report start">
          <img src="/manus-storage/enterprise-ai-route-mark_eb2b5507.png" alt="Route and signal mark" />
        </a>
        <div className="rail-identity">
          <strong>ROUTE / SIGNAL</strong>
          <span>OPERATOR&apos;S<br />FIELDBOOK</span>
        </div>
        <div className="rail-route-key"><i /> SIX CONTROL GATES</div>
        <nav className="rail-nav">
          <a className={activeNav === "thesis" ? "is-active" : ""} aria-current={activeNav === "thesis" ? "step" : undefined} href="#thesis"><i /><span>01</span><b>Thesis</b></a>
          <a className={activeNav === "portfolio" ? "is-active" : ""} aria-current={activeNav === "portfolio" ? "step" : undefined} href="#portfolio"><i /><span>02</span><b>Two tracks</b></a>
          <a className={activeNav === "roadmap" ? "is-active" : ""} aria-current={activeNav === "roadmap" ? "step" : undefined} href="#roadmap"><i /><span>03</span><b>Roadmap</b></a>
          <a className={activeNav === "architecture" ? "is-active" : ""} aria-current={activeNav === "architecture" ? "step" : undefined} href="#architecture"><i /><span>04</span><b>Architecture</b></a>
          <a className={activeNav === "controls" ? "is-active" : ""} aria-current={activeNav === "controls" ? "step" : undefined} href="#controls"><i /><span>05</span><b>Controls</b></a>
          <a className={activeNav === "next" ? "is-active" : ""} aria-current={activeNav === "next" ? "step" : undefined} href="#next"><i /><span>06</span><b>Next actions</b></a>
        </nav>
        <div className="rail-footer">
          <span className="status-dot" />
          <p>Research synthesis<br />24 AUG 2026</p>
        </div>
      </aside>

      <main id="top" className="report-main">
        <header className="mobile-nav">
          <a href="#top" className="mobile-brand">
            <img src="/manus-storage/enterprise-ai-route-mark_eb2b5507.png" alt="" />
            <span>FIELD / 01</span>
          </a>
          <button type="button" onClick={() => window.print()} className="print-button">
            <FileText size={15} /> Save briefing
          </button>
        </header>

        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="hero-brandline">
              <img src="/manus-storage/enterprise-ai-route-mark_eb2b5507.png" alt="" />
              <span><strong>ROUTE / SIGNAL</strong><small>OPERATOR&apos;S FIELDBOOK</small></span>
              <em>CONTROL PATH / V1.0</em>
            </div>
            <SectionLabel>Enterprise AI strategy · leadership fieldbook</SectionLabel>
            <h1 id="hero-heading">Build the proof <em>before</em> the platform.</h1>
            <p className="hero-dek">
              A two-track plan for a beverage-alcohol workflow sandbox and a new-product financial-model foundation—sequenced around evidence, accountable automation, and real validation gates.
            </p>
            <div className="hero-meta">
              <span><Route size={15} /> TWO-TRACK PLAN</span>
              <span><Gauge size={15} /> 8-WEEK SEQUENCE</span>
              <span><ShieldCheck size={15} /> CONTROL FIRST</span>
            </div>
            <a href="#thesis" className="hero-link">Read the recommendation <ArrowDownRight size={18} /></a>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/manus-storage/enterprise-ai-hero_16488bbb.jpg" alt="" />
            <div className="hero-index">FIELD<br />01</div>
          </div>
        </section>

        <section id="thesis" className="thesis-section">
          <div className="margin-note"><span>THE CALL</span><i /></div>
          <div className="thesis-content">
            <SectionLabel>01 / Executive recommendation</SectionLabel>
            <div className="thesis-headline">
              <h2>Run two tracks.<br /><em>Lead with one.</em></h2>
              <p>
                Use the distributor communications sandbox as the first proof-of-capability and market-learning vehicle. Keep the financial model on a parallel methodology-validation path until qualified review signs off the mechanics.
              </p>
            </div>
            <div className="decision-grid">
              <article className="decision-card priority-card">
                <div className="card-icon"><Route size={20} /></div>
                <img className="route-seal" src="/manus-storage/enterprise-ai-route-mark_eb2b5507.png" alt="" />
                <p className="card-kicker">First demo</p>
                <h3>Reorder / restock reminder</h3>
                <p>Lowest-complexity signal, clearest outcome, and simplest evidence trail.</p>
                <span className="card-tag">START HERE</span>
              </article>
              <article className="decision-card">
                <div className="card-icon"><UserRoundCheck size={20} /></div>
                <p className="card-kicker">Commercial frame</p>
                <h3>Extend rep reach</h3>
                <p>More accounts covered, faster reorders, and fewer missed moments—not headcount replacement.</p>
              </article>
              <article className="decision-card">
                <div className="card-icon"><Scale size={20} /></div>
                <p className="card-kicker">Build constraint</p>
                <h3>Controls are features</h3>
                <p>Consent, eligibility, audit records, and a human exit belong in the initial definition of done.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio-section">
          <div className="portfolio-topline">
            <SectionLabel>02 / Portfolio structure</SectionLabel>
            <p>Choose a track to inspect its initial job, bound, and test of credibility.</p>
          </div>
          <div className="track-toggle" role="tablist" aria-label="Select workstream">
            <button
              role="tab"
              aria-selected={activeTrack === "communications"}
              className={activeTrack === "communications" ? "is-active" : ""}
              onClick={() => setActiveTrack("communications")}
            >
              <MessageSquareText size={17} /> Track A / Communication sandbox
            </button>
            <button
              role="tab"
              aria-selected={activeTrack === "financial"}
              className={activeTrack === "financial" ? "is-active" : ""}
              onClick={() => setActiveTrack("financial")}
            >
              <FileText size={17} /> Track B / Financial model
            </button>
          </div>
          <div className="track-panel">
            <div className="track-panel-copy">
              <SectionLabel>{track.eyebrow}</SectionLabel>
              <h2>{track.title}</h2>
              <p>{track.description}</p>
              <div className="track-outcome">
                <ArrowRight size={18} /> <span><strong>Success looks like:</strong> {track.outcome}</span>
              </div>
              <ul>
                {track.points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}
              </ul>
            </div>
            <div className="track-diagram">
              {activeTrack === "communications" ? (
                <>
                  <div className="flow-node"><Building2 size={18} /><span>Order signal</span></div>
                  <ChevronRight className="flow-arrow" size={21} />
                  <div className="flow-node active"><ClipboardCheck size={18} /><span>Eligibility</span></div>
                  <ChevronRight className="flow-arrow" size={21} />
                  <div className="flow-node"><Send size={18} /><span>Approved send</span></div>
                  <ChevronRight className="flow-arrow" size={21} />
                  <div className="flow-node"><UserRoundCheck size={18} /><span>Human handoff</span></div>
                </>
              ) : (
                <>
                  <div className="flow-node"><Layers2 size={18} /><span>Inputs</span></div>
                  <ChevronRight className="flow-arrow" size={21} />
                  <div className="flow-node active"><Gauge size={18} /><span>Formula map</span></div>
                  <ChevronRight className="flow-arrow" size={21} />
                  <div className="flow-node"><Scale size={18} /><span>Review gate</span></div>
                  <ChevronRight className="flow-arrow" size={21} />
                  <div className="flow-node"><FileText size={18} /><span>Scenario view</span></div>
                </>
              )}
            </div>
          </div>
        </section>

        <section id="roadmap" className="roadmap-section">
          <div className="roadmap-image" aria-hidden="true"><img src="/manus-storage/enterprise-ai-roadmap_e3b70f1e.jpg" alt="" /></div>
          <div className="roadmap-heading">
            <SectionLabel>03 / Sequenced implementation</SectionLabel>
            <h2>Evidence is the<br /><em>route line.</em></h2>
            <p>Every two weeks, the plan asks for a decision—not more vague activity.</p>
          </div>
          <div className="roadmap-chart-wrap" aria-label="Eight-week roadmap chart">
            <ResponsiveContainer width="100%" height={222}>
              <BarChart data={roadmapData} layout="vertical" margin={{ top: 2, right: 54, left: 0, bottom: 0 }}>
                <CartesianGrid horizontal={false} stroke="#D7D4CB" strokeDasharray="2 5" />
                <XAxis type="number" domain={[0, 2]} hide />
                <YAxis type="category" dataKey="phase" width={70} tick={{ fill: "#42505A", fontSize: 11, fontWeight: 700 }} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: "rgba(230,83,60,0.07)" }} contentStyle={{ border: "1px solid #D7D4CB", borderRadius: "0", boxShadow: "none", fontSize: "12px" }} formatter={(value) => [`${value} weeks`, "Duration"]} />
                <Bar dataKey="weeks" radius={[0, 0, 0, 0]} barSize={24}>
                  {roadmapData.map((item) => <Cell key={item.phase} fill={item.color} />)}
                  <LabelList dataKey="detail" position="right" fill="#42505A" fontSize={11} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="stage-grid">
            {roadmapStages.map((stage) => (
              <button
                key={stage.id}
                type="button"
                className={`stage-card ${activeStage === stage.id ? "is-selected" : ""}`}
                onClick={() => setActiveStage(stage.id)}
              >
                <span className="stage-index">{stage.index}</span>
                <span className="stage-period">{stage.period}</span>
                <strong>{stage.title}</strong>
                <span className="stage-gate">CONTROL GATE {stage.index}</span>
              </button>
            ))}
          </div>
          <div className="stage-detail">
            <div><span>SELECTED PHASE</span><strong>{selectedStage.index} / {selectedStage.period}</strong></div>
            <p>{selectedStage.description}</p>
            <div className="gate-chip"><BadgeCheck size={16} /> Gate: {selectedStage.gate}</div>
          </div>
        </section>

        <section id="architecture" className="architecture-section">
          <div className="architecture-content">
            <SectionLabel>04 / Enterprise AI stack applied</SectionLabel>
            <h2>Data before AI.<br /><em>Control before scale.</em></h2>
            <p className="architecture-intro">The video’s four-tier AI architecture becomes a practical build rule here: a reliable operating record, reusable workflow logic, explicit client configuration, and a controlled execution layer.</p>
            <div className="architecture-list" role="tablist" aria-label="Architecture layers">
              {architectureLayers.map((layer) => (
                <button key={layer.id} role="tab" aria-selected={activeLayer === layer.id} onClick={() => setActiveLayer(layer.id)} className={activeLayer === layer.id ? "is-active" : ""}>
                  <span>{layer.label}</span><ChevronRight size={17} />
                </button>
              ))}
            </div>
            <div className="layer-detail">
              <p className="layer-number">{selectedLayer.label}</p>
              <h3>{selectedLayer.title}</h3>
              <p>{selectedLayer.copy}</p>
            </div>
          </div>
          <div className="architecture-visual">
            <img src="/manus-storage/enterprise-ai-stack_12d3d9aa.jpg" alt="Abstract four-tier system illustration representing data foundation, reusable logic, custom configuration, and controlled execution." />
            <div className="visual-caption"><Layers2 size={16} /> 80 / 20 principle: reuse the foundation, configure the edge cases.</div>
          </div>
        </section>

        <section id="controls" className="controls-section">
          <div className="controls-visual">
            <img src="/manus-storage/enterprise-ai-governance_14dcf7a6.jpg" alt="Abstract operational governance illustration with an approval tag and controlled routes." />
          </div>
          <div className="controls-content">
            <div className="control-seal"><img src="/manus-storage/enterprise-ai-route-mark_eb2b5507.png" alt="" /><span>CONTROLLED<br />EXECUTION</span></div>
            <SectionLabel>05 / Non-negotiable controls</SectionLabel>
            <h2>Make the human handoff visible.</h2>
            <p>Price/promotion workflows and live messaging should not be treated as a prompt-writing exercise. The delivery system needs a visible permission record, a controlled audience, an approved message, a durable audit event, and a human exception path.</p>
            <div className="control-list">
              <div><LockKeyhole size={18} /><span><strong>Permission</strong> — Consent evidence, preferred channel, and suppression handling are modeled as data.</span></div>
              <div><ClipboardCheck size={18} /><span><strong>Eligibility</strong> — A price/promo send attaches to an approved audience and terms record, not individual improvisation.</span></div>
              <div><Mail size={18} /><span><strong>Evidence</strong> — Store trigger, template version, recipient, time, outcome, and exception in an exportable log.</span></div>
              <div><UserRoundCheck size={18} /><span><strong>Escalation</strong> — Complaints, disputes, ambiguity, or repeat non-response become a named rep task.</span></div>
            </div>
            <div className="legal-note"><CircleAlert size={17} /> <span><strong>Planning note:</strong> State-specific alcohol trade-practice and messaging requirements require qualified legal review before a live deployment.</span></div>
          </div>
        </section>

        <section id="next" className="next-section">
          <div className="next-heading">
            <SectionLabel>06 / Your next three actions</SectionLabel>
            <h2>Move the work<br />one <em>gate</em> at a time.</h2>
          </div>
          <div className="next-actions">
            <article><span>01</span><h3>Set the sandbox boundary</h3><p>Confirm mock-only versus explicit test consent, geography, and the initial delivery channel.</p></article>
            <article><span>02</span><h3>Run the interview sprint</h3><p>Book five retailer and three distributor-side conversations. Record exact preferences and non-negotiables.</p></article>
            <article><span>03</span><h3>Name your reviewers</h3><p>Secure alcohol-beverage compliance and finance/accounting reviewers for the respective gates.</p></article>
          </div>
        </section>

        <section className="sources-section">
          <div>
            <SectionLabel>Research trail</SectionLabel>
            <h2>Sources that shaped the build.</h2>
            <p>User-supplied briefs and video analysis were synthesized alongside the primary sources below. The report intentionally treats all starting assumptions as reviewable—not as production truth.</p>
          </div>
          <div className="source-list">
            {sources.map((source) => (
              <a href={source.url} target="_blank" rel="noreferrer" key={source.n}>
                <span>{source.n}</span>
                <div><strong>{source.name}</strong><small>{source.detail}</small></div>
                <ArrowDownRight size={18} />
              </a>
            ))}
          </div>
        </section>

        <footer className="report-footer">
          <div className="footer-brand"><img src="/manus-storage/enterprise-ai-route-mark_eb2b5507.png" alt="" /><span>FIELD / 01</span></div>
          <p>Prepared as a planning and research synthesis. Not legal, tax, or financial advice; have qualified professionals review any live communication or client-facing model.</p>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top <ArrowRight size={14} /></button>
        </footer>
      </main>
    </div>
  );
}
