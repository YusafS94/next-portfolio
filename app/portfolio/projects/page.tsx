"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Define interfaces for our data structures
interface Project {
  id: number;
  title: string;
  technologies: string[];
  // Add other project properties as needed
  description?: string;
  imageUrl?: string;
  url?: string;
  link: string;
  github: string;
}

// Props interface if we need to pass props to this component
interface ProjectsPageProps {
  // Add any props if needed
  className?: string;
}

// Technology type to ensure consistent usage
type Technology = "React" | "WordPress" | "TypeScript" | "Node.js" | "PHP";

const ProjectsPage = () => {
  // State with type annotation
  const [selectedFilters, setSelectedFilters] = useState<Technology[]>([]);

  // Sample projects array with type annotation
  const projects: Project[] = [
    {
      id: 1,
      title: "Project 1",
      technologies: ["React", "TypeScript"],
      description: "This is a sample project description",
      imageUrl: "/images/desktop-dashboard.jpg",
      url: "/portfolio/projects/project/1",
      link: "https://github.com/YusafS94",
      github: "https://github.com/YusafS94",
    },
    {
      id: 2,
      title: "Project 2",
      technologies: ["WordPress"],
      description: "This is a sample project description",
      imageUrl: "/images/desktop-dashboard.jpg",
      url: "/portfolio/projects/project/2",
      link: "https://github.com/YusafS94",
      github: "https://github.com/YusafS94",
    },
    {
      id: 3,
      title: "Project 3",
      technologies: ["React", "Node.js"],
      description: "This is a sample project description",
      imageUrl: "/images/desktop-dashboard.jpg",
      url: "/portfolio/projects/project/3",
      link: "https://github.com/YusafS94",
      github: "https://github.com/YusafS94",
    },
    {
      id: 4,
      title: "Project 4",
      technologies: ["WordPress", "PHP"],
      description: "This is a sample project description",
      imageUrl: "/images/desktop-dashboard.jpg",
      url: "/portfolio/projects/project/4",
      link: "https://github.com/YusafS94",
      github: "https://github.com/YusafS94",
    },
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
      <div className="md:w-3/12 p-4 border-2">
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
      <div className="md:w-9/12 p-4 border-2 overflow-scroll">
        <h2 className="text-lg font-bold mb-4">
          Projects ({filteredProjects.length})
        </h2>
        <div className="flex flex-wrap">
          {filteredProjects.map((project: Project) => (
            <Link
              className="w-full lg:w-4/12"
              href={project.github}
              target="_blank"
            >
              {""}

              <div
                key={project.id}
                className="hover:bg-lines-1 h-80 p-4 m-2 rounded-lg border-2 flex flex-col justify-around"
              >
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
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
                <div className="h-auto max-h-full">
                  <Image
                    src={project.imageUrl || "/images/fallback.jpg"}
                    alt="Project Image"
                    width={200}
                    height={0}
                    style={{ width: "80%", height: "auto", justifySelf: "center" }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
