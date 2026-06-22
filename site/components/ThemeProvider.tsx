"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Ctx = { theme: Theme; toggle: () => void };

const ThemeContext = createContext<Ctx>({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Default to system preference on first load (persisted only in memory).
  useEffect(() => {
    let sys: Theme = "light";
    try {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) sys = "dark";
    } catch {}
    apply(sys);
    // Native-cursor hiding is handled in <Effects/>, tied to the same desktop
    // breakpoint as the custom cursor so touch/tablet keeps its normal cursor.
  }, []);

  const apply = useCallback((t: Theme) => {
    try {
      document.documentElement.dataset.theme = t;
    } catch {}
    setTheme(t);
  }, []);

  const toggle = useCallback(() => {
    apply(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  }, [apply]);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
