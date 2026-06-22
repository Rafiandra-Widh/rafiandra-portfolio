"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navLinkStyle = (active: boolean): React.CSSProperties => ({
  background: "none",
  border: "none",
  color: active ? "var(--text)" : "var(--muted)",
  fontFamily: "inherit",
  fontSize: 14,
  fontWeight: 500,
  padding: "8px 14px",
  cursor: "pointer",
  borderRadius: 100,
  textDecoration: "none",
  display: "inline-block",
});

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      data-cursor="1"
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        marginLeft: 8, width: 52, height: 28, borderRadius: 100, border: "1px solid var(--line)",
        background: "var(--surface)", display: "flex", alignItems: "center", padding: 3, cursor: "pointer",
        transition: "background .4s ease, border-color .4s ease",
      }}
    >
      <span
        style={{
          width: 22, height: 22, borderRadius: "50%", background: "var(--text)", display: "flex",
          alignItems: "center", justifyContent: "center", position: "relative",
          transition: "transform .42s cubic-bezier(.34,1.56,.64,1), background .4s ease",
          transform: `translateX(${dark ? "24px" : "0px"})`,
        }}
      >
        <svg
          width="13" height="13" viewBox="0 0 24 24" aria-hidden="true"
          style={{
            position: "absolute", transition: "opacity .3s ease, transform .42s cubic-bezier(.34,1.56,.64,1)",
            opacity: dark ? 1 : 0, transform: `rotate(${dark ? "0deg" : "-60deg"})`,
          }}
        >
          <path d="M21 12.9A8.2 8.2 0 1 1 11.1 3.2 6.4 6.4 0 0 0 21 12.9Z" fill="var(--surface)" />
        </svg>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--surface)" strokeWidth={2}
          strokeLinecap="round" aria-hidden="true"
          style={{
            position: "absolute", transition: "opacity .3s ease, transform .42s cubic-bezier(.34,1.56,.64,1)",
            opacity: dark ? 0 : 1, transform: `rotate(${dark ? "60deg" : "0deg"})`,
          }}
        >
          <circle cx="12" cy="12" r="4" fill="var(--surface)" stroke="none" />
          <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.4 5.6l-1.4 1.4M7 17l-1.4 1.4M18.4 18.4 17 17M7 7 5.6 5.6" />
        </svg>
      </span>
    </button>
  );
}

const bottomBtn = (active: boolean): React.CSSProperties => ({
  flex: 1,
  background: active ? "var(--bg)" : "transparent",
  border: "none",
  color: active ? "var(--text)" : "var(--muted)",
  fontFamily: "inherit",
  cursor: "pointer",
  borderRadius: 100,
  padding: "10px 4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  textDecoration: "none",
  transition: "background .2s ease, color .2s ease",
});

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isWork = pathname === "/work" || pathname.startsWith("/work/");
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, height: 68, zIndex: 900, display: "flex",
          alignItems: "center", justifyContent: "space-between", padding: "0 clamp(20px,5vw,64px)",
          backdropFilter: "saturate(1.4) blur(14px)",
          background: "color-mix(in srgb, var(--bg) 78%, transparent)", borderBottom: "1px solid var(--line)",
        }}
      >
        <Link
          href="/" data-cursor="1" aria-label="RafiandraW — home" className="logo-btn"
          style={{
            background: "none", border: "none", color: "var(--text)", display: "flex", alignItems: "center",
            fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-.03em",
            whiteSpace: "nowrap", cursor: "pointer", textDecoration: "none",
          }}
        >
          <span className="logo-full">Rafiandra<span style={{ color: "var(--accent-text)" }}>W</span></span>
          <span className="logo-mini" style={{ display: "none" }}>R<span style={{ color: "var(--accent-text)" }}>W</span></span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Link href="/work" data-cursor="1" className="navlink" style={navLinkStyle(isWork)}>Work</Link>
            <Link href="/about" data-cursor="1" className="navlink" style={navLinkStyle(isAbout)}>About</Link>
            <Link href="/contact" data-cursor="1" className="navlink" style={navLinkStyle(isContact)}>Contact</Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <div
        className="nav-bottom"
        style={{
          position: "fixed", bottom: "calc(16px + env(safe-area-inset-bottom))", left: 16, right: 16, zIndex: 899,
          display: "none", alignItems: "stretch", justifyContent: "space-around", gap: 2, padding: "7px 8px",
          borderRadius: 100, backdropFilter: "saturate(1.4) blur(16px)",
          background: "color-mix(in srgb, var(--surface) 86%, transparent)", border: "1px solid var(--line)",
          boxShadow: "0 18px 40px -16px rgba(0,0,0,.45)",
        }}
      >
        <Link href="/" data-cursor="1" style={bottomBtn(isHome)}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V20h14V9.5" /></svg>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".01em" }}>Home</span>
        </Link>
        <Link href="/work" data-cursor="1" style={bottomBtn(isWork)}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".01em" }}>Work</span>
        </Link>
        <Link href="/about" data-cursor="1" style={bottomBtn(isAbout)}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" /></svg>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".01em" }}>About</span>
        </Link>
        <Link href="/contact" data-cursor="1" style={bottomBtn(isContact)}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".01em" }}>Contact</span>
        </Link>
      </div>
    </>
  );
}
