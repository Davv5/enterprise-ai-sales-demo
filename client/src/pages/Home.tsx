/**
 * Harborline Communication Ops design reminder:
 * One controlled operating system for three workflow types—not a generic dashboard.
 * Trigger → eligibility/audience → bounded message → human control → exception → evidence.
 * Signal Vermilion means an active human intervention; sea-green means a passed control.
 * Every account, product, terms packet, and delivery state is fictional demonstration data.
 */
import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
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
  FileText,
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
} from "lucide-react";

type View = "workflows" | "workflow" | "replies" | "accounts" | "audit";
type WorkflowId = "reorder" | "allocation" | "promo";
type WorkflowState = "approval" | "drafted" | "sent" | "exception";
type Mode = "draft" | "rep" | "policy";

type Step = { id: string; title: string; detail: string; icon: LucideIcon };
type AuditEvent = { time: string; title: string; detail: string; icon: LucideIcon; tone: "signal" | "control" | "sent" | "exception" };
type WorkflowConfig = {
  id: WorkflowId;
  type: string;
  title: string;
  cardDetail: string;
  initialStatus: string;
  tone: "attention" | "planned" | "policy";
  eyebrow: string;
  heading: string;
  emphasis: string;
  description: string;
  steps: Step[];
  triggerCode: string;
  triggerKind: string;
  triggerTitle: string;
  triggerDescription: string;
  contextLabel: string;
  contextName: string;
  contextMeta: string;
  monogram: string;
  contextRows: { label: string; value: string }[];
  defaultMode: Mode;
  template: string;
  termsLabel: string;
  meta: string[];
  messageBody: string;
  signature: string;
  controlCopy: string;
  baseEvents: AuditEvent[];
  draftedEvent?: AuditEvent;
  sentEvent: AuditEvent;
  exceptionEvent: AuditEvent;
  exceptionName: string;
  exceptionAccount: string;
  exceptionTime: string;
  exceptionQuoteLabel: string;
  exceptionQuote: string;
  exceptionTitle: string;
  exceptionDetail: string;
  ownerInitials: string;
  ownerName: string;
  auditPolicyItems: string[];
};

