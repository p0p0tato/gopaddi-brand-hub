import { useEffect } from "react";
import { Download, FileType, Package } from "lucide-react";
import { PageHeader, PageBody, Section, Placeholder } from "@/components/content/Page";
import { APPS } from "@/data/apps";

const Downloads = () => {
  useEffect(() => {
    document.title = "Downloads — Gopaddi";
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Assets"
        title="Downloads."
        description="Logos, icons, and font files. All file links below are placeholders pending the official asset drop."
      />
      <PageBody>
        <Section title="Brand kit" description="The complete Gopaddi parent brand kit.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DownloadCard
              icon={<Package className="h-4 w-4" />}
              title="Brand kit (.zip)"
              meta="Logos, lockups, color tokens"
              note="PLACEHOLDER FILE"
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

        <Section title="App icons" description="Download per-app icon sets in SVG, PNG (32–1024), and platform formats.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {APPS.map((app) => (
              <div key={app.key} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <app.Icon className="h-12 w-12 rounded-xl shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold">{app.name}</h4>
                    {app.placeholderColor && <Placeholder>PLACEHOLDER COLOR</Placeholder>}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">SVG · PNG · ICO · ICNS</p>
                </div>
                <button
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium hover:bg-muted transition-colors"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`Download ${app.name} icons`}
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </button>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            <Placeholder>PLACEHOLDER FILES</Placeholder> Hook each download to the asset CDN before launch.
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
}: {
  icon: React.ReactNode;
  title: string;
  meta: string;
  note?: string;
}) {
  return (
    <button
      onClick={(e) => e.preventDefault()}
      className="text-left group rounded-xl border border-border bg-card p-5 hover:border-app/60 transition-colors"
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">{icon}<span>{title}</span></div>
      <div className="flex items-end justify-between">
        <p className="text-sm font-medium">{meta}</p>
        <Download className="h-4 w-4 text-muted-foreground group-hover:text-app transition-colors" />
      </div>
      {note && (
        <div className="mt-3"><Placeholder>{note}</Placeholder></div>
      )}
    </button>
  );
}

export default Downloads;
