import { useEffect, useState } from "react";
import { Download, FileType, Package, Loader2 } from "lucide-react";
import { PageHeader, PageBody, Section, Placeholder } from "@/components/content/Page";
import { APPS, type AppMeta } from "@/data/apps";
import { downloadZip, slugify } from "@/lib/download";

function collectAppFiles(app: AppMeta) {
  const files: { name: string; url: string }[] = [];
  if (app.logoSrc) {
    files.push({ name: `${app.key}/${app.key}-logo.svg`, url: app.logoSrc });
  }
  (app.variants ?? []).forEach((v) => {
    files.push({
      name: `${app.key}/${app.key}-${slugify(v.name)}.svg`,
      url: v.src,
    });
  });
  return files;
}

const Downloads = () => {
  useEffect(() => {
    document.title = "Downloads — Gopaddi";
  }, []);

  const [brandKitBusy, setBrandKitBusy] = useState(false);
  const [busyKey, setBusyKey] = useState<string | null>(null);

  const handleBrandKit = async () => {
    if (brandKitBusy) return;
    setBrandKitBusy(true);
    try {
      const files = APPS.flatMap(collectAppFiles);
      await downloadZip(files, "gopaddi-brand-kit.zip");
    } finally {
      setBrandKitBusy(false);
    }
  };

  const handleApp = async (app: AppMeta) => {
    if (busyKey) return;
    setBusyKey(app.key);
    try {
      const files = collectAppFiles(app).map((f) => ({
        ...f,
        // Flatten inside per-app ZIP (no nested folder needed)
        name: f.name.replace(`${app.key}/`, ""),
      }));
      await downloadZip(files, `${app.key}-logo-pack.zip`);
    } finally {
      setBusyKey(null);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Assets"
        title="Downloads."
        description="Grab the Gopaddi parent logos, per-app icons, and every approved logo variant. Everything ships as SVG so it scales cleanly from favicon to billboard."
      />
      <PageBody>
        <Section title="Brand kit" description="The complete Gopaddi parent brand kit.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DownloadCard
              icon={<Package className="h-4 w-4" />}
              title="Brand kit (.zip)"
              meta="All app logos + variants"
              onClick={handleBrandKit}
              busy={brandKitBusy}
            />
            <DownloadCard
              icon={<FileType className="h-4 w-4" />}
              title="Satoshi font family"
              meta="Variable .woff2"
              note="PLACEHOLDER FILE"
            />
            <DownloadCard
              icon={<FileType className="h-4 w-4" />}
              title="Color tokens (.json)"
              meta="Style Dictionary format"
              note="PLACEHOLDER FILE"
            />
          </div>
        </Section>

        <Section
          title="App icons"
          description="Each pack bundles the master logo and all approved variants (plain, isolated, light, glass, grayscale black/white) as SVG."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {APPS.map((app) => {
              const variantCount = (app.variants?.length ?? 0) + (app.logoSrc ? 1 : 0);
              const isBusy = busyKey === app.key;
              return (
                <div
                  key={app.key}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <app.Icon className="h-12 w-12 rounded-xl shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold">{app.name}</h4>
                      {app.placeholderColor && <Placeholder>PLACEHOLDER COLOR</Placeholder>}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {variantCount > 0
                        ? `${variantCount} SVG file${variantCount === 1 ? "" : "s"} · .zip`
                        : "Logo pack coming soon"}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium hover:bg-muted transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    onClick={() => handleApp(app)}
                    disabled={isBusy || variantCount === 0}
                    aria-label={`Download ${app.name} icons`}
                  >
                    {isBusy ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <Download className="h-3.5 w-3.5" />
                    )}
                    {isBusy ? "Preparing…" : "Download"}
                  </button>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Each ZIP is generated in your browser — no upload, no account required.
          </p>
        </Section>
      </PageBody>
    </>
  );
};

function DownloadCard({
  icon,
  title,
  meta,
  note,
  onClick,
  busy,
}: {
  icon: React.ReactNode;
  title: string;
  meta: string;
  note?: string;
  onClick?: () => void;
  busy?: boolean;
}) {
  const disabled = !onClick || busy;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="text-left group rounded-xl border border-border bg-card p-5 hover:border-app/60 transition-colors disabled:cursor-not-allowed"
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
        {icon}
        <span>{title}</span>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-sm font-medium">{busy ? "Preparing…" : meta}</p>
        {busy ? (
          <Loader2 className="h-4 w-4 animate-spin text-app" />
        ) : (
          <Download className="h-4 w-4 text-muted-foreground group-hover:text-app transition-colors" />
        )}
      </div>
      {note && (
        <div className="mt-3">
          <Placeholder>{note}</Placeholder>
        </div>
      )}
    </button>
  );
}

export default Downloads;
