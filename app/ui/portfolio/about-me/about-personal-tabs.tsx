"use client";
import { useState } from "react";

export default function AboutPersTabs() {
  // Content mapping for dynamic rendering
  const content = {
    bio: (
      <div>
        <h2>Bio</h2>
        <p>Details about your personal life and life.</p>
      </div>
    ),
    interests: (
      <div>
        <h2>Interests</h2>
        <p>Details about your interests.</p>
      </div>
    ),
    education: (
      <div>
        <h2>Education</h2>
        <p>Details about your education and achievements.</p>
      </div>
    ),
  };
  // State to track the selected nav item
  const [selectedSection, setSelectedSection] =
    useState<keyof typeof content>("bio");
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-start">
          <button
            className="border-b-2 border-r-2 border-t-2 border-lines-1 p-2 w-36"
            onClick={() => setSelectedSection("bio")}
          >
            Bio
          </button>
          <button
            className="border-b-2 border-r-2 border-lines-1 p-2 w-36"
            onClick={() => setSelectedSection("interests")}
          >
            Interests
          </button>
          <button
            className="border-b-2 border-r-2 border-lines-1 p-2 w-36"
            onClick={() => setSelectedSection("education")}
          >
            Education
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
