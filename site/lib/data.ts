// All copy, project metadata and case-study content, ported from the design source.

export type Project = {
  num: string;
  slug: string;
  title: string;
  tag: string;
  year: string;
  role: string;
  grad: string;
  /** CSS background shorthand used for card covers and the hover preview box */
  cover: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    num: "01",
    slug: "idds",
    title: "IDDS",
    tag: "Indonesia’s design system for government tech",
    year: "Nov 2025 – Now",
    role: "Design System Designer",
    grad: "linear-gradient(135deg,#7a2030,#d36277)",
    cover: "url('/logos/idds-hero.png') center top/cover no-repeat",
    stack: ["Design system", "AI workflow", "GovTech"],
  },
  {
    num: "02",
    slug: "ocx",
    title: "The OCX",
    tag: "A fraud-proof marketplace for collectible cards",
    year: "Oct–Dec 2025",
    role: "Product Designer",
    grad: "linear-gradient(135deg,#2a4a8c,#6f9bdf)",
    cover: "url('/logos/ocx-hero.jpg') center/cover no-repeat",
    stack: ["Marketplace", "Trust & safety", "AI grading"],
  },
  {
    num: "03",
    slug: "legion",
    title: "Legion Design System",
    tag: "One multi-brand system for Telkom Indonesia",
    year: "Jan–Oct 2025",
    role: "Design System Lead",
    grad: "linear-gradient(135deg,#8a1020,#e0556b)",
    cover: "url('/logos/legion-hero.png') center top/cover no-repeat",
    stack: ["Design system", "Multi-brand", "Cross-platform"],
  },
  {
    num: "04",
    slug: "pijar",
    title: "Pijar — Teacher’s Portal",
    tag: "Accelerating school activation through onboarding",
    year: "Apr–Jun 2023",
    role: "Product Design Lead",
    grad: "linear-gradient(135deg,#1f5a4d,#7cc0a8)",
    cover: "url('/logos/pijar-hero.png') center top/cover no-repeat",
    stack: ["EdTech", "Onboarding", "Data migration"],
  },
];

export function workCols(n: number): number {
  if (n <= 1) return 1;
  if (n === 2 || n === 4) return 2;
  return 3;
}

// Cycle order for the "Next project" button on case studies.
export type KV = { k: string; v: string };
export type NumKV = { n: string; k: string; v: string };
export type Result = { k: string; t: string; v: string };
export type Lesson = { q: string; s: string };

// ----- About -----
export const stats: KV[] = [
  { k: "7yrs", v: "Designing products end-to-end" },
  { k: "3", v: "Industries — fintech, EdTech & gov-tech" },
  { k: "2", v: "Design systems built & led" },
  { k: "50%", v: "Faster output with AI workflows" },
];

export const roles = [
  { role: "Product Design Specialist", org: "INA Digital (PERURI Group)", when: "2025 — Now" },
  { role: "Product Designer", org: "The OCX", when: "2025" },
  { role: "Product Design & Design System Lead", org: "Telkom Indonesia", when: "2020 — 2025" },
  { role: "UI/UX Designer", org: "Sinbad", when: "2020" },
  { role: "Jr. UI/UX Designer", org: "Cashbac", when: "2019 — 2020" },
];

export const skills = [
  "Product & UX Design", "UI Design", "Design systems", "Cross-functional alignment",
  "Conversion optimization", "Feature adoption strategy", "Dashboard & analytics viz",
  "AI design workflow", "Vibe coding", "Mentorship & UX education",
];

// ----- Contact -----
export const contacts = [
  { label: "Email", value: "rafiandra.widhiansyah@gmail.com", href: "mailto:rafiandra.widhiansyah@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/rafiandraw", href: "https://linkedin.com/in/rafiandraw" },
  { label: "Dribbble", value: "dribbble.com/Rafiandra", href: "https://dribbble.com/Rafiandra" },
  { label: "Medium", value: "@widhiandraw", href: "https://medium.com/@widhiandraw" },
];

export const contactEmail = "rafiandra.widhiansyah@gmail.com";

// ----- Home ticker logos -----
export const clients = [
  { src: "/logos/cashbac.png", w: 152 },
  { src: "/logos/sinbad.png", w: 147 },
  { src: "/logos/purwadhika.png", w: 178 },
  { src: "/logos/hacktiv8.png", w: 136 },
  { src: "/logos/telkom.png", w: 46 },
  { src: "/logos/converge.png", w: 78 },
  { src: "/logos/ocx.png", w: 85 },
  { src: "/logos/inadigital.png", w: 161 },
];

