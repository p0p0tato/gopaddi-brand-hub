import { useState, type ReactNode } from "react";
import { TopNav } from "./TopNav";
import { Sidebar } from "./Sidebar";
import { useLocation } from "react-router-dom";

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav onMenuToggle={() => setOpen((v) => !v)} />
      <div className="flex w-full">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <main key={location.pathname} className="flex-1 min-w-0 page-enter">
          {children}
        </main>
      </div>
    </div>
  );
}
