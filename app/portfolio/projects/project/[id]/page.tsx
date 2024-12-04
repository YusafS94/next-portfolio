import Project from "@/app/ui/portfolio/projects/Project";
import { projects } from "@/app/lib/placeholder-data";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = projects.find((project) => project.id === id);
  return (
    <>
      <Project {...project} />
    </>
  );
}
