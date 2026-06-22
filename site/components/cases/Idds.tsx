import {
  CaseHeader, MetaGrid, Section, DiscoverCards, DefineList, NumberedCards, SmallCards, EngCards,
  Impact, Reflections, MoreProjects, Wrap1000, bodyStyle,
} from "@/components/case-parts";
import { idds, iddsDiscover, iddsDefine, iddsDecisions, iddsBuild, iddsEng } from "@/lib/data";

const strong: React.CSSProperties = { color: "var(--text)", fontWeight: 600 };

export default function Idds() {
  return (
    <section style={{ flex: 1 }}>
      <CaseHeader c={idds} />
      <Wrap1000>
        <MetaGrid meta={idds.meta} />

        <Section heading="The brief: make AI a system citizen" lead="IDDS was already live when I joined. The open question was how AI fits into it — without quietly eroding the thing.">
          <p style={bodyStyle}>
            I owned the design of how AI would <strong style={strong}>maintain</strong> the system, <strong style={strong}>deliver</strong> with it, and <strong style={strong}>hand off</strong> to engineering. Done wrong, AI becomes a fast way to break consistency. Done right, it&rsquo;s how the system scales.
          </p>
        </Section>

        <Section heading="What I learned about the work" lead="Three realities shaped everything that followed.">
          <DiscoverCards items={iddsDiscover} />
        </Section>

        <Section heading="Three things to solve">
          <DefineList items={iddsDefine} />
        </Section>

        <Section heading="The workflow I designed" lead="A set of focused AI agents, each with one job — strung together so the system stays intact end to end.">
          <NumberedCards items={iddsDecisions} />
        </Section>

        <Section heading="Where it is now" lead="We're live on the design side of the pipeline — four steps, one continuous flow.">
          <SmallCards items={iddsBuild} />
        </Section>

        <Section heading="Built with engineering, not around it" lead="A workflow that hands off cleanly only works if it speaks the developers' language. So it was designed with them.">
          <EngCards items={iddsEng} />
        </Section>

        <Impact results={idds.results} big={false} />
        <Reflections lessons={idds.lessons} />
        <MoreProjects current="idds" />
      </Wrap1000>
    </section>
  );
}
