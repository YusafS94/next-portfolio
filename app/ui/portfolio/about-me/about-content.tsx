"use client";
import { useState } from "react";

export default function AboutContent() {
  // Content mapping for dynamic rendering
  const content = {
    experience: (
      <div>
        <h2>Experience</h2>
        <p>Details about your professional experience and skills.</p>
      </div>
    ),
    hard_skills: (
      <div>
        <h2>Hard Skills</h2>
        <p>Details about your Hard Technical Skills.</p>
      </div>
    ),
    soft_skills: (
      <div>
        <h2>Soft Skills</h2>
        <p>Details about your Soft Skills and interests.</p>
      </div>
    ),
  };
  // State to track the selected nav item
  const [selectedSection, setSelectedSection] = useState("experience");
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-start">
          <button className="border-b-2 border-r-2 border-t-2 border-lines-1 p-2 w-36" onClick={() => setSelectedSection("experience")}>Experience</button>
          <button className="border-b-2 border-r-2 border-lines-1 p-2 w-36" onClick={() => setSelectedSection("hard_skills")}>Hard Skills</button>
          <button className="border-b-2 border-r-2 border-lines-1 p-2 w-36" onClick={() => setSelectedSection("soft_skills")}>Soft Skills</button>
        </div>
        {/* Main Content Area */}
        <main style={{ padding: "20px", flex: 1 }}>
          {/* <h1 className="text-2xl">{content.experience.title}</h1> */}
          {content[selectedSection]}
        </main>
      </div>
    </>
  );
}
