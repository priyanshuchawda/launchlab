import type * as React from "react";

import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-white/8 motion-reduce:animate-none",
        className,
      )}
      {...props}
    />
  );
}
