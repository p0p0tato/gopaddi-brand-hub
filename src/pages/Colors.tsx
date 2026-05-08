import { useEffect, useMemo, useState } from "react";
import { PageHeader, PageBody, Section, Placeholder } from "@/components/content/Page";
import { ColorSwatch } from "@/components/content/ColorSwatch";
import { CORE_APPS, SOLUTIONS } from "@/data/apps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { z } from "zod";

/* ── Token data sourced from Gopaddi DESIGN 1.md ─────────────────────── */

type Token = { name: string; light: string; dark: string };
type TokenGroup = { title: string; tokens: Token[] };

const TOKEN_GROUPS: TokenGroup[] = [
  {
    title: "Surface — Brand",
    tokens: [
      { name: "surface-brand-normal", light: "#0d6efd", dark: "#5B8DEF" },
      { name: "surface-brand-subtle", light: "#f3f8ff", dark: "#1B2240" },
      { name: "surface-brand-hover", light: "#0a58ca", dark: "#7AA0F1" },
      { name: "surface-brand-active", light: "#084298", dark: "#A0B8F4" },
      { name: "surface-brand-focus", light: "#9ec5fe", dark: "#34406A" },
      { name: "surface-brand-disabled", light: "#cfe2ff", dark: "#293458" },
    ],
  },
  {
    title: "Surface — Neutral",
    tokens: [
      { name: "surface-neutral-normal", light: "#ffffff", dark: "#0E121B" },
      { name: "surface-neutral-subtle", light: "#f5f7fa", dark: "#222530" },
      { name: "surface-neutral-hover", light: "#f2f5f8", dark: "#2B303B" },
      { name: "surface-neutral-active", light: "#e1e4ea", dark: "#525866" },
      { name: "surface-neutral-focus", light: "#cacfd8", dark: "#717784" },
      { name: "surface-neutral-disabled", light: "#f5f7fa", dark: "#181B25" },
    ],
  },
  {
    title: "Content (text + foreground)",
    tokens: [
      { name: "content-primary", light: "#181b25", dark: "#FAFAFA" },
      { name: "content-secondary", light: "#525866", dark: "#A0A4AD" },
      { name: "content-tertiary", light: "#99a0ae", dark: "#7C808A" },
      { name: "content-disabled", light: "#cacfd8", dark: "#5B5F69" },
      { name: "content-on-brand", light: "#ffffff", dark: "#FFFFFF" },
      { name: "content-link-normal", light: "#0d6efd", dark: "#5B8DEF" },
    ],
  },
  {
    title: "Border",
    tokens: [
      { name: "border-neutral-normal", light: "#e1e4ea", dark: "#2B303B" },
      { name: "border-neutral-hover", light: "#99a0ae", dark: "#3D4250" },
      { name: "border-neutral-active", light: "#717784", dark: "#525866" },
      { name: "border-divider-normal", light: "#e1e4ea", dark: "#2B303B" },
      { name: "border-brand-normal", light: "#0d6efd", dark: "#5B8DEF" },
    ],
  },
  {
    title: "Feedback — Positive / Warning / Negative / Informative",
    tokens: [
      { name: "surface-positive-normal", light: "#0f973d", dark: "#3CC36C" },
      { name: "surface-warning-normal", light: "#ff9f1c", dark: "#FFB85A" },
      { name: "surface-negative-normal", light: "#d42620", dark: "#E96560" },
      { name: "surface-informative-normal", light: "#59a5d8", dark: "#8AC4E8" },
      { name: "content-positive-normal", light: "#0f973d", dark: "#3CC36C" },
      { name: "content-negative-normal", light: "#d42620", dark: "#E96560" },
    ],
  },
];

const BRAND_PRIMARY = "#0d6efd";

/* ── Cluster system ──────────────────────────────────────────────────── */

type Cluster = { name: string; hue: string; hex: string; apps: string[]; rationale: string };

