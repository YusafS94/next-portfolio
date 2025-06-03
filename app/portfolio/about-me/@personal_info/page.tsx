"use client";
import { useState } from "react";
export default function Page() {
  const [activeTab, setActiveTab] = useState("terminal");
  return (
    <>
      <div className="flex flex-col bg-primary-2 border-b border-lines-1">
        <div className="flex bg-primary-2">

          <p
            className="border-r border-lines-1 p-2 w-full"
            onClick={() => setActiveTab("terminal2")}
          >
            terminal2
          </p>

          <p
            className="border-r border-lines-1 p-2 w-full"
            onClick={() => setActiveTab("api")}
          >
            API
          </p>
        </div>
      </div>


      {/* API Project Code */}
      {activeTab === "api" && (
        <div className="border border-lines-1 rounded-xl p-4 bg-primary-3 hidden md:flex flex-row justify-center items-center gap-12 overflow-auto w-full">
          <div className="code flex flex-col text-secondary-4">
            <p>
              <span className="text-secondary-3">GET</span>&nbsp;
              <span className="text-accent-2">/api/about</span>
            </p>
            <p>
              <span className="text-secondary-3">Status:</span>&nbsp;
              <span className="text-accent-1">200 OK</span>
            </p>
            <p>
              <span className="text-secondary-3">&#123;</span>
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-accent-1">"name"</span>
              :&nbsp;"Your Name",
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-accent-1">"location"</span>
              :&nbsp;"UK",
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-accent-1">"stack"</span>
              :&nbsp;["React", "Next.js", "TypeScript", "Tailwind"],
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-accent-1">"experience"</span>
              :&nbsp;"1 year",
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-accent-1">"recentProject"</span>
              :&nbsp;"Redesigned a client’s site with improved UX, boosting
              leads by 42%",
            </p>
            <p>
              &nbsp;&nbsp;
              <span className="text-accent-1">"currentlyLearning"</span>
              :&nbsp;["GSAP", "Three.js"],
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-accent-1">"openToWork"</span>
              :&nbsp;<span className="text-green-400">true</span>,
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-accent-1">"funFact"</span>
              :&nbsp;"My CSS is cleaner than my apartment"
            </p>
            <p>
              <span className="text-secondary-3">&#125;</span>
            </p>
          </div>
        </div>
      )}



      {/* Terminal Code V2 */}
      {activeTab === "terminal2" && (
        <div
          className={`p-4 bg-primary-2 hidden md:flex flex-row justify-center items-center gap-12 overflow-auto w-full h-full`}
        >
          <div className="code flex flex-col text-secondary-4 font-mono">
            <p>
              <span className="text-accent-1">&gt; whoami</span>
            </p>
            <p>
              "Web developer with a love for motion, React components, and clean
              UI."
            </p>
            <br />
            <p>
              <span className="text-accent-1">
                &gt; skills.includes("TypeScript")
              </span>
            </p>
            <p>true</p>
            <br />
            <p>
              <span className="text-accent-1">&gt; currentlyWorkingOn</span>
            </p>
            <p>["UI library with Framer Motion", "client SEO dashboard"]</p>
            <br />
            <p>
              <span className="text-accent-1">
                &gt; futureGoals
              </span>
            </p>
            <p>["Three.js", "Web animations", "Design systems"]</p>
          </div>
        </div>
      )}


    </>
  );
}
