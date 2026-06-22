import Link from "next/link";

const footerLink: React.CSSProperties = {
  background: "none", border: "none", color: "var(--muted)", fontFamily: "inherit", fontSize: 15,
  textAlign: "left", cursor: "pointer", padding: 0, textDecoration: "none",
};

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", marginTop: "auto" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(48px,7vw,84px) clamp(20px,5vw,64px)", width: "100%" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ maxWidth: "30ch" }}>
            <h3 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 700, letterSpacing: "-.02em", lineHeight: 1.05 }}>
              Let&rsquo;s build something that matters.
            </h3>
            <Link
              href="/contact" data-cursor="1" data-magnet className="btn-accent"
              style={{
                display: "inline-block", marginTop: 24, background: "var(--accent-grad)", color: "var(--accent-ink)",
                border: "none", padding: "14px 24px", borderRadius: 100, fontFamily: "inherit", fontSize: 14,
                fontWeight: 700, cursor: "pointer", textDecoration: "none",
              }}
            >
              Start a conversation
            </Link>
          </div>
          <div style={{ display: "flex", gap: "clamp(40px,6vw,90px)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--faint)" }}>Pages</span>
              <Link href="/" data-cursor="1" style={footerLink}>Home</Link>
              <Link href="/work" data-cursor="1" style={footerLink}>Work</Link>
              <Link href="/about" data-cursor="1" style={footerLink}>About</Link>
              <Link href="/contact" data-cursor="1" style={footerLink}>Contact</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--faint)" }}>Elsewhere</span>
              <a data-cursor="1" href="https://linkedin.com/in/rafiandraw" target="_blank" rel="noopener noreferrer" style={{ ...footerLink, textDecoration: "none" }}>LinkedIn</a>
              <a data-cursor="1" href="https://dribbble.com/Rafiandra" target="_blank" rel="noopener noreferrer" style={{ ...footerLink, textDecoration: "none" }}>Dribbble</a>
              <a data-cursor="1" href="https://medium.com/@widhiandraw" target="_blank" rel="noopener noreferrer" style={{ ...footerLink, textDecoration: "none" }}>Medium</a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center",
            marginTop: "clamp(40px,6vw,72px)", paddingTop: 24, borderTop: "1px solid var(--line)",
            fontSize: 13, color: "var(--faint)",
          }}
        >
          <span>© 2026 Rafiandra Widhiansyah</span>
          <span>Designed &amp; built with intent · Jakarta, ID</span>
        </div>
      </div>
    </footer>
  );
}
