# LaunchLab Planning Brief

## Product

LaunchLab is a frontend SaaS demo for startup founders. A founder enters a growth goal such as "I want to increase signup conversion for my AI notes app", then the product generates experiment ideas, A/B landing variants, analytics, shipped experiment history, and next action recommendations.

The project should feel like a real startup product, not a portfolio page.

## Inputs Used

- `info.md` project brief.
- UI/UX Pro Max design-system search for a premium AI SaaS dashboard.
- Next.js official docs for App Router, TypeScript, Biome, static export, and testing guidance.
- Biome docs for `biome ci`, `biome check --write`, formatting, and linting.
- Tailwind CSS v4 docs for CSS-first theme tokens.
- shadcn/ui docs for owned accessible component source.
- GitHub docs for issues, sub-issues, issue branches, and PR issue closing.

## Design Direction

- Dark premium AI SaaS interface.
- Product pattern: before/after transformation and measurable growth outcomes.
- Typography: Space Grotesk for headings, DM Sans or Geist for body, Geist Mono for metrics.
- Palette: near-black background, dark card surfaces, subtle borders, cyan/violet accents, green success metrics.
- Interactions: purposeful loading states, hover feedback, keyboard-accessible controls, command menu, reduced-motion support.
- Avoid: generic portfolio layout, landing-only experience, over-animation, one huge file, weak mobile UX, inaccessible controls.

## Stack

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS v4
- shadcn/ui and Radix primitives
- Motion
- Lucide React
- Recharts
- React Hook Form
- Zod
- Zustand and localStorage
- Vitest and React Testing Library
- Playwright for smoke tests
- Biome for linting and formatting
- pnpm

GitHub Actions and deployment automation are intentionally deferred.

## Repo Workflow

- Default branch: `main`
- Issue branch format: `feat/issue-<number>-<short-slug>`
- PR title format: `feat: <issue scope>`
- PR body must include `Closes #<issue-number>` when the PR completes an issue.
- Work one issue or tightly related sub-issue at a time.
- Keep components and logic split into small focused files.
- No direct feature work on `main`.

## Planned Issue Hierarchy

Parent issue:

- Epic: LaunchLab v1 - AI experiment dashboard

Sub-issues:

1. Repo foundation, Next.js scaffold, Biome, strict TypeScript
2. Design system: tokens, typography, theme, shadcn base
3. Landing page shell: hero, dashboard preview, bento features, CTA
4. Interactive experiment generator flow
5. Experiment cards: hypothesis, effort, impact, metric, ship action
6. A/B landing variant preview
7. Analytics dashboard with realistic mock metrics and charts
8. Ship log and case study page
9. App navigation, command menu, theme/settings panel
10. Local persistence, mock data layer, typed stores
11. Accessibility, keyboard states, responsive polish, reduced motion
12. Deployment notes and Cloudflare Pages prep
13. Final QA: Lighthouse, Playwright smoke tests, README, submission copy

## Expected Architecture

```txt
src/app/
  page.tsx
  app/page.tsx
  case-study/page.tsx

src/components/
  ui/
  marketing/
  experiments/
  variants/
  analytics/
  ship-log/
  layout/

src/data/
src/hooks/
src/lib/
src/stores/
src/types/
src/styles/
```

## Quality Rules

- Use TypeScript strict mode.
- Use Biome for linting and formatting.
- Run type checks before PRs.
- Add tests where behavior matters.
- Use Server Components by default and Client Components only for browser state, effects, and event handlers.
- Use accessible semantic HTML and visible focus states.
- Reserve stable dimensions for dashboard cards, charts, boards, controls, and loading states.
- Keep mobile layouts polished at 375px and up.

## Deferred

- GitHub CI/CD workflows.
- PostHog integration.
- Sentry.
- Cloudflare Pages deployment.
- Custom domain setup.
- Supabase or persistent backend.
