import { NextResponse } from "next/server";
import { contactEmail } from "@/lib/data";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Escape user-supplied text before embedding it in the HTML email.
function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  const company = String(data.company ?? "").trim(); // honeypot — real users leave it empty

  // Silently accept bots so they don't retry, but send nothing.
  if (company) return NextResponse.json({ ok: true });

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Please include a message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const subject = `[${email}] has reached out to you!`;
  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#111">
      <p><strong>${esc(email)}</strong> has reached out to you!</p>
      ${name ? `<p><strong>Name:</strong> ${esc(name)}</p>` : ""}
      <p><strong>Email:</strong> ${esc(email)}</p>
      <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
      <p style="white-space:pre-wrap">${esc(message)}</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [contactEmail],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", res.status, detail);
      return NextResponse.json({ error: "Could not send right now. Please try again." }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend request failed:", err);
    return NextResponse.json({ error: "Could not send right now. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