const configurations: Record<WorkflowId, WorkflowConfig> = {
  reorder: {
    id: "reorder",
    type: "REORDER REMINDER",
    title: "Solara Coastal Spritz · Juniper Bottle House",
    cardDetail: "No reorder in 38 days · 17 days beyond expected cadence",
    initialStatus: "Needs rep approval",
    tone: "attention",
    eyebrow: "ACTIVE WORKFLOW · REORDER REMINDER",
    heading: "Reorder reminder\nfor",
    emphasis: "Juniper.",
    description: "One account, one approved availability check, and one accountable human owner. The workflow stays deliberately narrow so every control is visible.",
    steps: [
      { id: "trigger", title: "Trigger detected", detail: "38d since last reorder", icon: Gauge },
      { id: "eligible", title: "Eligibility checked", detail: "Account, owner, channel", icon: BadgeCheck },
      { id: "message", title: "Message prepared", detail: "Availability check", icon: Mail },
      { id: "action", title: "Rep approval", detail: "Named human action", icon: ClipboardCheck },
      { id: "exception", title: "Reply & exception", detail: "Route judgment to rep", icon: MessageSquareWarning },
    ],
    triggerCode: "RR-04",
    triggerKind: "CADENCE RULE",
    triggerTitle: "Juniper has not reordered Solara Coastal Spritz for 38 days.",
    triggerDescription: "Expected cadence is 21 days. This is a routine coverage moment—not a reason to make a commercial offer.",
    contextLabel: "ELIGIBLE ACCOUNT",
    contextName: "Juniper Bottle House",
    contextMeta: "Montclair, NJ · Lina Cho, Buyer",
    monogram: "JB",
    contextRows: [
      { label: "PRODUCT", value: "Solara Coastal Spritz · Citrus 4-pack" },
      { label: "LAST ORDER", value: "Jul 17 · 10 cases" },
      { label: "ACCOUNT OWNER", value: "Renee Lewis" },
      { label: "PREFERRED CHANNEL", value: "Rep-approved email" },
    ],
    defaultMode: "rep",
    template: "Availability check · Template RR-04",
    termsLabel: "Terms excluded",
    meta: ["TO · LINA CHO", "CHANNEL · EMAIL", "OWNER · RENEE LEWIS"],
    messageBody: "Hi Lina—Renee here from Harborline. We noticed it may be time to check in on Solara Coastal Spritz Citrus. Would it be helpful if I confirmed current availability for your next order window?",
    signature: "— Renee Lewis, Harborline Beverage Distribution",
    controlCopy: "Account, owner, channel, and template checks passed.",
    baseEvents: [
      { time: "08:12", title: "Cadence rule matched", detail: "Juniper has not reordered Solara Coastal Spritz for 38 days; expected cadence is 21 days.", icon: Gauge, tone: "signal" },
      { time: "08:13", title: "Eligibility confirmed", detail: "Lina Cho is an approved account contact; Renee Lewis owns the relationship; preferred channel is email.", icon: BadgeCheck, tone: "control" },
      { time: "08:14", title: "Availability-check template prepared", detail: "Template RR-04 selected. Price, promotion, and commercial terms are excluded.", icon: Mail, tone: "control" },
    ],
    sentEvent: { time: "09:02", title: "Rep-approved send simulated", detail: "A fictional email event was recorded for Lina Cho. No production message was delivered.", icon: Send, tone: "sent" },
    exceptionEvent: { time: "09:08", title: "Prior-price question received", detail: "Lina asked about prior pricing. Human commercial judgment is required.", icon: UserRound, tone: "exception" },
    exceptionName: "Lina Cho",
    exceptionAccount: "Juniper Bottle House",
    exceptionTime: "09:08",
    exceptionQuoteLabel: "REPLY TO · AVAILABILITY CHECK RR-04",
    exceptionQuote: "“Thanks, Renee. Before I look at availability, can you offer us the same price we had the last time?”",
    exceptionTitle: "Commercial judgment required",
    exceptionDetail: "The message asks about price. Harborline records the context but does not generate, negotiate, or send a response.",
    ownerInitials: "RL",
    ownerName: "Renee Lewis",
    auditPolicyItems: ["Cadence rule and trigger condition", "Account, owner, and channel", "Exact template and automation mode", "Send state and reply exception", "Named human handoff"],
  },
  allocation: {
    id: "allocation",
    type: "NEW ALLOCATION ALERT",
    title: "Nila Reserve Gin · Fleetwood Spirits",
    cardDetail: "48-case allocation · 3 accounts qualified by rule",
    initialStatus: "Draft ready",
    tone: "planned",
    eyebrow: "ACTIVE WORKFLOW · NEW ALLOCATION ALERT",
    heading: "Allocation alert\nfor",
    emphasis: "Fleetwood.",
    description: "A limited allocation becomes a controlled interest check. Harborline qualifies the audience and preserves the decision boundary; Marcus retains quantity and terms judgment.",
    steps: [
      { id: "trigger", title: "Allocation received", detail: "48 fictional cases", icon: PackageCheck },
      { id: "eligible", title: "Audience qualified", detail: "3 accounts meet rule", icon: BadgeCheck },
      { id: "message", title: "Interest check prepared", detail: "No quantity or price", icon: Mail },
      { id: "action", title: "Rep review", detail: "Marcus decides to send", icon: ClipboardCheck },
      { id: "exception", title: "Quantity & terms", detail: "Route to specialist", icon: MessageSquareWarning },
    ],
    triggerCode: "AL-09",
    triggerKind: "ALLOCATION EVENT",
    triggerTitle: "Nila Reserve Gin has a fictional 48-case limited allocation.",
    triggerDescription: "The workflow identifies accounts with demonstrated category fit. It does not decide allocation, quantity, price, or commercial terms.",
    contextLabel: "QUALIFIED AUDIENCE",
    contextName: "Fleetwood Spirits",
    contextMeta: "Brooklyn, NY · Samira Patel, Spirits Buyer",
    monogram: "FS",
    contextRows: [
      { label: "PRODUCT", value: "Nila Reserve Gin · limited allocation" },
      { label: "QUALIFIED ACCOUNTS", value: "3 · Fleetwood, Alder & Oak, Kingsley" },
      { label: "PORTFOLIO SPECIALIST", value: "Marcus Vale" },
      { label: "AUDIENCE RULE", value: "Premium gin fit · active account · no hold" },
    ],
    defaultMode: "draft",
    template: "Interest check · Template AL-09",
    termsLabel: "Quantity & terms excluded",
    meta: ["TO · SAMIRA PATEL", "CHANNEL · REP REVIEW", "OWNER · MARCUS VALE"],
    messageBody: "Hi Samira—Marcus here from Harborline. We received a limited Nila Reserve Gin allocation and identified Fleetwood as an account that may be interested. Would you like Marcus to follow up with the relevant details?",
    signature: "— Marcus Vale, Harborline Beverage Distribution",
    controlCopy: "Audience rule, owner, and draft template checks passed. Quantity and terms stay with Marcus.",
    baseEvents: [
      { time: "09:10", title: "Allocation event recorded", detail: "A fictional 48-case Nila Reserve Gin allocation entered workflow AL-09.", icon: PackageCheck, tone: "signal" },
      { time: "09:11", title: "Audience rule evaluated", detail: "Three active premium-spirit accounts passed the category-fit and account-hold rule.", icon: BadgeCheck, tone: "control" },
      { time: "09:12", title: "Interest-check draft prepared", detail: "Template AL-09 selected. Quantity, price, and allocation commitment are excluded.", icon: Mail, tone: "control" },
    ],
    draftedEvent: { time: "09:16", title: "Draft recorded for Marcus", detail: "A fictional interest-check draft is ready for portfolio-specialist review. No production message was delivered.", icon: ClipboardCheck, tone: "sent" },
    sentEvent: { time: "09:21", title: "Marcus-approved send simulated", detail: "A fictional interest-check event was recorded for Fleetwood. No allocation was committed.", icon: Send, tone: "sent" },
    exceptionEvent: { time: "09:25", title: "Quantity and price question received", detail: "Samira asked about case quantity and price. Marcus must determine the answer.", icon: UserRound, tone: "exception" },
    exceptionName: "Samira Patel",
    exceptionAccount: "Fleetwood Spirits",
    exceptionTime: "09:25",
    exceptionQuoteLabel: "REPLY TO · INTEREST CHECK AL-09",
    exceptionQuote: "“We are interested. How many cases can we have, and what is our price?”",
    exceptionTitle: "Allocation and terms judgment required",
    exceptionDetail: "The buyer asks about quantity and price. Harborline preserves the request but does not promise inventory, set terms, or create a response.",
    ownerInitials: "MV",
    ownerName: "Marcus Vale",
    auditPolicyItems: ["Allocation event and rule version", "Qualified audience and named owner", "Interest-check template boundary", "Draft/review/send state", "Quantity and terms handoff"],
  },
  promo: {
    id: "promo",
    type: "PRICE / PROMO NOTICE",
    title: "Solara Coastal Spritz · Seasonal program notice",
    cardDetail: "12-account eligible audience · terms and policy gate required",
    initialStatus: "Policy gate",
    tone: "policy",
    eyebrow: "ACTIVE WORKFLOW · POLICY-GATED NOTICE",
    heading: "Program notice\nfor",
    emphasis: "12 accounts.",
    description: "A policy-sensitive notice stays locked until the fictional terms packet and eligible audience have been reviewed. The demo deliberately does not display price, discount, or commercial terms.",
    steps: [
      { id: "trigger", title: "Notice requested", detail: "Seasonal program event", icon: FileText },
      { id: "eligible", title: "Audience locked", detail: "12 eligible accounts", icon: BadgeCheck },
      { id: "message", title: "Notice prepared", detail: "Terms packet reference", icon: Mail },
      { id: "action", title: "Policy gate", detail: "Terms + audience review", icon: ShieldCheck },
      { id: "exception", title: "Eligibility exception", detail: "Route to operations", icon: MessageSquareWarning },
    ],
    triggerCode: "PN-18",
    triggerKind: "PROGRAM NOTICE",
    triggerTitle: "A fictional Solara seasonal program notice is ready for review.",
    triggerDescription: "The operating job is not to invent an offer. It is to ensure the defined audience, terms packet reference, review state, and accountable owners are visible before a notice can be simulated.",
    contextLabel: "ELIGIBLE AUDIENCE",
    contextName: "12 off-premise accounts",
    contextMeta: "Seasonal program segment · audience rule PR-18",
    monogram: "12",
    contextRows: [
      { label: "PROGRAM", value: "Solara Coastal Spritz · fictional seasonal notice" },
      { label: "TERMS PACKET", value: "PN-18-TERM · contents not displayed in demo" },
      { label: "REVIEW OWNER", value: "Alicia Chen · Sales Operations" },
      { label: "AUDIENCE RULE", value: "Active off-premise · valid profile · named owner" },
    ],
    defaultMode: "policy",
    template: "Program notice · Template PN-18",
    termsLabel: "Terms not displayed",
    meta: ["TO · 12 ELIGIBLE ACCOUNTS", "CHANNEL · POLICY GATE", "OWNER · ALICIA CHEN"],
    messageBody: "Your Harborline representative has an approved seasonal program notice available for review. Please contact your representative through the selected account channel for the applicable details.",
    signature: "— Alicia Chen, Sales Operations · Harborline Beverage Distribution",
    controlCopy: "Terms packet reference, audience rule, reviewer state, and named owner remain visible before distribution.",
    baseEvents: [
      { time: "10:03", title: "Program notice requested", detail: "A fictional seasonal program communication entered workflow PN-18.", icon: FileText, tone: "signal" },
      { time: "10:04", title: "Audience rule evaluated", detail: "Twelve active off-premise accounts matched rule PR-18; audience selection remains locked.", icon: BadgeCheck, tone: "control" },
      { time: "10:05", title: "Terms packet reference attached", detail: "PN-18-TERM is referenced for review. No price, discount, or commercial terms are displayed in the demo.", icon: Mail, tone: "control" },
    ],
    sentEvent: { time: "10:14", title: "Policy-gated distribution simulated", detail: "A fictional notice event was recorded for the reviewed 12-account audience. No production delivery occurred.", icon: Send, tone: "sent" },
    exceptionEvent: { time: "10:19", title: "Eligibility clarification request received", detail: "A buyer requested special treatment. Alicia and the account owner must review the request.", icon: UserRound, tone: "exception" },
    exceptionName: "Dana Reyes",
    exceptionAccount: "Elm Street Market",
    exceptionTime: "10:19",
    exceptionQuoteLabel: "REPLY TO · PROGRAM NOTICE PN-18",
    exceptionQuote: "“We are not on the original audience. Can you add us and confirm whether the program applies to our account?”",
    exceptionTitle: "Eligibility and special-treatment review required",
    exceptionDetail: "The buyer requests an eligibility exception. Harborline records the context but does not alter the audience, interpret terms, or send a response.",
    ownerInitials: "AC",
    ownerName: "Alicia Chen",
    auditPolicyItems: ["Program event and terms-packet reference", "Audience rule, count, and review state", "Policy-gated template and channel", "Distribution state and exception", "Named operations and account-owner handoff"],
  },
};

