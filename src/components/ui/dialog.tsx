"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export function DialogContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-slate-950/75 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-20 z-50 grid w-[calc(100vw-2rem)] max-w-xl -translate-x-1/2 gap-4 rounded-lg border border-white/10 bg-slate-950 p-4 shadow-2xl shadow-black/50 outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:p-5",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          aria-label="Close command menu"
          className="absolute right-3 top-3 inline-flex size-8 cursor-pointer items-center justify-center rounded-md text-slate-400 transition-colors duration-200 hover:bg-white/10 hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-300"
          type="button"
        >
          <X aria-hidden="true" className="size-4" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
