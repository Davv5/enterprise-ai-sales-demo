/**
 * Harborline Command design reminder:
 * Build a premium operational demo, not a generic analytics dashboard. The UI should let a seller
 * explain account coverage, evidence, control, and rep ownership in one clean narrative. Use
 * Signal Vermilion only for active risks/actions; all data is fictional demonstration data.
 */
import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BellRing,
  BookOpen,
  ChevronRight,
  CircleCheck,
  ClipboardCheck,
  Clock3,
  Command,
  FileCheck2,
  Filter,
  Gauge,
  LayoutDashboard,
  Mail,
  MoreHorizontal,
  PackageCheck,
  Play,
  RefreshCcw,
  Route,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type View = "command" | "account" | "audit";

const cadenceData = [
  { cycle: "May 06", cases: 8 },
  { cycle: "May 27", cases: 11 },
  { cycle: "Jun 17", cases: 11 },
  { cycle: "Jul 08", cases: 10 },
  { cycle: "Jul 29", cases: 0 },
  { cycle: "Aug 20", cases: 0 },
];

const riskAccounts = [
  {
    id: "juniper",
    name: "Juniper Bottle House",
    place: "Montclair, NJ",
    signal: "38d since reorder",
    reason: "17 days beyond usual cadence",
    owner: "Renee Lewis",
    initials: "RL",
    priority: "High",
    product: "Solara Coastal Spritz · Citrus 4-pack",
    status: "Ready for review",
    tone: "high",
  },
  {
    id: "fleetwood",
    name: "Fleetwood Spirits",
    place: "Hoboken, NJ",
    signal: "31d since reorder",
    reason: "Missed expected order window",
    owner: "Marcus Vale",
    initials: "MV",
    priority: "High",
    product: "Nila Reserve Gin · 750ml",
    status: "Rep review",
    tone: "high",
  },
  {
    id: "corner",
    name: "Corner Cellars",
    place: "Maplewood, NJ",
    signal: "26d since reorder",
    reason: "Category cadence slowing",
    owner: "Elise Park",
    initials: "EP",
    priority: "Medium",
    product: "Northline Brut · 750ml",
    status: "Monitor",
    tone: "medium",
  },
  {
    id: "garnet",
    name: "Garnet & Grain",
    place: "Jersey City, NJ",
    signal: "23d since reorder",
    reason: "Approaching expected cadence",
    owner: "Renee Lewis",
    initials: "RL",
    priority: "Medium",
    product: "Kestrel Red Blend · 750ml",
    status: "Monitor",
    tone: "medium",
  },
];

const initialEvents = [
  { time: "08:12", label: "Cadence signal detected", detail: "38d gap exceeds 21d expected cadence", icon: Gauge, state: "signal" },
  { time: "08:13", label: "Eligibility confirmed", detail: "Account channel preference and owner assignment checked", icon: BadgeCheck, state: "verified" },
  { time: "08:14", label: "Outreach prepared", detail: "Approved availability-check template selected", icon: Mail, state: "prepared" },
];

const guidedSteps = [
  { n: "01", name: "Coverage", detail: "Start with what needs attention" },
  { n: "02", name: "Signal", detail: "Explain the account story" },
  { n: "03", name: "Control", detail: "Review approved outreach" },
  { n: "04", name: "Evidence", detail: "Open the audit trail" },
  { n: "05", name: "Handoff", detail: "Give judgment back to the rep" },
];

function LogoMark() {
  return <img className="brand-mark" src="/manus-storage/enterprise-ai-route-mark_eb2b5507.png" alt="Route and signal mark" />;
}

function Avatar({ initials, small = false }: { initials: string; small?: boolean }) {
  return <span className={`avatar ${small ? "avatar-small" : ""}`}>{initials}</span>;
}

function Metric({ value, label, delta, tone = "neutral" }: { value: string; label: string; delta?: string; tone?: "neutral" | "risk" | "good" }) {
  return (
    <article className="metric-block">
      <div className="metric-top"><span>{label}</span>{delta ? <em className={`metric-delta ${tone}`}>{delta}</em> : null}</div>
      <strong>{value}</strong>
    </article>
  );
}

