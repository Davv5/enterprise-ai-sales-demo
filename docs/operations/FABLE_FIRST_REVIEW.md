# Fable First Review — Independent Product Verification

**Review date:** 2026-08-25
**Reviewer:** Fable 5 (implementation and product-architecture session)
**Baseline:** `main` @ `1c6486c` (two documentation commits above checkpoint `84e4960`)
**Method:** Full mandatory-document read; typecheck and production build; live click-through of all three workflows including mode changes, exceptions, assignment, audit, reset, every runbook recovery URL plus adversarial URL states; mobile (375px) and desktop viewport checks.

## Executive summary

The three-workflow suite is real, coherent, and close to pitch-ready. All three governed sequences — Reorder, Allocation, and Policy-Gated Notice — complete end-to-end exactly as the specs describe, the policy gate genuinely blocks the promo distribution, recovery URLs work, and the microcopy discipline ("fictional", "no production message was delivered") is consistently honest. Typecheck and production build pass.

However, the review found one defect that strikes at the product's central promise, and a cluster of smaller truthfulness seams. **In the Reorder workflow, selecting "Draft for rep" and clicking "Record draft for Renee" records a send** — the state pill flips to "Send recorded" and the audit trail logs "Rep-approved send simulated." The evidence record misstates the user's action in a product whose entire thesis is that the evidence record is trustworthy. A buyer who asks "what does draft mode do?" during a live pitch would watch the control model contradict itself.

Secondary but sales-visible: the browser tab still announces the retired product ("Enterprise AI Strategy & Build Plan", a meta description about financial modeling — explicitly out-of-scope Track B), the favicon 404s on every load, and the documented Manrope / IBM Plex Mono typography is referenced in CSS but never loaded, so the whole demo renders in fallback fonts.

Nothing found here requires redesign. The product model, screen architecture, and visual system are sound. What is needed is one focused **demo-integrity slice** before the partner takes this into buyer interviews.

## Verified strengths

1. **The governed sequence is real, not theater.** Each workflow walks event → audience → bounded message → control mode → simulated action → exception → named owner → audit, and the audit trail accumulates events as the user acts. The promo gate actually prevents distribution until verified (in-app).
2. **Scenario fidelity.** RR-04 / AL-09 / PN-18 data, owners (Renee, Marcus, Alicia), exception quotes, and boundaries match `MULTI_WORKFLOW_SUITE_SPEC.md` exactly.
3. **Truthful copy discipline.** Simulated/fictional framing appears at every action state on desktop; exception cards explicitly say Harborline does not generate, negotiate, or send a response.
4. **Runbook recovery states work.** Tested `/#workflow`, `/?demo=exception#replies`, `/?workflow=allocation&demo=drafted#workflow`, `/?workflow=promo&terms=verified#workflow`, `/?workflow=promo&terms=verified&demo=exception#replies` — all land where the runbook promises. URL state also updates as the user acts, so a mid-demo refresh is safe.
5. **Design system coherence.** Route-and-record geometry, strict color semantics (vermilion = human intervention, sea-green = verified control), restrained motion with reduced-motion respected, no card-grid sprawl.
6. **Engineering health.** `tsc --noEmit` clean; production build clean; single-file implementation is small and reviewable; documentation layer is unusually good and internally consistent.

## Defects and risks (ranked by severity)

