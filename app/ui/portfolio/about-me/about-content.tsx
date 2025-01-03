"use client";
import { useState } from "react";
import developerConfig from "@/app/lib/developer.json";
import { info } from "console";

export default function AboutContent() {
  // Content mapping for dynamic rendering
  const content = {
    experience: (
      <div>
        <h2>
          {
            developerConfig.about.sections["professional-info"].info[
              "experience"
            ].title
          }
        </h2>
        <p>
          {
            developerConfig.about.sections["professional-info"].info.experience
              .description
          }
        </p>
      </div>
    ),
    hard_skills: (
      <div>
        <h2>
          {
            developerConfig.about.sections["professional-info"].info[
              "hard-skills"
            ].title
          }
        </h2>
        <p>
          {
            developerConfig.about.sections["professional-info"].info[
              "hard-skills"
            ].description
          }
        </p>
      </div>
    ),
    soft_skills: (
      <div>
        <h2>
          {
            developerConfig.about.sections["professional-info"].info[
              "soft-skills"
            ].title
          }
        </h2>
        <p>
          {
            developerConfig.about.sections["professional-info"].info[
              "soft-skills"
            ].description
          }
        </p>
      </div>
    ),
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
            {
              developerConfig.about.sections["professional-info"].info[
                "experience"
              ].title
            }
          </button>
          <button
            className="border-b-2 border-r-2 border-lines-1 p-2 w-36"
            onClick={() => setSelectedSection("hard_skills")}
          >
            {
              developerConfig.about.sections["professional-info"].info[
                "hard-skills"
              ].title
            }
          </button>
          <button
            className="border-b-2 border-r-2 border-lines-1 p-2 w-36"
            onClick={() => setSelectedSection("soft_skills")}
          >
            {
              developerConfig.about.sections["professional-info"].info[
                "soft-skills"
              ].title
            }
          </button>
        </div>
        {/* Main Content Area */}
        <main style={{ padding: "20px", flex: 1 }}>
          {content[selectedSection] || <p>Invalid section selected</p>}
        </main>
      </div>
    </>
  );
}
