"use client";
import { useState } from "react";

export default function AboutHobTabs() {
  // Content mapping for dynamic rendering
  const content = {
    sports: (
      <div>
        <h2>Sports</h2>
        <p>Details about your favourite sports.</p>
      </div>
    ),
    favourite_games: (
      <div>
        <h2>Favourite Games</h2>
        <p>Details about your favourite games or movies.</p>
      </div>
    ),
  };
  // State to track the selected nav item
  const [selectedSection, setSelectedSection] =
    useState<keyof typeof content>("sports");
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-start">
          <button
            className="border-b-2 border-r-2 border-t-2 border-lines-1 p-2 w-36"
            onClick={() => setSelectedSection("sports")}
          >
            Sports
          </button>
          <button
            className="border-b-2 border-r-2 border-lines-1 p-2 w-36"
            onClick={() => setSelectedSection("favourite_games")}
          >
            Favourite Games
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
