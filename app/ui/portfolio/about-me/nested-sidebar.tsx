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
      "Having studied at the University of Huddersfield in a 4 year sandwich degree in Web Programming, I have gained a wealth of knowledge and experience in the field of web development. My studies have provided me with a strong foundation in both front-end and back-end technologies, allowing me to create dynamic and responsive web applications. Additionally, my sandwich year has given me the opportunity to apply my skills in a real-world setting, further enhancing my understanding of the industry and its best practices.",
    "hard-skills":
      "HTML, CSS, JavaScript, React, Next.js, Tailwind, PHP, SQL, Git, Node.js, Express.js, Axios, REST APIs, Webpack, Microservices, TypeScript, Framer, WordPress, WooCommerce, SEO.",
    "soft-skills":
      "Customer service, teamwork, communication, problem-solving, adaptability, time management, attention to detail, critical thinking, leadership.",
  },
  "personal-info": {
    bio: "A passionate web developer with a strong foundation in both front-end and back-end technologies. I have a keen interest in creating dynamic and responsive web applications that provide an excellent user experience. With a background in web programming from the University of Huddersfield, I am always eager to learn new technologies and improve my skills.",
    interests:
      "Martial Arts, Gaming, Technology, True Crime, Fitness, 3D Modelling, Web Development.",
    education:
      "13 GCSEs, 3 A-Levels, BSc (Hons) Web Programming from the University of Huddersfield.",
  },
  "hobbies-info": {
    sports: "MMA, UFC, ONE, Bellator.",
    "favourite-games": "Helldivers 2, Arc Raiders.",
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
        <nav className="text-white p-0">
          {/* <h2 className="text-xl font-bold mb-4">Nested Sidebar</h2> */}
          <ul className="space-y-2">
            {outerNavItems.map((outerItem, item) => (
              <li key={outerItem.id}>
                <button
                  onClick={() => toggleOuterItem(outerItem.id)}
                  className="w-full text-left p-2 flex justify-between items-center bg-gray-800 hover:bg-gray-700"
                >
                  {outerItem.id}

                  {/* <Image
                    className="w-6 h-6"
                    src={`/heroicons-solid/${outerItem.icon}.svg`}
                    alt=""
                    width={20}
                    height={20}
                  /> */}
                  <ChevronDownIcon
                    className={`w-4 h-4 ${
                      activeOuterItem === outerItem.id
                        ? "text-accent-2 rotate-180"
                        : "text-accent-1"
                    }`}
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
