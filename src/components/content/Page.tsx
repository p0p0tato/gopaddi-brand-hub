import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  accent,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  accent?: string; // CSS color value
}) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-12 lg:py-16">
        {eyebrow && (
          <div className="mb-3 flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: accent ?? "hsl(var(--app))" }}
            />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}

export function PageBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto max-w-5xl px-6 lg:px-10 py-10 lg:py-14 docs-prose", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  title,
  description,
  action,
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-8 first:pt-0">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
          {description && (
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{description}</p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {children}
    </section>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-dashed border-app/50 bg-app/5 px-1.5 py-0.5 text-[11px] font-medium text-app">
      {children}
    </span>
  );
}