| # | Severity | Finding | Evidence |
| --- | --- | --- | --- |
| 1 | **High — control-model violation** | Reorder workflow, "Draft for rep" mode: the button reads "Record draft for Renee" but clicking it advances to `demo=sent`, pill "Send recorded", and the audit logs **"Rep-approved send simulated."** The draft posture is offered but not honored, and the evidence record misstates the action. (`advanceWorkflow` in `Home.tsx` only models a drafted state for `allocation`.) | Reproduced live; audit trail read back after click. |
| 2 | **High — stale product identity on the sales surface** | `client/index.html` still carries the retired report's `<title>` ("Enterprise AI Strategy & Build Plan"), a meta description about "new-product financial modeling" (Track B, explicitly out of scope), and a favicon path (`/manus-storage/…`) that does not exist → 404 on every load, broken tab icon. Ships in the production build too. | File read; console 404 confirmed; `dist/public/index.html` inspected. |
| 3 | **Medium — mobile loses navigation, reset, and the sandbox disclosure** | `.ops-sidebar` is `display:none` below 1024px: no view navigation, no **Reset demo**, Accounts unreachable. Below 700px the topbar "Sandbox record" chip also hides, leaving **no persistent simulation disclosure** on a phone. The decision log's "desktop and mobile verified" claim is overstated; an iPad-height demo (768–1023px wide) loses the runbook's documented reset control. | Confirmed at 375×812; CSS breakpoints in `index.css`. |
| 4 | **Medium — audit can show a gate-bypassed distribution** | Direct URL `/?workflow=promo&demo=sent` (no `terms=verified`) renders an audit trail containing "Policy-gated distribution simulated" **without** the "Policy gate recorded" event — evidence of exactly the bypass the product claims is impossible. Not in the runbook, but one mistyped recovery URL away. | Reproduced live. |
| 5 | **Medium — typography system silently absent** | `--sans:"Manrope"` and `--mono:"IBM Plex Mono"` are declared but no font is loaded anywhere (no link, no @font-face). The entire demo renders in Helvetica/Arial and Courier fallbacks. The documented "operational typography" direction is currently an intention, not a fact. | Grep across `client/`; computed-style check. |
| 6 | **Medium — mode-card layout bug on the core screen** | In the automation-mode selector, the description text (`small`) is grid-auto-placed into the **18px icon column**, wrapping one word per line ("Prepare / only; / Renee / decides…"). Visible on the default Reorder detail screen every demo shows. Cause: `.ops-mode-card button > span` is `grid-template-columns:18px 1fr` with three children. | Visible in screenshots; CSS read. |
| 7 | **Low-medium — state-pill copy contradictions** | (a) Replies view: pill reads "Exception assigned" while the card below still offers "Assign to Renee" — claims assignment before it happens. (b) Promo after gate verification: pill reads "Needs rep approval" — wrong workflow's language (promo has no rep-approval step; falls through `stateLabel`'s default branch). (c) "Draft recorded" pill has no `.ops-state-pill.drafted` CSS → renders as an unstyled transparent chip in the state the allocation demo lingers on. | All reproduced live. |
| 8 | **Low — cross-workflow name leak** | `/?demo=drafted` on Reorder yields primary button "Simulate **Marcus**-approved send" inside Renee's Juniper workflow (`actionLabel` hardcodes Marcus for `drafted`). URL-only path, same root cause as #1. | Reproduced live. |
| 9 | **Low — dead chrome invites dead clicks** | Search, notification bell, and "All statuses" filter are non-functional decoration. In a governance demo, a buyer clicking a dead control is a small credibility leak; the product should not have controls that do nothing. | Code read; no handlers. |
| 10 | **Low — "LIVE DECISION RECORD" stamp** | The trigger-card CSS stamp uses the word "LIVE" (meaning *current*), in a product whose scripts repeatedly promise "no live delivery." A skeptical operations buyer can quote it back. Suggest "ACTIVE DECISION RECORD." | `index.css` content rule. |
| 11 | **Low — third-party runtime in the demo build** | `vite-plugin-manus-runtime` injects a debug/event collector (console: "[Manus] Debug collector initialized") and inflates built `index.html` to ~368KB; `index.html` also carries an analytics script with unresolved `%VITE_ANALYTICS_ENDPOINT%` placeholders (a guaranteed failed request). For a client-facing pitch build, an event-collecting runtime is a trust and privacy question the project lead should decide deliberately. | Build output and console inspected. **Flag for project-lead decision; do not remove unilaterally** (it may be required by the Manus workflow). |

## Documentation drift

