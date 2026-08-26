/**
 * Design: Partner Build Window — an editorial product narrative with ink-blue structure,
 * coral turning points, mineral paper, and evidence-first details. It reveals meaningful
 * company movement to a market-facing partner without becoming a dashboard or dev console.
 */
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Compass,
  ExternalLink,
  Layers3,
  Lightbulb,
  LockKeyhole,
  Radar,
  Sparkles,
  Target,
  UsersRound,
  Waypoints,
} from "lucide-react";

type BuildState = "live" | "shaping" | "validating" | "later";

type BuildMovement = {
  id: string;
  state: BuildState;
  index: string;
  title: string;
  summary: string;
  why: string;
  possible: string;
  stillTrue: string;
};

const buildMovements: BuildMovement[] = [
  {
    id: "brief",
    state: "live",
    index: "01",
    title: "The AI Operations Lead now opens the story.",
    summary: "The demo begins with a Daily Operating Brief, then moves into controlled customer moments.",
    why: "Prospects should first feel the operating impact of an AI-led process—not see another list of workflow cards.",
    possible: "A buyer can now sit in the manager’s seat, see what needs attention, and drill into the governed work behind it.",
    stillTrue: "The operating day and actions are fictional and simulated; no customer data, AI model, or live delivery exists.",
  },
  {
    id: "workflows",
    state: "live",
    index: "02",
    title: "Three moments prove the control model.",
    summary: "Reorder, allocation, and policy-sensitive notice each show a different boundary where people retain judgment.",
    why: "The product needs to feel like a coherent operating system, not one narrow automation disguised as a company.",
    possible: "The partner can show routine coverage, scarce inventory, and policy review while making human exceptions visible.",
    stillTrue: "Price, quantity, allocation, terms, policy interpretation, and sensitive communication stay with accountable people.",
  },
  {
    id: "delivery",
    state: "live",
    index: "03",
    title: "The demo has one live, pitch-ready address.",
    summary: "The public demo is hosted and automatically updates after verified work reaches the production branch.",
    why: "A partner needs a reliable in-person launch point—not a local development link or a technical handoff.",
    possible: "The live product story can be opened on Safari or Brave from one public address for a real conversation.",
    stillTrue: "This is a hosted static demo, not a customer workspace or a production application with accounts and integrations.",
  },
  {
    id: "identity",
    state: "shaping",
    index: "04",
    title: "The product identity is being made more ownable.",
    summary: "The current name remains provisional while the category promise and visual system become more precise.",
    why: "A premium company should not force a brand name before the product story is strong enough to carry it.",
    possible: "The team can test the AI Operations Lead narrative without locking the code or sales story into a weak name.",
    stillTrue: "No replacement name has been selected or cleared. The current product name remains a temporary working identity.",
  },
  {
    id: "proof",
    state: "validating",
    index: "05",
    title: "The market still has to earn the next build.",
    summary: "The product has a strong demonstration story; the next proof is which workflow a real distributor would care enough to pilot.",
    why: "Ambition is valuable, but real buyer language should shape where production investment goes next.",
    possible: "The partner can use the demo to learn which operating moment creates urgency, not simply collect compliments about AI.",
    stillTrue: "No buyer conversations, pilots, customer integrations, ROI claims, or production commitments are represented as complete here.",
  },
  {
    id: "core",
    state: "later",
    index: "06",
    title: "The real product core is intentionally later.",
    summary: "Secure accounts, approved data, rules, permissions, audit records, integrations, and narrow AI assistance are future work.",
    why: "Infrastructure should serve a chosen workflow and real operating evidence—not be built because the word “AI” makes it sound advanced.",
    possible: "The team can explain a credible path from premium demo to governed product without pretending it already exists.",
    stillTrue: "The current version has no database, authentication, customer tenant, LLM call, delivery channel, or live commercial decision engine.",
  },
];

const stateLabels: Record<BuildState, string> = {
  live: "Live now",
  shaping: "Being shaped",
  validating: "Being validated",
  later: "Intentionally later",
};

const storyMap = [
  { stage: "Research", detail: "Original category research, competitive study, and source interpretation made the problem legible.", status: "complete" },
  { stage: "Product thesis", detail: "AI leads the operating process; people own the relationship and commercial judgment.", status: "complete" },
  { stage: "Buyer-ready demo", detail: "The public product story makes the operating day and control boundaries tangible.", status: "complete" },
  { stage: "Market proof", detail: "Real conversations determine the first workflow, buyer urgency, and safe pilot boundary.", status: "current" },
  { stage: "Governed product core", detail: "Only after proof: user roles, approved data, workflow records, integrations, and bounded AI assistance.", status: "later" },
];

