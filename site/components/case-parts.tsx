import Link from "next/link";
import { projects } from "@/lib/data";
import type { CaseStudy, KV, NumKV, Result, Lesson } from "@/lib/data";

export const sectionStyle: React.CSSProperties = {
  display: "flex", flexDirection: "column", gap: "clamp(18px,2.4vw,30px)",
  padding: "clamp(40px,6vw,72px) 0", borderBottom: "1px solid var(--line)",
};
export const h2Style: React.CSSProperties = {
  fontSize: "clamp(19px,1.9vw,25px)", letterSpacing: "-.015em", color: "var(--text)", fontWeight: 700, lineHeight: 1.18,
};
export const leadStyle: React.CSSProperties = {
  fontSize: "clamp(15px,1.4vw,17px)", lineHeight: 1.7, color: "var(--text)", fontWeight: 500, ["textWrap" as string]: "pretty",
};
export const bodyStyle: React.CSSProperties = {
  fontSize: 16, lineHeight: 1.75, color: "var(--muted)", ["textWrap" as string]: "pretty",
};

const wrap1000: React.CSSProperties = { maxWidth: 1000, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", width: "100%" };

export function CaseHeader({ c }: { c: CaseStudy }) {
  return (
    <>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(48px,7vw,90px) clamp(20px,5vw,64px) 0", width: "100%" }}>
        <Link
          href="/work" data-cursor="1"
          style={{ background: "none", border: "none", color: "var(--muted)", fontFamily: "inherit", fontSize: 14, cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "clamp(32px,5vw,52px)", textDecoration: "none" }}
        >
          ← Back to work
        </Link>
        <div data-reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", fontSize: 13, color: "var(--muted)" }}>
            <span>Case study</span>
            <span style={{ color: "var(--faint)" }}>/</span>
            <span>{c.breadcrumb}</span>
            <span style={{ color: "var(--faint)" }}>/</span>
            <span>{c.meta2}</span>
          </div>
          <h1 style={{ fontSize: "clamp(34px,5.6vw,76px)", lineHeight: 1.0, letterSpacing: "-.03em", fontWeight: 700, maxWidth: "18ch" }}>
            {c.titleA}
            <span style={{ fontFamily: "'Newsreader'", fontStyle: "italic", fontWeight: 500, letterSpacing: "-.02em" }}>{c.accent}</span>
            {c.titleB}
          </h1>
          <p style={{ fontSize: "clamp(17px,1.7vw,21px)", lineHeight: 1.55, color: "var(--muted)", maxWidth: "62ch", ["textWrap" as string]: "pretty" }}>
            {c.lead}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px,4vw,52px)", marginTop: 8 }}>
            {c.quickStats.map((s) => (
              <div key={s.v} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <span style={{ fontSize: "clamp(22px,2.4vw,30px)", fontWeight: 700, letterSpacing: "-.02em" }}>{s.k}</span>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{s.v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 6 }}>
            {c.links.map((l, i) => (
              <a
                key={l.href} data-cursor="1" href={l.href} target="_blank" rel="noopener noreferrer"
                className={i === 0 ? "btn-accent" : "btn-outline"}
                style={
                  i === 0
                    ? { display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-grad)", color: "var(--accent-ink)", border: "none", padding: "13px 22px", borderRadius: 100, fontFamily: "inherit", fontSize: 14, fontWeight: 700, textDecoration: "none" }
                    : { display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--text)", border: "1px solid var(--line)", padding: "13px 22px", borderRadius: 100, fontFamily: "inherit", fontSize: 14, fontWeight: 600, textDecoration: "none" }
                }
              >
                {l.label} <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: "clamp(40px,6vw,72px) auto 0", padding: "0 clamp(20px,5vw,64px)", width: "100%" }}>
        <div
          data-reveal
          style={{
            width: "100%", aspectRatio: "16/9", minHeight: 240, borderRadius: 22, overflow: "hidden",
            border: "1px solid var(--line)", boxShadow: "0 30px 80px -40px rgba(0,0,0,.5)",
            background: c.hero.bg || "transparent",
            ...(c.hero.bg === "#eef1f7" ? { display: "flex", alignItems: "center", justifyContent: "center" } : {}),
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.hero.src} alt={c.hero.alt} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: c.hero.objectPosition || "center" }} />
        </div>
      </div>
    </>
  );
}

export function MetaGrid({ meta }: { meta: KV[] }) {
  return (
    <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "clamp(20px,3vw,40px)", paddingBottom: "clamp(40px,6vw,72px)", borderBottom: "1px solid var(--line)" }}>
      {meta.map((m) => (
        <div key={m.k} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 12, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--faint)" }}>{m.k}</span>
          <span style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.4 }}>{m.v}</span>
        </div>
      ))}
    </div>
  );
}

