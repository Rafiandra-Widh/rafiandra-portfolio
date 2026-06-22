import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, projects } from "@/lib/data";
import Idds from "@/components/cases/Idds";
import Ocx from "@/components/cases/Ocx";
import Legion from "@/components/cases/Legion";
import Pijar from "@/components/cases/Pijar";

const views: Record<string, () => React.ReactElement> = {
  idds: Idds,
  ocx: Ocx,
  legion: Legion,
  pijar: Pijar,
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies[slug];
  if (!c) return {};
  const title = `${c.breadcrumb} — Rafiandra Widhiansyah`;
  return { title, description: c.lead };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const View = views[slug];
  if (!View) notFound();
  return <View />;
}
