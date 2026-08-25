# GitHub Source of Truth

## Canonical repository

**Repository:** [Davv5/enterprise-ai-sales-demo](https://github.com/Davv5/enterprise-ai-sales-demo)  
**Default branch:** `main`  
**Purpose:** This repository is the official shared home for application code and project-operating documentation.

## What this means for you

You do not need to work inside GitHub every day. It is the invisible version record that makes sure Fable/Claude, Manus, and any future developer start from the same current project instead of passing around competing ZIP files.

## The one rule

> **Only one implementation session changes the project at a time, and every completed change returns to `main`.**

## Cross-tool routine

| Moment | What happens | Who does it |
| --- | --- | --- |
| Before a Fable/Claude implementation session | The session starts from the latest `main` branch. | Fable/Claude or the user’s coding environment. |
| After an implementation change | Test the feature, commit the change, and push it to `main`. | Fable/Claude or the user’s coding environment. |
| Before a Manus review/build session | Manus pulls the latest `github/main` state into the project workspace. | Manus. |
| After a Manus code or documentation change | Manus checkpoints the project and pushes the resulting committed change to `github/main`. | Manus. |
| At the end of the week | Download or retain a dated local archive in addition to GitHub history. | User. |

## What belongs in GitHub versus Google Drive

| Store it in GitHub | Store it in Google Drive |
| --- | --- |
| Application source code, UI components, package files, product requirements, implementation prompts, decision log, and test notes. | Client documents, partner presentations, recordings, exported reports, original video research, and large non-code assets. |

The current local archive remains useful as a backup, but **GitHub is now the canonical working codebase**.

## First-time setup for a future implementation environment

```text
1. Open or clone https://github.com/Davv5/enterprise-ai-sales-demo.git
2. Read `docs/product/PRODUCT_BRIEF.md`
3. Read `docs/operations/AI_IMPLEMENTATION_PROMPTS.md`
4. Implement only the Current Build Task
5. Test the demo flow
6. Commit and push the working change
```

## Do not do this

Do not edit an old ZIP copy and then expect it to be current. Do not run two separate implementation sessions against the project at the same time. Do not use GitHub for live client data, API keys, passwords, or regulated production records.
