import Project from "@/app/ui/portfolio/projects/Project";
import { projects } from "@/app/lib/project-data";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = projects.find((project) => project.id === id);
  if (!project) {
    // Fallback UI for undefined project
    return <div>Project not found</div>;
  }
  return (
    <>
      <Project {...project} />
      {/* <Project
        id={project.id}
        title={project.title}
        content={project.content}
        date={project.date}
        tags={project.tags}
        image1={project.image1}
        image2={project.image2}
        image3={project.image3}
        image4={project.image4}
      /> */}
    </>
  );
}
