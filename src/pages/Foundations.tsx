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
        <Section title="Logo usage" description="The Gopaddi parent mark anchors the suite — sub-app marks follow the same clear-space rule.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-card p-8 flex items-center justify-center h-44">
              <GoPaddiMark className="h-16 w-16" />
            </div>
            <div className="rounded-xl border border-border p-8 flex items-center justify-center h-44 bg-[hsl(222_24%_7%)]">
              <GoPaddiMark className="h-16 w-16" />
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-2 text-foreground">
                <PhImage className="h-4 w-4" weight="regular" /> <span className="font-medium">Clear space</span>
              </div>
              <p>
                Maintain a minimum clear space equal to half the mark's height around every Gopaddi or sub-app logo.
                Never compose a mark inside another container or apply outer shadows.
              </p>
              <div className="mt-4 grid grid-cols-4 gap-3 items-center">
                <PodIcon className="h-10 w-10" />
                <BooksIcon className="h-10 w-10" />
                <WorkforceIcon className="h-10 w-10" />
                <SlidesIcon className="h-10 w-10" />
              </div>
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
            <TextAa className="h-3.5 w-3.5" weight="regular" /> Always set Satoshi with OpenType ss02 and ss03 enabled.
          </div>
        </Section>

        <Section title="Color system" description="A grounded neutral ramp keeps the focus on each app's brand color.">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {NEUTRALS.map((n) => (
              <ColorSwatch key={n.hex} hex={n.hex} />
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
            <GridFour className="h-3.5 w-3.5" weight="regular" /> Component padding always lands on a multiple of 4.
          </div>
        </Section>

        <Section title="Iconography" description="App icons live in a 14px-radius squircle on a 64px grid. Utility icons use Phosphor Icons (regular, fill, and duotone variants depending on context) on a 24px grid.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-sm font-medium mb-1">App icons</div>
              <p className="text-sm text-muted-foreground mb-4">Filled, brand-colored, container included.</p>
              <div className="flex items-center justify-center h-28 rounded-lg bg-muted/40">
                <GoPaddiMark className="h-16 w-16" />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-sm font-medium mb-1">UI icons — Phosphor</div>
              <p className="text-sm text-muted-foreground mb-4">Regular for default UI, Fill for active/selected, Duotone for emphasis.</p>
              <div className="grid grid-cols-3 gap-4 h-28 rounded-lg bg-muted/40 text-foreground place-items-center px-4">
                <div className="flex flex-col items-center gap-1">
                  <MagnifyingGlass className="h-6 w-6" weight="regular" />
                  <span className="text-[10px] font-mono text-muted-foreground">regular</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Heart className="h-6 w-6 text-app" weight="fill" />
                  <span className="text-[10px] font-mono text-muted-foreground">fill</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Gear className="h-6 w-6 text-app" weight="duotone" />
                  <span className="text-[10px] font-mono text-muted-foreground">duotone</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </PageBody>
    </>
  );
};

export default Foundations;
