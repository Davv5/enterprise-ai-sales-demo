# Partner Build Window — Implementation Specification

## Purpose

The Partner Build Window is an internal, share-safe translation layer for the two founders. It shows meaningful company movement rather than raw development activity. Its primary test is whether the market-facing partner can understand the company’s current chapter, what is live, what is being shaped, what remains unproven, and where they fit without opening technical tools.

## Route and audience

- **Route:** `/partner`
- **Audience:** The two founders; this is not part of the client-facing product demo.
- **Boundary:** The initial static version contains no customer data, private contact information, deal values, fabricated signals, or claims of a secure workspace.

## Content model

| Content object | Required translation |
| --- | --- |
| Build movement | What changed, why it matters, what is now possible, and what remains true. |
| Product map stage | What the stage contributes to the company story and whether it is live, in design, or intentionally later. |
| Market item | Whether it is a real observed signal, an explicit hypothesis, or evidence still needed. |
| Founder action | What is ready to use, what must not be claimed, and the single next move or decision. |

## First experience

The page opens on the current company chapter and a selected Build Window card. The partner can choose a meaningful project movement to see its explanation, move through the product story map, open the public demo, and access a concise Founder Lens. The page must never resemble a task backlog, CRM, or developer console.

## Acceptance criteria

1. `/partner` is separate from the client-facing `/` demo and works as a direct URL.
2. The first screen clearly says what the company is becoming, what is live, what is being shaped, and what is still unproven.
3. Every Build Window item exposes a factual why/now/still-true explanation.
4. No fabricated customer interactions, reviews, meetings, revenue, or operational metrics appear.
5. The live demo link returns to `/` and the page is responsive at desktop and mobile widths.
