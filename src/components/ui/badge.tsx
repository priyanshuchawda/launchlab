import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-medium",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
        default: "border-white/12 bg-white/8 text-slate-200",
        success: "border-lime-300/25 bg-lime-300/10 text-lime-200",
        violet: "border-violet-300/25 bg-violet-300/10 text-violet-100",
      },
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
