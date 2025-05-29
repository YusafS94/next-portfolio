"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FunnelIcon,
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

// Define interfaces for our data structures
interface Project {
  id: number;
  title: string;
  technologies: string[];
  // Add other project properties as needed
  description?: string;
  imageUrl?: string;
  links?: { name: string; link: string }[];
}

// Props interface if we need to pass props to this component
interface ProjectsPageProps {
  // Add any props if needed
  className?: string;
}

// Technology type to ensure consistent usage
type Technology =
  | "React"
  | "Next.js"
  | "WordPress"
  | "PHP"
  | "TypeScript"
  | "Node.js"
  | "Tailwind CSS"
  | "JavaScript"
  | "Framer"
  | "Webflow"
  | "Three.js"
  | "Spline"
  | "Figma"
  | "HTML"
  | "CSS"
  | "GitHub"
  | "Git"
  | "Vercel"
  | "Netlify"
  | "Firebase"
  | "MongoDB"
  | "PostgreSQL"
  | "MySQL"
  | "Prisma"
  | "Supabase"
  | "Cloudinary"
  | "Stripe"
  | "Auth0"
  | "NextAuth.js"
  | "Socket.io"
  | "Express.js"
  | "FastAPI"
  | "Django"
  | "Flask"
  | "GraphQL"
  | "REST API"
  | "Tailwind CSS"
  | "Bootstrap"
  | "Material UI"
  | "Chakra UI"
  | "Ant Design"
  | "Styled Components"
  | "Sass/SCSS"
  | "Less"
  | "PostCSS"
  | "Webpack"
  | "Babel"
  | "ESLint"
  | "Prettier"
  | "Jest"
  | "React Testing Library"
  | "Cypress"
  | "Playwright"
  | "Puppeteer"
  | "Storybook"
  | "Figma"
  | "Adobe XD"
  | "Sketch"
  | "InVision"
  | "Zeplin"
  | "Framer Motion"
  | "GSAP"
  | "Three.js"
  | "Babylon.js"
  | "WebGL"
  | "Canvas API"
  | "SVG"
  | "D3.js"
  | "Chart.js"
  | "ECharts"
  | "Highcharts"
  | "Plotly.js"
  | "Leaflet"
  | "Mapbox"
  | "OpenStreetMap"
  | "Google Maps API"
  | "Firebase Realtime Database"
  | "Firestore"
  | "AWS S3"
  | "AWS Lambda"
  | "AWS DynamoDB"
  | "Azure Blob Storage"
  | "Azure Functions"
  | "Google Cloud"
  | "Heroku"
  | "DigitalOcean"
  | "Linode"
  | "Vultr"
  | "Render.com"
  | "Marketing"
  | "SEO"
  | "Content Creation"
  | "Social Media Management"
  | "Email Marketing"
  | "Google Analytics"
  | "Ads"
  | "Affiliate Marketing"
  | "Influencer Marketing"
  | "Branding"
  | "Graphic Design"
  | "UI/UX Design";

const ProjectsPage = () => {
  // State with type annotation
  const [selectedFilters, setSelectedFilters] = useState<Technology[]>([]);
  const [isOpen, setIsOpen] = useState(false);

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
    "JavaScript",
    "Tailwind CSS",
    "Framer",
    "Three.js",
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
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center w-full mb-4 border-b border-lines-1 py-2 px-4"
        >
          <ChevronRightIcon
            className={`h-4 w-4 transform transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
          <h2 className="text-md font-bold ml-2">filters</h2>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out px-4 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {filterOptions.map((technology: Technology) => (
            <label key={technology} className="flex items-center space-x-4 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.includes(technology)}
                onChange={() => handleFilterChange(technology)}
                className="form-checkbox bg-primary-2 border-secondary-1 rounded-sm cursor-pointer focus:ring-2 focus:ring-secondary-4 focus:ring-opacity-50 transition duration-200 ease-in-out"
              />
              <span>{technology}</span>
            </label>
          ))}
          {/* ✅ Clear Filters Button */}
          <button
            onClick={() => setSelectedFilters([])}
            disabled={selectedFilters.length === 0}
            className={`mt-4 text-sm border rounded px-3 py-1 transition ${
              selectedFilters.length === 0
                ? "text-gray-400 border-gray-400 cursor-not-allowed"
                : "text-secondary-4 border-secondary-4 hover:text-white hover:bg-secondary-1"
            }`}
          >
            Clear filters
          </button>
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
