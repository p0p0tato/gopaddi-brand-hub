import { NavLink } from "@/components/NavLink";
import { CORE_APPS, SOLUTIONS } from "@/data/apps";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Home,
  Component,
  Accessibility,
  Download,
  X,
  FileWarning,
} from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          "fixed lg:sticky top-14 z-40 lg:z-0 h-[calc(100vh-3.5rem)] w-72 shrink-0 border-r border-sidebar-border bg-sidebar transition-transform duration-200",
          "overflow-y-auto",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 lg:hidden">
          <span className="text-sm font-medium">Navigation</span>
          <button onClick={onClose} aria-label="Close" className="p-1 rounded-md hover:bg-muted">
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="px-3 py-4 space-y-6">
          <Section title="Get started">
            <Item to="/" icon={<Home className="h-3.5 w-3.5" />} label="Overview" exact onNavigate={onClose} />
            <Item
              to="/foundations"
              icon={<BookOpen className="h-3.5 w-3.5" />}
              label="Brand Foundations"
              onNavigate={onClose}
            />
          </Section>

          <Section title="Apps">
            {CORE_APPS.map((app) => (
              <Item
                key={app.key}
                to={app.href}
                label={app.name}
                accent={app.token}
                iconNode={<app.Icon className="h-5 w-5 rounded-[5px]" />}
                onNavigate={onClose}
              />
            ))}
          </Section>

          <Section title="Solutions">
            {SOLUTIONS.map((app) => (
              <Item
                key={app.key}
                to={app.href}
                label={app.name}
                accent={app.token}
                iconNode={<app.Icon className="h-5 w-5 rounded-[5px]" />}
                onNavigate={onClose}
              />
            ))}
          </Section>

          <Section title="System">
            <Item
              to="/components"
              icon={<Component className="h-3.5 w-3.5" />}
              label="UI Components"
              onNavigate={onClose}
            />
            <Item
              to="/accessibility"
              icon={<Accessibility className="h-3.5 w-3.5" />}
              label="Accessibility"
              onNavigate={onClose}
            />
            <Item
              to="/downloads"
              icon={<Download className="h-3.5 w-3.5" />}
              label="Downloads"
              onNavigate={onClose}
            />
            <Item
              to="/disclaimer"
              icon={<FileWarning className="h-3.5 w-3.5" />}
              label="Disclaimer"
              onNavigate={onClose}
            />
          </Section>

          <div className="px-3 pt-6 mt-2 border-t border-sidebar-border">
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Last updated <span className="text-foreground/80">Apr 20, 2026</span>
              <br />
              Built and maintained by the Gopaddi Brand team.
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h4>
      <ul className="space-y-0.5">{children}</ul>
    </div>
  );
}

interface ItemProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
  iconNode?: React.ReactNode;
  exact?: boolean;
  accent?: string;
  onNavigate?: () => void;
}

function Item({ to, label, icon, iconNode, exact, accent, onNavigate }: ItemProps) {
  return (
    <li>
      <NavLink
        to={to}
        end={exact}
        onClick={onNavigate}
        className="group flex items-center gap-2.5 rounded-md px-3 py-1.5 text-[13px] text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        activeClassName="bg-sidebar-accent text-foreground font-medium"
      >
        {iconNode ? (
          iconNode
        ) : (
          <span
            className="inline-flex h-5 w-5 items-center justify-center rounded-[5px] bg-muted text-muted-foreground group-hover:text-foreground"
            style={accent ? { backgroundColor: `hsl(var(--${accent}) / 0.12)`, color: `hsl(var(--${accent}))` } : undefined}
          >
            {icon}
          </span>
        )}
        <span>{label}</span>
      </NavLink>
    </li>
  );
}