const workflowOrder: WorkflowId[] = ["reorder", "allocation", "promo"];

function Avatar({ initials, small = false }: { initials: string; small?: boolean }) {
  return <span className={`ops-avatar ${small ? "small" : ""}`}>{initials}</span>;
}

function stateLabel(config: WorkflowConfig, state: WorkflowState, policyReady: boolean) {
  if (state === "exception") return "Exception assigned";
  if (state === "drafted") return "Draft recorded";
  if (state === "sent") return config.id === "promo" ? "Distribution recorded" : "Send recorded";
  if (config.id === "promo" && !policyReady) return "Policy review pending";
  return config.defaultMode === "draft" ? "Draft for rep" : "Needs rep approval";
}

function StatePill({ config, state, policyReady }: { config: WorkflowConfig; state: WorkflowState; policyReady: boolean }) {
  const copy = stateLabel(config, state, policyReady);
  const Icon = state === "exception" ? UserRound : state === "sent" ? Send : state === "drafted" ? ClipboardCheck : stateLabel(config, state, policyReady).includes("Policy") ? ShieldCheck : Clock3;
  return <span className={`ops-state-pill ${state === "approval" && config.id === "promo" && !policyReady ? "policy" : state}`}><Icon size={13} />{copy}</span>;
}

export default function Home() {
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const requestedWorkflow = searchParams.get("workflow");
  const initialWorkflow: WorkflowId = requestedWorkflow === "allocation" || requestedWorkflow === "promo" ? requestedWorkflow : "reorder";
  const initialView: View = typeof window !== "undefined" && ["workflow", "replies", "accounts", "audit"].includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) as View : "workflows";
  const requestedState = searchParams.get("demo");
  const initialState: WorkflowState = requestedState === "exception" || requestedState === "sent" || requestedState === "drafted" ? requestedState : "approval";
  const [view, setView] = useState<View>(initialView);
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowId>(initialWorkflow);
  const [state, setState] = useState<WorkflowState>(initialState);
  const [mode, setMode] = useState<Mode>(configurations[initialWorkflow].defaultMode);
  const [assigned, setAssigned] = useState(searchParams.get("assigned") === "true" && initialState === "exception");
  const [policyReady, setPolicyReady] = useState(searchParams.get("terms") === "verified" && initialWorkflow === "promo");
  const [guided, setGuided] = useState(false);
  const config = configurations[activeWorkflow];

  useEffect(() => {
    const params = new URLSearchParams();
    if (activeWorkflow !== "reorder") params.set("workflow", activeWorkflow);
    if (state !== "approval") params.set("demo", state);
    if (assigned) params.set("assigned", "true");
    if (activeWorkflow === "promo" && policyReady) params.set("terms", "verified");
    const query = params.toString();
    const hash = view === "workflows" ? "" : `#${view}`;
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${hash}`);
  }, [view, activeWorkflow, state, assigned, policyReady]);

  const events = useMemo<AuditEvent[]>(() => {
    const list = [...config.baseEvents];
    if (config.id === "promo" && policyReady) {
      list.push({ time: "10:10", title: "Policy gate recorded", detail: "Terms packet reference and the locked 12-account audience were marked reviewed in this fictional demo state.", icon: ShieldCheck, tone: "control" });
    }
    if (state === "drafted" && config.draftedEvent) list.push(config.draftedEvent);
    if (state === "sent" || state === "exception") list.push(config.sentEvent);
    if (state === "exception") list.push({ ...config.exceptionEvent, title: assigned ? `Exception assigned to ${config.ownerName}` : config.exceptionEvent.title, detail: assigned ? `${config.exceptionTitle} is now assigned to the named workflow owner; no automated response was created.` : config.exceptionEvent.detail });
    return list;
  }, [config, state, assigned, policyReady]);

  const resetDemo = () => {
    setView("workflows");
    setActiveWorkflow("reorder");
    setState("approval");
    setMode("rep");
    setAssigned(false);
    setPolicyReady(false);
    setGuided(false);
  };

  const selectWorkflow = (id: WorkflowId) => {
    const next = configurations[id];
    setActiveWorkflow(id);
    setState("approval");
    setMode(next.defaultMode);
    setAssigned(false);
    setPolicyReady(false);
    setView("workflow");
  };

  const advanceWorkflow = () => {
    if (config.id === "promo" && !policyReady) {
      setPolicyReady(true);
      setMode("policy");
      return;
    }
    if (state === "approval" && config.id === "allocation") {
      setState("drafted");
      return;
    }
    if (state === "approval" || state === "drafted") {
      setState("sent");
      return;
    }
    if (state === "sent") {
      setState("exception");
      setView("replies");
    }
  };

  const actionLabel = () => {
    if (state === "approval" && config.id === "promo" && !policyReady) return "Verify terms & audience";
    if (state === "approval" && config.id === "allocation") return "Record draft for Marcus";
    if (state === "drafted") return "Simulate Marcus-approved send";
    if (state === "approval" && config.id === "promo") return "Simulate approved distribution";
    if (state === "approval") return mode === "draft" ? `Record draft for ${config.ownerName.split(" ")[0]}` : "Approve & simulate send";
    if (state === "sent") return "Simulate non-routine reply";
    return "Open assigned exception";
  };

  const navigation = [
    { id: "workflows" as View, label: "Workflow center", icon: LayoutList },
    { id: "replies" as View, label: "Replies & exceptions", icon: MessageSquareWarning },
    { id: "accounts" as View, label: "Accounts", icon: UsersRound },
    { id: "audit" as View, label: "Audit & policy", icon: FileCheck2 },
  ];

  const breadcrumb = { workflows: "WORKFLOW CENTER", workflow: config.type, replies: "REPLIES & EXCEPTIONS", accounts: "ACCOUNT CONTEXT", audit: "AUDIT RECORD" }[view];
  const cardStatus = (item: WorkflowConfig) => item.id === activeWorkflow ? stateLabel(item, state, policyReady) : item.initialStatus;
  const activeException = state === "exception";
  const modeTitle = config.id === "promo" ? "Policy gate controls distribution." : "Choose the level of human control.";

  return (
    <div className="ops-app">
      <aside className="ops-sidebar">
        <div>
          <div className="ops-brand"><Route size={30} /><div><strong>HARBORLINE</strong><span>COMMUNICATION OPS</span></div></div>
          <div className="ops-environment"><span /> SANDBOX / NO LIVE DELIVERY</div>
          <nav className="ops-nav" aria-label="Product navigation">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = view === item.id || (item.id === "workflows" && view === "workflow");
              return <button key={item.id} className={active ? "active" : ""} onClick={() => setView(item.id)}><Icon size={18} /><span>{item.label}</span>{item.id === "replies" && activeException ? <b>1</b> : null}</button>;
            })}
          </nav>
        </div>
        <div className="ops-sidebar-footer"><div className="ops-owner"><Avatar initials={config.ownerInitials} small /><div><span>ACTIVE OWNER</span><strong>{config.ownerName}</strong></div></div><button className="ops-reset" onClick={resetDemo}><RefreshCcw size={15} /> Reset demo</button></div>
      </aside>

      <main className="ops-main">
        <header className="ops-topbar"><div className="ops-breadcrumb"><span>HARBORLINE /</span><strong>{breadcrumb}</strong></div><div className="ops-top-actions"><span className="ops-fictional"><Sparkles size={13} /> Sandbox record</span><button aria-label="Search" className="ops-icon"><Search size={18} /></button><button aria-label="Notifications" className="ops-icon"><BellRing size={18} /></button><Avatar initials="OL" small /></div></header>

        {view === "workflows" ? (
          <section className="ops-workspace workflow-center">
            <div className="ops-heading"><div><p className="ops-eyebrow">CONTROLLED DISTRIBUTION LEDGER</p><h1>Run the <em>right</em> message.<br />Keep the relationship human.</h1><p>Three workflow types, one accountable system. Harborline records the event, audience, message boundary, approval posture, human owner, and evidence before a communication action is simulated.</p></div><div className="ops-heading-actions"><button className="ops-secondary" onClick={() => setGuided(!guided)}><Play size={15} /> {guided ? "Hide flow guide" : "Show flow guide"}</button><button className="ops-primary" onClick={() => setView("workflow")}>Open selected workflow <ArrowRight size={16} /></button></div></div>
            {guided ? <div className="ops-flow-guide">{config.steps.map((step, index) => { const Icon = step.icon; return <div key={step.id}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={16} /><strong>{step.title}</strong><small>{step.detail}</small></div>; })}</div> : null}
            <div className="ops-center-layout">
              <section className="ops-workflow-list"><div className="ops-section-title"><div><p className="ops-eyebrow">ACTIVE COMMUNICATION WORKFLOWS</p><h2>What can run now</h2></div><button className="ops-filter"><Filter size={15} /> All statuses</button></div>{workflowOrder.map((id) => { const item = configurations[id]; const Icon = item.id === "allocation" ? PackageCheck : item.id === "promo" ? ShieldCheck : Mail; return <button key={item.id} className={`ops-workflow-card ${item.id === activeWorkflow ? "active-workflow" : ""} ${item.tone === "attention" ? "primary-workflow" : ""}`} onClick={() => selectWorkflow(item.id)}><span className={`ops-card-mark ${item.tone}`}><Icon size={17} /></span><span className="ops-card-copy"><small>{item.type}</small><strong>{item.title}</strong><em>{item.cardDetail}</em></span><span className={`ops-card-status ${item.tone}`}>{cardStatus(item)}</span><ChevronRight size={18} /></button>; })}</section>
              <aside className="ops-right-rail"><section className="ops-review-card"><div className="ops-section-title"><div><p className="ops-eyebrow">HUMAN DECISION QUEUE</p><h2>{activeException ? "One exception is waiting" : "No active exceptions"}</h2></div><MessageSquareWarning size={19} /></div>{activeException ? <button className="ops-exception-preview" onClick={() => setView("replies")}><span><Avatar initials={config.exceptionName.split(" ").map((name) => name[0]).join("")} small /><div><strong>{config.exceptionName} · {config.contextName}</strong><small>{config.exceptionTitle}</small></div></span><ChevronRight size={16} /></button> : <div className="ops-empty"><CircleCheck size={19} /><p>Non-routine replies always land with a named human owner and a preserved workflow record.</p></div>}</section><section className="ops-guardrail-card"><ShieldCheck size={19} /><div><strong>One control system. Three uses.</strong><p>Rules, audience, message boundary, owner, exception, and evidence stay visible across every workflow.</p></div></section></aside>
            </div>
          </section>
        ) : null}

        {view === "workflow" ? (
          <section className="ops-workspace workflow-detail">
            <button className="ops-back" onClick={() => setView("workflows")}><ArrowLeft size={15} /> Workflow center</button>
            <div className="ops-heading compact"><div><p className="ops-eyebrow">{config.eyebrow}</p><h1>{config.heading.split("\n")[0]}<br />{config.heading.split("\n")[1]} <em>{config.emphasis}</em></h1><p>{config.description}</p></div><div className="ops-heading-actions"><StatePill config={config} state={state} policyReady={policyReady} /><button className="ops-secondary" onClick={() => setView("audit")}><FileCheck2 size={15} /> Open audit</button></div></div>
            <div className="ops-workflow-layout"><aside className="ops-step-rail">{config.steps.map((step, index) => { const Icon = step.icon; const actionComplete = state === "sent" || state === "exception"; const complete = index < 3 || (index === 3 && actionComplete) || (index === 4 && state === "exception"); const current = (state === "approval" && index === 3) || (state === "drafted" && index === 3) || (state === "sent" && index === 4); return <div className={`ops-step ${complete ? "complete" : ""} ${current ? "current" : ""}`} key={step.id}><span><Icon size={15} /></span><div><small>{String(index + 1).padStart(2, "0")}</small><strong>{step.title}</strong><em>{step.detail}</em></div></div>; })}</aside>
              <div className="ops-workflow-canvas"><section className={`ops-trigger-card ${config.id === "promo" ? "policy-trigger" : ""}`}><div className="ops-trigger-icon">{config.id === "allocation" ? <PackageCheck size={20} /> : config.id === "promo" ? <FileText size={20} /> : <Gauge size={20} />}</div><div><p className="ops-eyebrow">{config.triggerKind}</p><h2>{config.triggerTitle}</h2><p>{config.triggerDescription}</p></div><span>{config.triggerCode}<br /><small>{config.triggerKind}</small></span></section>
                <div className="ops-context-grid"><section className="ops-context-card"><p className="ops-eyebrow">{config.contextLabel}</p><div className="ops-account-row"><span className="ops-monogram">{config.monogram}</span><div><strong>{config.contextName}</strong><small>{config.contextMeta}</small></div></div><dl>{config.contextRows.map((row) => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl></section><section className="ops-mode-card"><p className="ops-eyebrow">{config.id === "promo" ? "POLICY CONTROL" : "AUTOMATION MODE"}</p><h3>{modeTitle}</h3>{config.id === "promo" ? <div className={`ops-policy-gate ${policyReady ? "verified" : ""}`}><ShieldCheck size={18} /><div><strong>{policyReady ? "Terms & audience verified" : "Terms & audience review required"}</strong><small>{policyReady ? "PN-18-TERM and audience rule PR-18 are recorded for this fictional demo state." : "No distribution can be simulated until the terms packet reference and 12-account audience are reviewed."}</small></div>{policyReady ? <Check size={16} /> : <button className="ops-text-button" onClick={() => { setPolicyReady(true); setMode("policy"); }}>Verify gate <ArrowRight size={14} /></button>}</div> : <><button className={mode === "draft" ? "selected" : ""} onClick={() => setMode("draft")}><span><ClipboardCheck size={17} /><strong>Draft for rep</strong><small>{config.id === "allocation" ? "Prepare only; Marcus reviews before a message can be simulated." : `Prepare only; ${config.ownerName.split(" ")[0]} decides whether to send.`}</small></span>{mode === "draft" ? <Check size={16} /> : null}</button>{config.id === "reorder" ? <button className={mode === "rep" ? "selected" : ""} onClick={() => setMode("rep")}><span><UserRound size={17} /><strong>Rep-approved send</strong><small>Renee approves before the message is recorded.</small></span>{mode === "rep" ? <Check size={16} /> : null}</button> : <div className="ops-future-mode"><UserRound size={16} /><span><strong>Rep approval follows draft</strong><small>Marcus makes the final send and any allocation decision.</small></span></div>}<div className="ops-future-mode"><ShieldCheck size={16} /><span><strong>Policy-approved send</strong><small>Available only after validated rules and review.</small></span></div></>}</section></div>
                <section className="ops-message-card"><div className="ops-message-heading"><div><p className="ops-eyebrow">{config.id === "promo" ? "POLICY-GATED NOTICE" : "APPROVED OUTREACH"}</p><h3>{config.template}</h3></div><span><ShieldCheck size={15} /> {config.termsLabel}</span></div><div className="ops-message-meta">{config.meta.map((item) => <span key={item}>{item}</span>)}</div><p>{config.messageBody}</p><small>{config.signature}</small><div className="ops-message-foot"><span><CircleCheck size={15} /> {config.controlCopy}</span>{state === "exception" ? <button className="ops-secondary" onClick={() => setView("replies")}>Open assigned exception <ArrowRight size={16} /></button> : <button className="ops-primary" onClick={advanceWorkflow}>{actionLabel()} {state === "sent" ? <MessageSquareWarning size={16} /> : state === "approval" && config.id === "promo" && !policyReady ? <ShieldCheck size={16} /> : <Send size={16} />}</button>}</div></section>
              </div></div>
          </section>
        ) : null}

        {view === "replies" ? (
          <section className="ops-workspace replies-view"><div className="ops-heading compact"><div><p className="ops-eyebrow">HUMAN JUDGMENT QUEUE</p><h1>Replies that need<br /><em>a person.</em></h1><p>Harborline does not negotiate price, resolve disputes, decide allocation, or alter an audience. Non-routine conversation stays visibly with the named workflow owner.</p></div><div className="ops-heading-actions"><button className="ops-secondary" onClick={() => setView("workflow")}><ArrowLeft size={15} /> Return to workflow</button><button className="ops-secondary" onClick={() => setView("audit")}><FileCheck2 size={15} /> Open audit</button></div></div>
            {!activeException ? <div className="ops-reply-empty"><CircleCheck size={26} /><h2>No exceptions waiting</h2><p>Advance the selected {config.type.toLowerCase()} through its fictional scenario to demonstrate the named-human handoff.</p><button className="ops-primary" onClick={() => setView("workflow")}>Open selected workflow <ArrowRight size={16} /></button></div> : <div className="ops-reply-layout"><section className="ops-reply-card"><div className="ops-reply-top"><span className="ops-reply-unread" /><div><Avatar initials={config.exceptionName.split(" ").map((name) => name[0]).join("")} /><div><strong>{config.exceptionName}</strong><small>{config.exceptionAccount} · received at {config.exceptionTime}</small></div></div><StatePill config={config} state="exception" policyReady={policyReady} /></div><div className="ops-reply-quote"><span>{config.exceptionQuoteLabel}</span><p>{config.exceptionQuote}</p></div><div className="ops-reply-reason"><MessageSquareWarning size={18} /><div><strong>{config.exceptionTitle}</strong><p>{config.exceptionDetail}</p></div></div><div className="ops-reply-actions"><div><Avatar initials={config.ownerInitials} /><span><small>ASSIGNED WORKFLOW OWNER</small><strong>{config.ownerName}</strong></span></div>{assigned ? <span className="ops-assigned"><Check size={15} /> {config.ownerName.split(" ")[0]} has been assigned</span> : <button className="ops-primary" onClick={() => setAssigned(true)}>Assign to {config.ownerName.split(" ")[0]} <UserRound size={16} /></button>}</div></section><aside className="ops-reply-context"><p className="ops-eyebrow">ORIGINAL WORKFLOW CONTEXT</p><dl><div><dt>TRIGGER</dt><dd>{config.triggerKind}</dd></div><div><dt>MESSAGE</dt><dd>{config.template}</dd></div><div><dt>MODE</dt><dd>{config.id === "promo" ? "Policy-gated notice" : mode === "draft" ? "Draft then rep review" : "Rep-approved send"}</dd></div><div><dt>AUDIT</dt><dd>{events.length} recorded events</dd></div></dl><button className="ops-text-button" onClick={() => setView("audit")}>View complete audit record <ArrowRight size={15} /></button></aside></div>}
          </section>
        ) : null}

        {view === "accounts" ? (
          <section className="ops-workspace accounts-view"><div className="ops-heading compact"><div><p className="ops-eyebrow">RELATIONSHIP & AUDIENCE CONTEXT</p><h1>Context supports<br /><em>the action.</em></h1><p>Account records and audience rules supply the details needed to run a controlled workflow. They are supporting context, not the product’s center of gravity.</p></div><div className="ops-heading-actions"><button className="ops-primary" onClick={() => setView("workflow")}>Open selected workflow <ArrowRight size={16} /></button></div></div><section className="ops-account-panel"><div className="ops-account-head"><span className="ops-monogram large">{config.monogram}</span><div><p className="ops-eyebrow">{config.contextLabel} · FICTIONAL DEMO</p><h2>{config.contextName}</h2><p><span className="ops-live-dot" /> Active owner <strong>{config.ownerName}</strong> · Workflow <strong>{config.triggerCode}</strong></p></div></div><div className="ops-account-facts">{config.contextRows.slice(0, 3).map((row) => <div key={row.label}><span>{row.label}</span><strong>{row.value}</strong><small>{row.label === "AUDIENCE RULE" ? "Rule version retained in audit" : "Visible before controlled action"}</small></div>)}</div><div className="ops-account-timeline"><span className="ops-eyebrow">WORKFLOW HISTORY</span>{events.map((event) => <div key={event.time + event.title}><span>{event.time}</span><i /><p><strong>{event.title}</strong>{event.detail}</p></div>)}</div></section></section>
        ) : null}

        {view === "audit" ? (
          <section className="ops-workspace audit-view"><div className="ops-heading compact"><div><p className="ops-eyebrow">CONTROLLED COMMUNICATION RECORD</p><h1>One workflow.<br /><em>Complete evidence.</em></h1><p>Every visible action is tied to an event, audience or eligible account, bounded template, control mode, owner, and next human decision.</p></div><div className="ops-heading-actions"><button className="ops-secondary" onClick={() => setView("workflow")}><ArrowLeft size={15} /> Return to workflow</button><StatePill config={config} state={state} policyReady={policyReady} /></div></div><div className="ops-audit-layout"><section className="ops-audit-trail"><div className="ops-audit-intro"><div><p className="ops-eyebrow">EVENT TRAIL · {config.triggerCode}</p><h2>{config.title}</h2></div><span>Sandbox evidence record</span></div>{events.map((event, index) => { const Icon = event.icon; return <article className={`ops-audit-event ${event.tone}`} key={event.time + event.title}><div className="ops-event-rail"><span><Icon size={16} /></span>{index < events.length - 1 ? <i /> : null}</div><div><div><strong>{event.title}</strong><time>{event.time}</time></div><p>{event.detail}</p></div></article>; })}</section><aside className="ops-policy-card"><ShieldCheck size={20} /><p className="ops-eyebrow">POLICY VIEW</p><h3>What is recorded</h3><ul>{config.auditPolicyItems.map((item) => <li key={item}><Check size={14} /> {item}</li>)}</ul><button className="ops-text-button" onClick={() => setView("replies")}>Open replies & exceptions <ArrowRight size={15} /></button></aside></div></section>
        ) : null}
      </main>
    </div>
  );
}
