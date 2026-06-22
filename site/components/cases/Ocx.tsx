import {
  CaseHeader, MetaGrid, Section, DiscoverCards, DefineList, NumberedCards, FlowCards, SmallCards, EngCards,
  Impact, Reflections, MoreProjects, Wrap1000, bodyStyle,
} from "@/components/case-parts";
import { ocx, ocxObs, ocxDiscover, ocxDefine, ocxDecisions, ocxFlow, ocxEng, ocxBuild } from "@/lib/data";

const tag: React.CSSProperties = {
  fontSize: 14, color: "var(--text)", border: "1px solid var(--line)", background: "var(--surface)",
  padding: "10px 16px", borderRadius: 12,
};
const galleryCell: React.CSSProperties = {
  borderRadius: 18, overflow: "hidden", background: "linear-gradient(160deg,#0a1d4a,#13357f)",
  display: "flex", alignItems: "flex-end", justifyContent: "center", paddingTop: "clamp(10px,1.4vw,18px)",
};

export default function Ocx() {
  return (
    <section style={{ flex: 1 }}>
      <CaseHeader c={ocx} />
      <Wrap1000>
        <MetaGrid meta={ocx.meta} />

        <Section heading="Every trade was a gamble" lead="Buying a card meant trusting a stranger from a Facebook group or a swap meet — and hoping for the best.">
          <p style={bodyStyle}>
            The card shows up fake. The seller disappears the second your transfer clears. The package never arrives. The condition is nothing like the photos. For TCG collectors this was just the cost of playing — and it made everyone wary of every single deal.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 6 }}>
            {ocxObs.map((o) => (<span key={o} style={tag}>{o}</span>))}
          </div>
        </Section>

        <Section heading="What I learned about the hobby" lead="I dug into how collectors actually value, grade, and trade cards — and where trust already lived.">
          <DiscoverCards items={ocxDiscover} />
        </Section>

        <Section heading="Three things to solve">
          <DefineList items={ocxDefine} />
        </Section>

        <Section heading="The calls I made">
          <NumberedCards items={ocxDecisions} />
        </Section>

        <Section heading="How a card moves" lead="The seller ships to OCX; we grade and verify in the vault; the card goes live, graded and priced. The buyer never has to trust a stranger — only OCX.">
          <FlowCards items={ocxFlow} />
        </Section>

        <Section heading="Built with engineering, not just for looks" lead="A grade and a timeline only mean something if the system can actually back them up. So the hard parts were decided together.">
          <EngCards items={ocxEng} />
        </Section>

        <Section heading="What we shipped" lead="An end-to-end marketplace — both sides of the trade.">
          <SmallCards items={ocxBuild} min={180} />
          <p style={bodyStyle}>
            We ran a pilot with the CEO&rsquo;s collector community — putting OCX&rsquo;s AI grades head-to-head with real PSA results, and running full buy and sell flows end to end before launch.
          </p>
        </Section>

        <Impact results={ocx.results} />
        <Reflections lessons={ocx.lessons} />

        <Section heading="A look around the product" lead="From buying on the web to checking a grade and price history on mobile.">
          <div style={{ borderRadius: 18, overflow: "hidden", background: "linear-gradient(135deg,#0a1d4a,#13357f)", padding: "clamp(8px,1.5vw,20px) clamp(8px,1.5vw,20px) 0", marginTop: 6 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/ocx-g-market.png" alt="OCX — market price chart on web" style={{ display: "block", width: "100%", height: "auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "clamp(12px,1.6vw,20px)" }}>
            {[
              { src: "/logos/ocx-g-product.png", alt: "OCX app — card product page" },
              { src: "/logos/ocx-g-insight.png", alt: "OCX app — AI pre-grade card insight" },
              { src: "/logos/ocx-g-chart.png", alt: "OCX app — price history chart" },
            ].map((g) => (
              <div key={g.src} style={galleryCell}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
            ))}
          </div>
        </Section>

        <MoreProjects current="ocx" />
      </Wrap1000>
    </section>
  );
}
