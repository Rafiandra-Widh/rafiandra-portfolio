import Link from "next/link";
import { projects, workCols } from "@/lib/data";

export default function WorkPage() {
  const cols = workCols(projects.length);
  return (
    <section style={{ flex: 1 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(56px,9vw,110px) clamp(20px,5vw,64px) clamp(40px,6vw,72px)", width: "100%" }}>
        <div
          data-reveal
          style={{
            display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-end", justifyContent: "space-between",
            borderBottom: "1px solid var(--line)", paddingBottom: "clamp(28px,4vw,44px)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)" }}>Selected Work · 2023—2025</span>
            <h1 style={{ fontSize: "clamp(34px,5.4vw,72px)", lineHeight: 1.02, letterSpacing: "-.03em", fontWeight: 700, maxWidth: "16ch" }}>
              Work that earned its place.
            </h1>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)", maxWidth: "34ch" }}>
            A focused selection — each one shipped, measured, and learned from. Click a card to read the story.
          </p>
        </div>

        <div
          className="work-grid"
          style={{ display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gap: "clamp(18px,2.4vw,28px)", marginTop: "clamp(28px,4vw,44px)" }}
        >
          {projects.map((p) => (
            <Link
              key={p.slug} href={`/work/${p.slug}`} data-cursor="1" className="card"
              style={{
                textAlign: "left", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 18,
                padding: 14, cursor: "pointer", fontFamily: "inherit", color: "var(--text)", display: "flex",
                flexDirection: "column", gap: 16, textDecoration: "none",
              }}
            >
              <span style={{ height: 200, borderRadius: 11, background: p.cover, display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: 16, position: "relative", overflow: "hidden" }}>
                <span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,.30),transparent 32%,transparent 64%,rgba(0,0,0,.30))", pointerEvents: "none" }} />
                <span style={{ position: "relative", fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1, color: "#fff", fontVariantNumeric: "tabular-nums", textShadow: "0 1px 8px rgba(0,0,0,.4)" }}>
                  {p.num}
                </span>
                <span style={{ position: "relative", fontFamily: "ui-monospace,monospace", fontSize: 10, letterSpacing: ".06em", color: "rgba(255,255,255,.9)", background: "rgba(0,0,0,.34)", padding: "4px 8px", borderRadius: 6, alignSelf: "flex-end" }}>
                  {p.year}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, padding: "2px 6px 4px" }}>
                <span style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ fontSize: "clamp(20px,2.4vw,26px)", fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.05 }}>{p.title}</span>
                  <span style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.45 }}>{p.tag}</span>
                </span>
                <span style={{ width: 38, height: 38, flex: "none", borderRadius: "50%", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", fontSize: 15 }}>→</span>
              </span>
              <span style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "0 6px 8px" }}>
                {p.stack.map((s) => (
                  <span key={s} style={{ fontSize: 12, color: "var(--muted)", border: "1px solid var(--line)", padding: "4px 11px", borderRadius: 100 }}>{s}</span>
                ))}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
