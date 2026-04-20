import { useEffect } from "react";
import { PageHeader, PageBody, Section } from "@/components/content/Page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { APPS } from "@/data/apps";

const Components = () => {
  useEffect(() => {
    document.title = "UI Components — GoPaddi";
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="System"
        title="Shared UI components."
        description="One component library, six apps. Each component re-tints to the host app's primary color while preserving structure, motion, and accessibility."
      />
      <PageBody>
        <Section title="Buttons" description="Three variants × three sizes. The primary button always uses the host app's brand color.">
          <Preview>
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </Preview>
        </Section>

        <Section title="Inputs" description="40px height on default, 36px on dense forms. Always pair with a visible label.">
          <Preview>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <Input placeholder="hello@gopaddi.com" />
              <Input placeholder="Disabled" disabled />
            </div>
          </Preview>
        </Section>

        <Section title="Cards" description="The base surface for content blocks across the suite.">
          <Preview>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active workspace</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">12 members, 3 projects in flight this week.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">42.1 GB of 100 GB used.</p>
                </CardContent>
              </Card>
            </div>
          </Preview>
        </Section>

        <Section title="Badges" description="Per-app colored status pills.">
          <Preview>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              {APPS.map((app) => (
                <span
                  key={app.key}
                  className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium text-white"
                  style={{ background: app.primaryHex }}
                >
                  <app.Icon className="h-3 w-3 rounded-sm" />
                  {app.name}
                </span>
              ))}
            </div>
          </Preview>
        </Section>

        <Section title="Modals" description="Use sparingly — modals are for confirmation and focused tasks only.">
          <Preview>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite a teammate</DialogTitle>
                  <DialogDescription>
                    They'll get access to every app in the suite linked to this workspace.
                  </DialogDescription>
                </DialogHeader>
                <Input placeholder="name@company.com" className="mt-2" />
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Send invite</Button>
                </div>
              </DialogContent>
            </Dialog>
          </Preview>
        </Section>
      </PageBody>
    </>
  );
};

function Preview({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border border-border bg-card p-6">{children}</div>;
}

export default Components;