const cardSurface: React.CSSProperties = {
  display: "flex", flexDirection: "column", gap: 8, background: "var(--surface)",
  border: "1px solid var(--line)", borderRadius: 16, padding: 20,
};

export function DiscoverCards({ items, min = 220 }: { items: KV[]; min?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(${min}px,1fr))`, gap: 14 }}>
      {items.map((d) => (
        <div key={d.k} style={cardSurface}>
          <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-.01em" }}>{d.k}</span>
          <span style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", ["textWrap" as string]: "pretty" }}>{d.v}</span>
        </div>
      ))}
    </div>
  );
}

export function DefineList({ items }: { items: NumKV[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {items.map((p) => (
        <div key={p.n} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 18, alignItems: "start", padding: "18px 0", borderTop: "1px solid var(--line)" }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: "var(--faint)", fontVariantNumeric: "tabular-nums" }}>{p.n}</span>
          <span style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ fontSize: 16, fontWeight: 600 }}>{p.k}</span>
            <span style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", ["textWrap" as string]: "pretty" }}>{p.v}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function NumberedCards({
  items, min = 230, square = "accent", stratGrid = false,
}: { items: NumKV[]; min?: number; square?: "accent" | "grad"; stratGrid?: boolean }) {
  return (
    <div
      className={stratGrid ? "strat-grid" : undefined}
      style={stratGrid ? { display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 14 } : { display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(${min}px,1fr))`, gap: 14 }}
    >
      {items.map((s) => (
        <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: 10, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 16, padding: 22 }}>
          <span style={{ width: 34, height: 34, borderRadius: 9, background: square === "grad" ? "var(--accent-grad)" : "var(--accent)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15 }}>{s.n}</span>
          <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-.01em" }}>{s.k}</span>
          <span style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", ["textWrap" as string]: "pretty" }}>{s.v}</span>
        </div>
      ))}
    </div>
  );
}

export function SmallCards({ items, min = 150 }: { items: KV[]; min?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(${min}px,1fr))`, gap: 12 }}>
      {items.map((b) => (
        <div key={b.k} style={{ display: "flex", flexDirection: "column", gap: 6, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: 18 }}>
          <span style={{ fontSize: 14.5, fontWeight: 600, letterSpacing: "-.01em" }}>{b.k}</span>
          <span style={{ fontSize: 13, lineHeight: 1.55, color: "var(--muted)", ["textWrap" as string]: "pretty" }}>{b.v}</span>
        </div>
      ))}
    </div>
  );
}

export function FlowCards({ items }: { items: NumKV[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12 }}>
      {items.map((f) => (
        <div key={f.n} style={{ display: "flex", flexDirection: "column", gap: 6, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: 18 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent-text)", fontVariantNumeric: "tabular-nums" }}>{f.n}</span>
          <span style={{ fontSize: 14.5, fontWeight: 600, letterSpacing: "-.01em" }}>{f.k}</span>
          <span style={{ fontSize: 13, lineHeight: 1.55, color: "var(--muted)", ["textWrap" as string]: "pretty" }}>{f.v}</span>
        </div>
      ))}
    </div>
  );
}

export function EngCards({ items, min = 240 }: { items: KV[]; min?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(${min}px,1fr))`, gap: 14 }}>
      {items.map((e) => (
        <div key={e.k} style={{ display: "flex", flexDirection: "column", gap: 8, borderTop: "2px solid var(--accent)", paddingTop: 16 }}>
          <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-.01em" }}>{e.k}</span>
          <span style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", ["textWrap" as string]: "pretty" }}>{e.v}</span>
        </div>
      ))}
    </div>
  );
}

export function DeliverCards({ items }: { items: KV[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12 }}>
      {items.map((d) => (
        <div key={d.k} style={{ display: "flex", flexDirection: "column", gap: 5, borderTop: "2px solid var(--accent)", paddingTop: 14 }}>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-.01em" }}>{d.k}</span>
          <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--muted)", ["textWrap" as string]: "pretty" }}>{d.v}</span>
        </div>
      ))}
    </div>
  );
}

