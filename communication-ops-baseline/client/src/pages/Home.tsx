/**
 * Signal Ledger design reminder: compose this page as an evidence-led operating
 * docket. Favor editorial asymmetry, accountable human ownership, and quiet
 * document-like product artifacts over generic dashboard or AI visual tropes.
 */
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type WorkflowKey = "reorder" | "allocation" | "policy";

const workflows: Record<
  WorkflowKey,
  {
    id: string;
    eyebrow: string;
    title: string;
    detail: string;
    signal: string;
    boundary: string;
    owner: string;
    state: string;
    accent: "blue" | "rust" | "ink";
  }
> = {
  reorder: {
    id: "01",
    eyebrow: "Cadence signal",
    title: "Reorder reminder",
    detail:
      "A known cadence creates a prepared availability check. The rep sees the account context before a message is ever considered.",
    signal: "Cadence variance · 11 days",
    boundary: "Price and terms stay with the rep",
    owner: "Renee Lawson · Account Rep",
    state: "Prepared for review",
    accent: "blue",
  },
  allocation: {
    id: "02",
    eyebrow: "Allocation event",
    title: "New allocation alert",
    detail:
      "A qualified audience is assembled from approved context. Interest can be prepared, while quantity and commercial decisions remain human-owned.",
    signal: "Allocation event · 284 cases",
    boundary: "Quantity and price stay with the manager",
    owner: "Marcus Chen · Sales Manager",
    state: "Decision required",
    accent: "rust",
  },
  policy: {
    id: "03",
    eyebrow: "Policy boundary",
    title: "Policy-gated notice",
    detail:
      "A locked audience and referenced terms make the gate visible. The workflow can route review without interpreting policy or authorizing delivery.",
    signal: "Terms packet · Rev. 4",
    boundary: "Eligibility interpretation stays with review",
    owner: "Alicia Torres · Policy Review",
    state: "Review gate active",
    accent: "ink",
  },
};

