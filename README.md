# LaunchLab

LaunchLab is a frontend SaaS demo for startup founders. It turns a founder
growth goal into experiment cards, landing-page variants, analytics, shipped
experiment history, and next action recommendations.

## Getting Started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Validation

Run the compact local gate before opening PRs:

```bash
pnpm run validation:gates
```

This runs format, typecheck, lint, tests, and build with logs stored under
`artifacts/validation/`.

## Deployment

LaunchLab is not deployed in this phase. There is no selected hosting provider,
no custom domain, no Cloudflare setup, and no CI/CD workflow.

For the current deployment-readiness notes, see
[docs/deployment-readiness.md](docs/deployment-readiness.md).
