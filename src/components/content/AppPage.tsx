import { useEffect, useState } from "react";
import { PageHeader, PageBody, Section, Placeholder } from "@/components/content/Page";
import { ColorSwatch } from "@/components/content/ColorSwatch";
import { DoDontGrid } from "@/components/content/DoDontGrid";
import { AppAccentProvider } from "@/components/theme/AppAccentProvider";
import type { AppMeta, LogoVariant } from "@/data/apps";
import { Smartphone, Monitor, Tablet, Laptop, Download, Loader2 } from "lucide-react";
import { downloadFile, downloadZip, slugify } from "@/lib/download";

export function AppPage({ app }: { app: AppMeta }) {
  useEffect(() => {
    document.title = `${app.name} — Gopaddi Brand Guidelines`;
  }, [app.name]);

  const { Icon } = app;
  const sizes = [512, 256, 128, 64, 32];

  return (
    <AppAccentProvider appKey={app.key}>
      <PageHeader
        eyebrow={`App · ${app.name}`}
        title={`${app.name} — Brand Guidelines`}
        description={app.description}
        accent={app.primaryHex}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Icon className="h-14 w-14 rounded-2xl shadow-sm" />
          <div>
            <p className="text-sm font-medium">{app.tagline}</p>
            {app.placeholderColor && (
              <p className="text-xs text-muted-foreground mt-1">
                <Placeholder>PLACEHOLDER COLOR</Placeholder> Final brand color pending decision.
              </p>
            )}
          </div>
        </div>
      </PageHeader>

      <PageBody>
        {/* Icon sizes */}
        <Section
          title="Icon at every size"
          description={`The ${app.name} icon must remain crisp from 512px down to 16px. Use the master SVG below — never rasterize and re-upscale.`}
        >
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex flex-wrap items-end gap-8">
                {sizes.map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <Icon style={{ width: size > 128 ? 128 : size, height: size > 128 ? 128 : size }} className="rounded-2xl" />
                    <span className="text-[11px] font-mono text-muted-foreground">{size}px</span>
                  </div>
                ))}
              </div>
              {app.logoSrc && (
                <DownloadButton
                  onClick={() => downloadFile(app.logoSrc!, `${app.key}-logo.svg`)}
                  label="Download SVG"
                />
              )}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Note: 512 and 256 sizes are displayed at 128px in this preview to fit the page. The downloaded master SVG scales cleanly to any size.
            </p>
          </div>
        </Section>

        {/* Backgrounds */}
        <Section
          title="Icon on different backgrounds"
          description="Maintain at least 1× icon-width of clear space and never apply additional drop shadows beyond the built-in container."
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <BgTile label="Light" bg="hsl(0 0% 100%)" textDark>
              <Icon className="h-20 w-20 rounded-2xl" />
            </BgTile>
            <BgTile label="Dark" bg="hsl(222 24% 7%)">
              <Icon className="h-20 w-20 rounded-2xl" />
            </BgTile>
            <BgTile label="Brand" bg={app.primaryHex}>
              <div className="rounded-2xl bg-white/10 p-2 backdrop-blur-sm">
                <Icon className="h-20 w-20 rounded-2xl" />
              </div>
            </BgTile>
          </div>
        </Section>

        {/* Colors */}
        <Section
          title="Color palette"
          description="Use the primary as the dominant accent, secondary for depth and hover states, and the neutral as a grounding text color."
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ColorSwatch name={`${app.name} Primary`} hex={app.primaryHex} role="Primary" />
            <ColorSwatch name={`${app.name} Secondary`} hex={app.secondaryHex} role="Secondary" />
            <ColorSwatch name={`${app.name} Neutral`} hex={app.neutralHex} role="Neutral" />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <RuleCard
              title="Use the primary for"
              tone="do"
              items={[
                "Primary CTAs and key actions",
                "Active states, focus rings, and selection",
                `Brand moments where ${app.name} should feel front and center`,
              ]}
            />
            <RuleCard
              title="Don't use the primary for"
              tone="dont"
              items={[
                "Body text or long-form reading content",
                "Destructive or error states (use system red)",
                "Decorative gradients that bleed into other apps' brand zones",
              ]}
            />
          </div>
        </Section>

        {/* Do / Don't */}
        <Section
          title="Icon usage"
          description="Always export from the master file. The icon container, corner radius, and proportions are non-negotiable."
        >
          <DoDontGrid
            items={[
              {
                type: "do",
                label: "Use the icon at its native aspect ratio.",
                visual: <Icon className="h-24 w-24 rounded-2xl" />,
              },
              {
                type: "dont",
                label: "Stretch or distort the icon to fit a layout.",
                visual: (
                  <Icon
                    className="h-24 rounded-2xl"
                    style={{ width: 96, transform: "scaleX(1.6)", transformOrigin: "center" }}
                  />
                ),
              },
              {
                type: "dont",
                label: "Recolor the icon to a non-brand color.",
                visual: (
                  <Icon
                    className="h-24 w-24 rounded-2xl"
                    style={{ filter: "hue-rotate(140deg) saturate(0.6)" }}
                  />
                ),
              },
            ]}
          />
        </Section>

        {/* Logo variants */}
        {app.variants && app.variants.length > 0 && (
          <Section
            title="Logo variants"
            description={`Approved alternate treatments of the ${app.name} logo. Use the variant that best fits the surface — never recreate or modify these.`}
            action={<DownloadAllButton app={app} />}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {app.variants.map((v) => (
                <div key={v.name} className="overflow-hidden rounded-xl border border-border bg-card">
                  <div
                    className="flex h-44 items-center justify-center"
                    style={{ background: v.background }}
                  >
                    <img src={v.src} alt={`${app.name} logo — ${v.name}`} className="h-24 w-24" />
                  </div>
                  <div className="flex items-start justify-between gap-3 border-t border-border px-4 py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium">{v.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{v.description}</p>
                    </div>
                    <DownloadButton
                      compact
                      onClick={() =>
                        downloadFile(v.src, `${app.key}-${slugify(v.name)}.svg`)
                      }
                      label="SVG"
                      ariaLabel={`Download ${app.name} ${v.name} SVG`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Typography lockup */}
        <Section
          title="Name lockup"
          description="The wordmark sits to the right of the icon, optically aligned to the cap height of the chosen weight."
        >
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-center gap-4">
              <Icon className="h-14 w-14 rounded-xl" />
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight" style={{ color: app.primaryHex }}>
                  {app.name}
                </span>
                <span className="text-sm text-muted-foreground">by Gopaddi</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-8 text-muted-foreground">
              <Lockup app={app} weight="600" size="xl" />
              <Lockup app={app} weight="700" size="lg" />
              <Lockup app={app} weight="500" size="md" />
            </div>
          </div>
        </Section>

        {/* Color modes */}
        <Section
          title="Color modes"
          description={`Preview ${app.name}'s palette mapped onto a UI surface in both light and dark mode.`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <UiPreview app={app} mode="light" />
            <UiPreview app={app} mode="dark" />
          </div>
        </Section>

        {/* Platforms */}
        <Section
          title="Platform usage"
          description="Match the platform's icon container — do not override the OS shape on iOS or apply circular masks on web."
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <PlatformTile icon={<Smartphone className="h-4 w-4" />} name="iOS" detail="Squircle, 1024×1024 master" app={app} />
            <PlatformTile icon={<Tablet className="h-4 w-4" />} name="Android" detail="Adaptive 432×432, padded" app={app} />
            <PlatformTile icon={<Monitor className="h-4 w-4" />} name="Web" detail="Favicon 32, PWA 192/512" app={app} />
            <PlatformTile icon={<Laptop className="h-4 w-4" />} name="Desktop" detail="ICNS / ICO with retina set" app={app} />
          </div>
        </Section>

        {/* Voice & tone */}
        <Section title="Voice & tone" description={`How ${app.name} sounds, not just how it looks.`}>
          <div className="rounded-xl border border-dashed border-border bg-muted/30 p-6">
            <p className="text-sm leading-relaxed">{app.voiceTone}</p>
            <div className="mt-3">
              <Placeholder>PLACEHOLDER COPY</Placeholder>
            </div>
          </div>
        </Section>
      </PageBody>
    </AppAccentProvider>
  );
}

function BgTile({
  label,
  bg,
  textDark,
  children,
}: {
  label: string;
  bg: string;
  textDark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="flex h-44 items-center justify-center" style={{ background: bg }}>
        {children}
      </div>
      <div className="flex items-center justify-between bg-card px-4 py-2.5 border-t border-border">
        <span className="text-xs font-medium">{label}</span>
        <span className={`text-[11px] font-mono ${textDark ? "text-muted-foreground" : "text-muted-foreground"}`}>
          {bg}
        </span>
      </div>
    </div>
  );
}

function RuleCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "do" | "dont";
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h4 className="text-sm font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span
              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                tone === "do" ? "bg-app" : "bg-muted-foreground/60"
              }`}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Lockup({
  app,
  weight,
  size,
}: {
  app: AppMeta;
  weight: string;
  size: "md" | "lg" | "xl";
}) {
  const sizes = { md: "text-xl", lg: "text-2xl", xl: "text-3xl" };
  return (
    <div className="flex items-center gap-2">
      <app.Icon className={size === "xl" ? "h-9 w-9 rounded-lg" : size === "lg" ? "h-7 w-7 rounded-md" : "h-6 w-6 rounded-md"} />
      <span
        className={`${sizes[size]} tracking-tight`}
        style={{ color: app.primaryHex, fontWeight: weight as never }}
      >
        {app.name}
      </span>
    </div>
  );
}

function UiPreview({ app, mode }: { app: AppMeta; mode: "light" | "dark" }) {
  const isDark = mode === "dark";
  const surface = isDark ? "#0F172A" : "#FFFFFF";
  const text = isDark ? "#E2E8F0" : "#0F172A";
  const subtle = isDark ? "#1E293B" : "#F1F5F9";
  const border = isDark ? "#1E293B" : "#E2E8F0";

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/40">
        <span className="text-xs font-medium">{mode === "light" ? "Light mode" : "Dark mode"}</span>
        <span className="text-[10px] font-mono text-muted-foreground">{app.name} UI</span>
      </div>
      <div className="p-5" style={{ background: surface, color: text }}>
        <div className="flex items-center gap-2 mb-4">
          <app.Icon className="h-7 w-7 rounded-md" />
          <span className="text-sm font-semibold">{app.name}</span>
          <span className="ml-auto rounded-md px-2 py-0.5 text-[10px]" style={{ background: subtle }}>
            v2.4
          </span>
        </div>
        <div className="rounded-lg p-3 mb-3" style={{ background: subtle, border: `1px solid ${border}` }}>
          <p className="text-[12px] opacity-80">Welcome back</p>
          <p className="text-sm font-medium mt-1">Your team is moving fast — 12 updates today.</p>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-md px-3 py-1.5 text-xs font-medium text-white"
            style={{ background: app.primaryHex }}
          >
            Primary action
          </button>
          <button
            className="rounded-md px-3 py-1.5 text-xs font-medium"
            style={{ background: subtle, color: text }}
          >
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
}

function PlatformTile({
  icon,
  name,
  detail,
  app,
}: {
  icon: React.ReactNode;
  name: string;
  detail: string;
  app: AppMeta;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-3">
        {icon}
        <span>{name}</span>
      </div>
      <app.Icon className="h-12 w-12 rounded-xl mb-3" />
      <p className="text-[11px] text-muted-foreground">{detail}</p>
    </div>
  );
}
