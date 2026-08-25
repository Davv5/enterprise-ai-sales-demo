# Evidence synthesis — Enterprise AI Strategy & Build Plan

**Prepared:** August 24, 2026. This working synthesis combines user-supplied source material with targeted primary-source checks. It supports a product-planning discussion; it is not legal, tax, or financial advice.

## Source materials reviewed

| Source | Principal contribution | Planning implication |
| --- | --- | --- |
| Sandbox Build Brief (user-supplied) | Defines an initial automated account-communication sandbox for alcohol distributors: reorder reminders, allocation alerts, price/promo notices, mandatory logging, and human escalation. | Start with reorder reminders; treat price/promo automation as a controlled later workflow. |
| Financial Model Build Brief (user-supplied) | Defines an alcohol-beverage new-SKU feasibility model: unit economics, timeline, taxes, three-tier channel economics, capital, and breakeven/scenario outputs. | Build a spreadsheet foundation only after a qualified reviewer validates the model logic, tax treatment, and scenario design. |
| Strategic Analysis & Roadmap (user-supplied) | Identifies incumbent risk, harmful “replace reps” messaging, regulatory exposure, a mid-market wedge, and a research-first/pilot-first commercial motion. | Position the product as a rep-capacity extension, not replacement; interview both retailers and reps before feature expansion. |
| Master Research Document (user-supplied) | Provides agency execution themes: narrow productization, discovery-led sales, paid diagnostic/pilot, proof of work, and retention through repeat operational use. | Sell a constrained paid/discounted pilot, create a case study, then price against measured value. |
| Enterprise AI Stack video (user-supplied) | Describes data foundation → reusable logic → custom logic → execution, with KPI visibility and human-in-the-loop controls. | Do not lead with an autonomous agent; build a deterministic data/control foundation and graduate automation only when quality is proven. |

## External verification — planning-relevant facts

| Topic | Verified finding | Planning implication | Source |
| --- | --- | --- | --- |
| New Jersey price administration | New Jersey ABC maintains a Current Price List resource for state-issued/wholesale licensees, including current electronic filing materials, submission instructions, and FAQs. | Treat automated price/promotion notices as a controlled publishing workflow tied to an approved price/eligibility record; do not allow a sandbox user to improvise individualized commercial terms. | [NJ ABC Current Price List](https://www.njoag.gov/about/divisions-and-offices/division-of-alcoholic-beverage-control-home/licensing-bureau-applications-and-information/current-price-list-cpl/) |
| Alcohol formulation gate | TTB states that wine, distilled spirits, or beer/malt beverages may require formula approval or laboratory sample analysis before a COLA; this is commonly relevant where flavoring or coloring materials are added. | The financial model must use a product-classification and regulatory-gate checklist, not a single fixed “approval time” assumption. | [TTB Formulation](https://www.ttb.gov/formulation) |
| Automated commercial texts | FCC consumer guidance states that commercial texts require written consent; informational texts may be subject to a different consent standard. | A live SMS pilot must use recorded opt-in evidence, sender identity, channel preference, opt-out handling, and an auditable suppression list. This should be confirmed with counsel for the specific workflow, state, and technical method. | [FCC Robocalls and Texts Guide](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts) |

## High-confidence strategic conclusions

1. **There are two complementary but distinct products.** The distributor communication sandbox is a workflow-automation pilot. The new-product financial model is an analyst-reviewed decision-support model. They may eventually share a commercial channel, but they should not share an initial build sequence or a single untested offer.
2. **The lead wedge is the narrowest measurable workflow.** A consented, mock-data reorder-reminder demo is the lowest-complexity proof point: a signal, a bounded communication, an explicit human escalation, and an auditable record.
3. **Compliance is a product requirement, not a later feature.** Permissioning, eligibility, immutable message records, and review/exception paths belong in the first prototype's definition of done.
4. **The data contract precedes AI.** Before any prediction or personalization, establish stable account and product identifiers, order-history fields, consent/channel preference, and a message/audit schema.
5. **The financial model's value is governance as much as calculation.** It should force classification decisions, show assumptions, tie outputs to formulas and sources, and expose sensitivities—not provide a falsely precise investment decision.

## Open gates before any live deployment

| Gate | Owner | Evidence required to pass |
| --- | --- | --- |
| Market discovery | Project lead | 5–8 retailer interviews plus 3–5 distributor/rep interviews; documented willingness, preferred channel, and “do not automate” boundaries. |
| Legal/compliance review | Qualified alcohol-beverage counsel and messaging-compliance advisor | State-specific analysis of trade-practice, price-list, promotion, retention, consent, and message-content requirements. |
| Data readiness | Builder / client ops contact | A de-identified dataset with account IDs, product IDs, last-order dates, consent status, channel preferences, and escalation owner. |
| Workflow acceptance | Pilot sponsor | Signed-off trigger logic, approved message templates, eligible-audience rules, exception routing, and audit-log fields. |
| Financial methodology | Qualified finance/accounting reviewer | Approved COGS, tax, margin-cascade, working-capital, return metric, and sensitivity methodology. |

## Sources

1. New Jersey Office of the Attorney General, Division of Alcoholic Beverage Control, [Current Price List (CPL)](https://www.njoag.gov/about/divisions-and-offices/division-of-alcoholic-beverage-control-home/licensing-bureau-applications-and-information/current-price-list-cpl/).
2. U.S. Alcohol and Tobacco Tax and Trade Bureau, [Formulation — Alcohol Beverage Formula Approval](https://www.ttb.gov/formulation).
3. Federal Communications Commission, [Stop Unwanted Robocalls and Texts](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts).