export default function Home() {
  const initialView: View = typeof window !== "undefined" && ["account", "audit"].includes(window.location.hash.slice(1))
    ? window.location.hash.slice(1) as View
    : "command";
  const [view, setView] = useState<View>(initialView);
  const [guided, setGuided] = useState(false);
  const [guidedStep, setGuidedStep] = useState(0);
  const [outreachOpen, setOutreachOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [escalated, setEscalated] = useState(false);
  const [showReadiness, setShowReadiness] = useState(false);

  const events = useMemo(() => {
    const list = [...initialEvents];
    if (sent) list.push({ time: "09:02", label: "Approved outreach simulated", detail: "Availability-check email staged for demo recipient", icon: Send, state: "sent" });
    if (escalated) list.push({ time: "09:08", label: "Reply escalated to Renee Lewis", detail: "Pricing-related request requires human review", icon: UserRound, state: "escalated" });
    return list;
  }, [sent, escalated]);

  useEffect(() => {
    const hash = view === "command" ? "" : `#${view}`;
    window.history.replaceState(null, "", `${window.location.pathname}${hash}`);
  }, [view]);

  const resetDemo = () => {
    setView("command");
    setGuided(false);
    setGuidedStep(0);
    setOutreachOpen(false);
    setSent(false);
    setEscalated(false);
    setShowReadiness(false);
  };

  const selectJuniper = () => {
    setView("account");
    if (guided) setGuidedStep(1);
  };

  const openOutreach = () => {
    setView("account");
    setOutreachOpen(true);
    if (guided) setGuidedStep(2);
  };

  const showAudit = () => {
    setView("audit");
    if (guided) setGuidedStep(3);
  };

  const simulateSend = () => {
    setSent(true);
    setOutreachOpen(false);
    setView("audit");
    if (guided) setGuidedStep(3);
  };

  const simulateReply = () => {
    setEscalated(true);
    setView("audit");
    if (guided) setGuidedStep(4);
  };

  return (
    <div className="demo-app">
      <aside className="demo-sidebar">
        <div>
          <div className="brand-lockup">
            <LogoMark />
            <div><strong>HARBORLINE</strong><span>COMMAND</span></div>
          </div>
          <div className="environment-pill"><span /> DEMO ENVIRONMENT</div>
          <nav className="primary-nav" aria-label="Product navigation">
            <button className={view === "command" ? "active" : ""} onClick={() => setView("command")}><LayoutDashboard size={18} /> Command center</button>
            <button className={view === "account" ? "active" : ""} onClick={selectJuniper}><UsersRound size={18} /> Account stories</button>
            <button className={view === "audit" ? "active" : ""} onClick={showAudit}><FileCheck2 size={18} /> Audit evidence</button>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="owner-mini"><Avatar initials="RL" small /><div><span>DEMO OWNER</span><strong>Renee Lewis</strong></div></div>
          <button className="reset-button" onClick={resetDemo}><RefreshCcw size={14} /> Reset demo</button>
        </div>
      </aside>

      <main className="demo-main">
        <header className="topbar">
          <div className="breadcrumb"><span>HARBORLINE /</span> <strong>{view === "command" ? "ACCOUNT COVERAGE" : view === "account" ? "ACCOUNT STORY" : "CONTROL LOG"}</strong></div>
          <div className="topbar-actions">
            <span className="fictional-badge"><Sparkles size={13} /> Fictional scenario</span>
            <button className="icon-button" aria-label="Search"><Search size={18} /></button>
            <button className="icon-button" aria-label="Notifications"><BellRing size={18} /><i /></button>
            <button className="avatar-button"><Avatar initials="OL" small /></button>
          </div>
        </header>

        {guided ? (
          <section className="pitch-strip" aria-label="Guided pitch flow">
            <div className="pitch-strip-heading"><Play size={14} fill="currentColor" /> <span>LIVE PITCH PATH</span></div>
            <div className="pitch-steps">
              {guidedSteps.map((step, index) => (
                <button key={step.n} onClick={() => setGuidedStep(index)} className={index === guidedStep ? "current" : index < guidedStep ? "done" : ""}>
                  <span>{step.n}</span><strong>{step.name}</strong>
                </button>
              ))}
            </div>
            <p>{guidedSteps[guidedStep].detail}</p>
          </section>
        ) : null}

        {view === "command" ? (
          <section className="workspace command-workspace">
            <div className="workspace-heading">
              <div>
                <p className="eyebrow">MONDAY, AUGUST 24 · 08:42</p>
                <h1>Coverage, with <em>context.</em></h1>
                <p className="workspace-dek">See the accounts that need attention, the evidence behind each signal, and the representative accountable for the relationship.</p>
              </div>
              <div className="heading-actions">
                <button className="secondary-button" onClick={() => setShowReadiness(true)}><BookOpen size={16} /> Implementation view</button>
                <button className="primary-button" onClick={() => { setGuided(true); setGuidedStep(0); }}><Play size={15} fill="currentColor" /> Start guided pitch</button>
              </div>
            </div>

            <section className="command-summary">
              <div className="summary-story">
                <div className="summary-flag"><Route size={16} /> ACTIVE COVERAGE WINDOW</div>
                <h2>12 account moments deserve a human look today.</h2>
                <p>Harborline’s command center does not replace the sales relationship. It makes the routine signals visible before an account falls through the cracks.</p>
                <button onClick={selectJuniper} className="text-link">Open highest-priority account <ArrowRight size={16} /></button>
              </div>
              <div className="summary-metrics">
                <Metric value="12" label="ATTENTION QUEUE" delta="+4 today" tone="risk" />
                <Metric value="4" label="READY FOR REVIEW" delta="Eligible" tone="good" />
                <Metric value="8" label="REP-OWNED" delta="No auto-send" />
                <Metric value="100%" label="AUDIT VISIBLE" delta="Controlled" tone="good" />
              </div>
            </section>

            <div className="dashboard-grid">
              <section className="priority-panel">
                <div className="section-heading"><div><span className="eyebrow">PRIORITY SIGNALS</span><h3>Account coverage queue</h3></div><button className="filter-button"><Filter size={15} /> Filter</button></div>
                <div className="queue-list">
                  {riskAccounts.map((account, index) => (
                    <button className={`queue-row ${account.id === "juniper" ? "featured" : ""}`} key={account.id} onClick={account.id === "juniper" ? selectJuniper : () => setView("account")}>
                      <span className={`risk-dot ${account.tone}`} />
                      <div className="queue-account"><strong>{account.name}</strong><span>{account.place} · {account.product}</span></div>
                      <div className="queue-signal"><strong>{account.signal}</strong><span>{account.reason}</span></div>
                      <div className="queue-owner"><Avatar initials={account.initials} small /><span>{account.owner}</span></div>
                      <ChevronRight size={18} className="queue-chevron" />
                      {index === 0 ? <span className="queue-tag">START HERE</span> : null}
                    </button>
                  ))}
                </div>
                <div className="queue-foot"><span><CircleCheck size={15} /> Signals are ranked by account context, not sent automatically.</span><button onClick={() => setView("audit")}>View evidence log <ArrowRight size={14} /></button></div>
              </section>

              <section className="coverage-panel">
                <div className="section-heading"><div><span className="eyebrow">TEAM LOAD</span><h3>Coverage balance</h3></div><MoreHorizontal size={19} /></div>
                <div className="coverage-visual">
                  <div className="coverage-ring"><span>18</span><small>REPS</small></div>
                  <div className="coverage-info"><strong>91%</strong><span>accounts touched within planned coverage window</span></div>
                </div>
                <div className="rep-stack">
                  <div><span><Avatar initials="RL" small /> Renee Lewis</span><b>3 signals</b></div>
                  <div><span><Avatar initials="MV" small /> Marcus Vale</span><b>2 signals</b></div>
                  <div><span><Avatar initials="EP" small /> Elise Park</span><b>2 signals</b></div>
                </div>
                <p className="panel-note"><ShieldCheck size={15} /> Ownership stays visible at every action point.</p>
              </section>
            </div>
          </section>
        ) : null}

        {view === "account" ? (
          <section className="workspace account-workspace">
            <button className="back-link" onClick={() => { setView("command"); if (guided) setGuidedStep(0); }}><ArrowLeft size={15} /> Back to coverage</button>
            <div className="account-heading">
              <div className="account-identity"><div className="account-monogram">JB</div><div><p className="eyebrow">HIGH-OPPORTUNITY ACCOUNT · MONTCLAIR, NJ</p><h1>Juniper Bottle House</h1><p><span className="status-live" /> Account owner <strong>Renee Lewis</strong> · Preferred channel <strong>Rep-approved email</strong></p></div></div>
              <div className="account-actions"><button className="secondary-button" onClick={showAudit}><FileCheck2 size={16} /> Open audit</button><button className="primary-button" onClick={openOutreach}><Mail size={16} /> Review outreach</button></div>
            </div>

            <section className="signal-banner">
              <div className="signal-badge"><AlertTriangle size={18} /></div>
              <div><span className="eyebrow">REORDER-RISK SIGNAL</span><h2>38 days since last order—17 days beyond this account’s expected cadence.</h2><p>Juniper ordered 30 cases across the prior three cycles. The system is prompting a relationship-led availability check, not an unapproved offer.</p></div>
              <button onClick={openOutreach}>See controlled next step <ArrowRight size={16} /></button>
            </section>

            <div className="account-grid">
              <section className="cadence-panel">
                <div className="section-heading"><div><span className="eyebrow">PRODUCT HISTORY</span><h3>Solara Coastal Spritz · Citrus 4-pack</h3></div><span className="cadence-pill">Expected cadence · 21d</span></div>
                <div className="chart-wrap">
                  <ResponsiveContainer width="100%" height={230}>
                    <AreaChart data={cadenceData} margin={{ left: -20, right: 4, top: 10, bottom: 0 }}>
                      <defs><linearGradient id="cadenceFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#e6533c" stopOpacity={0.35} /><stop offset="100%" stopColor="#e6533c" stopOpacity={0.02} /></linearGradient></defs>
                      <CartesianGrid stroke="#dde2df" strokeDasharray="2 4" vertical={false} />
                      <XAxis dataKey="cycle" tick={{ fill: "#74808a", fontSize: 10 }} tickLine={false} axisLine={false} />
                      <YAxis tick={{ fill: "#74808a", fontSize: 10 }} tickLine={false} axisLine={false} width={34} />
                      <Tooltip contentStyle={{ background: "#122235", border: "none", borderRadius: 0, color: "#fff", fontSize: 11 }} labelStyle={{ color: "#b8c9d0" }} />
                      <Area type="monotone" dataKey="cases" stroke="#e6533c" strokeWidth={3} fill="url(#cadenceFill)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="chart-caption"><div><span>LAST ORDER</span><strong>Jul 17 · 10 cases</strong></div><div><span>EXPECTED NEXT ORDER</span><strong>Aug 07</strong></div><div><span>RISK STATUS</span><strong className="risk-copy">Needs review</strong></div></div>
              </section>

              <aside className="account-facts">
                <div className="fact-section"><span className="eyebrow">ACCOUNT CONTEXT</span><dl><div><dt>Category behavior</dt><dd>Strong RTD reorder pattern</dd></div><div><dt>Contact preference</dt><dd>Email before visit</dd></div><div><dt>Last rep activity</dt><dd>14 days ago</dd></div></dl></div>
                <div className="fact-section"><span className="eyebrow">SYSTEM RECOMMENDATION</span><p>Ask whether the latest Solara Coastal Spritz availability aligns with their current demand.</p><button className="text-link" onClick={openOutreach}>Review approved outreach <ArrowRight size={15} /></button></div>
              </aside>
            </div>

            <section className="ownership-panel"><div className="ownership-person"><Avatar initials="RL" /><div><span className="eyebrow">HUMAN ACCOUNT OWNER</span><h3>Renee Lewis</h3><p>Renee remains accountable for commercial judgment, account health, and non-routine communication.</p></div></div><div className="ownership-state"><BadgeCheck size={18} /><span>Outreach is prepared, not autonomously sent.</span></div></section>

            {outreachOpen ? (
              <section className="outreach-drawer">
                <div className="drawer-heading"><div><span className="eyebrow">CONTROLLED OUTREACH · READY FOR REVIEW</span><h2>Availability check for Juniper Bottle House</h2></div><button className="close-button" onClick={() => setOutreachOpen(false)}>Close</button></div>
                <div className="outreach-grid"><div className="message-card"><div className="message-meta"><span>TO · Lina Cho</span><span>CHANNEL · EMAIL</span></div><p>Hi Lina—Renee here from Harborline. We noticed it may be time to check in on Solara Coastal Spritz Citrus. Would it be helpful if I confirmed current availability for your next order window?</p><span>— Renee Lewis, Harborline Beverage Distribution</span></div><div className="control-card"><div><ClipboardCheck size={18} /><strong>Eligibility checked</strong><span>Preferred channel and account ownership confirmed.</span></div><div><ShieldCheck size={18} /><strong>Approved template</strong><span>Availability check only. No price, promotion, or deal terms.</span></div><button className="primary-button full-width" onClick={simulateSend}><Send size={16} /> Simulate approved send</button></div></div>
              </section>
            ) : null}
          </section>
        ) : null}

        {view === "audit" ? (
          <section className="workspace audit-workspace">
            <div className="workspace-heading compact"><div><p className="eyebrow">JUNIPER BOTTLE HOUSE · CONTROL LOG</p><h1>Evidence before <em>automation.</em></h1><p className="workspace-dek">A clear record of what happened, why it happened, and who owns the next decision.</p></div><div className="heading-actions"><button className="secondary-button" onClick={selectJuniper}><UsersRound size={16} /> Return to account</button>{!sent ? <button className="primary-button" onClick={openOutreach}><Mail size={16} /> Review outreach</button> : null}</div></div>

            <section className="audit-layout">
              <div className="audit-timeline">
                <div className="audit-intro"><span className="eyebrow">AUDIT EVENT TRAIL</span><p>Fictional demo evidence. Production delivery and retention policies are configured after a client implementation.</p></div>
                {events.map((event, index) => {
                  const Icon = event.icon;
                  return <article className={`audit-event ${event.state}`} key={`${event.label}-${index}`}><div className="event-rail"><span><Icon size={16} /></span>{index < events.length - 1 ? <i /> : null}</div><div className="event-copy"><div><strong>{event.label}</strong><time>{event.time}</time></div><p>{event.detail}</p></div></article>;
                })}
              </div>
              <aside className="audit-side">
                <section className="control-summary"><span className="eyebrow">CURRENT CONTROL STATE</span><div className={escalated ? "state-card escalated" : sent ? "state-card sent" : "state-card ready"}>{escalated ? <UserRound size={22} /> : sent ? <Send size={22} /> : <ClipboardCheck size={22} />}<div><strong>{escalated ? "Human review required" : sent ? "Outreach simulated" : "Ready for review"}</strong><span>{escalated ? "Renee Lewis owns the pricing-related reply." : sent ? "No real message was delivered." : "The rep controls the next action."}</span></div></div></section>
                {!sent ? <button className="primary-button full-width" onClick={openOutreach}><Mail size={16} /> Review approved outreach</button> : null}
                {sent && !escalated ? <button className="secondary-button full-width urgent-action" onClick={simulateReply}><UserRound size={16} /> Simulate non-routine reply</button> : null}
                {escalated ? <div className="handoff-card"><div><Avatar initials="RL" /><span><b>Assigned to Renee Lewis</b><small>Next step: review client request before response</small></span></div><button onClick={() => setShowReadiness(true)}>View implementation boundary <ArrowRight size={14} /></button></div> : null}
              </aside>
            </section>
          </section>
        ) : null}

        {showReadiness ? (
          <div className="readiness-overlay" role="dialog" aria-modal="true" aria-label="Implementation readiness">
            <div className="readiness-modal"><button className="modal-close" onClick={() => setShowReadiness(false)}>Close</button><span className="eyebrow">FROM DEMO TO YOUR OPERATING SYSTEM</span><h2>Same flow. Your rules.</h2><p>What you are seeing is a fictional, seller-operated product experience. After a client agrees to proceed, Harborline Command is configured with their account data, users, ownership rules, approved templates, delivery channel, and review process.</p><div className="readiness-list"><div><PackageCheck size={18} /><span><strong>Connect operating records</strong> Client account, product, and order data.</span></div><div><UserRound size={18} /><span><strong>Assign owners and permissions</strong> The right manager and rep see the right actions.</span></div><div><ShieldCheck size={18} /><span><strong>Approve controlled workflows</strong> Templates, eligibility, channel, audit, and exception rules.</span></div></div><button className="primary-button" onClick={() => setShowReadiness(false)}>Return to demo <ArrowRight size={16} /></button></div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
