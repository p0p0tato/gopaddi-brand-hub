import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { hexToHslLabel, rgbLabel } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface SwatchProps {
  name: string;
  hex: string;
  role?: string;
  textOnLight?: boolean;
}

export function ColorSwatch({ name, hex, role }: SwatchProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string, label: string) => {
    navigator.clipboard.writeText(val).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 1200);
    });
  };

  const useDarkText = isLight(hex);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-sm">
      <div
        className={cn(
          "h-28 flex items-end justify-between px-4 py-3",
          useDarkText ? "text-foreground/80" : "text-white/85"
        )}
        style={{ backgroundColor: hex }}
      >
        <div className="text-xs font-medium">{name}</div>
        {role && <div className="text-[10px] uppercase tracking-wider opacity-80">{role}</div>}
      </div>
      <dl className="divide-y divide-border text-[12px]">
        <Row label="HEX" value={hex.toUpperCase()} onCopy={(v) => copy(v, "hex")} active={copied === "hex"} />
        <Row label="RGB" value={rgbLabel(hex)} onCopy={(v) => copy(v, "rgb")} active={copied === "rgb"} />
        <Row label="HSL" value={hexToHslLabel(hex)} onCopy={(v) => copy(v, "hsl")} active={copied === "hsl"} />
      </dl>
    </div>
  );
}

function Row({
  label,
  value,
  onCopy,
  active,
}: {
  label: string;
  value: string;
  onCopy: (v: string) => void;
  active: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <dt className="text-muted-foreground text-[11px] font-medium uppercase tracking-wider">{label}</dt>
      <dd className="flex items-center gap-2 font-mono text-[11.5px]">
        <span>{value}</span>
        <button
          onClick={() => onCopy(value)}
          aria-label={`Copy ${label}`}
          className="text-muted-foreground hover:text-foreground"
        >
          {active ? <Check className="h-3 w-3 text-app" /> : <Copy className="h-3 w-3" />}
        </button>
      </dd>
    </div>
  );
}

function isLight(hex: string): boolean {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  // Perceived luminance
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}
