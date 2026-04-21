import { useEffect } from "react";
import { PageHeader, PageBody, Section } from "@/components/content/Page";
import { Check } from "lucide-react";

const PAIRS = [
  { fg: "#0F172A", bg: "#FFFFFF", label: "Body text on white" },
  { fg: "#FFFFFF", bg: "#0F172A", label: "Body text on dark" },
  { fg: "#FFFFFF", bg: "#4F6EF7", label: "Pod primary CTA" },
  { fg: "#FFFFFF", bg: "#0D9E6E", label: "Books primary CTA" },
  { fg: "#0F172A", bg: "#F1F5F9", label: "Body text on subtle" },
];

function contrast(hex1: string, hex2: string) {
  const lum = (hex: string) => {
    const h = hex.replace("#", "");
    const rgb = [0, 2, 4].map((i) => {
      const c = parseInt(h.substring(i, i + 2), 16) / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  };
  const a = lum(hex1);
  const b = lum(hex2);
  const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  return Math.round(ratio * 100) / 100;
}

const Accessibility = () => {
  useEffect(() => {
    document.title = "Accessibility — Gopaddi";
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="System"
        title="Accessible by default."
        description="Every screen we ship must meet WCAG 2.1 AA at minimum. The rules below are non-negotiable across the suite."
      />
      <PageBody>
        <Section title="Contrast ratios" description="Body text must hit 4.5:1; large text and UI affordances must hit 3:1.">
          <div className="rounded-xl border border-border bg-card divide-y divide-border">
            {PAIRS.map((p) => {
              const ratio = contrast(p.fg, p.bg);
              const passAA = ratio >= 4.5;
              const passAAA = ratio >= 7;
              return (
                <div key={p.label} className="grid grid-cols-12 items-center gap-4 px-5 py-4">
                  <div
                    className="col-span-12 sm:col-span-4 rounded-lg flex items-center justify-center h-16 text-sm font-medium"
                    style={{ background: p.bg, color: p.fg }}
                  >
                    Aa Bb 123
                  </div>
                  <div className="col-span-7 sm:col-span-5">
                    <div className="text-sm font-medium">{p.label}</div>
                    <div className="text-[11px] font-mono text-muted-foreground">
                      {p.fg.toUpperCase()} on {p.bg.toUpperCase()}
                    </div>
                  </div>
                  <div className="col-span-5 sm:col-span-3 flex flex-wrap items-center justify-end gap-2">
                    <span className="text-sm font-mono">{ratio}:1</span>
                    <Pill ok={passAA}>AA</Pill>
                    <Pill ok={passAAA}>AAA</Pill>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section title="Touch targets" description="Minimum 44×44px on touch surfaces. 32×32px is acceptable on dense desktop UI when inside a clickable row.">
          <div className="grid grid-cols-3 gap-4">
            {[44, 32, 24].map((s) => (
              <div key={s} className="rounded-xl border border-border bg-card p-6 flex flex-col items-center gap-3">
                <div className="rounded-md bg-app/15 border border-app/40" style={{ width: s, height: s }} />
                <div className="text-xs font-mono text-muted-foreground">{s}×{s}px</div>
                <div className={`text-xs ${s >= 44 ? "text-emerald-500" : s >= 32 ? "text-amber-500" : "text-rose-500"}`}>
                  {s >= 44 ? "Recommended" : s >= 32 ? "Desktop only" : "Avoid"}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Screen readers" description="Every interactive element ships with a real label.">
          <ul className="space-y-2 text-sm">
            {[
              "Use semantic HTML (button, a, label) before reaching for ARIA.",
              "Icon-only buttons require an aria-label with the action verb.",
              "Live regions (aria-live=\"polite\") for toasts and inline async results.",
              "Avoid placeholder-as-label patterns — bind a visible <label> element.",
            ].map((line, i) => (
              <li key={i} className="flex gap-2">
                <Check className="h-4 w-4 mt-0.5 text-app shrink-0" />
                <span className="text-muted-foreground">{line}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Keyboard navigation" description="Tab order matches reading order. Focus is always visible.">
          <div className="rounded-xl border border-border bg-card p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <KeyRow keys={["Tab"]} desc="Move forward through interactive elements." />
            <KeyRow keys={["Shift", "Tab"]} desc="Move backward." />
            <KeyRow keys={["Enter"]} desc="Activate buttons and links." />
            <KeyRow keys={["Esc"]} desc="Close modals and overlays." />
            <KeyRow keys={["⌘", "K"]} desc="Open the global command palette." />
            <KeyRow keys={["↑", "↓"]} desc="Navigate menus and lists." />
          </div>
        </Section>
      </PageBody>
    </>
  );
};

function Pill({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <span
      className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${
        ok ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/15 text-rose-600 dark:text-rose-400"
      }`}
    >
      {ok ? `✓ ${children}` : `✗ ${children}`}
    </span>
  );
}

function KeyRow({ keys, desc }: { keys: string[]; desc: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        {keys.map((k) => (
          <kbd
            key={k}
            className="rounded-md border border-border bg-muted px-1.5 py-0.5 text-[11px] font-mono text-foreground"
          >
            {k}
          </kbd>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">{desc}</span>
    </div>
  );
}

export default Accessibility;
