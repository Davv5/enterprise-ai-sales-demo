/**
 * Harborline Command design reminder:
 * This is a controlled communication operations hub, not a generic analytics dashboard.
 * The product centers the sequence: trigger → eligibility → approved message → human action
 * → exception → audit. Signal Vermilion means active human attention; sea-green means control.
 * All accounts, messages, and events are fictional demonstration data.
 */
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BellRing,
  Check,
  ChevronRight,
  CircleCheck,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Filter,
  Gauge,
  LayoutList,
  Mail,
  MessageSquareWarning,
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
  X,
} from "lucide-react";

type View = "workflows" | "workflow" | "replies" | "accounts" | "audit";
type WorkflowState = "approval" | "sent" | "exception";
type Mode = "draft" | "rep";

const workflowCards = [
  {
    id: "reorder",
    type: "REORDER REMINDER",
    title: "Solara Coastal Spritz · Juniper Bottle House",
    detail: "No reorder in 38 days · 17 days beyond expected cadence",
    status: "Needs rep approval",
    tone: "attention",
  },
  {
    id: "allocation",
    type: "NEW ALLOCATION ALERT",
    title: "Nila Reserve Gin · Audience rule ready",
    detail: "Awaiting category-fit and allocation-policy configuration",
    status: "Next workflow",
    tone: "planned",
  },
  {
    id: "promo",
    type: "PRICE / PROMO NOTICE",
    title: "Eligible-audience message controls",
    detail: "Available after terms, audience, and policy gates are configured",
    status: "Policy gate",
    tone: "planned",
  },
];

const steps = [
  { id: "trigger", title: "Trigger detected", detail: "38d since last reorder", icon: Gauge },
  { id: "eligible", title: "Eligibility checked", detail: "Account, owner, channel", icon: BadgeCheck },
  { id: "message", title: "Message prepared", detail: "Approved availability check", icon: Mail },
  { id: "action", title: "Rep approval", detail: "Named human action", icon: ClipboardCheck },
  { id: "exception", title: "Reply & exception", detail: "Route judgment to rep", icon: MessageSquareWarning },
];

function Avatar({ initials, small = false }: { initials: string; small?: boolean }) {
  return <span className={`ops-avatar ${small ? "small" : ""}`}>{initials}</span>;
}

function StatePill({ state }: { state: WorkflowState }) {
  const copy = state === "approval" ? "Needs rep approval" : state === "sent" ? "Send recorded" : "Exception assigned";
  return <span className={`ops-state-pill ${state}`}>{state === "approval" ? <Clock3 size={13} /> : state === "sent" ? <Send size={13} /> : <UserRound size={13} />}{copy}</span>;
}

