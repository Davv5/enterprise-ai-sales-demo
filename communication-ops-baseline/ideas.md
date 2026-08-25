# Communication Ops Website — Design Direction

## Three Possible Directions

### Approach 1
**Theme Name:** Signal Ledger

**Very Brief Intro:** An editorial operating journal translated into a product website: composed, deliberate, and evidence-led. It makes sophisticated operations feel legible rather than theatrical.

**Probability:** 0.067

### Approach 2
**Theme Name:** Quiet Control Room

**Very Brief Intro:** A restrained, dark command-room aesthetic with pooled light, hard-working typography, and a calm sense of readiness. It frames the product as infrastructure for high-stakes customer communication.

**Probability:** 0.034

### Approach 3
**Theme Name:** Field Notes for Teams

**Very Brief Intro:** A warm, paper-forward system inspired by account notebooks, routing slips, and real working teams. It emphasizes human ownership and continuity rather than automation spectacle.

**Probability:** 0.081

## Chosen Approach: Signal Ledger

### Design Movement

**Swiss editorial design meets operational systems.** The site will feel like a carefully produced operations brief—clear type hierarchy, document-like evidence fields, generous editorial pacing, and tiny technical markers that create trust without visual noise.

### Core Principles

1. **Evidence precedes assertion.** Product claims are shown through scoped signals, decision states, and accountable ownership, never hollow performance metrics.
2. **Human judgment remains visible.** Interface fragments consistently surface the rep, reviewer, or decision owner alongside the AI’s bounded role.
3. **Asymmetry creates direction.** A narrow annotation rail anchors the page, while larger content blocks stagger across the composition instead of stacking in a centered-card template.
4. **Calm carries authority.** Dense information is organized with quiet whitespace, rule lines, and deliberate contrast—no fluorescent AI tropes, animated noise, or generic dashboards.

### Color Philosophy

Warm chalk and soft mineral backgrounds give the experience an approachable, real-world quality, while deep ink provides the seriousness of a working record. A crisp **Signal Blue** is reserved for active controls, surfaced evidence, and the product’s operating state; a restrained rust accent calls out exceptions and human decisions. This balance signals professionalism without reading as sterile enterprise software.

### Layout Paradigm

The page behaves like a **running operating docket**. A persistent vertical reference rail on desktop carries phase labels and timestamp-like markers. Major content sections alternate between wide editorial statements, clipped product artifacts, and right-aligned operational notes. At small sizes, the rail becomes an inline metadata strip so the story remains chronological rather than collapsing into generic cards.

### Signature Elements

1. **Margin metadata:** small uppercase context labels, dot markers, and thin rule lines that make each section feel like an evidentiary record.
2. **The evidence tray:** screen fragments sit in staggered trays with one actively surfaced item and a clearly named human owner.
3. **Blue routing line:** a slim vertical/horizontal line ties familiar account moments, ownership, and operating memory together across the page.

### Interaction Philosophy

Interactions should expose useful context, not manufacture delight. Hovering a workflow tray clarifies its permitted action and boundary; tabs switch product story views; CTAs scroll visitors directly into the relevant proof block. Buttons tighten fractionally on press, and focus states remain conspicuous for keyboard users.

### Animation

Elements may enter once using a 180–260ms opacity-and-translate reveal, staggered by 50ms in a section. The blue routing line can softly draw in when its content enters the viewport. Hover state uses a 160ms ease-out elevation and a subtle lateral shift. All nonessential animation is disabled under `prefers-reduced-motion`; no looping, scrolling parallax, or scale-from-zero effects will be used.

### Typography System

**Instrument Serif** gives the product promise and editorial section titles quiet conviction. **Manrope** carries all functional body copy and navigation for legibility. **IBM Plex Mono** is used only for metadata, workflow states, and audit-style labels. Display headings use tight tracking and intentional line breaks; operational labels use uppercase mono at small scale; paragraph measure stays deliberately narrow.

### Brand Essence

**Communication Ops is the operating layer that turns account signals into bounded, human-owned communication work for distributor teams.**

**Personality:** rigorous, composed, human.

### Brand Voice

Headlines are direct, durable, and grounded in responsibilities rather than automation hype. CTAs are active but precise; microcopy names the next operating action and its owner.

> “Keep the signal. Keep the owner. Keep the account moving.”

> “See the work that needs a person—not another dashboard.”

### Wordmark & Logo

The mark is a bold abstract **routing junction**: three offset rails meeting at a protected center point, suggesting signals entering, work being prepared, and human judgment holding the final decision. The logotype uses a custom-feeling, tightly tracked Manrope treatment with an editorial serif “Ops” counterpoint in the header—never a default plain-text lockup.

### Signature Brand Color

**Signal Blue — `#1F70E8`**. This color appears sparingly, so it remains unmistakable as the site’s active, connective line.
