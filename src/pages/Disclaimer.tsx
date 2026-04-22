import { useEffect } from "react";
import { PageHeader, PageBody, Section } from "@/components/content/Page";
import { Warning, FileText, Lightbulb, Cube, Palette, Stack } from "@phosphor-icons/react";

export default function Disclaimer() {
  useEffect(() => {
    document.title = "Design Audit — Gopaddi Brand Guidelines";
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="System · Disclaimer"
        title="Design Audit: Gopaddi Brand Ecosystem v1.0"
        description="A comparative analysis of Gopaddi against Google Workspace and Microsoft 365 — and a strategic call for a branding intervention before v2.0."
      >
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <Meta label="Author" value="Dare Oyejide" />
          <Dot />
          <Meta label="Date" value="April 21, 2026" />
          <Dot />
          <Meta label="Status" value="Action required" />
        </div>
      </PageHeader>

      <PageBody>
        {/* Notice */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 flex gap-4">
          <div className="shrink-0 mt-0.5 rounded-lg bg-amber-500/15 p-2 text-amber-600 dark:text-amber-400">
            <Warning size={20} weight="fill" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold">Immediate branding intervention required</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              v1.0 is a strong, functional start — but reaching "behemoth" status will require
              evolving past container-based unity toward a shared architectural DNA across the suite.
            </p>
          </div>
        </div>

        {/* Executive summary */}
        <Section
          title="1. Executive summary"
          description="Where Gopaddi stands today against the established benchmarks."
        >
          <div className="rounded-xl border border-border bg-card p-6 space-y-4 text-sm leading-relaxed">
            <p>
              This report evaluates the current visual trajectory of the Gopaddi product suite in
              relation to established industry benchmarks (Google Workspace and Microsoft 365). While
              the v1.0 set demonstrates a high degree of technical polish and mobile-first
              containerization, there is a clear <strong className="text-foreground">"cohesion gap"</strong>{" "}
              when compared to the unified visual logic of our competitors.
            </p>
            <p>
              To transition from a collection of apps to a "behemoth system of productivity," we
              must evolve past container-based unity toward a{" "}
              <strong className="text-foreground">shared architectural DNA</strong>.
            </p>
          </div>
        </Section>

        {/* Comparative matrix */}
        <Section
          title="2. Comparative matrix"
          description="How the system reads against Google's open marks and Microsoft's hybrid containers."
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <MatrixCard
              icon={<Cube size={18} weight="duotone" />}
              title="A. Visual architecture"
              points={[
                {
                  label: "Container strategy",
                  body:
                    "Unlike Google (Open) or Microsoft (Hybrid), Gopaddi relies on the Squircle (Rounded Rect). It guarantees a clean grid on iOS/Android but limits our ability to create iconic, recognizable silhouettes.",
                },
                {
                  label: "Symbolic language",
                  body:
                    "We use literal glyphs (speech bubbles, people, shopping bags). They are accessible but lack the proprietary shape language that makes a Google 'M' or Microsoft 'W' unmistakable without color.",
                },
              ]}
            />
            <MatrixCard
              icon={<Stack size={18} weight="duotone" />}
              title="B. Materiality & depth"
              points={[
                {
                  label: "The competitors",
                  body:
                    "Microsoft uses Fluent Design (translucency, 3D layering). Google uses Material 3 (flat, high-contrast geometry).",
                },
                {
                  label: "Gopaddi today",
                  body:
                    "We sit in a middle ground. The subtle inner glows and pillowed effects feel modern, but lack a defined material logic. We must decide: light, glass, or solid paper.",
                },
              ]}
            />
            <MatrixCard
              icon={<Palette size={18} weight="duotone" />}
              title="C. Color logic"
              points={[
                {
                  label: "Current state",
                  body:
                    "Colors are assigned per product — Blue for Pod, Green for Books, Sky for Workforce, Orange for Slides.",
                },
                {
                  label: "Risk",
                  body:
                    "Without a shared accent, a user might never realize the orange app and the blue app belong to the same parent ecosystem.",
                },
              ]}
            />
          </div>
        </Section>

        {/* Intervention */}
        <Section
          title={`3. The "behemoth" intervention`}
          description="Three pillars to unify the system through DNA, not just frames."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PillarCard
              number="01"
              title="Proprietary geometry"
              body="Move away from literal icons toward a unique Gopaddi Shape Language. Develop a shared 'cutting' or 'layering' style that appears in every icon, regardless of glyph."
            />
            <PillarCard
              number="02"
              title="Shared color continuity"
              body="Introduce a 'Hero Accent' across all icons — a specific gradient or brand stripe — to bridge the gap between disparate app colors."
            />
            <PillarCard
              number="03"
              title="Material systemization"
              body="Document a strict rulebook for shadow, light, and depth. Every icon must follow the same light-source logic so the suite feels like one physical space."
            />
          </div>
        </Section>

        {/* Closing */}
        <Section title="Closing thought">
          <div className="rounded-xl border border-border bg-gradient-to-br from-card to-muted/40 p-6 flex gap-4">
            <div className="shrink-0 mt-0.5 rounded-lg bg-app/10 p-2 text-app">
              <Lightbulb size={20} weight="fill" />
            </div>
            <p className="text-sm leading-relaxed">
              v1.0 is a strong, functional start. To compete with Microsoft and Google, we must move
              from <em>"looking like an app suite"</em> to{" "}
              <strong className="text-foreground">"feeling like an ecosystem."</strong> We need to
              design the <em>soul</em> of the system — not just its surface.
            </p>
          </div>
        </Section>

        <div className="flex items-center gap-2 text-[11px] text-muted-foreground pt-2 border-t border-border">
          <FileText size={12} />
          <span>Internal document — Gopaddi Brand team. Not for external distribution.</span>
        </div>
      </PageBody>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <span>
      <span className="text-muted-foreground/70">{label}:</span>{" "}
      <span className="text-foreground font-medium">{value}</span>
    </span>
  );
}

function Dot() {
  return <span className="text-muted-foreground/40">·</span>;
}

function MatrixCard({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  points: { label: string; body: string }[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-app">{icon}</span>
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <ul className="space-y-3">
        {points.map((p) => (
          <li key={p.label} className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {p.label}
            </p>
            <p className="text-sm leading-relaxed text-foreground/90">{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PillarCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 space-y-3 relative overflow-hidden">
      <span className="absolute right-3 top-2 text-5xl font-bold text-app/10 leading-none select-none">
        {number}
      </span>
      <p className="text-[11px] font-mono text-app relative">{number}</p>
      <h4 className="text-base font-semibold relative">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed relative">{body}</p>
    </div>
  );
}
