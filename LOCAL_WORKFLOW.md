# Simple Project Workflow

## The only workflow you need

> **Decide → brief → build → test → save → review.**

Do not ask an AI to “build the whole product” from a blank chat. Give it one clear task at a time, make sure the task is saved in the project folder, test what it returns, then save the new version before starting the next task.

| Role | What that person or tool owns |
| --- | --- |
| **You — Product / Build Lead** | Decide what gets built next, keep the project files organized, run the demo, test the result, and send concise updates to your partner. |
| **Your partner — Market / Sales Lead** | Bring buyer conversations, customer context, sales objections, demo feedback, and the commercial story. |
| **Fable / Claude — Implementation** | Write or revise code from a precise build brief, explain changes, identify blockers, and produce a test checklist. |
| **Manus — Product strategy and review** | Turn market feedback into build briefs, organize decisions, review demos, sharpen the pitch flow, and maintain the project’s source of truth. |

## The weekly loop

### 1. Choose one visible outcome

Pick an outcome a client could see in a five-minute demonstration. Examples include “the reorder-risk queue updates,” “a rep can open an account timeline,” or “a manager can review an approved outreach audit record.” Do not choose an abstract task such as “improve the app.”

### 2. Write or update the build brief

Open `SOURCE_OF_TRUTH.md`. Add the desired outcome under **Current Build Task**, including what success looks like and what must not change. This file is the context you give Fable/Claude first.

### 3. Give Fable/Claude one task

Copy the appropriate prompt from `FABLE_CLAUDE_PROMPTS.md`, paste in the task from the source-of-truth file, and attach or paste the relevant code only if the tool cannot access your local folder. Ask it to change the code, explain the files changed, and give you exact steps to test the work.

### 4. Test the output as a salesperson would

Do not only look at the code. Open the demo and perform the click sequence your partner would use in a meeting. Check the happy path first, then one obvious failure or exception state. Record what worked and what looked confusing in `DECISION_LOG.md`.

### 5. Save the working version locally

After a meaningful improvement, duplicate or zip the project folder using the naming convention below. Never rely on chat history as your only record.

```text
enterprise-ai-demo_YYYY-MM-DD_feature-name.zip
```

### 6. Bring a concise review back here

Send Manus four things: a screenshot or short screen recording, what was built, what felt wrong, and the next question you need answered. The review can then become the next implementation brief.

## The folder map

| Folder or file | Why it exists | Do not delete it because |
| --- | --- | --- |
| `client/` | The actual web application source. | This is the demo you will show during a sales meeting. |
| `source-materials/` | Original briefs, video, and partner research. | This proves where the product direction came from. |
| `SOURCE_OF_TRUTH.md` | Current product context and the next implementation task. | It prevents new AI chats from losing context. |
| `FABLE_CLAUDE_PROMPTS.md` | Reusable prompts for implementation and review. | It keeps requests specific and avoids random rewrites. |
| `DECISION_LOG.md` | A record of what you decided, why, and who owns the next move. | It becomes your “show your work” record. |
| `Project_Lead_Workbook.md` | Plain-English guide for running the project and updating your partner. | It tells you how to explain the product and your role. |
| `LOCAL_WORKFLOW.md` | This operating routine. | It tells you how the parts work together. |
| `GITHUB_SOURCE_OF_TRUTH.md` | The repository location and shared-code routine. | It prevents separate tools from building from different versions. |

## Non-negotiable rules

| Always do this | Avoid this |
| --- | --- |
| Build one demo-visible capability at a time. | Asking for an entire enterprise platform in one prompt. |
| Save a local version after meaningful progress. | Treating a chat history as the source of truth. |
| Use fictional/demo data until a client explicitly authorizes real use. | Placing real customer data or messages into a demo casually. |
| Keep a human review/exception step in the product. | Presenting the system as autonomous relationship management. |
| Get qualified review for live regulated messaging and financial-model methodology. | Promising production compliance or financial conclusions from a demo. |

## Shared-code rule

The application code now has one canonical home: `https://github.com/Davv5/enterprise-ai-sales-demo.git`. Before any external implementation session, start from its latest `main` branch; after testing a completed change, return that change to `main`. Read `GITHUB_SOURCE_OF_TRUTH.md` for the exact routine.