export function TargetsBand({ items }: { items: KV[] }) {
  return (
    <div style={{ background: "var(--band)", color: "var(--band-text)", borderRadius: 20, padding: "clamp(28px,4vw,44px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "clamp(20px,3vw,36px)" }}>
      {items.map((t) => (
        <div key={t.v} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <span style={{ fontSize: "clamp(28px,3.6vw,46px)", fontWeight: 700, letterSpacing: "-.02em", color: "var(--accent-text)" }}>{t.k}</span>
          <span style={{ fontSize: 14, lineHeight: 1.5, color: "color-mix(in srgb, var(--band-text) 82%, transparent)", ["textWrap" as string]: "pretty" }}>{t.v}</span>
        </div>
      ))}
    </div>
  );
}

export function Impact({ results, big = true, children }: { results: Result[]; big?: boolean; children?: React.ReactNode }) {
  return (
    <div data-reveal style={{ padding: "clamp(48px,7vw,90px) 0", borderBottom: "1px solid var(--line)" }}>
      <span style={h2Style}>What changed</span>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "clamp(24px,3vw,40px)", marginTop: 28 }}>
        {results.map((r) => (
          <div key={r.t} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: big ? "clamp(40px,5.4vw,68px)" : "clamp(34px,4.6vw,58px)", fontWeight: 700, letterSpacing: "-.03em", lineHeight: 1, color: "var(--text)" }}>{r.k}</span>
            <span style={{ fontSize: 15, fontWeight: 600 }}>{r.t}</span>
            <span style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5, ["textWrap" as string]: "pretty" }}>{r.v}</span>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export function Reflections({ lessons }: { lessons: Lesson[] }) {
  return (
    <div data-reveal style={{ padding: "clamp(40px,6vw,72px) 0", borderBottom: "1px solid var(--line)" }}>
      <span style={h2Style}>What I&rsquo;d carry forward</span>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(20px,3vw,40px)", marginTop: 28 }}>
        {lessons.map((l, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ fontSize: "clamp(18px,2vw,24px)", lineHeight: 1.4, fontWeight: 500, letterSpacing: "-.01em", fontFamily: "'Newsreader'", fontStyle: "italic", ["textWrap" as string]: "pretty" }}>&ldquo;{l.q}&rdquo;</p>
            <span style={{ fontSize: 13, color: "var(--faint)" }}>{l.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MoreProjects({ current }: { current: string }) {
  const others = projects.filter((p) => p.slug !== current);
  return (
    <div data-reveal style={{ padding: "clamp(36px,5vw,64px) 0 clamp(24px,4vw,48px)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "baseline", justifyContent: "space-between", marginBottom: "clamp(20px,3vw,32px)" }}>
        <span style={{ fontSize: "clamp(20px,2.4vw,30px)", fontWeight: 600, letterSpacing: "-.01em" }}>Read another project</span>
        <Link href="/work" data-cursor="1" style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)", textDecoration: "none" }}>
          View all →
        </Link>
      </div>
      <div className="proj-rail" style={{ display: "flex", gap: "clamp(14px,1.8vw,20px)", overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 6, margin: "0 -2px" }}>
        {others.map((p) => (
          <Link
            key={p.slug} href={`/work/${p.slug}`} data-cursor="1" className="card"
            style={{
              flex: "0 0 clamp(220px,30%,280px)", scrollSnapAlign: "start", background: "var(--surface)",
              border: "1px solid var(--line)", borderRadius: 16, padding: 12, cursor: "pointer", color: "var(--text)",
              display: "flex", flexDirection: "column", gap: 12, textDecoration: "none",
            }}
          >
            <span style={{ height: 140, borderRadius: 10, background: p.cover, position: "relative", overflow: "hidden", display: "block" }}>
              <span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,.28),transparent 40%,transparent 60%,rgba(0,0,0,.28))", pointerEvents: "none" }} />
              <span style={{ position: "absolute", top: 12, left: 12, fontSize: "clamp(20px,2.2vw,26px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1, color: "#fff", fontVariantNumeric: "tabular-nums", textShadow: "0 1px 8px rgba(0,0,0,.4)" }}>
                {p.num}
              </span>
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: 4, padding: "0 4px 4px" }}>
              <span style={{ fontSize: "clamp(16px,1.8vw,19px)", fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.1 }}>{p.title}</span>
              <span style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.4, ["textWrap" as string]: "pretty" }}>{p.tag}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const Wrap1000 = ({ children }: { children: React.ReactNode }) => (
  <div style={{ ...wrap1000, paddingTop: "clamp(40px,6vw,80px)" }}>{children}</div>
);

export function Section({ children, heading, lead }: { children?: React.ReactNode; heading?: string; lead?: string }) {
  return (
    <div data-reveal style={sectionStyle}>
      {heading && <h2 style={h2Style}>{heading}</h2>}
      {lead && <p style={leadStyle}>{lead}</p>}
      {children}
    </div>
  );
}
