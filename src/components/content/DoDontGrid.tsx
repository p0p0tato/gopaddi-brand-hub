import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function DoDontGrid({ items }: { items: { type: "do" | "dont"; label: string; visual: ReactNode }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "overflow-hidden rounded-xl border bg-card",
            item.type === "do" ? "border-border" : "border-border"
          )}
        >
          <div className="flex h-44 items-center justify-center checker-bg">{item.visual}</div>
          <div className="flex items-start gap-2 px-4 py-3 border-t border-border">
            <span
              className={cn(
                "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-white",
                item.type === "do" ? "bg-emerald-500" : "bg-rose-500"
              )}
            >
              {item.type === "do" ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
            </span>
            <p className="text-sm text-foreground">
              <span className="font-medium">{item.type === "do" ? "Do" : "Don't"}.</span>{" "}
              <span className="text-muted-foreground">{item.label}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
