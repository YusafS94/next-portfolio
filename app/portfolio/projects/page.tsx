"use client";
import React, { useState } from "react";
import Link from "next/link";

// Define interfaces for our data structures
interface Project {
  id: number;
  title: string;
  technologies: string[];
  // Add other project properties as needed
  description?: string;
  imageUrl?: string;
  url?: string;
}

// Props interface if we need to pass props to this component
interface ProjectsPageProps {
  // Add any props if needed
  className?: string;
}

// Technology type to ensure consistent usage
type Technology = "React" | "WordPress" | "TypeScript" | "Node.js" | "PHP";

const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  // State with type annotation
  const [selectedFilters, setSelectedFilters] = useState<Technology[]>([]);

  // Sample projects array with type annotation
  const projects: Project[] = [
    { id: 1, title: "Project 1", technologies: ["React", "TypeScript"], url: "/portfolio/projects/project/1" },
    { id: 2, title: "Project 2", technologies: ["WordPress"] , url: "/portfolio/projects/project/2"},
    { id: 3, title: "Project 3", technologies: ["React", "Node.js"] , url: "/portfolio/projects/project/3"},
    { id: 4, title: "Project 4", technologies: ["WordPress", "PHP"] , url: "/portfolio/projects/project/4"},
  ];

  // Filter options with type annotation
  const filterOptions: Technology[] = [
    "React",
    "WordPress",
    "TypeScript",
    "Node.js",
    "PHP",
  ];

  // Handler with type annotation
  const handleFilterChange = (technology: Technology): void => {
    setSelectedFilters((prev) => {
      if (prev.includes(technology)) {
        return prev.filter((filter) => filter !== technology);
      } else {
        return [...prev, technology];
      }
    });
  };

  // Filter function with type annotations
  const filteredProjects: Project[] = projects.filter(
    (project: Project): boolean => {
      if (selectedFilters.length === 0) return true;

      return project.technologies.some((tech: string): boolean =>
        selectedFilters.includes(tech as Technology)
      );
    }
  );

  return (
    <section className="flex flex-col md:flex-row grow">
      {/* Filters Column */}
      <div className="w-3/12 p-4 border-2">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <div className="space-y-2">
          {filterOptions.map((technology: Technology) => (
            <label key={technology} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedFilters.includes(technology)}
                onChange={() => handleFilterChange(technology)}
                className="form-checkbox"
              />
              <span>{technology}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-9/12 p-4 border-2">
        <h2 className="text-lg font-bold mb-4">
          Projects ({filteredProjects.length})
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="w-80 p-4 rounded-lg border-2">
              <h3 className="font-bold">{project.title}</h3>
              <Link href={`/portfolio/projects/project/${project.id}`}> Link </Link>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm bg-gray-100 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
