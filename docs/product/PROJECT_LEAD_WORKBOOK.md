# Project Lead Workbook

## How to Understand, Explain, and Lead the Enterprise AI Build

**Prepared for:** Project Lead  
**Purpose:** A plain-English working guide for discussing the plan with your partner, leading decisions, and explaining what is being built without claiming specialist expertise you do not have.

> **The honest position:** You are not presenting yourself as the lawyer, accountant, or AI engineer who invented every detail. You are presenting yourself as the project lead who understands the customer problem, knows the product direction, organizes the build, asks the right questions, and moves the work through the next decision gate.

## 1. The 30-second explanation

> “We are building practical AI tools for the beverage-alcohol industry. Our first product helps liquor distributors keep retail accounts informed about reorders and other approved updates, without requiring a sales rep to remember every follow-up. We will prove it with one controlled workflow, measure whether it helps, and keep humans involved when a real conversation is needed. A separate product we may offer later is a financial model that helps beverage brands evaluate a new product launch. My role is to build and organize the product system; your role is to bring the market access, customer conversations, and sales process.”

## 2. What the project is — and is not

| It **is** | It is **not** |
| --- | --- |
| A staged plan for building and testing two product ideas that serve beverage-alcohol operators. | A finished software product, a client guarantee, or a promised revenue outcome. |
| A way to demonstrate a real workflow before asking a client to buy a large system. | An attempt to replace sales representatives or an entire company CRM on day one. |
| A structure for safely combining data, messaging, automation, approval, and audit evidence. | A free-form AI chatbot allowed to communicate independently with customers. |
| A project you can lead by managing decisions, requirements, testing, and feedback. | A requirement that you become a tax, alcohol-law, or finance-modeling expert overnight. |

The essential idea is straightforward: your partner may already have access to people who could buy a useful tool. Your job is to make sure there is a **real, demonstrable, repeatable product** behind the conversation.

## 3. The two products in plain English

### Product A — The distributor communication sandbox

This is the immediate product. Think of it as a controlled assistant that helps a liquor distributor avoid forgetting routine account communication.

The first workflow is deliberately simple. If a retail account has not reordered a product in an agreed number of days, the system finds the account, checks whether that account is eligible and permitted to receive the message, sends an approved reminder through the approved channel, and records exactly what occurred. If the response is complicated—a complaint, a question, a dispute, or anything that needs judgment—the system creates a task for the assigned sales rep.

| Plain-English component | What it means in the build | What you can say in a meeting |
| --- | --- | --- |
| **Trigger** | The event that starts the process, such as “no reorder in 30 days.” | “The system is not guessing when to message someone; it reacts to a clear business signal.” |
| **Eligibility check** | The account must meet the preset audience, consent, and business-rule criteria. | “It only communicates with the right accounts under the approved rules.” |
| **Approved message** | A reusable template chosen by the operator, not improvised language. | “The rep and distributor keep control of what their customers receive.” |
| **Audit log** | A record of the trigger, recipient, message version, time, and outcome. | “We can show exactly what was sent, to whom, when, and why.” |
| **Human handoff** | A non-routine reply becomes a rep task instead of an automated conversation. | “The product extends a rep’s reach; it does not pretend to replace relationships.” |

### Product B — The new-product financial model

This is a separate, later product. It is intended to help a wine, spirits, or RTD brand think through whether a new product line is financially viable before it spends money launching it.

The model would help organize costs, launch timing, product classification, channel margins, capital needs, and breakeven scenarios. It should be a transparent spreadsheet with editable assumptions and visible formulas—not a black-box “AI answer.” Because tax, accounting, classification, and three-tier channel economics can materially change the result, the model needs a qualified reviewer before it becomes a paid client deliverable.

| The model should answer | Why a reviewer is needed |
| --- | --- |
| What does one unit or case cost at a stated production volume? | Cost accounting and treatment of inputs must be methodologically correct. |
| What steps must happen before first shipment? | The product category and approval path can affect timing. |
| What consumer price may be required for the economics to work? | Supplier, distributor, and retailer margins vary by market and arrangement. |
| How much cash is needed before first sale and when is breakeven? | Assumptions and return metrics must be chosen and presented responsibly. |

## 4. Why the plan says “build the proof before the platform”

The instinct may be to build a huge AI CRM, a full customer portal, a financial calculator, an admin dashboard, and many automations at once. That would be slow, expensive, and difficult to explain. Instead, the plan creates a **proof loop**:

