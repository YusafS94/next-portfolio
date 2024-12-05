import { projects } from "@/app/lib/placeholder-data";
import Project from "@/app/ui/portfolio/projects/Project";
export default function Page() {
  // projects.map((project) => {
  //   return (
  //     <>
  //       <h1>{project.title}</h1>
  //     </>
  //   );
  // });
  return (
    <>
      <section className="flex grow">
        <div className="w-3/12 border-2">
          <p>filters</p>
        </div>
        <div className="w-9/12 border-2">
          <p>projects grid</p>
          <div className="flex flex-wrap justify-center gap-2">
            {projects.map((project) => (
              <div className="w-auto md:w-80 rounded-lg border-2">
                <Project key={project.id} {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