const principles = [
  ["AI organizes", "Signals, account context, bounded next work, and a usable record."],
  ["People decide", "Price, terms, quantity, eligibility, exceptions, and sensitive replies."],
  ["Memory connects", "What surfaced, why it mattered, who owned it, and what changed next."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowKey>("reorder");
  const [menuOpen, setMenuOpen] = useState(false);
  const currentWorkflow = workflows[activeWorkflow];

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Communication Ops home">
          <img
            src="/manus-storage/communication-ops-mark_739604d1.png"
            alt=""
            className="brand-mark"
          />
          <span className="brand-name">Communication <em>Ops</em></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#operating-model">Operating model</a>
          <a href="#workflows">Workflows</a>
          <a href="#memory">Operating memory</a>
        </nav>

        <button className="header-cta" onClick={() => scrollToId("operating-brief")}>
          Explore the brief <ArrowUpRight size={15} strokeWidth={2.2} />
        </button>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile primary navigation">
          <a href="#operating-model" onClick={() => setMenuOpen(false)}>Operating model</a>
          <a href="#workflows" onClick={() => setMenuOpen(false)}>Workflows</a>
          <a href="#memory" onClick={() => setMenuOpen(false)}>Operating memory</a>
          <button onClick={() => { setMenuOpen(false); scrollToId("operating-brief"); }}>
            Explore the brief <ArrowUpRight size={16} />
          </button>
        </nav>
      )}

      <main id="top">
        <section className="hero section-frame">
          <div className="docket-rail" aria-hidden="true">
            <span className="rail-number">01</span>
            <span className="rail-line" />
            <span className="rail-label">A clearer account day</span>
          </div>

          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><CircleDot size={13} /> The AI Operations Lead</p>
            <h1>Keep the signal.<br />Keep the owner.<br /><i>Keep the account moving.</i></h1>
            <p className="hero-dek">
              Communication Ops turns account signals into prepared, governed work—so distributor teams can protect the judgment and relationships that matter.
            </p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => scrollToId("operating-brief")}>
                See the operating brief <ArrowRight size={17} />
              </button>
              <button className="button-text" onClick={() => scrollToId("operating-model")}>
                How the model works <ArrowDown size={16} />
              </button>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="visual-index">Fictional demo environment</div>
            <img
              src="/manus-storage/communication-ops-hero_5c55d862.jpg"
              alt="Editorial composition of account-routing materials connected by a blue operating line"
            />
            <div className="hero-visual-note">
              <span className="pulse-dot" />
              <span>Signal surfaced</span>
              <strong>09:14</strong>
            </div>
            <div className="hero-route-line" aria-hidden="true" />
          </div>

          <div className="hero-footnote" data-reveal>
            <span>For distributor sales &amp; operations leaders</span>
            <span>Evidence before automation</span>
          </div>
        </section>

        <section id="operating-model" className="opening-statement section-frame">
          <div className="docket-rail" aria-hidden="true">
            <span className="rail-number">02</span>
            <span className="rail-line" />
            <span className="rail-label">The operating gap</span>
          </div>
          <div className="statement-copy" data-reveal>
            <p className="eyebrow">Account communication is an operating problem</p>
            <h2>What needs attention is often scattered across systems, calendars, inboxes, and people.</h2>
            <p>
              A routine moment can slip. A sensitive question can lose its context. And the right owner may not see the work early enough to make a good decision. Communication Ops organizes the day without pretending it can make the commercial call.
            </p>
          </div>
          <div className="margin-note" data-reveal>
            <span className="note-kicker">The essential shift</span>
            <p>Move from activity tracking to an accountable operating record.</p>
            <span className="note-rule" />
            <span className="note-meta">Prepared work · Human judgment · Connected memory</span>
          </div>
        </section>

        <section id="operating-brief" className="brief-section section-frame">
          <div className="docket-rail inverted" aria-hidden="true">
            <span className="rail-number">03</span>
            <span className="rail-line" />
            <span className="rail-label">The Daily Operating Brief</span>
          </div>
          <div className="brief-intro" data-reveal>
            <p className="eyebrow eyebrow-light">The start of the day</p>
            <h2>One brief.<br /><i>Every accountable moment.</i></h2>
            <p>
              The AI Operations Lead prepares the day around the work that is ready, the decisions that need a person, the gates that need review, and the exceptions that cannot lose their owner.
            </p>
          </div>

          <div className="brief-interface" data-reveal aria-label="Illustrative fictional Daily Operating Brief interface">
            <div className="interface-topbar">
              <div><span className="tiny-blue-dot" /> DAILY OPERATING BRIEF</div>
              <span>Tue · 08 Oct · Fictional data</span>
            </div>
            <div className="brief-grid">
              <aside className="interface-sidebar">
                <span className="sidebar-active">Today</span>
                <span>Workflow library</span>
                <span>Exceptions</span>
                <span>Operating memory</span>
                <div className="sidebar-stamp">CONTROLLED<br />DEMO</div>
              </aside>
              <div className="interface-main">
                <div className="interface-summary">
                  <div>
                    <span className="interface-label">Operating posture</span>
                    <strong>7 account moments need direction</strong>
                  </div>
                  <span className="posture-chip">Coverage stable</span>
                </div>
                <div className="moment-list">
                  <article className="moment-row active-moment">
                    <span className="moment-time">09:14</span>
                    <span className="moment-signal"><i /> Cadence signal</span>
                    <div><strong>Harbor Market</strong><small>Reorder reminder prepared</small></div>
                    <span className="owner-initials">RL</span>
                    <ChevronRight size={17} />
                  </article>
                  <article className="moment-row">
                    <span className="moment-time">10:00</span>
                    <span className="moment-signal rust"><i /> Decision queue</span>
                    <div><strong>Northpoint Grocery</strong><small>Allocation interest check</small></div>
                    <span className="owner-initials rust-owner">MC</span>
                    <ChevronRight size={17} />
                  </article>
                  <article className="moment-row">
                    <span className="moment-time">11:25</span>
                    <span className="moment-signal muted"><i /> Review gate</span>
                    <div><strong>Goodway Stores</strong><small>Terms notice awaiting review</small></div>
                    <span className="owner-initials dark-owner">AT</span>
                    <ChevronRight size={17} />
                  </article>
                </div>
                <div className="memory-preview">
                  <span className="interface-label">Operating memory · latest record</span>
                  <p><span>09:14</span> Reorder signal linked to account context · Renee Lawson assigned · price exception held for review</p>
                </div>
              </div>
            </div>
            <div className="interface-callout"><Sparkles size={14} /> AI prepares the work. The owner decides the outcome.</div>
          </div>
        </section>

        <section id="workflows" className="workflow-section section-frame">
          <div className="docket-rail" aria-hidden="true">
            <span className="rail-number">04</span>
            <span className="rail-line" />
            <span className="rail-label">Three governed workflows</span>
          </div>
          <div className="workflow-heading" data-reveal>
            <p className="eyebrow">Prepared work, without the overreach</p>
            <h2>Every workflow makes its <i>boundary</i> obvious.</h2>
          </div>

          <div className="workflow-layout" data-reveal>
            <div className="workflow-tabs" role="tablist" aria-label="Communication workflows">
              {(Object.entries(workflows) as [WorkflowKey, typeof currentWorkflow][]).map(([key, workflow]) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={activeWorkflow === key}
                  className={activeWorkflow === key ? "workflow-tab selected" : "workflow-tab"}
                  onClick={() => setActiveWorkflow(key)}
                >
                  <span>{workflow.id}</span>
                  <strong>{workflow.title}</strong>
                  <ChevronRight size={18} />
                </button>
              ))}
            </div>

            <article className={`workflow-detail accent-${currentWorkflow.accent}`} role="tabpanel">
              <div className="workflow-detail-top">
                <span className="workflow-index">{currentWorkflow.id}</span>
                <span className="workflow-state">{currentWorkflow.state}</span>
              </div>
              <p className="eyebrow">{currentWorkflow.eyebrow}</p>
              <h3>{currentWorkflow.title}</h3>
              <p className="workflow-description">{currentWorkflow.detail}</p>
              <div className="workflow-facts">
                <div><span>Signal</span><strong>{currentWorkflow.signal}</strong></div>
                <div><span>Decision boundary</span><strong>{currentWorkflow.boundary}</strong></div>
                <div><span>Named owner</span><strong>{currentWorkflow.owner}</strong></div>
              </div>
              <button className="button-outline" onClick={() => scrollToId("memory")}>
                Trace the operating record <ArrowRight size={16} />
              </button>
            </article>

            <div className="workflow-image-wrap">
              <img
                src="/manus-storage/communication-ops-workflow_11abe240.jpg"
                alt="Physical workflow tickets organized in an editorial document tray"
              />
              <span className="image-caption">A prepared task is not an authorized message.</span>
            </div>
          </div>
        </section>

        <section className="principles-section section-frame">
          <div className="docket-rail inverted" aria-hidden="true">
            <span className="rail-number">05</span>
            <span className="rail-line" />
            <span className="rail-label">The control boundary</span>
          </div>
          <div className="principles-intro" data-reveal>
            <p className="eyebrow eyebrow-light">Designed for accountable communication</p>
            <h2>Automation should never make ownership disappear.</h2>
          </div>
          <div className="principle-list" data-reveal>
            {principles.map(([title, detail], index) => (
              <article key={title} className="principle-item">
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
                <Check size={19} />
              </article>
            ))}
          </div>
        </section>

        <section id="memory" className="memory-section section-frame">
          <div className="docket-rail" aria-hidden="true">
            <span className="rail-number">06</span>
            <span className="rail-line" />
            <span className="rail-label">Operating memory</span>
          </div>
          <div className="memory-visual" data-reveal>
            <img
              src="/manus-storage/communication-ops-memory_4aef14a9.jpg"
              alt="Abstract record of connected evidence sheets, markers, and a blue routing line"
            />
          </div>
          <div className="memory-copy" data-reveal>
            <p className="eyebrow">The record outlasts the moment</p>
            <h2>Preserve the logic behind the next step.</h2>
            <p>
              Operating Memory connects the signal, the permitted action, the named person, the simulated action, and the remaining exception. It gives teams enough context to pick up the work without treating a relationship like a ticket.
            </p>
            <ul>
              <li><ShieldCheck size={16} /> Evidence and control posture stay connected</li>
              <li><ShieldCheck size={16} /> The accountable owner remains visible</li>
              <li><ShieldCheck size={16} /> Exceptions retain their source context</li>
            </ul>
          </div>
        </section>

        <section className="final-cta section-frame" data-reveal>
          <div className="cta-rule" aria-hidden="true" />
          <p className="eyebrow">Communication Ops</p>
          <h2>See the work that needs a person—<i>not another dashboard.</i></h2>
          <p>Explore the fictional Daily Operating Brief for a more accountable approach to account communication.</p>
          <button className="button-primary" onClick={() => scrollToId("operating-brief")}>
            Open the operating brief <ArrowUpRight size={17} />
          </button>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/manus-storage/communication-ops-mark_739604d1.png" alt="" />
          <span>Communication <em>Ops</em></span>
        </div>
        <p>Illustrative product site. All workflow examples and data are fictional and simulated.</p>
        <span className="footer-meta">© 2026 · Communication operations, made accountable</span>
      </footer>
    </div>
  );
}
