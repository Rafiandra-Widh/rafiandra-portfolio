"use client";

import Link from "next/link";
import { projects, clients, capabilities } from "@/lib/data";

function smoothTo(id: string) {
  try {
    const el = document.getElementById(id);
    if (!el) return;
    const se = document.scrollingElement || document.documentElement;
    const start = se.scrollTop;
    const target = Math.max(0, el.getBoundingClientRect().top + start - 80);
    const dist = target - start;
    if (Math.abs(dist) < 2) return;
    const dur = Math.min(900, Math.max(380, Math.abs(dist) * 0.6));
    const t0 = performance.now();
    const step = (now: number) => {
      let t = (now - t0) / dur;
      if (t > 1) t = 1;
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      se.scrollTop = start + dist * e;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  } catch {}
}

const chip: React.CSSProperties = {
  fontSize: "clamp(13px,1.15vw,15px)", fontWeight: 500,
  color: "color-mix(in srgb, var(--band-text) 80%, transparent)",
};
const chipSep: React.CSSProperties = {
  fontSize: 13, lineHeight: 1, color: "color-mix(in srgb, var(--band-text) 34%, transparent)",
};

export default function HomePage() {
  return (
    <section style={{ flex: 1 }}>
      {/* HERO BAND */}
      <div
        style={{
          background: "var(--band)", color: "var(--band-text)", padding: "clamp(28px,4vw,44px) clamp(20px,5vw,64px)",
          minHeight: "calc(100dvh - 68px)", display: "flex", flexDirection: "column",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%", flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            data-reveal
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px 20px",
              fontSize: 13, color: "color-mix(in srgb, var(--band-text) 55%, transparent)",
            }}
          >
            <span>Rafiandra Widhiansyah</span>
            <span>Product Designer · Jakarta → Remote</span>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "clamp(28px,4vw,52px)", padding: "clamp(28px,4vw,48px) 0" }}>
            <h1
              data-reveal data-delay="60"
              style={{ fontSize: "clamp(38px,7.6vw,124px)", lineHeight: 0.94, letterSpacing: "-.04em", fontWeight: 800, textTransform: "uppercase" }}
            >
              Design the<br />
              <span style={{ fontFamily: "'Newsreader'", fontStyle: "italic", fontWeight: 500, textTransform: "none", letterSpacing: "-.02em", color: "var(--accent-text)" }}>
                possibility
              </span>{" "}
              of impact.
            </h1>
            <div data-reveal data-delay="140" style={{ display: "flex", flexWrap: "wrap", gap: "28px 36px", alignItems: "flex-end", justifyContent: "space-between" }}>
              <p style={{ fontSize: "clamp(16px,1.6vw,20px)", lineHeight: 1.55, maxWidth: "42ch", color: "color-mix(in srgb, var(--band-text) 80%, transparent)" }}>
                Seven years turning complex systems into products people love — and into growth the business can measure. I don&rsquo;t just design screens; I design outcomes.
              </p>
              <button
                data-cursor="1" data-magnet onClick={() => smoothTo("v3-projects")} className="btn-accent"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 9, background: "var(--accent-grad)",
                  color: "var(--accent-ink)", border: "none", padding: "15px 28px", borderRadius: 100,
                  fontFamily: "inherit", fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap",
                }}
              >
                See the work <span style={{ display: "inline-block", animation: "bob 1.8s ease-in-out infinite" }}>↓</span>
              </button>
            </div>
          </div>
          <div
            data-reveal data-delay="200"
            style={{
              display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 12px", paddingTop: "clamp(20px,3vw,30px)",
              borderTop: "1px solid color-mix(in srgb, var(--band-text) 16%, transparent)",
            }}
          >
            <span style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "color-mix(in srgb, var(--band-text) 52%, transparent)", marginRight: 6 }}>
              What I do —
            </span>
            {capabilities.flatMap((c, i) =>
              i === 0
                ? [<span key={c} style={chip}>{c}</span>]
                : [
                    <span key={c + "-sep"} aria-hidden style={chipSep}>·</span>,
                    <span key={c} style={chip}>{c}</span>,
                  ]
            )}
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div style={{ padding: "clamp(48px,7vw,90px) 0 clamp(8px,2vw,20px)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto 26px", padding: "0 clamp(20px,5vw,64px)", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent-grad)", display: "inline-block" }} />
          <span style={{ fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>Trusted by teams at</span>
        </div>
        <div
          style={{
            overflow: "hidden", whiteSpace: "nowrap",
            WebkitMaskImage: "linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)",
            maskImage: "linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)",
          }}
        >
          <div style={{ display: "inline-flex", animation: "marquee 30s linear infinite", willChange: "transform" }}>
            {[0, 1].map((copy) => (
              <span key={copy} style={{ display: "inline-flex", alignItems: "center", gap: "clamp(40px,5vw,72px)", paddingRight: "clamp(40px,5vw,72px)" }}>
                {clients.map((c, i) => (
                  <span
                    key={`${copy}-${i}`} className="client-logo"
                    style={{
                      width: c.w,
                      WebkitMaskImage: `url('${c.src}')`,
                      maskImage: `url('${c.src}')`,
                    }}
                  />
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SELECTED WORK ROWS */}
      <div id="v3-projects" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(20px,5vw,64px) clamp(56px,9vw,120px)" }}>
        {projects.map((p) => (
          <Link
            key={p.slug} href={`/work/${p.slug}`} data-cursor="1" data-preview={p.title} data-grad={p.cover}
            className="proj-row"
            style={{
              width: "100%", textAlign: "left", background: "none", border: "none", borderTop: "1px solid var(--line)",
              padding: "clamp(24px,3.4vw,40px) 4px", cursor: "pointer", fontFamily: "inherit", color: "var(--text)",
              display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "clamp(16px,3vw,40px)", alignItems: "center",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "clamp(30px,5vw,64px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1, color: "var(--faint)", fontVariantNumeric: "tabular-nums" }}>
              {p.num}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: "clamp(24px,3.6vw,46px)", fontWeight: 700, letterSpacing: "-.025em", lineHeight: 1.02, textTransform: "uppercase" }}>
                {p.title}
              </span>
              <span style={{ fontSize: 14, color: "var(--muted)" }}>{p.tag}</span>
            </span>
            <span className="proj-arrow" style={{ display: "flex", alignItems: "center", gap: 18, color: "var(--faint)" }}>
              <span style={{ fontSize: 13, fontVariantNumeric: "tabular-nums" }}>{p.year}</span>
              <span style={{ fontSize: "clamp(18px,2vw,26px)" }}>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
