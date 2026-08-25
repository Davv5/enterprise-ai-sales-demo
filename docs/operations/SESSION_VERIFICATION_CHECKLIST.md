# AI Work-Session Verification Checklist

Use this checklist before and after every implementation or major review session. It is the operational proof that the original documents and interpretation layer are being used rather than merely stored.

## Before work begins

| Check | Pass condition |
| --- | --- |
| **1. Current context** | `AI_CONTEXT.md` has been read. |
| **2. Interpretation** | `../reference-library/AI_INTERPRETATION_MEMO.md` has been read. |
| **3. Active scope** | `../product/PRODUCT_BRIEF.md` has been read and its Current Build Task is explicit. |
| **4. Prior decisions** | `DECISION_LOG.md` has been checked for decisions relevant to the task. |
| **5. Active work** | `TASKS.md` has been checked to confirm this is the next meaningful item. |
| **6. Source of truth** | The implementation session begins from the latest GitHub `main` branch. |

## Before code is changed

An implementation AI should state all of the following in plain English:

1. The visible user outcome it is building.
2. The source decision or product principle it supports.
3. The files it expects to change.
4. The constraints it must preserve.
5. Any open question it cannot safely answer.

## Before work is accepted

| Check | Pass condition |
| --- | --- |
| **Demo truthfulness** | The change does not pretend an unbuilt integration, live message, compliance approval, or client outcome exists. |
| **Product scope** | The change supports the active Track A demo and does not drift into the financial-model track. |
| **Human ownership** | A rep owner and/or exception path remains visible where the workflow becomes non-routine. |
| **Evidence and control** | The workflow preserves a clear reason, decision state, or audit visibility before automated action. |
| **Sales usefulness** | A partner can explain the feature during a ten-minute live pitch. |
| **Version safety** | The tested work is committed and returned to GitHub `main`. |

## After work is accepted

Record one short entry in `DECISION_LOG.md`: what changed, why it matters, who owns the next decision, and what the next visible output is.
