export const caseStudySections = [
  {
    body: "Startup teams often know the metric they want to move, but lose time turning rough ideas into testable experiments. LaunchLab compresses that path into a focused frontend workflow.",
    title: "Problem",
  },
  {
    body: "Build a live product surface where a founder enters one growth goal and immediately gets a guided test queue, landing variants, analytics, and a visible ship log.",
    title: "Idea",
  },
  {
    body: "The first version shipped the landing shell, experiment generator, flow progress, actionable cards, A/B preview, analytics, and public iteration log.",
    title: "Features shipped",
  },
  {
    body: "The interface stays dark, focused, and metric-led. The guided flow uses stable dimensions, clear action labels, visible focus states, and concise text for fast scanning.",
    title: "Design decisions",
  },
  {
    body: "Keep the demo lightweight enough for free static hosting, avoid blocking third-party services, and preserve a fast first interaction on mobile.",
    title: "Performance target",
  },
  {
    body: "Next improvements are command navigation, local persistence, responsive QA, deployment prep, and a final submission-ready README.",
    title: "Next improvements",
  },
] as const;

export const caseStudyMetrics = [
  ["5", "shipping days"],
  ["6", "experiment ideas"],
  ["2", "landing variants"],
  ["4", "analytics charts"],
] as const;