export const capabilities = [
  "Product Strategy", "Interaction Design", "Design Systems",
  "Prototyping", "User Research", "AI Enabler", "Vibe Coding",
];

// ===================== CASE STUDIES =====================

export type CaseStudy = {
  slug: string;
  breadcrumb: string;
  meta2: string; // breadcrumb trailing meta
  titleA: string; // text before accent word
  accent: string; // italic serif accent word(s)
  titleB: string; // text after accent word
  lead: string;
  quickStats: { k: string; v: string }[];
  links: { label: string; href: string }[];
  hero: { src: string; alt: string; bg?: string; objectPosition?: string };
  meta: KV[];
  results: Result[];
  lessons: Lesson[];
};

export const idds: CaseStudy = {
  slug: "idds",
  breadcrumb: "IDDS",
  meta2: "INA Digital · Nov 2025 – Now",
  titleA: "Designing how AI ",
  accent: "keeps",
  titleB: " a design system honest.",
  lead:
    "IDDS is Indonesia’s design system for government technology — already shipped when I joined. My job: design how AI maintains it, delivers with it, and hands off cleanly to engineering. The goal is simple to say and hard to do — go faster without ever breaking the system.",
  quickStats: [
    { k: "1 wk → 2 hrs", v: "concept delivery" },
    { k: "100%", v: "on-system output" },
    { k: "GovTech", v: "national scale" },
  ],
  links: [{ label: "Visit the system", href: "https://design.inadigital.go.id/" }],
  hero: { src: "/logos/idds-cover.png", alt: "IDDS component library documentation", bg: "#fff", objectPosition: "top left" },
  meta: [
    { k: "Role", v: "Design System Designer" },
    { k: "Team", v: "5 designers · 1 writer · 1 visual · 4 engineers · 1 PM" },
    { k: "Timeline", v: "Nov 2025 – Now" },
    { k: "Platform", v: "Web · GovTech" },
  ],
  results: [
    { k: "1 wk → 2 hrs", t: "Delivery time", v: "Concept-to-prototype that took a week now lands in hours — two days at most." },
    { k: "100%", t: "On-system output", v: "Designs come out using existing IDDS components by default." },
    { k: "0", t: "New components for dev", v: "Handoff matches the framework, so engineers don’t rebuild." },
  ],
  lessons: [
    { q: "AI doesn’t replace the designer. We’re still the ones orchestrating the craft — making sure what ships is genuinely good for humans.", s: "What I’d carry forward" },
    { q: "A system stays a system only if speed never costs consistency. The workflow had to protect both at once.", s: "What I’d carry forward" },
  ],
};

export const iddsDiscover: KV[] = [
  { k: "Requests land with no runway", v: "A brief arrives at 10am and a concept or prototype is due by noon. Speed isn’t a nice-to-have — it’s the job." },
  { k: "Government brand has to hold", v: "Every service should feel like the same government. That familiarity is what keeps citizens comfortable using it." },
  { k: "Inconsistent components cost dev time", v: "When pieces drift, engineers end up rebuilding what already exists — slowing every release." },
];
export const iddsDefine: NumKV[] = [
  { n: "01", k: "Fast, but still good", v: "Tight turnarounds need delivery that’s quick and genuinely usable — not throwaway." },
  { n: "02", k: "Protect the handoff", v: "Designs must use what already exists so developers never have to build new components." },
  { n: "03", k: "Turn thin briefs into an MVP", v: "Client docs are often incomplete — someone has to translate them into the bare-minimum concept that’s actually needed." },
];
export const iddsDecisions: NumKV[] = [
  { n: "1", k: "Translate the business doc", v: "An agent that reads incomplete product/business docs and turns them into a clear, buildable MVP scope." },
  { n: "2", k: "Generate on-system designs", v: "AI that produces strong concepts using only IDDS components — consistent by default, not by review." },
  { n: "3", k: "Hold voice & consistency", v: "Guardrails that keep tone of voice and visual language aligned with the GovTech standard." },
  { n: "4", k: "Match the dev framework", v: "Output shaped to the engineering framework, so handoff doesn’t spawn rework." },
];
export const iddsEng: KV[] = [
  { k: "Design that fits the framework", v: "I worked with engineering so AI output maps to their components and structure — nothing gets built twice." },
  { k: "Real IDDS integration", v: "Made sure the workflow plugs into the actual IDDS library, not a parallel copy of it." },
];
export const iddsBuild: KV[] = [
  { k: "Translate", v: "Read the brief, surface the real MVP scope." },
  { k: "Design", v: "Generate concepts from IDDS components only." },
  { k: "Validate", v: "Check consistency, voice, and system alignment." },
  { k: "Prototype", v: "Hand off something clickable, fast." },
];

