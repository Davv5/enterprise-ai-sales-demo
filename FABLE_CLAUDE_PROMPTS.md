# Fable / Claude Implementation Prompts

## 1. Start-of-session prompt

Copy this before any implementation session.

```text
You are the implementation engineer for a premium sales-demo web application.

First, read SOURCE_OF_TRUTH.md and LOCAL_WORKFLOW.md in this project. Treat them as product requirements. The application is a realistic but fictional distributor communication product; it must never imply real integrations, real client data, legal compliance approval, or autonomous replacement of sales reps.

Your job in this session is to implement only the current build task below. Before coding, summarize: (1) the user-visible outcome, (2) files you expect to change, (3) acceptance criteria, and (4) any blocker or assumption. Then implement the work. At the end, list every changed file, explain how to test it, and name any remaining limitation.

CURRENT BUILD TASK:
[Paste the Current Build Task from SOURCE_OF_TRUTH.md here]
```

## 2. Feature prompt

Use this when you know exactly what should be added.

```text
Implement the following feature in the existing project. Preserve the established visual system and do not rewrite unrelated screens.

FEATURE:
[Describe one demo-visible feature in one or two paragraphs.]

ACCEPTANCE CRITERIA:
1. [Describe what the partner can click or show.]
2. [Describe the visual/behavioral outcome.]
3. [Describe one edge or exception state.]

CONSTRAINTS:
- Use fictional demo data only.
- Keep the user-facing language operational and credible.
- Show a human rep as owner for exceptions or non-routine replies.
- Do not add real SMS, email, payment, authentication, or external API functionality unless explicitly requested.

Return a concise implementation summary, changed-file list, and test steps after coding.
```

## 3. Bug-fix prompt

```text
Debug the following issue in the existing premium sales-demo application.

OBSERVED ISSUE:
[What you clicked, what you expected, and what happened.]

CONSTRAINT:
Do not redesign or rewrite unrelated parts of the application. Find the smallest safe fix first. Explain the root cause in plain English, implement the fix, and give me the exact retest steps.
```

## 4. Demo-readiness review prompt

```text
Review the current application as if you were a distributor executive seeing it in a ten-minute sales demo.

Evaluate only these questions:
1. Is the buyer problem understandable in the first 30 seconds?
2. Can a seller navigate from a dashboard to one compelling account story quickly?
3. Does the system show evidence, ownership, and control before an automation action?
4. Does the design feel premium and believable without claiming production capabilities that do not exist?
5. What are the three most important changes before a live client pitch?

Do not implement changes yet. Give a prioritized review in plain English.
```

## 5. Handoff prompt for Manus review

```text
I implemented the current build task in the Enterprise AI sales-demo project.

What changed:
[List files/features.]

What I tested:
[List clicks or flows.]

What still feels wrong or uncertain:
[List one to three concerns.]

Please review this as product lead. Tell me whether the work supports the ten-minute sales story, what could confuse a distributor executive, and what the next single build task should be.
```
