"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FunnelIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

// Define interfaces for our data structures
interface Project {
  id: number;
  title: string;
  technologies: string[];
  // Add other project properties as needed
  description?: string;
  imageUrl?: string;
  url?: string;
  live_link?: string;
  github?: string;
  case_study?: string;
  links?: { name: string; link: string }[];
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
      links: [
        { name: "live", link: "#" },
        { name: "case-study", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Project 2",
      technologies: ["WordPress"],
      description: "This is a sample project description",
      imageUrl: "",
      links: [{ name: "live", link: "#" }],
    },
    {
      id: 3,
      title: "Project 3",
      technologies: ["React", "Node.js"],
      description: "This is a sample project description",
      imageUrl: "",
      links: [
        { name: "live", link: "#" },
        { name: "case-study", link: "#" },
      ],
    },
    {
      id: 4,
      title: "Project 4",
      technologies: ["WordPress", "PHP"],
      description: "This is a sample project description",
      imageUrl: "",
      links: [
        { name: "link", link: "#" },
        { name: "case-study", link: "#" },
      ],
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
      <div className="md:w-3/12 border-r border-lines-1">
        <div className="flex mb-4 border-b border-lines-1 py-2">
          <FunnelIcon className="h-6 w-5 ml-4" />
          <h2 className="text-md font-bold flex items-center ml-2">filters</h2>
        </div>
        <div className="space-y-2 px-4">
          {filterOptions.map((technology: Technology) => (
            <label key={technology} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedFilters.includes(technology)}
                onChange={() => handleFilterChange(technology)}
                className="form-checkbox bg-primary-2 border-secondary-1 rounded-sm"
              />
              <span>{technology}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="md:w-9/12 p-4 overflow-scroll">
        <h2 className="text-lg font-bold mb-4">
          Projects ({filteredProjects.length})
        </h2>
        <div className="flex flex-wrap">
          {filteredProjects.map((project: Project) => (
            <div className="w-full lg:w-4/12">
              <div
                key={project.id}
                className="m-2 rounded-3xl border border-lines-1 bg-primary-3 flex flex-col justify-around"
              >
                <div className="h-auto max-h-full">
                  <Image
                    src={project.imageUrl || "/images/project-fallback.jpg"}
                    alt="Project Image"
                    width={200}
                    height={0}
                    style={{
                      width: "100%",
                      height: "150px",
                      justifySelf: "center",
                    }}
                    className="rounded-t-3xl object-cover h-40 w-full"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>

                  {/* <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}

                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.links?.map((link) => (
                      <Link
                        key={link.name}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1 text-xs font-medium border border-secondary-4 rounded text-secondary-4 bg-lines-1 hover:bg-secondary-1 hover:text-white transition"
                      >
                        {link.name}
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 inline-block ml-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