export const ocx: CaseStudy = {
  slug: "ocx",
  breadcrumb: "The OCX",
  meta2: "Oct–Dec 2025",
  titleA: "Making card trading ",
  accent: "fraud-proof",
  titleB: " — and worth more.",
  lead:
    "Before OCX, collectors traded Pokémon cards through events and Facebook groups — and got burned constantly. Fake cards, sellers who vanished after payment, conditions that didn’t match the photos. I helped design a marketplace where OCX sits in the middle and AI grades every card, so a trade is finally something you can trust.",
  quickStats: [
    { k: "0", v: "fraud cases" },
    { k: "60%", v: "seller adoption" },
    { k: "46%", v: "explore → purchase" },
  ],
  links: [
    { label: "Visit website", href: "https://www.theocx.com/" },
    { label: "Get the app", href: "https://play.google.com/store/apps/details?id=com.theocx.mobile&hl=id" },
  ],
  hero: { src: "/logos/ocx-case-hero.jpg", alt: "The OCX — web product page and mobile app", objectPosition: "center" },
  meta: [
    { k: "Role", v: "Product Designer" },
    { k: "Team", v: "3 designers · 3 engineers · 1 PM" },
    { k: "Timeline", v: "Oct–Dec 2025" },
    { k: "Platform", v: "Responsive web + Android" },
  ],
  results: [
    { k: "0", t: "Fraud cases", v: "Everything clears validation inside OCX, so the old scams simply can’t happen." },
    { k: "60%", t: "Seller adoption", v: "Over 30 of the first 100 sign-ups had sold within two months of launch." },
    { k: "46%", t: "Explore → purchase", v: "Nearly half of browsing sessions converted to a buy." },
  ],
  lessons: [
    { q: "Community is the foundation of trust. Build security people can feel and they’ll bring the rest.", s: "What I’d carry forward" },
    { q: "AI pre-grading erased the doubt that used to stop people mid-purchase — proof beats promises.", s: "What I’d carry forward" },
  ],
};

export const ocxObs = [
  "Buyers got fakes that looked nothing like the listing photos.",
  "Sellers vanished the moment the money landed.",
  "Cards arrived in worse shape than described — or never arrived at all.",
];
export const ocxDiscover: KV[] = [
  { k: "Condition is the whole game", v: "A card’s worth lives or dies by its grade — PSA, TAG and the rest. A tiny corner ding can swing the price wildly." },
  { k: "Near-perfect cards are gold", v: "People hunt cards that could grade high, then flip or hold them — a near-mint pull can be worth many times its face price." },
  { k: "Hype makes things scarce", v: "Trends move fast. A card everyone wants today gets rare and expensive tomorrow." },
  { k: "Nobody vouches for anything", v: "There was no neutral party checking that a card’s condition — or its price — was real." },
  { k: "Community is the trust", v: "People believed other collectors before they believed any platform. That’s where confidence already lived." },
];
export const ocxDefine: NumKV[] = [
  { n: "01", k: "A referee in the middle", v: "Someone neutral has to hold the transaction so neither side can get burned." },
  { n: "02", k: "A way to price a card honestly", v: "Collectors needed a tool that says what a card is actually worth, by its real condition." },
  { n: "03", k: "Price that follows the hype", v: "Scarcity and trend drive value — the platform had to show that, not hide it." },
];
export const ocxDecisions: NumKV[] = [
  { n: "1", k: "OCX sits in the middle", v: "The deal happens between the seller and OCX — not stranger to stranger. The seller ships to OCX; the buyer just runs an AI pre-grade and buys. We handle the risky part." },
  { n: "2", k: "AI pre-grade in the vault", v: "Inside the OCX vault we grade each card 1:1 against PSA-style criteria, so the condition on the listing is the condition you get." },
  { n: "3", k: "Show the price trend", v: "We surface each card’s price history so people have a real anchor for what to ask, or what to pay." },
];
export const ocxFlow: NumKV[] = [
  { n: "01", k: "List & pre-grade", v: "Seller lists a card and runs an AI pre-grade to see its likely score." },
  { n: "02", k: "Ship to OCX", v: "The card goes to the OCX vault — not directly to a buyer." },
  { n: "03", k: "Grade & verify", v: "We check it 1:1 against PSA-style criteria and confirm condition." },
  { n: "04", k: "Live & sold", v: "It goes on the marketplace, graded and priced — buyers just buy." },
];
export const ocxEng: KV[] = [
  { k: "What counts toward a grade", v: "We worked out, with engineering, exactly which PSA aspects (centering, corners, edges, surface) the AI scoring would read — so the score meant something real." },
  { k: "How long the journey takes", v: "We mapped the timeline from listing submitted → shipped to OCX → graded → live on the marketplace, so promises matched what the system could actually deliver." },
];
export const ocxBuild: KV[] = [
  { k: "Home & explore", v: "Browse what’s live, trending, and newly verified." },
  { k: "Product detail page", v: "Grade, vault price, and the card’s price trend in one place." },
  { k: "Seller order management", v: "Track a listing from submitted to shipped to sold." },
  { k: "AI pre-grade flow", v: "A quick read on a card’s likely score before it ever ships." },
];

