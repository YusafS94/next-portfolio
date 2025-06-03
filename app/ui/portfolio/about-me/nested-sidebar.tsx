"use client";

import React, { useState } from "react";
import {
  ChevronDownIcon,
  FolderIcon,
  FolderOpenIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Bio from "@/app/ui/portfolio/about-me/bio";
import Interests from "@/app/ui/portfolio/about-me/interests";
import Education from "@/app/ui/portfolio/about-me/education";
import Experience from "@/app/ui/portfolio/about-me/experience";
import HardSkills from "@/app/ui/portfolio/about-me/hard-skills";
import SoftSkills from "@/app/ui/portfolio/about-me/soft-skills";
import Sports from "@/app/ui/portfolio/about-me/sports";
import FavouriteGames from "@/app/ui/portfolio/about-me/favourite-games";

export const contentComponents: {
  [outerId: string]: {
    [innerId: string]: React.ReactNode;
  };
} = {
  "professional-info": {
    experience: <Experience />,
    "hard-skills": <HardSkills />,
    "soft-skills": <SoftSkills />,
  },
  "personal-info": {
    bio: <Bio />,
    interests: <Interests />,
    education: <Education />,
  },
  "hobbies-info": {
    sports: <Sports />,
    "favourite-games": <FavouriteGames />,
  },
};

type OuterNavItem = {
  id: string;
  label: string;
  icon: string;
};

type InnerNavItem = {
  id: string;
  label: string;
};

type InnerNavItems = {
  [key: string]: InnerNavItem[];
};

const outerNavItems: OuterNavItem[] = [
  {
    id: "professional-info",
    label: "Professional Info",
    icon: "code-bracket-square-light",
  },
  {
    id: "personal-info",
    label: "Personal Info",
    icon: "user-light",
  },
  {
    id: "hobbies-info",
    label: "Hobbies Info",
    icon: "face-smile-light",
  },
];

const innerNavItems: InnerNavItems = {
  "professional-info": [
    { id: "experience", label: "Experience" },
    { id: "hard-skills", label: "Hard Skills" },
    { id: "soft-skills", label: "Soft Skills" },
  ],
  "personal-info": [
    { id: "bio", label: "Bio" },
    { id: "interests", label: "Interests" },
    { id: "education", label: "Education" },
  ],
  "hobbies-info": [
    { id: "sports", label: "Sports" },
    { id: "favourite-games", label: "Favourite Games" },
  ],
};

export default function CustomNestedSidebar() {
  const [activeOuterItem, setActiveOuterItem] = useState<string | null>(
    "professional-info"
  );
  const [activeInnerItem, setActiveInnerItem] = useState<string | null>(
    "experience"
  );

  const toggleOuterItem = (itemId: string) => {
    setActiveOuterItem((prevState) => (prevState === itemId ? null : itemId));
    setActiveInnerItem(null);
  };

  const toggleInnerItem = (itemId: string) => {
    setActiveInnerItem((prevState) => (prevState === itemId ? null : itemId));
    // setActiveInnerItem(null);
  };

  const selectInnerItem = (itemId: string) => {
    setActiveInnerItem(itemId);
  };

  return (
    <div className="border-r border-lines-1 bg-primary-2  w-full">
      {/* Mobile Navigation (visible up to md breakpoint) */}
      <div className="md:hidden">
        <nav className="text-secondary-4 p-0">
          {/* <h2 className="text-xl font-bold mb-4">Nested Sidebar</h2> */}
          <ul className="">
            {outerNavItems.map((outerItem, item) => (
              <li key={outerItem.id} className="border-b border-primary-2">
                <button
                  onClick={() => toggleOuterItem(outerItem.id)}
                  className="w-full text-left p-2 flex justify-between items-center bg-primary-2 hover:bg-secondary-1"
                >
                  {outerItem.id}
                  <ChevronDownIcon
                    className={`w-4 h-4 ${
                      activeOuterItem === outerItem.id
                        ? "text-accent-2 rotate-180"
                        : "text-accent-1 -rotate-90"
                    }`}
                  />
                </button>
                {activeOuterItem === outerItem.id && (
                  <ul className="space-y-2">
                    {innerNavItems[outerItem.id].map((innerItem) => (
                      <li key={innerItem.id}>
                        <button
                          onClick={() => toggleInnerItem(innerItem.id)}
                          className={`w-full text-left p-2 rounded flex items-center gap-2 ${
                            activeInnerItem === innerItem.id
                              ? "border-b border-accent-1 rounded-none"
                              : "hover:bg-secondary-1"
                          }`}
                        >
                          <span className="ml-1">
                            {activeInnerItem === innerItem.id ? (
                              <ChevronDownIcon className="w-4 h-4 text-accent-2" />
                            ) : (
                              <ChevronDownIcon className="w-4 h-4 text-accent-1 -rotate-90" />
                            )}
                          </span>
                          {innerItem.id}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Content area */}
        <main className="p-4 bg-primary-3">
          {activeInnerItem && activeOuterItem && (
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-4 underline">
                {activeInnerItem}
              </h1>
              {contentComponents[activeOuterItem]?.[activeInnerItem] ?? (
                <p className="text-gray-400">No content available.</p>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Desktop layout (visible from md breakpoint and above) */}
      <div className="hidden md:flex h-full bg-primary-3">
        {/* Outer navigation */}
        <nav className="border-r border-lines-1 bg-primary-2">
          {/* <h2 className="text-xl font-bold mb-4">Nested Sidebar</h2> */}
          <ul className="">
            {outerNavItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => toggleOuterItem(item.id)}
                  className={`w-full text-left p-4 ${
                    activeOuterItem === item.id
                      ? "border-l-2 border-l-orange-600"
                      : "hover:bg-lines-1"
                  }`}
                >
                  <Image
                    className="w-6 h-6"
                    src={`/heroicons-solid/${item.icon}.svg`}
                    alt=""
                    width={20}
                    height={20}
                  />

                  {/* {item.label} */}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Inner navigation */}
        {activeOuterItem && (
          <nav className="w-56 border-r border-lines-1 bg-primary-2">
            <div className="border-b border-lines-1 flex items-center justify-start gap-2 p-2">
              <ChevronDownIcon className="w-4 h-4" />
              <span className="">
                {outerNavItems.find((item) => item.id === activeOuterItem)?.id}
              </span>
            </div>
            <ul className="space-y-2 border-b border-lines-1">
              {innerNavItems[activeOuterItem].map((innerItem) => (
                <li key={innerItem.id}>
                  <button
                    onClick={() => toggleInnerItem(innerItem.id)}
                    className={`flex gap-2 items-center w-full text-left rounded px-4 pt-2 ${
                      activeInnerItem === innerItem.id
                        ? "text-secondary-4"
                        : "hover:text-white"
                    }`}
                  >
                    <span className="text-xl">
                      {activeInnerItem === innerItem.id ? (
                        <FolderIcon className="w-4 h-4 text-accent-2" />
                      ) : (
                        <FolderPlusIcon className="w-4 h-4 text-accent-1" />
                      )}
                    </span>
                    {innerItem.id}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Desktop content area */}
        <main className="flex-1">
          {activeInnerItem && activeOuterItem && (
            <div className="flex flex-col h-full">
              <div className="border-b border-lines-1">
                <div className="p-2 border-r border-lines-1 bg-primary-2 inline-block">
                  <p className="inline">{activeInnerItem} </p>
                  &nbsp; &nbsp; &#120;
                </div>
              </div>
              <div className="p-4 bg-primary-3 h-full">
                {/* <h1 className="text-xl md:text-2xl font-bold mb-4 underline">{activeInnerItem}</h1> */}
                {contentComponents[activeOuterItem]?.[activeInnerItem] ?? (
                  <p className="text-gray-400">No content available.</p>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
