import {
  CaseHeader, MetaGrid, Section, DiscoverCards, DefineList, NumberedCards, EngCards,
  Impact, Reflections, MoreProjects, Wrap1000, bodyStyle, leadStyle,
} from "@/components/case-parts";
import { pijar, pijarDiscover, pijarObs, pijarDefine, pijarStrategy, pijarUT } from "@/lib/data";

const strong: React.CSSProperties = { color: "var(--text)", fontWeight: 600 };
const tag: React.CSSProperties = {
  fontSize: 14, color: "var(--text)", border: "1px solid var(--line)", background: "var(--surface)",
  padding: "10px 16px", borderRadius: 12,
};
const imgBox: React.CSSProperties = { width: "100%", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)", background: "#eef1f7" };
const sideNote: React.CSSProperties = { fontSize: 15, lineHeight: 1.65, color: "var(--muted)", ["textWrap" as string]: "pretty" };

export default function Pijar() {
  return (
    <section style={{ flex: 1 }}>
      <CaseHeader c={pijar} />
      <Wrap1000>
        <MetaGrid meta={pijar.meta} />

        <Section heading="Two weeks just to say hello">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={leadStyle}>Picture a school that just signed up, buzzing to go digital — then it hits setup, and stops dead.</p>
            <p style={bodyStyle}>
              Once the account was created, admins were on their own — and stuck. Every school ended up asking our ops team to key in their data by hand, which stretched activation to <strong style={strong}>about two weeks each</strong>. The frustrating part? Schools already keep all of this in <strong style={strong}>DAPODIK</strong>, the national education data standard. We were basically asking them to copy what they&rsquo;d already filled out — into a form that named everything differently. Like being handed a menu in a language you don&rsquo;t read, then ordering and hoping for the best.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 6 }}>
              <span style={tag}>~2 weeks to activate one school</span>
              <span style={tag}>High dependency on ops team</span>
              <span style={tag}>Manual, field-by-field input</span>
            </div>
          </div>
        </Section>

        <Section heading="So I went and watched">
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <p style={leadStyle}>Before I opened Figma, I sat with the people actually living this — school admins, and the ops crew rescuing them. The same three things came up every time.</p>
            <DiscoverCards items={pijarDiscover} />
            <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingLeft: 18, borderLeft: "2px solid var(--line)" }}>
              <span style={{ fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--faint)" }}>From observation</span>
              {pijarObs.map((o) => (<span key={o} style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>— {o}</span>))}
            </div>
          </div>
        </Section>

        <Section heading="The part nobody said out loud">
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <p style={leadStyle}>Strip it back, and three things were quietly going wrong.</p>
            <DefineList items={pijarDefine} />
            <div style={{ background: "var(--band)", color: "var(--band-text)", borderRadius: 20, padding: "clamp(28px,4vw,44px)" }}>
              <span style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-text)" }}>My bet</span>
              <p style={{ marginTop: 14, fontSize: "clamp(20px,2.6vw,32px)", lineHeight: 1.3, fontWeight: 600, letterSpacing: "-.01em", ["textWrap" as string]: "pretty" }}>
                Stop asking schools to type. Let them hand over the <span style={{ color: "var(--accent-text)" }}>file they already have</span> — and do the translating for them.
              </p>
            </div>
          </div>
        </Section>

        <Section heading="Four moves">
          <NumberedCards items={pijarStrategy} square="grad" stratGrid />
        </Section>

        <Section heading="What I tried">
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <p style={leadStyle}>The old flow never told you anything was expected of you. No prompt, no progress, no finish line. So setup felt optional — people poked around, then left it half-done.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>Before — fragmented input</span>
                <div style={imgBox}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/pijar-before.png" alt="Pijar — old manual data-entry table" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>After — guided, DAPODIK upload</span>
                <div style={imgBox}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/pijar-after.png" alt="Pijar — guided DAPODIK migration wizard" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
            </div>
            <p style={bodyStyle}>
              I sketched two ways to walk people through it: a step bar across the <strong style={strong}>top</strong>, or one down the <strong style={strong}>side</strong>. I went with the side — it keeps you on one task at a time, but the finish line never leaves your sight, which matters when the person filling this in isn&rsquo;t especially technical. Uploads happen one type at a time (kinder to the backend), and you can always save a draft and come back.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>The unlock — upload existing DAPODIK files directly, no special template</span>
              <div style={{ ...imgBox, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/pijar-case-hero.png" alt="Pijar — DAPODIK migration wizard, upload and success states" style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </Section>

        <Section heading="Where it tripped up">
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <p style={leadStyle}>We tested with ops folks and real admins. A few small things were quietly tripping people up.</p>
            <EngCards items={pijarUT} min={220} />
          </div>
        </Section>

        <Section heading="Pressure-tested with engineering">
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: "70ch" }}>
            <p style={leadStyle}>A design only counts once it ships. So from the very first ideation I pulled in developers, data scientists, and the ops team — partly to catch technical limits early, before they turned into rework.</p>
            <p style={bodyStyle}>That collaboration changed real decisions:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingLeft: 18, borderLeft: "2px solid var(--line)" }}>
              <p style={sideNote}><strong style={strong}>Sequential upload.</strong> Engineering flagged that pushing every record at once could overload the system, so we restricted it to one data type at a time — students, then teachers. It happened to help users too: smaller batches are easier to check.</p>
              <p style={sideNote}><strong style={strong}>Save as draft.</strong> Letting admins save and continue later eased the pressure on them — and doubled as a backend optimization the devs wanted anyway.</p>
              <p style={sideNote}><strong style={strong}>Guidance at every step.</strong> The ops team, who&rsquo;d been doing this migration by hand, pushed for clear instructions on each step so admins could finish it on their own.</p>
            </div>
            <p style={bodyStyle}>Then we rolled out to a small set of schools first, to confirm it held up before going wide. Feasibility and a safe rollout shaped the design as much as the flow itself.</p>
          </div>
        </Section>

        <Section heading="The calls I made">
          <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: "70ch" }}>
            <p style={bodyStyle}><strong style={strong}>I broke the upload into smaller batches.</strong> Dumping every record in at once meant nobody actually checked them. Splitting it into chunks gave people room to preview each batch and catch mistakes as they went — I wanted accuracy, not just speed.</p>
            <p style={bodyStyle}><strong style={strong}>I let testing settle the stepper debate.</strong> Horizontal or vertical? Rather than argue it in a meeting, I ran both past real admins. The vertical side stepper won — one step in focus, the rest waiting quietly — because it kept people from feeling overwhelmed.</p>
          </div>
        </Section>

        <Impact results={pijar.results} />
        <Reflections lessons={pijar.lessons} />
        <MoreProjects current="pijar" />
      </Wrap1000>
    </section>
  );
}
