import Link from "next/link";
import { stats, roles, skills } from "@/lib/data";

export default function AboutPage() {
  return (
    <section style={{ flex: 1 }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(56px,9vw,110px) clamp(20px,5vw,64px) clamp(40px,6vw,80px)", width: "100%" }}>
        <div data-reveal style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%" }}>
          <div className="about-head" style={{ display: "flex", alignItems: "center", gap: "clamp(18px,3vw,28px)", width: "100%" }}>
            <div style={{ width: 84, height: 84, borderRadius: "50%", overflow: "hidden", flex: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/about-portrait.jpg" alt="Rafiandra Widhiansyah" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <h1 style={{ fontSize: "clamp(28px,3.8vw,48px)", lineHeight: 1.12, letterSpacing: "-.02em", fontWeight: 700, textWrap: "pretty" } as React.CSSProperties}>
                I&rsquo;m Rafiandra — I don&rsquo;t just design screens. I design products that move the numbers a business actually cares about.
              </h1>
            </div>
          </div>
          <p style={{ marginTop: "clamp(24px,4vw,36px)", fontSize: 16, lineHeight: 1.7, color: "var(--muted)", width: "100%", textWrap: "pretty" } as React.CSSProperties}>
            For seven years I&rsquo;ve worked at the seams between product, engineering and research — from fintech and EdTech to leading the Legion design system, and now designing national-scale government platforms at INA Digital (PERURI Group). I like ambiguous, high-stakes problems where good design quietly removes friction nobody thought could go away.
          </p>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: "var(--muted)", width: "100%", textWrap: "pretty" } as React.CSSProperties}>
            Along the way I&rsquo;ve taught UX at Hacktiv8 and Purwadhika, and these days I&rsquo;m deep in AI-assisted design workflows — cutting production time without cutting quality.
          </p>
        </div>

        <div data-reveal style={{ marginTop: "clamp(48px,7vw,96px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "clamp(20px,3vw,40px)" }}>
          {stats.map((st) => (
            <div key={st.v} style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 20, borderTop: "1px solid var(--line)" }}>
              <span style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-.02em" }}>{st.k}</span>
              <span style={{ fontSize: 14, color: "var(--muted)" }}>{st.v}</span>
            </div>
          ))}
        </div>

        <div data-reveal style={{ marginTop: "clamp(48px,7vw,96px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(32px,5vw,64px)" }}>
          <div>
            <h2 style={{ fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 22 }}>Experience</h2>
            {roles.map((r) => (
              <div key={r.role + r.org} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "16px 0", borderTop: "1px solid var(--line)" }}>
                <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>{r.role}</span>
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>{r.org}</span>
                </span>
                <span style={{ fontSize: 13, color: "var(--faint)", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>{r.when}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 style={{ fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 22 }}>Capabilities</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {skills.map((sk) => (
                <span key={sk} style={{ fontSize: 14, color: "var(--text)", border: "1px solid var(--line)", background: "var(--surface)", padding: "9px 16px", borderRadius: 100 }}>{sk}</span>
              ))}
            </div>
            <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a
                data-cursor="1" data-magnet href="/assets/Rafiandra-Resume-2026.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--text)",
                  border: "1px solid var(--line)", padding: "14px 24px", borderRadius: 100, fontFamily: "inherit",
                  fontSize: 14, fontWeight: 600, cursor: "pointer", textDecoration: "none",
                }}
              >
                View résumé ↗
              </a>
              <Link
                href="/contact" data-cursor="1" data-magnet className="btn-accent"
                style={{
                  background: "var(--accent-grad)", color: "var(--accent-ink)", border: "none", padding: "14px 24px",
                  borderRadius: 100, fontFamily: "inherit", fontSize: 14, fontWeight: 700, cursor: "pointer", textDecoration: "none",
                }}
              >
                Work with me →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