const CLUSTERS: Cluster[] = [
  {
    name: "Productivity",
    hue: "Teal",
    hex: "#259393",
    apps: ["Books", "Docs", "Slides", "Sheets"],
    rationale:
      "Calm, focused work surfaces. Teal reads as quiet capability — apps you live in for hours without fatigue.",
  },
  {
    name: "Communication",
    hue: "Purple",
    hex: "#8A50FD",
    apps: ["Pod", "Call Connect"],
    rationale:
      "Synchronous and async conversation. Purple signals presence and a slightly more expressive, human channel.",
  },
  {
    name: "Platform",
    hue: "Gopaddi blue",
    hex: "#0D6EFD",
    apps: ["Workspace", "Travel OS", "Restaurant OS", "Nightlife OS", "Events OS"],
    rationale:
      "Foundational shells and vertical OSs carry the parent Gopaddi blue — they ARE the platform, so they wear the master brand color directly.",
  },
  {
    name: "People",
    hue: "Sky blue",
    hex: "#40B7FC",
    apps: ["Workforce"],
    rationale:
      "Workforce sits adjacent to platform but lifts the hue toward sky — open, human, distinct from operational shells.",
  },
];

/* ── Submission form ─────────────────────────────────────────────────── */

const submissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  tokenName: z
    .string()
    .trim()
    .min(2, "Token name is required")
    .max(64)
    .regex(/^[a-z0-9-]+$/, "Use lowercase, numbers, and dashes only"),
  hex: z
    .string()
    .trim()
    .regex(/^#?[0-9a-fA-F]{6}$/, "Enter a 6-digit HEX value"),
  rationale: z.string().trim().min(10, "Add a short rationale").max(500),
});

