# LaunchLab

LaunchLab is a frontend SaaS demo for startup founders. A founder enters a
growth goal, then the product opens a Growth cockpit with ranked experiment
lanes, selected insight, A/B landing variants, analytics, shipped experiment
history, and next action recommendations.

The goal is to show a real product workflow: generate a test, compare landing
copy, ship an experiment, and inspect the signal.

## Product Surface

- Landing page with product positioning, animated command-center visual,
  before/after transformation, feature grid, and shipped experiment proof.
- App workspace with Growth cockpit shell, command rail, generator, pipeline
  lanes, selected insight panel, A/B landing preview, analytics dashboard,
  command menu, and local settings.
- Case study page documenting product decisions and iteration history.
- Local persistence for generated experiments, selected variant, shipped cards,
  and workspace settings.

## Stack

- Next.js App Router and React
- TypeScript strict mode
- Tailwind CSS v4
- Radix primitives and owned UI components
- React Hook Form and Zod
- Zustand with localStorage
- Recharts
- Vitest, React Testing Library, Node test runner, and Playwright
- Biome for formatting and linting

## Local Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Gates

Run the compact validation gate before PRs:

```bash
pnpm run validation:gates
```

The gate runs:

- `pnpm run format:check`
- `pnpm run typecheck`
- `pnpm run lint`
- `pnpm run test`
- `pnpm run test:smoke`
- `pnpm run build`

Logs are written to `artifacts/validation/<RUN_ID>/`.

Design QA notes are in [docs/design-qa.md](docs/design-qa.md).

## Demo Notes

- `/` is the public product landing page.
- `/app` is the interactive workspace.
- `/case-study` explains the build and product decisions.
- The app is frontend-only and uses local mock data plus localStorage.
- No paid services are required.

## Deployment

LaunchLab is not deployed in this phase. There is no selected hosting provider,
no custom domain, no Cloudflare setup, and no CI/CD workflow.

Deployment-readiness notes are in
[docs/deployment-readiness.md](docs/deployment-readiness.md).