- **Decision log (2026-08-25, three-workflow entry)** records "Verify desktop, mobile, and direct pitch-entry states" as done. Mobile is legible but materially degraded (finding #3). Recommend the log gain a corrective entry rather than editing history.
- **Runbook "Reset control … lower-left rail"** is untrue below 1024px.
- `package.json` name remains `enterprise-ai-strategy-report` — cosmetic, but the same stale identity as finding #2.
- Trailing whitespace in several docs is intentional markdown hard-break syntax, not a defect. Repository integrity is otherwise clean; working tree matched remote `main` byte-for-byte at session start.

## High-leverage opportunities (beyond defect repair)

1. **Truthful control postures per workflow** — after fixing #1, the reorder draft path should record a real "Draft recorded for Renee" event, mirroring allocation. This turns the bug into a demonstration: the same control vocabulary, honored in every workflow.
2. **Derived state coherence** — recovery URLs should not be able to express states the product forbids (#4). Deriving `policyReady` from `demo=sent|exception` on the promo workflow (or auto-recording the gate event) closes the loophole cheaply.
3. **Interview-capture affordance** — the Buyer Validation Package tells the partner to log exact quotes, but capture currently lives in a markdown template far from the demo. A later slice could add a lightweight, honest "capture this conversation" aid. **Deferred**: no evidence yet that the partner finds the markdown log insufficient; test it in the first interviews first.
4. **Guided demo mode** — the "Show flow guide" strip is the seed of a stronger seller aid. **Deferred** for the same reason: the runbook may be sufficient; let the first real pitch generate the evidence.

## The single best next slice

**Demo Integrity Slice — every reachable state tells the truth.**

- **User outcome:** A seller can hand the mouse to a skeptical buyer, let them click anything — including draft mode, recovery URLs, and a phone — and every state pill, button, audit event, and browser-tab detail stays consistent with the governed-control story.
- **Business reason:** The next milestone is buyer validation. The demo's only job in those meetings is credibility; findings #1–#7 are each a moment where the product contradicts its own thesis in front of the exact audience trained to notice (operations and compliance stakeholders).
- **Scope (files):** `client/src/pages/Home.tsx` (draft-state modeling for reorder, `stateLabel`/`actionLabel` corrections, derived promo-gate coherence), `client/src/index.css` (mode-card grid, `.drafted` pill, "LIVE" stamp wording, sub-1024px nav/reset/disclosure treatment), `client/index.html` (title, description, favicon), `docs/product/SALES_DEMO_RUNBOOK.md` + `docs/operations/DECISION_LOG.md` (corrective entries).
- **Non-goals:** No new screens, no new workflows, no dashboard, no data model change, no guided-tour feature, no removal of the Manus runtime without project-lead decision, no visual redesign.
- **Acceptance criteria:**
  1. In Reorder draft mode, the action records a **draft** event ("Draft recorded for Renee"); a subsequent explicit action simulates the send; the audit trail matches the clicks exactly.
  2. No reachable state (clicks or documented/adjacent URLs) shows a promo distribution without a recorded gate event.
  3. Pills: drafted state styled; exception pill reads "Needs assignment" (or equivalent) until assigned; promo post-gate pill uses policy language.
  4. Mode-card descriptions lay out correctly at all breakpoints.
  5. Browser tab shows a Harborline title, honest description, and a working favicon in dev and production build.
  6. Below 1024px: navigation, Reset demo, and a persistent sandbox disclosure exist; Accounts is reachable.
  7. Manrope and IBM Plex Mono actually load (with system fallbacks retained).
  8. `pnpm run check` and `pnpm run build` pass; all runbook URLs re-verified.
- **Evidence that justifies it:** every item above was reproduced in this session against `main` @ `1c6486c`; none is speculative.

## What was explicitly not recommended yet

Production integrations, authentication, real delivery, a fourth workflow, interview-capture tooling, guided-tour mode, dashboard/oversight views, and any Track B (financial model) surface. The next evidence must come from the partner's five-to-eight interviews, not from more product.
