# Deployment Readiness

LaunchLab is not deployed in this phase. There is no selected hosting provider,
no custom domain, no Cloudflare setup, and no GitHub Actions workflow.

## Current Preview Path

Use the local production build path:

```bash
pnpm install
pnpm run build
pnpm run start
```

Then open `http://localhost:3000`.

## Static Export Viability

Static export is viable for the current frontend demo if a static host is chosen
later.

Reasons:

- The app has static routes only: `/`, `/app`, and `/case-study`.
- Data is local TypeScript mock data.
- Browser state uses client components and `localStorage`.
- There are no route handlers, server actions, request cookies, request headers,
  redirects, rewrites, dynamic route params, or default `next/image`
  optimization requirements.

To enable static export later, add `output: "export"` to `next.config.ts` and
run `pnpm run build`. Next.js will emit static assets into `out/`.

## Deferred Work

- Choose a free hosting target only when deployment is actually needed.
- Add provider-specific config only after the target is selected.
- Add GitHub Actions only after the deployment path is stable.
- Add a custom domain only if one is available.
