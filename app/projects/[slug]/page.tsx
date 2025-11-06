import { notFound } from "next/navigation";
import { projectList } from "@/constant/constant";
import ProjectDetail from "@/components/Projects/ProjectDetail";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export default async function ProjectSlugPage({ params }: Props) {
  const { slug } = await params; //
  const project = projectList.find((p) => p.slug === slug);
  if (!project) return notFound();
  return <ProjectDetail project={project} />;
}

export function generateStaticParams() {
  return projectList.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params; //
  const p = projectList.find((x) => x.slug === slug);
  return {
    title: p ? `${p.title} — Projects` : "Project",
    description: p?.overview ?? "Project detail",
  };
}
