"use client";

import React, { useState } from "react";
import {
  ChevronDownIcon,
  FolderIcon,
  FolderOpenIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

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

type PlaceholderContent = {
  [key: string]: {
    [key: string]: string;
  };
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

const placeholderContent: PlaceholderContent = {
  "professional-info": {
    experience:
      "Experience content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    "hard-skills": "Hard skills content goes here.",
    "soft-skills": "Soft skills content goes here.",
  },
  "personal-info": {
    bio: "Bio content goes here.",
    interests: "Interests content goes here.",
    education: "Education content goes here.",
  },
  "hobbies-info": {
    sports: "Sports content goes here.",
    "favourite-games": "Favourite games content goes here.",
  },
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
    <div className="border-r border-lines-1 bg-primary-3 w-full">
      {/* Mobile Navigation (visible up to md breakpoint) */}
      <div className="md:hidden">
        <nav className="bg-gray-800 text-white p-4">
          {/* <h2 className="text-xl font-bold mb-4">Nested Sidebar</h2> */}
          <ul className="space-y-2">
            {outerNavItems.map((outerItem, item) => (
              <li key={outerItem.id}>
                <button
                  onClick={() => toggleOuterItem(outerItem.id)}
                  className="w-full text-left p-2 rounded flex justify-between items-center hover:bg-gray-700"
                >
                  {outerItem.id}

                  <Image
                    className="w-6 h-6"
                    src={`/heroicons-solid/${outerItem.icon}.svg`}
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
                {activeOuterItem === outerItem.id && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {innerNavItems[outerItem.id].map((innerItem) => (
                      <li key={innerItem.id}>
                        <button
                          onClick={() => toggleInnerItem(innerItem.id)}
                          className={`w-full text-left p-2 rounded flex items-center gap-2 ${
                            activeInnerItem === innerItem.id
                              ? "border-b border-accent-1 rounded-none"
                              : "hover:bg-gray-700"
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
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Content area */}
        <main className="p-4">
          {activeInnerItem && activeOuterItem && (
            <div>
              <h1 className="text-2xl font-bold mb-4">{activeInnerItem}</h1>
              <p>{placeholderContent[activeOuterItem][activeInnerItem]}</p>
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
              <div className="flex gap-2 p-4 bg-primary-3 h-full">
                <div className="flex flex-col items-end">
                  <p>/*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>

                  <p>*</p>
                  <p>/*</p>
                </div>
                <div className="">
                  <p>{placeholderContent[activeOuterItem][activeInnerItem]}</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
