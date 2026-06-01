import {
  ClipboardList,
  LineChart,
  type LucideIcon,
  PenLine,
  Rocket,
} from "lucide-react";

import { SectionLabel } from "@/components/marketing/section-label";
import { FlowStep } from "@/components/marketing/flow-step";
import { FlowConnector } from "@/components/marketing/flow-connector";

type StepColor = "cyan" | "violet" | "lime" | "amber";

const flowSteps: {
  detail: string;
  icon: LucideIcon;
  label: string;
  color: StepColor;
  number: string;
}[] = [
  {
    detail: "Write the measurable startup outcome you want to achieve.",
    icon: ClipboardList,
    label: "Goal",
    color: "cyan",
    number: "01",
  },
  {
    detail: "Rank tests by effort, impact, and learning value automatically.",
    icon: Rocket,
    label: "Test queue",
    color: "violet",
    number: "02",
  },
  {
    detail: "Open the landing-page angle and variant copy before shipping.",
    icon: PenLine,
    label: "Variant",
    color: "lime",
    number: "03",
  },
  {
    detail: "Keep the next result signal attached to the test that caused it.",
    icon: LineChart,
    label: "Result",
    color: "amber",
    number: "04",
  },
];

export function TransformationStrip() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <div className="transformation-strip surface-command surface-shimmer">
        {/* Top shimmer line inherited from surface-command */}
        <div className="transformation-strip__header">
          <div>
            <SectionLabel label="From idea to next test" />
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              One visible flow from goal to result.
            </h2>
          </div>
        </div>

        <div className="transformation-strip__steps">
          {flowSteps.map((step, index) => (
            <div className="transformation-strip__step-wrapper" key={step.label}>
              <FlowStep
                color={step.color}
                detail={step.detail}
                icon={step.icon}
                label={step.label}
                number={step.number}
              />
              {index < flowSteps.length - 1 && (
                <FlowConnector color={step.color} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
