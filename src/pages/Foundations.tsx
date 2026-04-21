import { useEffect } from "react";
import { PageHeader, PageBody, Section, Placeholder } from "@/components/content/Page";
import { ColorSwatch } from "@/components/content/ColorSwatch";
import { GoPaddiMark, PodIcon, BooksIcon, WorkforceIcon, SlidesIcon } from "@/components/icons/AppIcons";
import {
  Cube,
  TextAa,
  GridFour,
  Image as PhImage,
  MagnifyingGlass,
  Heart,
  Gear,
} from "@phosphor-icons/react";

const NEUTRALS = [
  { hex: "#FFFFFF" },
  { hex: "#F5F7FA" },
  { hex: "#CACFD8" },
  { hex: "#99A0AE" },
  { hex: "#525866" },
  { hex: "#181B25" },
];

const TYPE_SCALE = [
  { name: "Display", size: "48 / 56", weight: 600, sample: "Gopaddi for teams" },
  { name: "Heading 1", size: "36 / 44", weight: 600, sample: "Build with confidence" },
  { name: "Heading 2", size: "28 / 36", weight: 600, sample: "One language, six tools" },
  { name: "Heading 3", size: "20 / 28", weight: 600, sample: "Components & patterns" },
  { name: "Body", size: "16 / 24", weight: 400, sample: "Satoshi is the suite's voice on screen — neutral, legible, and quietly confident at any scale." },
  { name: "Small", size: "13 / 20", weight: 400, sample: "Use small text sparingly for metadata and helper labels." },
];

const SPACING = [2, 4, 8, 12, 16, 24, 32, 48, 64, 96];

const Foundations = () => {
  useEffect(() => {
    document.title = "Brand Foundations — Gopaddi";
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Brand Foundations"
        title="The shared language of the suite."
        description="Every app in the Gopaddi suite is built on the same foundation: Satoshi typography, an 8-point spacing grid, a neutral palette, and a strict iconography system."
      />
      <PageBody>
        <Section title="Logo usage" description="The Gopaddi parent mark anchors the suite.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-card p-8 flex items-center justify-center h-44">
              <GoPaddiMark className="h-16 w-16" />
            </div>
            <div className="rounded-xl border border-border p-8 flex items-center justify-center h-44 bg-[hsl(222_24%_7%)]">
              <GoPaddiMark className="h-16 w-16" />
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-2 text-foreground">
                <ImageIcon className="h-4 w-4" /> <span className="font-medium">Clear space</span>
              </div>
              <p>
                Maintain a minimum clear space of half the mark's height around the logo. Never compose the mark
                inside another container or apply outer shadows.
              </p>
              <div className="mt-3"><Placeholder>PLACEHOLDER FILE</Placeholder> Final wordmark in production.</div>
            </div>
          </div>
        </Section>

        <Section title="Typography" description="Satoshi is the only typeface used across the suite. Pair weights 400, 500, 600, and 700.">
          <div className="rounded-xl border border-border bg-card divide-y divide-border">
            {TYPE_SCALE.map((t) => (
              <div key={t.name} className="grid grid-cols-12 gap-4 px-5 py-5 items-baseline">
                <div className="col-span-3 sm:col-span-2">
                  <div className="text-xs font-medium">{t.name}</div>
                  <div className="text-[11px] font-mono text-muted-foreground mt-0.5">{t.size}</div>
                </div>
                <div className="col-span-9 sm:col-span-10">
                  <p
                    className="tracking-tight"
                    style={{
                      fontSize: parseInt(t.size) + "px",
                      lineHeight: parseInt(t.size.split("/")[1]) + "px",
                      fontWeight: t.weight,
                    }}
                  >
                    {t.sample}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Type className="h-3.5 w-3.5" /> Always set Satoshi with OpenType ss02 and ss03 enabled.
          </div>
        </Section>

        <Section title="Color system" description="A grounded neutral ramp keeps the focus on each app's brand color.">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {NEUTRALS.map((n) => (
              <ColorSwatch key={n.hex} name={n.name} hex={n.hex} />
            ))}
          </div>
        </Section>

        <Section title="Spacing scale" description="Built on a 4px base. Stick to the scale — do not interpolate between steps.">
          <div className="rounded-xl border border-border bg-card p-6 space-y-3">
            {SPACING.map((s) => (
              <div key={s} className="flex items-center gap-4">
                <span className="w-12 text-xs font-mono text-muted-foreground">{s}px</span>
                <div className="h-4 rounded bg-app/80" style={{ width: s * 4 }} />
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <Grid3x3 className="h-3.5 w-3.5" /> Component padding always lands on a multiple of 4.
          </div>
        </Section>

        <Section title="Iconography" description="App icons live in a 14px-radius squircle on a 64px grid. Utility icons (Lucide) sit on a 24px grid with 1.5px strokes.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-sm font-medium mb-1">App icons</div>
              <p className="text-sm text-muted-foreground mb-4">Filled, brand-colored, container included.</p>
              <div className="flex items-center justify-center h-28 rounded-lg bg-muted/40">
                <GoPaddiMark className="h-16 w-16" />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-sm font-medium mb-1">UI icons</div>
              <p className="text-sm text-muted-foreground mb-4">Outline, currentColor, no container.</p>
              <div className="flex items-center justify-center gap-6 h-28 rounded-lg bg-muted/40 text-foreground">
                <Box className="h-6 w-6" />
                <Type className="h-6 w-6" />
                <Grid3x3 className="h-6 w-6" />
                <ImageIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
        </Section>
      </PageBody>
    </>
  );
};

export default Foundations;
