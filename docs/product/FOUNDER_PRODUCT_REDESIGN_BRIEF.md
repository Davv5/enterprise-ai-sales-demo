# Founder Product Redesign Brief

## Decision

The current Partner Build Window at `/partner` is a useful **prototype**, but it should not remain a route inside the client-facing sales demo. The demo and the founder system serve different audiences, need different access boundaries, and should evolve at different speeds.

> **The client demo helps a distributor imagine the product. The founder product helps the two partners turn market access into a real company.**

The next version should therefore become a separate founder-facing product with its own page identity, deployment, and information model. The current `/partner` page should be treated as a temporary visual proof of the information design, not a permanent location.

## Critical audit of the current prototype

| What is working | What is missing or wrong | Corrective direction |
| --- | --- | --- |
| It makes the product-building work legible without logs or technical tools. | It is embedded beside the prospect demo, so the audience boundary is weak. | Give the founder product its own project, URL, navigation, and release path. |
| It distinguishes live work, design work, validation, and later scope. | It is mostly a narrative to read, not a system that helps two founders operate. | Turn each section into a useful founder object: a release, decision, market signal, meeting, or next move. |
| It preserves honest boundaries around fictional data and unbuilt capabilities. | Some copy is high-concept and sounds like a marketing manifesto rather than a partner’s working environment. | Use direct, concrete copy: what changed, what is ready, what evidence is missing, who owns next. |
| It includes a market loop and founder lens. | It does not yet give the partner a durable place to bring back field intelligence or resolve a decision. | Build those as the first real interactive capabilities after the separate experience proves its visual value. |

## Copy correction

The founder product should not speak like an external brand manifesto. It should sound like a sharp, trustworthy company briefing.

| Avoid | Prefer |
| --- | --- |
| “Building the operating layer prospects have only imagined.” | “The product is live as a sales demo. Here is what is ready, what is being tested, and what needs proof.” |
| “Everything meaningful, at the right altitude.” | “Current build work” or “What moved this week.” |
| “The path is deliberate, not improvised.” | “Why this work exists” or “How this connects to the product.” |
| “Visibility becomes a next move.” | “What is ready for you” and “What we need next.” |

The intended voice is **clear, grounded, concise, and quietly ambitious**. It should make the partner feel informed and included, not sold to.

## The separate founder product

### Working identity

Use a temporary internal identity such as **Founder's Desk**, **Build Office**, or **Company Room**. This is separate from the external product name, which remains provisional. It should not use the demo’s product name or visual promise as its primary identity.

### One-sentence positioning

> A private company workspace that turns product work, market learning, and founder decisions into one clear shared operating picture.

### The first useful home

The new product should not open on a broad narrative. It should open on a **company pulse** that tells the partner, in under a minute:

1. What the company is trying to prove this month.
2. What product work changed since the last update.
3. What is ready to use in a market conversation.
4. What the team learned or still needs to learn.
5. What decision or next action requires the partner’s attention.

## Founder objects — the units that make it useful

The founder product becomes useful when it works with a small set of real objects, not generic cards.

| Object | What it contains | Who benefits |
| --- | --- | --- |
| **Build Update** | What shipped, why it matters, what is now possible, and what remains unbuilt. | Both founders. |
| **Market Signal** | A real quote or observed buyer process, its context, confidence, and product consequence. | Market lead captures; build lead translates. |
| **Founder Decision** | The decision, recommendation, trade-off, owner, due point, and outcome. | Both founders. |
| **Meeting Brief** | The buyer role, purpose, approved demo route, questions to ask, and follow-up owner. | Market lead. |
| **Product Asset** | The live demo, seller story, runbook, brief, or research artifact—with a plain-English reason to open it. | Both founders. |

The first visual version may use curated examples. The real founder product starts when these objects can be saved, discussed, and updated by the two founders.

## Information architecture

| Surface | Job | First capability | Later capability |
| --- | --- | --- | --- |
| **Company Pulse** | Establish shared context. | Curated build updates, current proof point, next action. | Automatically assembled, founder-reviewed release digest. |
| **Product** | Show what is real and where it is going. | Live demo link, product map, now/next/later. | Product asset library and release history. |
| **Market** | Turn access into evidence. | Curated real signals and open questions. | Saved signals, conversation briefs, evidence patterns. |
| **Decisions** | Make founder choices explicit. | Curated decision queue. | Decision records, comments, owners, outcomes. |
| **Meetings** | Help the market lead act. | One prebuilt conversation brief. | Saved meeting briefs, follow-up promises, action ownership. |

## The product progression

| Version | What it proves | Technology needed |
| --- | --- | --- |
| **V0: Separate visual product** | The partner values a clean, full view of the company build and actually opens it. | A separate static React site and its own Cloudflare Pages project. |
| **V1: Shared founder workspace** | The founders use it to capture market signals and resolve decisions instead of relying on messages/documents. | Authentication, database, simple roles, secure storage. |
| **V2: Connected company intelligence** | Release activity and selected project changes can be translated into a founder-ready company narrative. | Curated GitHub/release integration plus a human review layer. |
| **V3: Bounded AI support** | Meeting notes and research can be summarized into reviewable signals and draft briefings. | Controlled server-side model use, permissioning, evaluation, and human approval. |

## Separate page and hosting path

The recommended next build is a **new static project inside the canonical repository**, rather than an additional route in the current demo.

```text
enterprise-ai-sales-demo/
  apps/
    sales-demo/              # existing client-facing demo, moved only when safe
    founder-desk/            # separate founder product
  docs/
  shared/
```

For the first release, the founder product gets its own Cloudflare Pages project and a separate public address. This is an audience boundary, not a security boundary: until authentication exists, it must contain only share-safe content. The client demo keeps its stable current deployment.

Do **not** refactor the current demo into this structure yet. Create the founder product separately, validate that it is useful, then migrate only when the two project build paths are stable.

## The real test of power

The founder product is powerful only if it changes a real behavior:

- The market-facing partner stops asking “what are you working on?” because the Company Pulse answers it clearly.
- A market conversation produces a specific signal, which becomes visible to the product/build lead without a separate recap meeting.
- A founder decision has a recommendation, an owner, and an outcome instead of living indefinitely in messages.
- The partner can prepare for a meeting or use the live demo without needing a development-tool walkthrough.

If it does not change at least one of these behaviors within a few weeks, it is not yet a product worth extending.

## Recommended next decision

Before visual redesign or a new project, choose the **first behavior** the separate founder product must change:

| Choice | First behavior to change |
| --- | --- |
| **A. Shared company visibility** | The partner can always see what is being built, what changed, and why. |
| **B. Market-to-product learning** | Every real conversation produces a signal with a visible product consequence. |
| **C. Founder decision discipline** | Decisions stop getting lost because they have recommendation, owner, and outcome. |

The recommended start is **A**, because the user’s explicit need is for the partner to see the meaningful build engine. The first Company Pulse can then become the trusted home for B and C.