function stateIcon(state: BuildState) {
  if (state === "live") return <CheckCircle2 size={15} />;
  if (state === "shaping") return <Sparkles size={15} />;
  if (state === "validating") return <Radar size={15} />;
  return <LockKeyhole size={15} />;
}

export default function PartnerBuildWindow() {
  const [selectedId, setSelectedId] = useState("brief");
  const [showAll, setShowAll] = useState(false);
  const selected = useMemo(
    () => buildMovements.find((item) => item.id === selectedId) ?? buildMovements[0],
    [selectedId],
  );
  const visibleMovements = showAll ? buildMovements : buildMovements.slice(0, 4);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="pbw-app">
      <aside className="pbw-rail" aria-label="Partner Build Window sections">
        <a className="pbw-brand" href="/partner" aria-label="Partner Build Window home">
          <span className="pbw-mark"><Waypoints size={19} /></span>
          <span><strong>PARTNER</strong><small>BUILD WINDOW</small></span>
        </a>

        <div className="pbw-rail-status"><span /> INTERNAL FOUNDER VIEW</div>
        <nav className="pbw-nav">
          <button onClick={() => scrollTo("chapter")}><Compass size={16} /> Current chapter</button>
          <button onClick={() => scrollTo("build-window")}><Layers3 size={16} /> Build window</button>
          <button onClick={() => scrollTo("story-map")}><Waypoints size={16} /> Product story map</button>
          <button onClick={() => scrollTo("market-loop")}><Radar size={16} /> Market loop</button>
          <button onClick={() => scrollTo("founder-lens")}><UsersRound size={16} /> Founder lens</button>
        </nav>

        <div className="pbw-rail-foot">
          <p>TRANSLATION RULE</p>
          <strong>Meaning over technical noise.</strong>
          <span>Every movement explains what changed, why it matters, what is now possible, and what remains true.</span>
        </div>
      </aside>

      <main className="pbw-main">
        <header className="pbw-topbar">
          <div><span>FOUNDER VIEW /</span> <strong>COMPANY BUILD NARRATIVE</strong></div>
          <div className="pbw-topbar-right"><span className="pbw-share-safe"><CheckCircle2 size={13} /> SHARE-SAFE CONTENT</span><a href="/" className="pbw-demo-link">Open live demo <ArrowUpRight size={14} /></a></div>
        </header>

        <section id="chapter" className="pbw-chapter">
          <div className="pbw-index">CHAPTER <b>01</b></div>
          <div className="pbw-chapter-copy">
            <p className="pbw-kicker"><Sparkles size={14} /> CURRENT COMPANY CHAPTER</p>
            <h1>Building the operating layer <em>prospects have only imagined.</em></h1>
            <p className="pbw-deck">The product is now buyer-ready as a premium, fictional demonstration of an AI Operations Lead. The next chapter is to prove which real distributor moment deserves a governed product core.</p>
            <div className="pbw-chapter-metadata"><span><CircleDot size={13} /> PRODUCT PROMISE: AI leads the process; people own judgment.</span><span><CircleDot size={13} /> CURRENT PROOF: buyer recognition, not automation volume.</span></div>
          </div>
          <aside className="pbw-chapter-card">
            <span>THE NORTH STAR</span>
            <strong>“I can see what we are becoming, what has been accomplished, why it matters, and where I fit.”</strong>
            <div><span /> Founder-facing build narrative</div>
          </aside>
        </section>

        <section id="build-window" className="pbw-section pbw-build-section">
          <div className="pbw-section-heading">
            <div><p>THE BUILD WINDOW</p><h2>Everything meaningful, <em>at the right altitude.</em></h2></div>
            <button className="pbw-text-button" onClick={() => setShowAll((value) => !value)}>{showAll ? "Show focused view" : "Show full current state"} <ChevronRight size={15} /></button>
          </div>

          <div className="pbw-build-layout">
            <div className="pbw-movement-list" role="list" aria-label="Meaningful project movements">
              {visibleMovements.map((movement) => (
                <button
                  key={movement.id}
                  role="listitem"
                  className={`pbw-movement ${movement.id === selected.id ? "is-selected" : ""}`}
                  onClick={() => setSelectedId(movement.id)}
                >
                  <span className="pbw-movement-index">{movement.index}</span>
                  <span className={`pbw-state pbw-state-${movement.state}`}>{stateIcon(movement.state)} {stateLabels[movement.state]}</span>
                  <strong>{movement.title}</strong>
                  <small>{movement.summary}</small>
                  <ChevronRight className="pbw-movement-arrow" size={16} />
                </button>
              ))}
            </div>

            <article className="pbw-translation-card" aria-live="polite">
              <div className="pbw-card-cap"><span>{stateIcon(selected.state)} {stateLabels[selected.state]}</span><b>{selected.index} / 06</b></div>
              <h3>{selected.title}</h3>
              <div className="pbw-translation-row"><span>WHY IT MATTERS</span><p>{selected.why}</p></div>
              <div className="pbw-translation-row is-possible"><span>NOW POSSIBLE</span><p>{selected.possible}</p></div>
              <div className="pbw-translation-row is-boundary"><span>STILL TRUE</span><p>{selected.stillTrue}</p></div>
            </article>
          </div>
        </section>

        <section id="story-map" className="pbw-section pbw-story-section">
          <div className="pbw-section-heading"><div><p>PRODUCT STORY MAP</p><h2>The path is deliberate, <em>not improvised.</em></h2></div><span className="pbw-heading-note">FROM ORIGINAL RESEARCH TO GOVERNED PRODUCT</span></div>
          <div className="pbw-story-map">
            {storyMap.map((step, index) => (
              <div className={`pbw-story-step ${step.status}`} key={step.stage}>
                <span className="pbw-story-number">0{index + 1}</span>
                <div className="pbw-story-dot">{step.status === "complete" ? <CheckCircle2 size={15} /> : step.status === "current" ? <Target size={15} /> : <LockKeyhole size={14} />}</div>
                <strong>{step.stage}</strong><p>{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="market-loop" className="pbw-section pbw-market-section">
          <div className="pbw-section-heading"><div><p>MARKET LOOP</p><h2>What we know, what we suspect, <em>what we need to earn.</em></h2></div><span className="pbw-heading-note">EVIDENCE ≠ ASSUMPTION</span></div>
          <div className="pbw-market-grid">
            <article className="pbw-market-card is-evidence"><div><CheckCircle2 size={17} /><span>ESTABLISHED IN THE BUILD</span></div><h3>The product has a clear controlled-communications thesis.</h3><p>It organizes account moments, prepares bounded work, routes exceptions, and preserves operating memory without pretending to replace commercial judgment.</p><small>Grounded in the source brief, strategy synthesis, and implemented fictional demo.</small></article>
            <article className="pbw-market-card is-hypothesis"><div><Lightbulb size={17} /><span>CURRENT HYPOTHESIS</span></div><h3>Distributor leaders will recognize coverage and accountability as a high-value operating gap.</h3><p>The Daily Operating Brief is designed to make that problem tangible before a workflow detail is shown.</p><small>Useful direction; still needs real market language.</small></article>
            <article className="pbw-market-card is-needed"><div><Radar size={17} /><span>EVIDENCE NEEDED NEXT</span></div><h3>Which workflow creates enough urgency to justify a focused pilot?</h3><p>No prospect feedback is represented here as fact. The next useful conversation should produce a specific example, boundary, and owner.</p><small>The partner’s channel is the next proof engine.</small></article>
          </div>
        </section>

        <section id="founder-lens" className="pbw-section pbw-lens-section">
          <div className="pbw-section-heading"><div><p>FOUNDER LENS</p><h2>Visibility becomes a <em>next move.</em></h2></div></div>
          <div className="pbw-lens-grid">
            <article className="pbw-lens-card is-ready"><span className="pbw-lens-icon"><ExternalLink size={19} /></span><p>READY TO USE</p><h3>The buyer-ready AI Operations Lead demo</h3><p>Open with the fictional Daily Operating Brief. Let the buyer see the day first, then enter Reorder, Allocation, or Policy-Gated Notice as proof.</p><a href="/">Open live product <ArrowUpRight size={15} /></a></article>
            <article className="pbw-lens-card is-boundary"><span className="pbw-lens-icon"><LockKeyhole size={19} /></span><p>WHAT TO SAY HONESTLY</p><h3>“This shows the product experience and control model.”</h3><p>It does not yet include real distributor accounts, live data, integrations, AI calls, legal approval, or automated commercial decisions.</p><span className="pbw-static-line">Boundary preserved in every pitch.</span></article>
            <article className="pbw-lens-card is-action"><span className="pbw-lens-icon"><UsersRound size={19} /></span><p>WHERE YOU FIT</p><h3>Turn access into evidence, not vague validation.</h3><p>Use the demo to ask about a real account moment, the current process, the safe human boundary, and whether one workflow is worth piloting.</p><span className="pbw-static-line">Next move: one specific market conversation.</span></article>
          </div>
        </section>

        <footer className="pbw-footer"><span>PARTNER BUILD WINDOW / V1</span><p>Internal founder infrastructure. This first visual version uses curated, share-safe project content; it is not a private workspace or a client product.</p><a href="/">Return to product demo <ArrowUpRight size={14} /></a></footer>
      </main>
    </div>
  );
}
