"use client";
import { useState } from "react";

export default function AboutProfTabs() {
  // Content mapping for dynamic rendering
  const content = {
    experience: {
      title: "** Experience **",
      description: `In 2022, I worked for Kirklees Council for 1 year. During this time I built websites in WordPress, Elementor, HTML, CSS (Foundation framework) and JavaScript. After graduation, I built websites as a freelancer including building a custom WordPress theme for a skating company based in Halifax. I am currently also working with React, Next.js, TypeScript, Tailwind and shadcn.`,
    },
    hard_skills: {
      title: "** Hard Skills **",
      description: [
        "HTML, CSS, JavaScript",
        "Tailwind/Bootstrap",
        "React/Next.js",
        "WordPress/Elementor/WooCommerce",
        "Custom Theme Development",
        "APIs",
        "PHP",
        "SQL/MySQL",
        "MongoDB",
        "Node/Express/Axios",
      ],
    },
    soft_skills: {
      title: "** Soft Skills **",
      description: `During 3 years of university I was the team project leader for every one of the team project modules, leading the team from start to finish with A/A* grades (70% minimum) every time. During placement, I also regularly liaised with clients: leading initial meetings, gathering user/project requirements and setting deadlines and tasks. Juggling between 3 to 5 projects at any one time.`,
    },
  };
  // State to track the selected nav item
  const [selectedSection, setSelectedSection] =
    useState<keyof typeof content>("experience");
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-start">
          <button
            className="border-b-2 border-r-2 border-t-2 border-lines-1 p-2 w-36"
            onClick={() => setSelectedSection("experience")}
          >
            Experience
          </button>
          <button
            className="border-b-2 border-r-2 border-lines-1 p-2 w-36"
            onClick={() => setSelectedSection("hard_skills")}
          >
            Hard Skills
          </button>
          <button
            className="border-b-2 border-r-2 border-lines-1 p-2 w-36"
            onClick={() => setSelectedSection("soft_skills")}
          >
            Soft Skills
          </button>
        </div>
        {/* Main Content Area */}
        <main>
          {/* {content[selectedSection].title || <p>Invalid section selected</p>} */}
          <div className="output flex items-center justify-center">
            <div className="p-4 hidden md:flex flex-row gap-4 overflow-auto">
              <div className="numbers text-right">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
              </div>
              <div className="numbers text-left">
                <p>/**</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*/</p>
              </div>
              <div className="code flex flex-col">
                <p className="text-secondary-1 inline">
                  <br />
                  {content[selectedSection].title || (
                    <p>Invalid section selected</p>
                  )}
                  <br />
                  {Array.isArray(content[selectedSection].description) ? (
                    content[selectedSection].description.map((desc, index) => (
                      <p key={index}>{desc}</p> // Render each item in the description array
                    ))
                  ) : (
                    <p>
                      {content[selectedSection].description ||
                        "Invalid section selected"}
                    </p> // If not an array, just render the description
                  )}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
