import { Moon, Sun, Search, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme/ThemeProvider";
import { GoPaddiMark } from "@/components/icons/AppIcons";
import { Button } from "@/components/ui/button";

interface TopNavProps {
  onMenuToggle?: () => void;
}

export function TopNav({ onMenuToggle }: TopNavProps) {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4 md:px-6">
        <button
          onClick={onMenuToggle}
          className="lg:hidden -ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle nav</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <Link to="/" className="flex items-center gap-2.5 group">
          <GoPaddiMark className="h-7 w-7 transition-transform group-hover:scale-105" />
          <div className="flex items-baseline gap-2">
            <span className="text-[15px] font-semibold tracking-tight">Gopaddi</span>
            <span className="hidden sm:inline text-xs text-muted-foreground">Brand Guidelines</span>
          </div>
          <span className="ml-1 hidden md:inline rounded-full border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            v1.0
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 ml-6 text-sm">
          <NavItem to="/">Overview</NavItem>
          <NavItem to="/foundations">Foundations</NavItem>
          <NavItem to="/components">Components</NavItem>
          <NavItem to="/accessibility">Accessibility</NavItem>
          <NavItem to="/downloads">Downloads</NavItem>
        </nav>

        <div className="flex-1" />

        <button
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-border bg-muted/40 px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-muted transition-colors"
          aria-label="Search"
        >
          <Search className="h-3.5 w-3.5" />
          <span>Search docs</span>
          <kbd className="ml-2 rounded border border-border bg-background px-1.5 py-px text-[10px] font-mono">⌘K</kbd>
        </button>

        <Button variant="ghost" size="icon" aria-label="GitHub" className="hidden sm:inline-flex">
          <Github className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggle}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
    >
      {children}
    </Link>
  );
}
