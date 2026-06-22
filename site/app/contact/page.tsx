"use client";

import { useRef, useState } from "react";
import { contacts, contactEmail } from "@/lib/data";

const fieldStyle: React.CSSProperties = {
  fontFamily: "inherit", fontSize: 15, color: "var(--text)", background: "var(--bg)",
  border: "1px solid var(--line)", borderRadius: 11, padding: "13px 15px", outline: "none",
};

export default function ContactPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const [sent, setSent] = useState(false);

  const markFilled = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const f = e.currentTarget;
    const on = !!f.value.trim();
    f.style.borderColor = on ? "var(--muted)" : "var(--line)";
    f.style.background = on ? "var(--surface)" : "var(--bg)";
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const name = (nameRef.current?.value || "").trim();
    const email = (emailRef.current?.value || "").trim();
    const msg = (msgRef.current?.value || "").trim();
    const subject = "[" + (email || "Someone") + "] has reached out to you!";
    const bodyLines: string[] = [];
    bodyLines.push((email || "Someone") + " has reached out to you!");
    bodyLines.push("");
    if (name) bodyLines.push("Name: " + name);
    if (email) bodyLines.push("Email: " + email);
    bodyLines.push("");
    bodyLines.push(msg || "(no message)");
    const body = bodyLines.join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      const w = window.open(gmail, "_blank", "noopener");
      if (!w) window.location.href = mailto;
    } catch {
      try {
        window.location.href = mailto;
      } catch {}
    }
    setSent(true);
  };

  return (
    <section style={{ flex: 1 }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(56px,9vw,120px) clamp(20px,5vw,64px) clamp(40px,6vw,90px)", width: "100%" }}>
        <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(36px,6vw,80px)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 18 }}>Contact</span>
            <h1 style={{ fontSize: "clamp(34px,5vw,68px)", lineHeight: 1.02, letterSpacing: "-.03em", fontWeight: 700, textWrap: "pretty" } as React.CSSProperties}>
              Let&rsquo;s make the hard thing feel easy.
            </h1>
            <p style={{ marginTop: 22, fontSize: 16, lineHeight: 1.7, color: "var(--muted)", maxWidth: "40ch" }}>
              Have a problem worth solving? I&rsquo;m always happy to talk — whether it&rsquo;s a full project, a quick question, or just to compare notes. Tell me a little and I&rsquo;ll get back to you.
            </p>
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 2 }}>
              {contacts.map((c) => (
                <a
                  key={c.label} data-cursor="1" href={c.href} target="_blank" rel="noopener noreferrer" className="contact-row"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "18px 14px",
                    borderTop: "1px solid var(--line)", textDecoration: "none", color: "var(--text)", borderRadius: 12,
                  }}
                >
                  <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <span style={{ fontSize: 12, color: "var(--faint)", letterSpacing: ".04em", textTransform: "uppercase" }}>{c.label}</span>
                    <span style={{ fontSize: 17, fontWeight: 500 }}>{c.value}</span>
                  </span>
                  <span style={{ fontSize: 15 }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={submitForm} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 20, padding: "clamp(22px,3vw,34px)", display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 13, color: "var(--muted)" }}>Name</label>
              <input ref={nameRef} data-cursor="1" type="text" placeholder="Your name" onInput={markFilled} className="field" style={fieldStyle} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 13, color: "var(--muted)" }}>Email</label>
              <input ref={emailRef} data-cursor="1" type="email" placeholder="you@company.com" onInput={markFilled} className="field" style={fieldStyle} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 13, color: "var(--muted)" }}>What are you building?</label>
              <textarea ref={msgRef} data-cursor="1" rows={4} placeholder="A sentence or two about the problem…" onInput={markFilled} className="field" style={{ ...fieldStyle, resize: "vertical" }} />
            </div>
            <button
              data-cursor="1" data-magnet type="submit" className="btn-accent"
              style={{
                marginTop: 4, background: "var(--accent-grad)", color: "var(--accent-ink)", border: "none",
                padding: "15px 24px", borderRadius: 100, fontFamily: "inherit", fontSize: 14, fontWeight: 700, cursor: "pointer",
              }}
            >
              {sent ? "Thanks — I’ll be in touch ✓" : "Send message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
