import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHeader, PageBody, Section, Placeholder } from "@/components/content/Page";
import { APPS } from "@/data/apps";

const Index = () => {
  useEffect(() => {
    document.title = "Gopaddi Brand Guidelines — Suite Overview";
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Gopaddi Suite"
        title="Work better, beautifully connected."
        description="Gopaddi is a suite of focused apps and vertical solutions designed to feel like one product — so your team, your tools, and your customers stay in sync across every surface."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/foundations"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Brand foundations
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/downloads"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3.5 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            Download assets
          </Link>
        </div>
      </PageHeader>

      <PageBody>
        <Section title="Brand mission" description="What Gopaddi believes and ships toward.">
          <div className="rounded-xl border border-dashed border-border bg-muted/30 p-6">
            <div className="flex items-center gap-2 mb-2 text-app">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Mission statement</span>
            </div>
            <p className="text-base leading-relaxed text-foreground">
              [PLACEHOLDER] Gopaddi exists to give every team a calm, modern operating system — six focused apps that work better together than apart.
            <div className="mt-3"><Placeholder>PLACEHOLDER COPY - CAN BE REPLPACED</Placeholder></div> </p>
          </div>
        </Section>

        <Section title="The suite" description="Six apps, one design language. Click into any app for its full guidelines.">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {APPS.map((app) => (
              <Link
                key={app.key}
                to={app.href}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 hover:shadow-md transition-all"
              >
                <div
                  className="absolute inset-x-0 -top-px h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: app.primaryHex }}
                />
                <app.Icon className="h-12 w-12 rounded-xl mb-4" />
                <div className="flex items-baseline gap-2">
                  <h3 className="text-base font-semibold tracking-tight">{app.name}</h3>
                  {app.placeholderColor && (
                    <span className="text-[10px] text-muted-foreground">[PLACEHOLDER]</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{app.tagline}</p>
                <div
                  className="mt-4 flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: app.primaryHex }}
                >
                  View guidelines
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="Where to start" description="Pick the path that matches your role.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RoleCard role="Designers" href="/foundations" desc="Typography, spacing, iconography, and the rules behind every layout." />
            <RoleCard role="Developers" href="/components" desc="The shared component library and how each app applies it." />
            <RoleCard role="Marketers" href="/downloads" desc="Approved logos, icons, and font files ready to drop into campaigns." />
          </div>
        </Section>
      </PageBody>
    </>
  );
};

function RoleCard({ role, href, desc }: { role: string; href: string; desc: string }) {
  return (
    <Link
      to={href}
      className="group rounded-xl border border-border bg-card p-5 hover:border-app/60 transition-colors"
    >
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{role}</div>
      <p className="mt-2 text-sm text-foreground">{desc}</p>
      <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-app">
        Continue <ArrowRight className="h-3 w-3" />
      </div>
    </Link>
  );
}

export default Index;
