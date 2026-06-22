import {
  CaseHeader, MetaGrid, Section, DiscoverCards, NumberedCards, TargetsBand, DeliverCards,
  Impact, Reflections, MoreProjects, Wrap1000, bodyStyle, leadStyle,
} from "@/components/case-parts";
import { legion, lgnDiscover, lgnTargets, lgnStrategy, lgnDeliver } from "@/lib/data";

const strong: React.CSSProperties = { color: "var(--text)", fontWeight: 600 };
const tag: React.CSSProperties = {
  fontSize: 14, color: "var(--text)", border: "1px solid var(--line)", background: "var(--surface)",
  padding: "10px 16px", borderRadius: 12,
};

const brands = [
  { name: "Brand A", color: "#D1122E", chip: "#FBE3E7" },
  { name: "Brand B", color: "#2F6BFF", chip: "#E2EAFE" },
  { name: "Brand C", color: "#1F8A5B", chip: "#DCF1E8" },
];

export default function Legion() {
  return (
    <section style={{ flex: 1 }}>
      <CaseHeader c={legion} />
      <Wrap1000>
        <MetaGrid meta={legion.meta} />

        <Section heading="Everyone built the same button. Differently.">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={leadStyle}>Twenty-four brands, hundreds of people, and no shared kit. So every team kept reinventing the basics.</p>
            <p style={bodyStyle}>
              Buttons here, buttons there, all subtly different. Designers and engineers kept redoing each other&rsquo;s work, and since every feature started from a blank page, shipping was slow. The bigger the product got, the worse it spread: harder onboarding, accessibility quietly skipped, and a pile of brands, teams, platforms, and frameworks each pulling their own way. What got designed and what got built rarely matched.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 6 }}>
              <span style={tag}>Inconsistent UI across brands</span>
              <span style={tag}>Designers &amp; devs duplicating work</span>
              <span style={tag}>Every feature from scratch</span>
            </div>
          </div>
        </Section>

        <Section heading="Where the time was going" lead="I talked to teams across the company and traced where work kept piling up. Three things came back again and again.">
          <DiscoverCards items={lgnDiscover} />
        </Section>

        <Section heading="What &ldquo;good&rdquo; had to mean" lead="Before designing anything, we wrote down the targets. If Legion couldn't move these, it wasn't working.">
          <TargetsBand items={lgnTargets} />
        </Section>

        <Section heading="Four bets">
          <NumberedCards items={lgnStrategy} square="grad" />
        </Section>

        <Section heading="What we shipped" lead="Legion shipped as a real toolkit, not a slide deck.">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>One component, themed for any brand — same code underneath</span>
            <div style={{ width: "100%", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)", background: "#fff", color: "#1A1416", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))" }}>
              {brands.map((b, i) => (
                <div key={b.name} style={{ padding: "clamp(14px,2vw,22px)", display: "flex", flexDirection: "column", gap: 12, borderRight: i < brands.length - 1 ? "1px solid #F0E9EA" : undefined }}>
                  <span style={{ fontSize: 11, color: "#9A8E90" }}>{b.name}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#fff", background: b.color, borderRadius: 8, padding: 9, textAlign: "center" }}>Continue</span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: b.color }} />
                    <span style={{ width: 16, height: 16, borderRadius: 4, background: b.chip }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p style={bodyStyle}>
            A cross-platform UI kit and library, kept in sync in real time so design and code stop drifting apart. Standardized templates for the patterns that keep coming back. Plugins, instant handover, even AI/MCP integration to make adoption painless. And a documentation site plus app covering the whole asset library, guidelines, and standards. We launched it in the open at <strong style={strong}>DTP Expo #2</strong>.
          </p>
          <DeliverCards items={lgnDeliver} />
        </Section>

        <Section heading="Built with engineering, not just for it" lead="A design system lives or dies on whether engineers actually adopt it. So I built it with them, not at them.">
          <p style={{ ...bodyStyle, maxWidth: "70ch" }}>
            We agreed on a component architecture that held up across frameworks and platforms, and kept design and code in sync in real time so handoff stopped being a rebuild. A part only shipped once it was proven on both sides — design and engineering. The calls were driven as much by what was feasible to build and maintain as by how it looked.
          </p>
        </Section>

        <Section heading="What I owned">
          <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: "70ch" }}>
            <p style={bodyStyle}><strong style={strong}>I set the roadmap.</strong> Forty people across design and engineering needed one direction. I shaped where Legion was heading and the order things shipped, so the work added up instead of scattering.</p>
            <p style={bodyStyle}><strong style={strong}>I brought AI into the workflow.</strong> I pushed to fold AI into Legion so designers spend less time on repetitive setup and more on the actual design — speeding the whole team up without dropping quality.</p>
          </div>
        </Section>

        <Impact results={legion.results}>
          <p style={{ ...bodyStyle, marginTop: "clamp(24px,3vw,36px)", maxWidth: "62ch" }}>
            Beyond the numbers, Legion trimmed development cost by around <strong style={strong}>Rp100M</strong> and shifted how teams think about reuse. It also took home <strong style={strong}>Best Documentation</strong> at the Design System Award 2023.
          </p>
        </Impact>
        <Reflections lessons={legion.lessons} />
        <MoreProjects current="legion" />
      </Wrap1000>
    </section>
  );
}