const Colors = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", tokenName: "", hex: "", rationale: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Colors — Gopaddi Design System";
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = submissionSchema.safeParse(form);
    if (!result.success) {
      const next: typeof errors = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as keyof typeof form] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // No backend yet — simulate submission and reset.
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", tokenName: "", hex: "", rationale: "" });
      toast({
        title: "Submission received",
        description: "Your color proposal has been logged for review by the brand team.",
      });
    }, 400);
  };

  const allApps = useMemo(() => [...CORE_APPS, ...SOLUTIONS], []);

  return (
    <>
      <PageHeader
        eyebrow="Design System"
        title="Colors"
        description="Gopaddi's color system is built on one parent brand color, an app-cluster hue system, and a full set of light and dark semantic tokens."
        accent={BRAND_PRIMARY}
      />
      <PageBody>
        <Section
          id="brand"
          title="Brand color"
          description="Gopaddi's parent identity is anchored by a single primary blue. Every cluster, app and surface eventually traces back to it."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch name="Gopaddi Blue" role="Primary" hex={BRAND_PRIMARY} />
            <ColorSwatch name="Ink" role="Foreground" hex="#181B25" />
            <ColorSwatch name="Canvas" role="Background" hex="#F5F7FA" />
          </div>
        </Section>

        <Section
          id="cluster-system"
          title="Cluster system"
          description="Apps are grouped into clusters, and each cluster owns a hue. Clustering keeps the suite legible at a glance and gives related apps a shared visual identity."
        >
          <div className="rounded-xl border border-dashed border-border bg-muted/30 px-5 py-4 mb-6 text-sm text-muted-foreground">
            <Placeholder>Copy pending</Placeholder>
            <span className="ml-2">
              Final narrative copy will be supplied by the brand team. The structure below is the
              working framework.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CLUSTERS.map((c) => (
              <article
                key={c.name}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <div
                  className="h-20 flex items-end justify-between px-5 py-3 text-white"
                  style={{ backgroundColor: c.hex }}
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-wider opacity-80">
                      {c.hue}
                    </div>
                    <div className="text-base font-semibold">{c.name}</div>
                  </div>
                  <code className="text-[11px] font-mono opacity-90">{c.hex.toUpperCase()}</code>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {c.apps.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-medium"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.rationale}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            <div className="text-sm font-medium mb-3">All apps, by cluster</div>
            <div className="flex flex-wrap gap-2">
              {allApps.map((app) => (
                <span
                  key={app.key}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-2.5 py-1 text-[12px]"
                  style={{
                    background: `${app.primaryHex}14`,
                    borderColor: `${app.primaryHex}40`,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: app.primaryHex }}
                  />
                  {app.name}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="tokens"
          title="Tokens"
          description="App-wide semantic color tokens. Always reference tokens by name — never hard-code hex values in components. Each token resolves to a different value in light vs dark mode."
        >
          <div className="space-y-8">
            {TOKEN_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold tracking-tight mb-3">{group.title}</h3>
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="grid grid-cols-12 px-4 py-2.5 text-[10.5px] uppercase tracking-wider text-muted-foreground border-b border-border bg-muted/30">
                    <div className="col-span-6">Token</div>
                    <div className="col-span-3">Light</div>
                    <div className="col-span-3">Dark</div>
                  </div>
                  <ul className="divide-y divide-border">
                    {group.tokens.map((t) => (
                      <TokenRow key={t.name} token={t} />
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="submit"
          title="Submit a color"
          description="Designers can propose a new color for the system. Submissions are reviewed by the brand team and considered for the next token release."
        >
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-card p-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl"
            noValidate
          >
            <Field label="Your name" error={errors.name}>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                placeholder="Ada Lovelace"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                placeholder="ada@gopaddi.com"
              />
            </Field>
            <Field label="Token name" error={errors.tokenName}>
              <Input
                value={form.tokenName}
                onChange={(e) =>
                  setForm({ ...form, tokenName: e.target.value.toLowerCase() })
                }
                maxLength={64}
                placeholder="surface-brand-extra"
              />
            </Field>
            <Field label="HEX value" error={errors.hex}>
              <div className="flex items-center gap-2">
                <div
                  className="h-10 w-10 shrink-0 rounded-md border border-border"
                  style={{
                    background: /^#?[0-9a-fA-F]{6}$/.test(form.hex)
                      ? form.hex.startsWith("#")
                        ? form.hex
                        : `#${form.hex}`
                      : "transparent",
                  }}
                />
                <Input
                  value={form.hex}
                  onChange={(e) => setForm({ ...form, hex: e.target.value })}
                  maxLength={7}
                  placeholder="#0D6EFD"
                />
              </div>
            </Field>
            <div className="md:col-span-2">
              <Field label="Why should this color join the system?" error={errors.rationale}>
                <Textarea
                  value={form.rationale}
                  onChange={(e) => setForm({ ...form, rationale: e.target.value })}
                  maxLength={500}
                  rows={4}
                  placeholder="Use case, where it sits in the system, what gap it fills…"
                />
              </Field>
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <p className="text-[11px] text-muted-foreground">
                Reviewed weekly by the brand team. You'll get a reply within 5 working days.
              </p>
              <Button type="submit" disabled={submitting}>
                {submitting ? "Submitting…" : "Submit for review"}
              </Button>
            </div>
          </form>
        </Section>
      </PageBody>
    </>
  );
};

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-[12px]">{label}</Label>
      {children}
      {error && <p className="text-[11px] text-destructive">{error}</p>}
    </div>
  );
}

function TokenRow({ token }: { token: Token }) {
  const [copied, setCopied] = useState<"name" | "light" | "dark" | null>(null);
  const copy = (value: string, key: "name" | "light" | "dark") => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1100);
    });
  };
  return (
    <li className="grid grid-cols-12 items-center px-4 py-2.5 text-[12.5px]">
      <button
        onClick={() => copy(token.name, "name")}
        className="col-span-6 flex items-center gap-2 text-left font-mono text-foreground hover:text-app"
      >
        <span className="truncate">{token.name}</span>
        {copied === "name" ? (
          <Check className="h-3 w-3 text-app" />
        ) : (
          <Copy className="h-3 w-3 text-muted-foreground" />
        )}
      </button>
      <ValueCell hex={token.light} active={copied === "light"} onCopy={() => copy(token.light, "light")} />
      <ValueCell hex={token.dark} active={copied === "dark"} onCopy={() => copy(token.dark, "dark")} />
    </li>
  );
}

function ValueCell({
  hex,
  active,
  onCopy,
}: {
  hex: string;
  active: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      onClick={onCopy}
      className={cn(
        "col-span-3 flex items-center gap-2 text-left text-muted-foreground hover:text-foreground"
      )}
    >
      <span
        className="h-4 w-4 shrink-0 rounded-sm border border-border"
        style={{ backgroundColor: hex }}
      />
      <span className="font-mono text-[11.5px]">{hex.toUpperCase()}</span>
      {active && <Check className="h-3 w-3 text-app" />}
    </button>
  );
}

export default Colors;
