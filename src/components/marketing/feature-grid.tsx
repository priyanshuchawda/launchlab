import { BarChart3, FlaskConical, LayoutTemplate, Rocket } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    description:
      "Transform a founder goal into six testable hypotheses with effort and impact.",
    icon: FlaskConical,
    title: "Experiment generator",
  },
  {
    description:
      "Compare clean professional and bold startup variants before shipping.",
    icon: LayoutTemplate,
    title: "A/B variant preview",
  },
  {
    description:
      "Track signups, conversion rate, activation, and best-performing CTAs.",
    icon: BarChart3,
    title: "Analytics dashboard",
  },
  {
    description:
      "Mark experiments as shipped and keep a visible product iteration log.",
    icon: Rocket,
    title: "Ship log",
  },
];

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl py-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card className="min-h-56" key={feature.title}>
            <CardHeader>
              <feature.icon
                aria-hidden="true"
                className="size-5 text-cyan-200"
              />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