| Step | What happens | What you learn |
| --- | --- | --- |
| **1. Discover** | Speak with retailers and distributor-side people about how communication really works today. | Whether the problem is real, which channel is accepted, and where automation would damage trust. |
| **2. Sandbox** | Build one visual, traceable, mock-data workflow. | Whether the product can work cleanly from trigger to human handoff. |
| **3. Validate** | Show the demo to potential users and package a constrained pilot offer. | Whether the market cares enough to test or pay for the workflow. |
| **4. Prove** | Run a tightly controlled pilot with measurement and review. | Whether there is evidence to expand, change direction, or stop. |

This is your “show your work” method. You can always point to the current step, the evidence collected, the decision made, and the next gate. That is much stronger than saying, “We are building AI.”

## 5. How the original documents fit together

| Document | The job it does | What you should remember from it |
| --- | --- | --- |
| **Master Research** | Business and agency operating playbook. | Start narrow, sell outcomes, use a pilot or audit to earn a larger engagement, and build evidence before scaling. |
| **Strategic Analysis** | Reality check and positioning guide. | Competitors exist; do not frame the tool as removing reps; use compliance knowledge and category understanding as a differentiator. |
| **Sandbox Build Brief** | First-product requirements. | Begin with a reorder reminder, use mock or permitted test data, retain a human escalation path, and preserve an exportable communication log. |
| **Financial Model Build Brief** | Second-product requirements. | The spreadsheet must be assumption-driven and reviewer-approved before anyone relies on it for a real launch decision. |
| **Enterprise AI Stack video** | Build philosophy. | Fix the data first, reuse standard business logic, make client-specific choices explicit, and automate only through controlled execution. |

## 6. Your role versus your partner’s role

This division of responsibilities lets you lead honestly and effectively.

| Workstream | Your primary role — Product / Build Lead | Partner’s primary role — Market / Sales Lead | Outside reviewer or client role |
| --- | --- | --- | --- |
| Customer discovery | Create the question list, capture answers, compare patterns, and turn insights into requirements. | Obtain introductions, run or support conversations, and interpret relationship context. | Retailers and reps describe what is useful, unwelcome, or missing. |
| Product definition | Turn feedback into screens, data fields, workflows, rules, and test cases. | Confirm the offer is understandable and commercially relevant. | Pilot sponsor validates whether the workflow resembles reality. |
| Sandbox build | Build/configure the data table, trigger, approved templates, audit log, and escalation flow. | Provide approved message examples and identify the demo narrative. | Compliance input confirms permitted live-pilot boundaries. |
| Financial model | Organize the inputs, sources, spreadsheet structure, scenarios, and open questions. | Identify the right early brand test case and customer-facing output priorities. | Finance/accounting/tax reviewer approves methodology. |
| Pilot and case study | Measure results, document exceptions, and prepare the evidence package. | Present the business outcome and manage the client relationship. | Client supplies data access, feedback, and sign-off. |

## 7. Questions you should ask your partner now

Use these questions in your next planning call. You do not need technical vocabulary to lead them.

| Ask this | You are trying to determine | Decision it unlocks |
| --- | --- | --- |
| “Who is the first person most likely to let us show them a demo?” | Whether there is a realistic initial buyer or pilot sponsor. | Which customer profile and demo narrative to prioritize. |
| “What exact problem do they complain about today?” | Whether the issue is missed reorders, allocation visibility, promotional communication, rep workload, or something else. | Which first workflow to build. |
| “Would they be comfortable with an automated message, or should it draft for the rep first?” | Their relationship and automation tolerance. | Direct-send sandbox versus rep-copilot design. |
| “Can we get five retailer and three distributor-side conversations before we build further?” | Whether you will have real research instead of assumptions. | Discovery sprint scope. |
| “What message examples sound like the distributor today?” | The actual voice and information that the workflow must preserve. | Initial template library. |
| “Who can review the compliance and finance assumptions before anything goes live?” | Whether the project has qualified gates. | Pilot and model-readiness timeline. |

## 8. What you are building first — no jargon

Your first build is **not** an enterprise AI platform. It is one working demo with six parts.