export const legion: CaseStudy = {
  slug: "legion",
  breadcrumb: "Legion Design System",
  meta2: "Telkom Indonesia · Jan–Oct 2025",
  titleA: "One system for 24 brands and ",
  accent: "hundreds",
  titleB: " of people building.",
  lead:
    "Telkom Indonesia ships a lot of products, across a lot of brands. Every team kept rebuilding the same buttons — just never the same way. I led Legion, a multi-brand design system, steering a team of 20 designers and 20 engineers to make one set of parts that works everywhere.",
  quickStats: [
    { k: "24", v: "brands served" },
    { k: "600+", v: "designers & engineers" },
    { k: "3", v: "platforms supported" },
  ],
  links: [{ label: "Visit website", href: "https://legion.digitaltelkom.id/" }],
  hero: { src: "/logos/legion-hero.png", alt: "Legion Design System homepage", bg: "#fff", objectPosition: "top left" },
  meta: [
    { k: "Role", v: "Design System Lead" },
    { k: "Team", v: "20 designers · 20 engineers" },
    { k: "Timeline", v: "Jan–Oct 2025" },
    { k: "Scope", v: "24 brands · 3 platforms" },
  ],
  results: [
    { k: "4×", t: "Faster delivery", v: "And a clear lift in team productivity." },
    { k: "80%", t: "Design-to-dev accuracy", v: "What shipped finally matched what was designed." },
    { k: "10×", t: "Asset reuse", v: "Consistency across every brand and platform." },
  ],
  lessons: [
    { q: "A design system is a product, and its customers are the teams using it. Treating it that way changed everything.", s: "What I’d carry forward" },
    { q: "Numbers earned the buy-in. Agreeing on success metrics up front is what got stakeholders on board.", s: "What I’d carry forward" },
  ],
};

export const lgnDiscover: KV[] = [
  { k: "Same work, many times over", v: "Designers and engineers kept rebuilding parts that already existed somewhere else." },
  { k: "Design said one thing, code another", v: "What shipped drifted from what was designed, so quality was a coin toss." },
  { k: "Scale made it worse", v: "More brands, teams, and frameworks meant the cracks multiplied as we grew." },
];
export const lgnTargets: KV[] = [
  { k: "2×", v: "Faster delivery and higher team productivity." },
  { k: "60%", v: "Accuracy between design and development output." },
  { k: "3×", v: "Asset reuse across the multi-brand platforms." },
];
export const lgnStrategy: NumKV[] = [
  { n: "1", k: "One source of truth", v: "A single library of parts that every product pulls from." },
  { n: "2", k: "Design and code in sync", v: "Assets and components matched in real time, so handoff stops being a translation job." },
  { n: "3", k: "Built for many brands", v: "Themeable foundations — one component, any brand, any platform." },
  { n: "4", k: "An open community", v: "An internal open-source channel so every team can contribute and adopt." },
];
export const lgnDeliver: KV[] = [
  { k: "UI Kit + Library", v: "Cross-platform, integrated in real time." },
  { k: "Templates & patterns", v: "Tested, standardized, ready to reuse." },
  { k: "Plugins & handover", v: "Instant handover, plus AI/MCP integration." },
  { k: "Docs site + app", v: "Assets, guidelines, and standards in one place." },
];

