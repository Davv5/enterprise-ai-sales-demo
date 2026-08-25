/**
 * Route Thread design reminder: compose this page as a field-to-account route.
 * Begin with familiar beverage-account moments, retain the accountable human
 * owner, and avoid generic platform language or AI automation theater.
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
    eyebrow: "Route rhythm",
    title: "Route rhythm check",
    detail:
      "A field visit and account cadence point to a moment worth checking. The rep gets the route note and account context before deciding whether a follow-up is useful.",
    signal: "Larkspur Market · cadence shifted",
    boundary: "The rep decides if and how to follow up",
    owner: "Noah Lin · Route Rep",
    state: "Account context ready",
    accent: "blue",
  },
  allocation: {
    id: "02",
    eyebrow: "Seasonal display",
    title: "Seasonal display handoff",
    detail:
      "A display window is approaching. The team can surface the account’s visit history and program context without assuming the offer, timing, or terms belong to the system.",
    signal: "Westgate Liquors · display window",
    boundary: "Program terms stay with the manager",
    owner: "Jordan Miles · Sales Manager",
    state: "Manager context needed",
    accent: "rust",
  },
  policy: {
    id: "03",
    eyebrow: "On-premise account",
    title: "On-premise follow-up",
    detail:
      "A menu, placement, or training conversation needs continuity after the visit. The product preserves the signal and routes it to the owner without dictating the customer conversation.",
    signal: "Elm & Oak Kitchen · menu moment",
    boundary: "The account owner decides what is appropriate",
    owner: "Carmen Soto · Account Lead",
    state: "Owner follow-up held",
    accent: "ink",
  },
};

const principles = [
  ["Field context stays", "Route notes, display activity, buyer history, and the account moment travel together."],
  ["People decide", "Reps and managers keep the call on timing, terms, quantity, allocation, and sensitive account work."],
  ["Memory travels", "What surfaced, who owned it, and what happened next remains connected to the account."],
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
          <span className="brand-name"><b>Communication</b> <em>Ops</em><small>FIELD / ACCOUNT</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#operating-model">Account moments</a>
          <a href="#workflows">Handoffs</a>
          <a href="#memory">Account memory</a>
        </nav>

        <button className="header-cta" onClick={() => scrollToId("operating-brief")}>
          Walk the distributor day <ArrowUpRight size={15} strokeWidth={2.2} />
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
          <a href="#operating-model" onClick={() => setMenuOpen(false)}>Account moments</a>
          <a href="#workflows" onClick={() => setMenuOpen(false)}>Handoffs</a>
          <a href="#memory" onClick={() => setMenuOpen(false)}>Account memory</a>
          <button onClick={() => { setMenuOpen(false); scrollToId("operating-brief"); }}>
            Walk the distributor day <ArrowUpRight size={16} />
          </button>
        </nav>
      )}

      <main id="top">
        <section className="hero section-frame">
          <div className="docket-rail" aria-hidden="true">
            <span className="rail-number">01</span>
            <span className="rail-line" />
            <span className="rail-label">A beverage account day</span>
          </div>

          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><CircleDot size={13} /> Communication Ops for beverage distributors</p>
            <h1>The account moment<br />starts in the field.<br /><i>Keep it moving to the buyer.</i></h1>
            <p className="hero-dek">
              From a cooler reset to a chain-program question, Communication Ops carries the signal, account context, and right owner into a controlled next step—before the account thread goes cold.
            </p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => scrollToId("operating-brief")}>
                See the account handoff <ArrowRight size={17} />
              </button>
              <button className="button-text" onClick={() => scrollToId("operating-model")}>
                Follow the route thread <ArrowDown size={16} />
              </button>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="visual-index">Fictional demo environment</div>
            <img
              src="/manus-storage/beverage-ops-hero_f2606676.jpg"
              alt="Route notebook and account material prepared outside a beverage retailer"
            />
            <div className="hero-visual-note">
              <span className="pulse-dot" />
              <span>Field moment logged</span>
              <strong>08:42</strong>
            </div>
            <div className="hero-route-line" aria-hidden="true" />
          </div>

          <div className="hero-footnote" data-reveal>
            <span>For beverage sales &amp; operations leaders</span>
            <span>Field context before follow-up</span>
          </div>
        </section>

        <section id="operating-model" className="opening-statement section-frame">
          <div className="docket-rail" aria-hidden="true">
            <span className="rail-number">02</span>
            <span className="rail-line" />
            <span className="rail-label">The account gap</span>
          </div>
          <div className="statement-copy" data-reveal>
            <p className="eyebrow">The route sees it first</p>
            <h2>Your reps know when an account has a real moment. The rest of the operation should not lose it.</h2>
            <p>
              A display check, a changed order rhythm, a menu conversation, or a buyer question can all start in the field. Communication Ops turns that moment into prepared account work without taking the commercial call away from the people who own the relationship.
            </p>
          </div>
          <div className="margin-note evidence-note" data-reveal>
            <span className="note-kicker">The essential shift</span>
            <p>Carry the account moment from the route to the person who can move it forward.</p>
            <span className="note-rule" />
            <span className="note-meta">Route context · Named owner · Account memory</span>
            <span className="evidence-chain">SIGNAL → OWNER → NEXT ACTION</span>
          </div>
        </section>

        <section id="operating-brief" className="brief-section section-frame">
          <div className="docket-rail inverted" aria-hidden="true">
            <span className="rail-number">03</span>
            <span className="rail-line" />
            <span className="rail-label">The beverage account brief</span>
          </div>
          <div className="brief-intro" data-reveal>
            <p className="eyebrow eyebrow-light">The start of the day</p>
            <h2>One brief.<br /><i>Every account moment in context.</i></h2>
            <p>
              Communication Ops gathers the route notes, display windows, account conversations, and next human decisions that need to stay visible across the beverage day.
            </p>
          </div>

          <div className="brief-interface" data-reveal aria-label="Illustrative fictional Daily Operating Brief interface">
            <div className="interface-topbar">
              <div><span className="tiny-blue-dot" /> BEVERAGE ACCOUNT BRIEF</div>
              <span>Tue · 08 Oct · Fictional portfolio</span>
            </div>
            <div className="brief-grid">
              <aside className="interface-sidebar">
                <span className="sidebar-active">Today’s route</span>
                <span>Account handoffs</span>
                <span>Buyer context</span>
                <span>Account memory</span>
                <div className="sidebar-stamp">CONTROLLED<br />DEMO</div>
              </aside>
              <div className="interface-main">
                <div className="interface-summary">
                  <div>
                    <span className="interface-label">Field posture</span>
                    <strong>4 account moments are ready for a person</strong>
                  </div>
                  <span className="posture-chip">Route context attached</span>
                </div>
                <div className="moment-list">
                  <article className="moment-row active-moment">
                    <span className="moment-time">08:42</span>
                    <span className="moment-signal"><i /> Route rhythm</span>
                    <div><strong>Larkspur Market</strong><small>Core SKU cadence needs a rep check</small></div>
                    <span className="owner-initials">NL</span>
                    <ChevronRight size={17} />
                  </article>
                  <article className="moment-row">
                    <span className="moment-time">10:10</span>
                    <span className="moment-signal rust"><i /> Display handoff</span>
                    <div><strong>Westgate Liquors</strong><small>Display check needs manager context</small></div>
                    <span className="owner-initials rust-owner">JM</span>
                    <ChevronRight size={17} />
                  </article>
                  <article className="moment-row">
                    <span className="moment-time">11:30</span>
                    <span className="moment-signal muted"><i /> On-premise</span>
                    <div><strong>Elm &amp; Oak Kitchen</strong><small>Menu moment is held for the owner</small></div>
                    <span className="owner-initials dark-owner">CS</span>
                    <ChevronRight size={17} />
                  </article>
                </div>
                <div className="memory-preview">
                  <span className="interface-label">Account memory · latest record</span>
                  <p><span>08:42</span> Route note linked to Larkspur Market · Noah Lin assigned · follow-up stays with the account owner</p>
                </div>
              </div>
            </div>
            <div className="interface-callout"><Sparkles size={14} /> The system preserves the moment. The account owner decides the response.</div>
          </div>
        </section>

        <section id="workflows" className="workflow-section section-frame">
          <div className="docket-rail" aria-hidden="true">
            <span className="rail-number">04</span>
            <span className="rail-line" />
            <span className="rail-label">Three account handoffs</span>
          </div>
          <div className="workflow-heading" data-reveal>
            <p className="eyebrow">Account handoffs, without the overreach</p>
            <h2>A field moment becomes a better <i>account handoff.</i></h2>
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
                src="/manus-storage/beverage-ops-retail_c58cdb66.jpg"
                alt="Off-premise beverage account materials beside a cooler display"
              />
              <span className="image-caption">A prepared handoff is not an automated account decision.</span>
            </div>
          </div>
        </section>

        <section className="principles-section section-frame">
          <div className="docket-rail inverted" aria-hidden="true">
            <span className="rail-number">05</span>
            <span className="rail-line" />
            <span className="rail-label">The relationship boundary</span>
          </div>
          <div className="principles-intro" data-reveal>
            <p className="eyebrow eyebrow-light">Built around the account relationship</p>
            <h2>The account is local. The handoff needs to be exact.</h2>
            <img className="onpremise-scene" src="/manus-storage/beverage-ops-onpremise_ef7be730.jpg" alt="On-premise account materials arranged near a restaurant bar" />
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
            <span className="rail-label">Account memory</span>
          </div>
          <div className="memory-visual" data-reveal>
            <img
              src="/manus-storage/beverage-ops-memory_25464f4b.jpg"
              alt="Connected route, account, and decision artifacts forming a retained account record"
            />
          </div>
          <div className="memory-copy" data-reveal>
            <p className="eyebrow">The account record outlasts the visit</p>
            <h2>Let the next person inherit the real account context.</h2>
            <p>
              Account Memory retains the route note, account moment, named owner, and remaining decision. It gives a beverage team enough context to pick up real relationship work without treating the account like a ticket.
            </p>
            <ul>
              <li><ShieldCheck size={16} /> Field context and account history stay connected</li>
              <li><ShieldCheck size={16} /> The accountable rep or manager remains visible</li>
              <li><ShieldCheck size={16} /> The next decision keeps its source context</li>
            </ul>
          </div>
        </section>

        <section className="final-cta section-frame" data-reveal>
          <div className="cta-rule" aria-hidden="true" />
          <p className="eyebrow">Communication Ops</p>
          <h2>Let every account moment reach the right person—<i>with the relationship still intact.</i></h2>
          <p>Walk through the fictional beverage account brief for a more grounded approach to distributor communication work.</p>
          <button className="button-primary" onClick={() => scrollToId("operating-brief")}>
            Walk the distributor day <ArrowUpRight size={17} />
          </button>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/manus-storage/communication-ops-mark_739604d1.png" alt="" />
          <span>Communication <em>Ops</em></span>
        </div>
        <p>Illustrative beverage-distributor product site. All account examples and data are fictional and simulated.</p>
        <span className="footer-meta">© 2026 · Field context, carried forward</span>
      </footer>
    </div>
  );
}
