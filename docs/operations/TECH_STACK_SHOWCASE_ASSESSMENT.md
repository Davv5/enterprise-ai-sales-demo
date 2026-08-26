# Technical Stack Showcase Assessment

## Current baseline

The deployed Harborline Communication Ops application is a polished, functional **static React/Vite demonstration**. It presents a governed communication-operations story around three workflow types: reorder reminder, new allocation alert, and policy-gated program notice. The visible product surfaces are Daily Brief, Workflow Library, Replies & Exceptions, Accounts, and Audit & Policy.

The product narrative is intentionally bounded: the system detects a business event, evaluates an eligible audience, prepares a constrained message, requires a named human or policy control when relevant, routes non-routine replies, and retains an evidence record. All customer and workflow data is explicitly fictional and no live delivery occurs.

## Current implementation

| Layer | Current state | Implication for the stack showcase |
| --- | --- | --- |
| User interface | React 19, TypeScript, Vite, Tailwind, Wouter, Lucide, Framer Motion | Retain the polished product demo and add a separately navigable technical experience rather than replacing the sales narrative. |
| Application logic | Client-side React state and URL state only | Build a visible reference-integration layer with deterministic fixture responses and explicit adapter contracts; do not falsely imply live system connectivity. |
| Server | Express static-serving entry point | Extend with a small, optional API surface that emits representative integration events, suitable for deployment and replacement by real providers. |
| Data | In-memory fictional configuration in `Home.tsx` | Move stack-demo fixtures and event contracts into a clear domain model, and show the eventual database and audit structure. |
| Delivery | Cloudflare Pages deployment from GitHub | Preserve the existing static-friendly deployment path for the showcase; document the production evolution where private API access is required. |

## Existing product constraints to preserve

The repository documentation explicitly says the demo is not a CRM, ERP, pricing engine, allocation engine, or autonomous seller. It also correctly defers real message delivery, credentials, regulated data, and live API integrations. The technical-stack experience must therefore demonstrate **how a governed orchestration layer connects to systems of record**, while maintaining a sandbox posture and never simulating real communication or commercial decisioning.

## UX assessment

The public Daily Brief visual audit confirms that the primary experience is operational, credible, and clearly sandboxed. It has functional navigation and a concrete human-control workflow. The technical showcase should be available as a clear secondary destination such as `/stack`, framed as a **reference architecture / integration sandbox**, with a direct return to the product demo. It should let prospective partners select a workflow and visually follow representative data through sources, policy/control checks, orchestration, approved delivery adapters, exception routing, and immutable audit evidence.

## Recommended showcase objective

Create a clickable, deployable reference build that proves the following without pretending to be the full product:

1. The product reads account, contact, order, inventory, and owner signals from systems of record through replaceable API/webhook adapters.
2. A deterministic workflow engine evaluates a versioned rule and policy boundary before an approved communication action is created.
3. An AI component is constrained to structured drafting/classification and never decides commercial terms or sends without an approved control path.
4. A delivery gateway sends only an approved message event in a production implementation; the showcase instead records a simulated delivery receipt.
5. Every state transition emits an auditable event and exception handoff using a common event envelope.
6. Secrets and provider credentials stay server-side; the public interface only uses fixture data or a safe API façade.


## Reference build verification

The compiled local route at `/stack` renders successfully with the reference API connected. The screen presents a clear product return path, explicit sandbox guardrails, the AL-09 allocation workflow, an architecture map, an inspectable component panel, and contract tabs.

The **Run allocation trace** interaction was exercised in the browser. It advanced from the normalized allocation event through audience evaluation and constrained AI drafting, updating the selected stage, event route, component inspector, visible-stage count, and event envelope. The trace makes the rule/version context, restricted fields, named ownership, and no-live-delivery boundary inspectable at each point.

The full six-step trace completed successfully. The final state exposed `exception.assigned.v1`, a `restricted` redaction posture, the named recipient of the exception, and `responseGenerated: false`, which is consistent with the product’s required human-commercial-judgment boundary.
The local product demo now exposes a visible **Reference stack** entry point in its top bar. Browser verification confirmed that the link opens `/stack` successfully; the stack route also retains its own direct Product demo return path.

## Visual explainer enhancement verification

The `/stack` route now places a five-stage visual story directly below the introduction. The browser confirms that visitors can select **Signal**, **Connect**, **Govern**, **Decide**, or **Prove** and the page updates its plain-English explanation, control rationale, icon treatment, flow progression, and highlighted station. The “Govern” state was specifically verified: it explains the durable workflow, rule/template/policy checks, bounded-AI limitation, and pre-output control posture in one visual frame.
