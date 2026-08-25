# Enterprise AI Sales Demo

This repository holds a **premium live sales-demo product** for a beverage-alcohol distributor communication system. It is the shared working codebase for the project.

> **Start here:** If you are an implementation AI or developer, read [`AI_CONTEXT.md`](AI_CONTEXT.md) first. If you are the project lead, read [`docs/product/PROJECT_LEAD_WORKBOOK.md`](docs/product/PROJECT_LEAD_WORKBOOK.md).

## What this product demonstrates

The demo shows how a distributor could identify a retail account at reorder risk, explain the signal, use an approved communication workflow, maintain an audit record, and route non-routine replies to the assigned sales rep. It uses fictional/demo data. It does **not** claim live integrations or production compliance approval.

## Project map

| Location | Purpose | Open it when |
| --- | --- | --- |
| [`AI_CONTEXT.md`](AI_CONTEXT.md) | The short product context and rules for any AI or developer. | Starting a build or review session. |
| [`client/`](client/) | The React application shown in the browser. | Implementing or changing the demo. |
| [`docs/product/`](docs/product/) | Product brief, roadmap, and project-lead workbook. | Deciding what to build or how to present it. |
| [`docs/strategy/`](docs/strategy/) | Research and visual/design rationale. | Checking why the product is positioned this way. |
| [`docs/operations/`](docs/operations/) | Workflow, prompts, decision log, tasks, GitHub routine, and backups. | Running a work session or saving a change. |
| [`docs/README.md`](docs/README.md) | Detailed documentation index. | Looking for a specific reference document. |

## Working rule

The `main` branch is the current shared version. Before any implementation session, start from the latest `main`. After a tested change, return it to `main`. Details are in [`docs/operations/GITHUB_WORKFLOW.md`](docs/operations/GITHUB_WORKFLOW.md).

## Important boundary

This is a sales demonstration and product-design workspace. Do not place real client data, credentials, API keys, or unreviewed regulated messaging workflows in this repository.
