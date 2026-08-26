# Live Hosting Workflow

## Decision

The public demo will use **Cloudflare Pages** with the canonical GitHub repository as its source. The goal is to replace localhost with a stable public URL that updates automatically when verified work reaches `main`.

## Intended configuration

| Setting | Value |
| --- | --- |
| Pages project | `ai-operations-demo` |
| GitHub repository | `Davv5/enterprise-ai-sales-demo` |
| Production branch | `main` |
| Build command | `pnpm build` |
| Published folder | `dist/public` |
| Production deployment | Enabled for pushes to `main` |
| Preview deployments | Disabled initially to prevent experimental work becoming public inadvertently |

## Release rule

1. Work is implemented and verified before it reaches `main`.
2. A push to `main` becomes the only event that updates the public demo.
3. `localhost` remains a private development aid only; it is never the partner-facing product address.
4. A future custom domain can be attached after the product name is selected and screened.

## Initial project creation and deployment trigger

On August 25, 2026, Cloudflare confirmed that the account was connected but had zero existing Pages projects. The first Pages project creation attempt returned Cloudflare error `8000011`, indicating an internal issue with the existing Cloudflare Pages GitHub installation.

Cloudflare’s official remediation is to reinstall the **Cloudflare Workers and Pages** GitHub App, then return to Workers & Pages and connect the intended GitHub account/repository again. The user must complete the GitHub login and installation step because it requires their account credentials and human verification.

After the GitHub authorization was completed, the confirmed Pages project was created successfully with the configuration above. Cloudflare assigned the public address `ai-operations-demo.pages.dev`. At project creation, no initial deployment was recorded; the next verified commit pushed to `main` is intentionally used as the first production deployment trigger.

## Sources

[1] [Cloudflare Pages — GitHub Integration](https://www.cloudflare.com/products/pages/)  
[2] [Cloudflare documentation — Reinstall the Cloudflare GitHub App](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/)  
[3] [Vercel pricing](https://vercel.com/pricing) — Vercel’s free Hobby plan is personal, non-commercial use only and was not selected for this business-facing demo.
