import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { hexToHslString } from "@/lib/utils";
import { APP_MAP, type AppKey } from "@/data/apps";

interface AppCtxValue {
  appKey: AppKey | null;
}

const AppCtx = createContext<AppCtxValue>({ appKey: null });

/**
 * Sets the --app CSS var to the given app's primary color so accents
 * across the page (links, focus rings, buttons) tint per-app.
 */
export function AppAccentProvider({
  appKey,
  children,
}: {
  appKey: AppKey | null;
  children: ReactNode;
}) {
  useEffect(() => {
    const root = document.documentElement;
    if (appKey) {
      const meta = APP_MAP[appKey];
      root.style.setProperty("--app", hexToHslString(meta.primaryHex));
    } else {
      // Default brand accent (Pod indigo)
      root.style.setProperty("--app", hexToHslString("#4F6EF7"));
    }
  }, [appKey]);

  const value = useMemo(() => ({ appKey }), [appKey]);
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useAppAccent() {
  return useContext(AppCtx);
}