| Build item | Simple description | Definition of done |
| --- | --- | --- |
| **Mock account list** | A list of fictional liquor stores, contacts, order dates, product interests, and assigned reps. | You can view sample accounts without using real customer data. |
| **Reorder rule** | A rule that identifies when an account may need a follow-up. | You can change the number of days and see which mock account becomes eligible. |
| **Approved message** | A clear email or text reminder written in the distributor’s chosen tone. | A reviewer can approve the exact template before it is used. |
| **Send simulation** | A visible “send” outcome for the mock recipient. | The demo clearly shows which account would receive what. |
| **Audit record** | A timeline record of the event and message details. | You can export or display what happened after every test. |
| **Human escalation** | A way to flag a reply for the named rep. | The demo shows that complicated conversation returns to a person. |

## 9. Your weekly “show your work” update

Use this short format every week with your partner. It shows ownership, momentum, and judgment without requiring you to pretend every idea originated with you.

> **This week’s gate:** [Discover / Sandbox / Validate / Prove]  
> **What we learned:** [One to three facts from interviews, testing, or review]  
> **What I built or organized:** [Specific screen, rule, data field, template, test, or decision record]  
> **What is blocked:** [A missing decision, source, approval, contact, or data input]  
> **Decision needed from us:** [One specific yes/no or owner assignment]  
> **Next week’s output:** [The visible thing that will exist by the next meeting]

### Example of a credible update

> **This week’s gate:** Discover.  
> **What we learned:** Two store owners said text is useful for limited allocations but would feel intrusive for routine promotions; both said a rep should handle complaints.  
> **What I built or organized:** I created the mock account data structure and a draft reorder-reminder workflow that records the send and routes exceptions to a rep.  
> **What is blocked:** We still need a decision on the first target state and the preferred initial channel.  
> **Decision needed from us:** Do we build email-only for the first demo, or do we use one explicitly opted-in SMS test recipient?  
> **Next week’s output:** A live demo of the full mock-data reorder workflow and audit log.

## 10. Phrases that make you sound clear—not overly technical

| Instead of saying | Say |
| --- | --- |
| “We are building an AI CRM.” | “We are proving one controlled account-communication workflow before expanding into a broader system.” |
| “AI will handle the messages.” | “The workflow uses approved rules and templates; a human takes over when judgment is required.” |
| “We can automate promotions.” | “Promotion or price communications would only come later, through approved eligibility and compliance controls.” |
| “The financial model tells them if they should launch.” | “The financial model organizes the decision and shows the sensitivity of the assumptions; qualified reviewers validate the methodology.” |
| “We need more features.” | “We need to pass the next gate with evidence before adding another workflow.” |

## 11. Boundaries you should state confidently

Do not over-promise. These boundaries make the product more credible, not less.

1. The first demonstration uses **mock or explicitly permitted test data**.
2. Live commercial text messaging, alcohol price/promotion rules, and other regulated communications require appropriate review before deployment. The FCC states that commercial robotexts require written consent, and New Jersey maintains current-price-list resources for its relevant alcohol licensees.[1] [2]
3. The financial model does not guess product classification, tax treatment, or accounting methodology. Those are named reviewer gates.
4. The product helps the representative cover routine communication; it does not autonomously resolve relationship-sensitive issues.

## 12. Meeting agenda you can lead

### A 30-minute partner build meeting

| Time | Topic | Your job as meeting lead |
| --- | --- | --- |
| 0–5 minutes | State the current gate and desired decision. | Open with: “We are in the Sandbox stage. Today we need to decide the first channel and who validates the message.” |
| 5–12 minutes | Review new market feedback or test evidence. | Share the facts, not a sales pitch. Ask what changes the product requirement. |
| 12–20 minutes | Demo or review the visible work. | Show the workflow, input fields, sample message, audit log, or workbook section. |
| 20–26 minutes | Identify risks and unresolved decisions. | Separate what is a product decision from what needs legal, finance, or client review. |
| 26–30 minutes | Assign owners and next output. | End with an owner, date, and visible artifact for each task. |

## 13. Bottom line

You can credibly say that you are building a **controlled, evidence-led product system** for a partner who brings market access. Your “work” is the product leadership: translating customer feedback into requirements, building the demo, making the workflow traceable, documenting decisions, and refusing to expand until the current step has proof.

That is not pretending. It is exactly what a strong product and build lead does.

## References

[1] [Federal Communications Commission, “Stop Unwanted Robocalls and Texts.”](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts)  
[2] [New Jersey Division of Alcoholic Beverage Control, “Current Price List (CPL).”](https://www.njoag.gov/about/divisions-and-offices/division-of-alcoholic-beverage-control-home/licensing-bureau-applications-and-information/current-price-list-cpl/)