export default function Home() {
  const initialView: View = typeof window !== "undefined" && ["workflow", "replies", "accounts", "audit"].includes(window.location.hash.slice(1))
    ? window.location.hash.slice(1) as View
    : "workflows";
  const initialDemoState: WorkflowState = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("demo") === "exception"
    ? "exception"
    : typeof window !== "undefined" && new URLSearchParams(window.location.search).get("demo") === "sent"
      ? "sent"
      : "approval";
  const initiallyAssigned = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("assigned") === "true";
  const [view, setView] = useState<View>(initialView);
  const [state, setState] = useState<WorkflowState>(initialDemoState);
  const [mode, setMode] = useState<Mode>("rep");
  const [assigned, setAssigned] = useState(initiallyAssigned && initialDemoState === "exception");
  const [guided, setGuided] = useState(false);

  useEffect(() => {
    const hash = view === "workflows" ? "" : `#${view}`;
    window.history.replaceState(null, "", `${window.location.pathname}${hash}`);
  }, [view]);

  const events = useMemo(() => {
    const list = [
      { time: "08:12", title: "Cadence rule matched", detail: "Juniper has not reordered Solara Coastal Spritz for 38 days; expected cadence is 21 days.", icon: Gauge, tone: "signal" },
      { time: "08:13", title: "Eligibility confirmed", detail: "Lina Cho is an approved account contact; Renee Lewis owns the relationship; preferred channel is email.", icon: BadgeCheck, tone: "control" },
      { time: "08:14", title: "Availability-check template prepared", detail: "Template RR-04 selected. Price, promotion, and commercial terms are excluded.", icon: Mail, tone: "control" },
    ];
    if (state === "sent" || state === "exception") list.push({ time: "09:02", title: "Rep-approved send simulated", detail: "A fictional email event was recorded for Lina Cho. No production message was delivered.", icon: Send, tone: "sent" });
    if (state === "exception") list.push({ time: "09:08", title: assigned ? "Exception assigned to Renee Lewis" : "Non-routine reply received", detail: assigned ? "Pricing-related question assigned to the named account owner; no automated response created." : "Lina asked about prior pricing. Human commercial judgment is required.", icon: UserRound, tone: "exception" });
    return list;
  }, [state, assigned]);

  const resetDemo = () => {
    setView("workflows");
    setState("approval");
    setMode("rep");
    setAssigned(false);
    setGuided(false);
  };

  const openWorkflow = () => setView("workflow");
  const approveSend = () => {
    setState("sent");
  };
  const simulateException = () => {
    setState("exception");
    setView("replies");
  };
  const assignRenee = () => setAssigned(true);

  const navigation = [
    { id: "workflows" as View, label: "Workflow center", icon: LayoutList },
    { id: "replies" as View, label: "Replies & exceptions", icon: MessageSquareWarning },
    { id: "accounts" as View, label: "Accounts", icon: UsersRound },
    { id: "audit" as View, label: "Audit & policy", icon: FileCheck2 },
  ];

  const breadcrumb = {
    workflows: "WORKFLOW CENTER",
    workflow: "REORDER REMINDER",
    replies: "REPLIES & EXCEPTIONS",
    accounts: "ACCOUNT CONTEXT",
    audit: "AUDIT RECORD",
  }[view];

  return (
    <div className="ops-app">
      <aside className="ops-sidebar">
        <div>
          <div className="ops-brand"><Route size={30} /><div><strong>HARBORLINE</strong><span>COMMUNICATION OPS</span></div></div>
          <div className="ops-environment"><span /> FICTIONAL DEMO ENVIRONMENT</div>
          <nav className="ops-nav" aria-label="Product navigation">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = view === item.id || (item.id === "workflows" && view === "workflow");
              return <button key={item.id} className={active ? "active" : ""} onClick={() => setView(item.id)}><Icon size={18} /><span>{item.label}</span>{item.id === "replies" && state === "exception" ? <b>1</b> : null}</button>;
            })}
          </nav>
        </div>
        <div className="ops-sidebar-footer"><div className="ops-owner"><Avatar initials="RL" small /><div><span>DEMO OWNER</span><strong>Renee Lewis</strong></div></div><button className="ops-reset" onClick={resetDemo}><RefreshCcw size={15} /> Reset demo</button></div>
      </aside>

      <main className="ops-main">
        <header className="ops-topbar"><div className="ops-breadcrumb"><span>HARBORLINE /</span><strong>{breadcrumb}</strong></div><div className="ops-top-actions"><span className="ops-fictional"><Sparkles size={13} /> Fictional scenario</span><button aria-label="Search" className="ops-icon"><Search size={18} /></button><button aria-label="Notifications" className="ops-icon"><BellRing size={18} /></button><Avatar initials="OL" small /></div></header>

        {view === "workflows" ? (
          <section className="ops-workspace workflow-center">
            <div className="ops-heading"><div><p className="ops-eyebrow">COMMUNICATION OPERATIONS</p><h1>Run the <em>right</em> message.<br />Keep the relationship human.</h1><p>Each workflow turns a defined account moment into a controlled, traceable communication process. Nothing is sent without the configured rule, owner, and approval mode.</p></div><div className="ops-heading-actions"><button className="ops-secondary" onClick={() => setGuided(!guided)}><Play size={15} /> {guided ? "Hide flow guide" : "Show flow guide"}</button><button className="ops-primary" onClick={openWorkflow}>Open active workflow <ArrowRight size={16} /></button></div></div>

            {guided ? <div className="ops-flow-guide">{steps.map((step, index) => { const Icon = step.icon; return <div key={step.id}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={16} /><strong>{step.title}</strong><small>{step.detail}</small></div>; })}</div> : null}

            <div className="ops-center-layout">
              <section className="ops-workflow-list"><div className="ops-section-title"><div><p className="ops-eyebrow">ACTIVE COMMUNICATION WORKFLOWS</p><h2>What is running now</h2></div><button className="ops-filter"><Filter size={15} /> All statuses</button></div>{workflowCards.map((workflow) => <button key={workflow.id} className={`ops-workflow-card ${workflow.id === "reorder" ? "primary-workflow" : ""}`} onClick={workflow.id === "reorder" ? openWorkflow : undefined} disabled={workflow.id !== "reorder"}><span className={`ops-card-mark ${workflow.tone}`}><Mail size={17} /></span><span className="ops-card-copy"><small>{workflow.type}</small><strong>{workflow.title}</strong><em>{workflow.detail}</em></span><span className={`ops-card-status ${workflow.tone}`}>{workflow.status}</span><ChevronRight size={18} /></button>)}</section>
              <aside className="ops-right-rail"><section className="ops-review-card"><div className="ops-section-title"><div><p className="ops-eyebrow">NEEDS HUMAN REVIEW</p><h2>{state === "exception" ? "One exception is waiting" : "No active exceptions"}</h2></div><MessageSquareWarning size={19} /></div>{state === "exception" ? <button className="ops-exception-preview" onClick={() => setView("replies")}><span><Avatar initials="LC" small /><div><strong>Lina Cho · Juniper</strong><small>Asked about prior pricing</small></div></span><ChevronRight size={16} /></button> : <div className="ops-empty"><CircleCheck size={19} /><p>Non-routine replies will appear here with the named rep and original message context.</p></div>}</section><section className="ops-guardrail-card"><ShieldCheck size={19} /><div><strong>Control before scale</strong><p>Automation mode, message copy, eligibility, owner, and evidence remain visible on every workflow.</p></div></section></aside>
            </div>
          </section>
        ) : null}

        {view === "workflow" ? (
          <section className="ops-workspace workflow-detail">
            <button className="ops-back" onClick={() => setView("workflows")}><ArrowLeft size={15} /> Workflow center</button>
            <div className="ops-heading compact"><div><p className="ops-eyebrow">ACTIVE WORKFLOW · REORDER REMINDER</p><h1>Reorder reminder<br />for <em>Juniper.</em></h1><p>One account, one approved availability check, and one accountable human owner. The workflow is deliberately narrow so every control is visible.</p></div><div className="ops-heading-actions"><StatePill state={state} /><button className="ops-secondary" onClick={() => setView("audit")}><FileCheck2 size={15} /> Open audit</button></div></div>

            <div className="ops-workflow-layout"><aside className="ops-step-rail">{steps.map((step, index) => { const Icon = step.icon; const complete = index < 3 || (index === 3 && state !== "approval") || (index === 4 && state === "exception"); const current = (state === "approval" && index === 3) || (state === "sent" && index === 4); return <div className={`ops-step ${complete ? "complete" : ""} ${current ? "current" : ""}`} key={step.id}><span><Icon size={15} /></span><div><small>{String(index + 1).padStart(2, "0")}</small><strong>{step.title}</strong><em>{step.detail}</em></div></div>; })}</aside>
              <div className="ops-workflow-canvas"><section className="ops-trigger-card"><div className="ops-trigger-icon"><Gauge size={20} /></div><div><p className="ops-eyebrow">TRIGGER DETECTED</p><h2>Juniper has not reordered Solara Coastal Spritz for 38 days.</h2><p>Expected cadence is 21 days. The workflow has identified a routine coverage moment—not a reason to make a commercial offer.</p></div><span>RR-04<br /><small>CADENCE RULE</small></span></section>
                <div className="ops-context-grid"><section className="ops-context-card"><p className="ops-eyebrow">ELIGIBLE ACCOUNT</p><div className="ops-account-row"><span className="ops-monogram">JB</span><div><strong>Juniper Bottle House</strong><small>Montclair, NJ · Lina Cho, Buyer</small></div></div><dl><div><dt>PRODUCT</dt><dd>Solara Coastal Spritz · Citrus 4-pack</dd></div><div><dt>LAST ORDER</dt><dd>Jul 17 · 10 cases</dd></div><div><dt>ACCOUNT OWNER</dt><dd>Renee Lewis</dd></div><div><dt>PREFERRED CHANNEL</dt><dd>Rep-approved email</dd></div></dl></section><section className="ops-mode-card"><p className="ops-eyebrow">AUTOMATION MODE</p><h3>Choose the level of human control.</h3><button className={mode === "draft" ? "selected" : ""} onClick={() => setMode("draft")}><span><ClipboardCheck size={17} /><strong>Draft for rep</strong><small>Prepare only; Renee decides whether to send.</small></span>{mode === "draft" ? <Check size={16} /> : null}</button><button className={mode === "rep" ? "selected" : ""} onClick={() => setMode("rep")}><span><UserRound size={17} /><strong>Rep-approved send</strong><small>Renee approves before the message is recorded.</small></span>{mode === "rep" ? <Check size={16} /> : null}</button><div className="ops-future-mode"><ShieldCheck size={16} /><span><strong>Policy-approved send</strong><small>Available only after validated rules and review.</small></span></div></section></div>
                <section className="ops-message-card"><div className="ops-message-heading"><div><p className="ops-eyebrow">APPROVED OUTREACH</p><h3>Availability check · Template RR-04</h3></div><span><ShieldCheck size={15} /> Terms excluded</span></div><div className="ops-message-meta"><span>TO · LINA CHO</span><span>CHANNEL · EMAIL</span><span>OWNER · RENEE LEWIS</span></div><p>Hi Lina—Renee here from Harborline. We noticed it may be time to check in on Solara Coastal Spritz Citrus. Would it be helpful if I confirmed current availability for your next order window?</p><small>— Renee Lewis, Harborline Beverage Distribution</small><div className="ops-message-foot"><span><CircleCheck size={15} /> Account, owner, channel, and template checks passed.</span>{state === "approval" ? <button className="ops-primary" onClick={approveSend}>{mode === "draft" ? "Mark draft for Renee" : "Approve & simulate send"} <Send size={16} /></button> : state === "sent" ? <button className="ops-primary" onClick={simulateException}>Simulate non-routine reply <MessageSquareWarning size={16} /></button> : <button className="ops-secondary" onClick={() => setView("replies")}>Open assigned exception <ArrowRight size={16} /></button>}</div></section>
              </div></div>
          </section>
        ) : null}

        {view === "replies" ? (
          <section className="ops-workspace replies-view"><div className="ops-heading compact"><div><p className="ops-eyebrow">HUMAN JUDGMENT QUEUE</p><h1>Replies that need<br /><em>a person.</em></h1><p>Harborline does not negotiate price, resolve disputes, or imitate a rep. Non-routine conversation stays visibly with the assigned account owner.</p></div><div className="ops-heading-actions"><button className="ops-secondary" onClick={() => setView("workflow")}><ArrowLeft size={15} /> Return to workflow</button><button className="ops-secondary" onClick={() => setView("audit")}><FileCheck2 size={15} /> Open audit</button></div></div>
            {state !== "exception" ? <div className="ops-reply-empty"><CircleCheck size={26} /><h2>No exceptions waiting</h2><p>Simulate a non-routine reply from the Reorder Reminder workflow to demonstrate the named-human handoff.</p><button className="ops-primary" onClick={openWorkflow}>Open reorder workflow <ArrowRight size={16} /></button></div> : <div className="ops-reply-layout"><section className="ops-reply-card"><div className="ops-reply-top"><span className="ops-reply-unread" /><div><Avatar initials="LC" /><div><strong>Lina Cho</strong><small>Juniper Bottle House · received at 09:08</small></div></div><StatePill state="exception" /></div><div className="ops-reply-quote"><span>REPLY TO · AVAILABILITY CHECK RR-04</span><p>“Thanks, Renee. Before I look at availability, can you offer us the same price we had the last time?”</p></div><div className="ops-reply-reason"><MessageSquareWarning size={18} /><div><strong>Commercial judgment required</strong><p>The message asks about price. Harborline records the context but does not generate, negotiate, or send a response.</p></div></div><div className="ops-reply-actions"><div><Avatar initials="RL" /><span><small>ASSIGNED ACCOUNT OWNER</small><strong>Renee Lewis</strong></span></div>{assigned ? <span className="ops-assigned"><Check size={15} /> Renee has been assigned</span> : <button className="ops-primary" onClick={assignRenee}>Assign to Renee <UserRound size={16} /></button>}</div></section><aside className="ops-reply-context"><p className="ops-eyebrow">ORIGINAL WORKFLOW CONTEXT</p><dl><div><dt>TRIGGER</dt><dd>38d without reorder</dd></div><div><dt>MESSAGE</dt><dd>Availability check RR-04</dd></div><div><dt>MODE</dt><dd>Rep-approved send</dd></div><div><dt>AUDIT</dt><dd>5 recorded events</dd></div></dl><button className="ops-text-button" onClick={() => setView("audit")}>View complete audit record <ArrowRight size={15} /></button></aside></div>}
          </section>
        ) : null}

        {view === "accounts" ? (
          <section className="ops-workspace accounts-view"><div className="ops-heading compact"><div><p className="ops-eyebrow">RELATIONSHIP CONTEXT</p><h1>Account details<br />support <em>the action.</em></h1><p>Account records provide the contact, order pattern, owner, and history needed to run a controlled workflow. They are not the product’s main destination.</p></div><div className="ops-heading-actions"><button className="ops-primary" onClick={openWorkflow}>Open Juniper workflow <ArrowRight size={16} /></button></div></div><section className="ops-account-panel"><div className="ops-account-head"><span className="ops-monogram large">JB</span><div><p className="ops-eyebrow">RETAIL ACCOUNT · MONTCLAIR, NJ</p><h2>Juniper Bottle House</h2><p><span className="ops-live-dot" /> Assigned representative <strong>Renee Lewis</strong> · Contact preference <strong>Email before visit</strong></p></div></div><div className="ops-account-facts"><div><span>ORDER PATTERN</span><strong>Strong RTD reorder cadence</strong><small>Expected every 21 days</small></div><div><span>ACTIVE WORKFLOW</span><strong>Reorder Reminder RR-04</strong><small>{state === "approval" ? "Awaiting Renee’s approval" : state === "sent" ? "Send event recorded" : "Exception assigned to Renee"}</small></div><div><span>LAST REP ACTIVITY</span><strong>14 days ago</strong><small>No open service exception</small></div></div><div className="ops-account-timeline"><span className="ops-eyebrow">WORKFLOW HISTORY</span>{events.map((event) => <div key={event.time + event.title}><span>{event.time}</span><i /><p><strong>{event.title}</strong>{event.detail}</p></div>)}</div></section></section>
        ) : null}

        {view === "audit" ? (
          <section className="ops-workspace audit-view"><div className="ops-heading compact"><div><p className="ops-eyebrow">CONTROLLED COMMUNICATION RECORD</p><h1>One workflow.<br /><em>Complete evidence.</em></h1><p>Every visible action is tied to a trigger, eligible account, approved template, automation mode, owner, and next decision.</p></div><div className="ops-heading-actions"><button className="ops-secondary" onClick={openWorkflow}><ArrowLeft size={15} /> Return to workflow</button><StatePill state={state} /></div></div><div className="ops-audit-layout"><section className="ops-audit-trail"><div className="ops-audit-intro"><div><p className="ops-eyebrow">EVENT TRAIL · RR-04</p><h2>Juniper Bottle House reorder reminder</h2></div><span>Fictional demo evidence</span></div>{events.map((event, index) => { const Icon = event.icon; return <article className={`ops-audit-event ${event.tone}`} key={event.time + event.title}><div className="ops-event-rail"><span><Icon size={16} /></span>{index < events.length - 1 ? <i /> : null}</div><div><div><strong>{event.title}</strong><time>{event.time}</time></div><p>{event.detail}</p></div></article>; })}</section><aside className="ops-policy-card"><ShieldCheck size={20} /><p className="ops-eyebrow">POLICY VIEW</p><h3>What is recorded</h3><ul><li><Check size={14} /> Rule and trigger condition</li><li><Check size={14} /> Account, owner, and channel</li><li><Check size={14} /> Exact template and automation mode</li><li><Check size={14} /> Send state and reply exception</li><li><Check size={14} /> Named human handoff</li></ul><button className="ops-text-button" onClick={() => setView("replies")}>Open replies & exceptions <ArrowRight size={15} /></button></aside></div></section>
        ) : null}
      </main>
    </div>
  );
}
