# Design QA

Final design QA verifies the upgraded LaunchLab cockpit on local, free tooling.

## Verified Flows

- Landing page renders the premium product story with command-center visual,
  before/after transformation, feature grid, ship log, and CTA path.
- App workspace renders the Growth cockpit shell, command rail, generator,
  pipeline lanes, selected insight panel, A/B variant preview, analytics, and
  local settings.
- Generated experiment cards expose distinct queued, shipped, and selected
  states with text, badges, icons, and semantic `data-*` attributes.

## Responsive Checks

- Desktop viewport: `1365x768`
- Mobile viewport: `390x844`
- Core route set: `/`, `/app`, `/case-study`
- Result from local Playwright audit: no horizontal overflow, no console errors
  or warnings, and no incoherent text overlap in primary first-viewport views.

| Viewport | Route | Primary heading | Overflow | Console issues |
| --- | --- | --- | --- | --- |
| Desktop | `/` | Launch experiments faster than competitors can write specs. | `0` | `0` |
| Desktop | `/app` | Growth cockpit | `0` | `0` |
| Desktop | `/case-study` | LaunchLab case study | `0` | `0` |
| Mobile | `/` | Launch experiments faster than competitors can write specs. | `0` | `0` |
| Mobile | `/app` | Growth cockpit | `0` | `0` |
| Mobile | `/case-study` | LaunchLab case study | `0` | `0` |

## Validation

Run before merging design changes:

```bash
pnpm run validation:gates
```

The gate covers format, typecheck, lint, unit/component tests, Playwright smoke,
and production build. Logs are stored in `artifacts/validation/<RUN_ID>/`.

Final passing design QA gate: `RUN_ID=20260531-160012`.