export const pijar: CaseStudy = {
  slug: "pijar",
  breadcrumb: "Pijar — Teacher’s Portal",
  meta2: "Apr–Jun 2023",
  titleA: "Cutting school onboarding from ",
  accent: "two weeks",
  titleB: " to two days.",
  lead:
    "Pijar helps schools run digital exams, attendance, and admin. The catch: getting a new school set up took up to two weeks, and someone from our team had to walk them through every step. I led the redesign of that first-run experience so admins could do it themselves — in an afternoon, not a fortnight.",
  quickStats: [
    { k: "680+", v: "schools supported" },
    { k: "408K", v: "students reached" },
    { k: "29", v: "provinces in Indonesia" },
  ],
  links: [{ label: "Visit website", href: "https://pijarsekolah.id/" }],
  hero: { src: "/logos/pijar-hero-wizard.png", alt: "Pijar — school data migration wizard screens", bg: "#eef1f7", objectPosition: "center" },
  meta: [
    { k: "Role", v: "Product Design Lead — end-to-end" },
    { k: "Timeline", v: "Apr–Jun 2023" },
    { k: "Platform", v: "Pijar — Teacher’s Portal (web)" },
    { k: "Focus", v: "Self-serve onboarding" },
  ],
  results: [
    { k: "85%", t: "Faster setup", v: "Two weeks of hand-holding became an afternoon." },
    { k: "+40%", t: "More schools activating", v: "Setup finally worked without us in the room." },
    { k: "−60%", t: "Less leaning on support", v: "Ops stopped being the bottleneck — and said so." },
  ],
  lessons: [
    { q: "Start with the data, not the screens. Seeing what people actually keep made the priorities obvious.", s: "What I’d take forward" },
    { q: "Pull the rest of the team in early. Engineering and ops caught things I’d have missed on my own.", s: "What I’d take forward" },
  ],
};

export const pijarDiscover: KV[] = [
  { k: "They already live in DAPODIK", v: "Every school keeps clean, standardized records there. Asking them to re-enter it felt like busywork — because it was." },
  { k: "They lean on support", v: "Admins would rather wait for our team to do the input than risk getting it wrong themselves." },
  { k: "Migration was a slog", v: "Moving structured data meant retyping it field by field. Slow, easy to fumble, and hard to finish alone." },
];
export const pijarObs = [
  "People jumped between sections without finishing one — so submissions came in half-empty.",
  "Inputs failed a lot, because the format we expected was never spelled out.",
  "Given the choice, everyone reached for the Excel upload over typing.",
];
export const pijarDefine: NumKV[] = [
  { n: "01", k: "Setup was a maze", v: "Fields were scattered and had to be entered one by one. It took forever and wore people down." },
  { n: "02", k: "The labels spoke a different language", v: "Field names didn’t match what schools (or DAPODIK) call things, so admins had to translate as they went." },
  { n: "03", k: "Onboarding buried the payoff", v: "So much weight sat on data entry that admins never reached the features that show why Pijar is worth it." },
];
export const pijarStrategy: NumKV[] = [
  { n: "1", k: "Make input lighter", v: "Fewer steps, clearer instructions, less to hold in your head at once." },
  { n: "2", k: "Speak DAPODIK", v: "Take the files schools already have, and map the columns for them." },
  { n: "3", k: "Guide, don’t dump", v: "A clear path with checkpoints and a finish line you can actually see." },
  { n: "4", k: "Keep listening", v: "Test, ship, watch, adjust — with the ops team feeding back in real time." },
];
export const pijarUT: KV[] = [
  { k: "Icons alone confused people", v: "Icon-only buttons left less technical users guessing. We added labels and tooltips." },
  { k: "“Am I done?”", v: "One overall tag wasn’t enough — people wanted to know which rows still needed work. We added per-row status." },
  { k: "Upload vs. Tambah Data", v: "The two weren’t telling themselves apart. We spelled it out: one is manual entry, the other takes a file." },
];

export const caseStudies: Record<string, CaseStudy> = { idds, ocx, legion, pijar };
