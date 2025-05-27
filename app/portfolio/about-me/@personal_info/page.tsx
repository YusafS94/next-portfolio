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
            onClick={() => setActiveTab("terminal1")}
          >
            terminal
          </p>
          <p
            className="border-r border-lines-1 p-2 w-full"
            onClick={() => setActiveTab("terminal2")}
          >
            terminal2
          </p>
          <p
            className="border-r border-lines-1 p-2 w-full"
            onClick={() => setActiveTab("recent")}
          >
            recent
          </p>
          <p
            className="border-r border-lines-1 p-2 w-full"
            onClick={() => setActiveTab("bio")}
          >
            bio
          </p>
          <p
            className="border-r border-lines-1 p-2 w-full"
            onClick={() => setActiveTab("form")}
          >
            form
          </p>
          <p
            className="border-r border-lines-1 p-2 w-full"
            onClick={() => setActiveTab("api")}
          >
            API
          </p>
        </div>
      </div>
      {/* Form submit code */}
      {activeTab === "form" && (
        <div className="border border-lines-1 rounded-xl p-4 bg-primary-3 hidden md:flex flex-row justify-center items-center gap-12 overflow-auto w-full">
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
          <div className="code flex flex-col">
            <p className="text-secondary-4 inline">
              <span className="text-secondary-3">const</span>
              &nbsp;
              <span className="text-accent-2">button</span>
              &nbsp;
              <span className="text-secondary-1">&#61;</span>
              &nbsp;
              <span className="text-secondary-3">document.querySelector</span>
              &nbsp;
              <span className="text-secondary-1">&#40;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;&#35;sendBtn&#39;</span>
              &nbsp;
              <span className="text-secondary-1">&#41;&#59;</span>
            </p>
            &nbsp;
            <p className="text-secondary-4 inline">
              <span className="text-secondary-3">const</span>
              &nbsp;
              <span className="text-accent-2">message</span>
              &nbsp;
              <span className="text-secondary-1">&#61;</span>
              &nbsp;
              <span className="text-secondary-1">&#123;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;name&#39;</span>
              &nbsp;
              <span className="text-secondary-3">&#58;</span>
              &nbsp;
              <span className="text-secondary-1">&#34;Name&#34;</span>
              <span className="text-secondary-3">&#44;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;email&#39;</span>
              &nbsp;
              <span className="text-secondary-3">&#58;</span>
              &nbsp;
              <span className="text-secondary-1">&#34;Email&#34;</span>
              <span className="text-secondary-3">&#44;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;message&#39;</span>
              &nbsp;
              <span className="text-secondary-3">&#58;</span>
              &nbsp;
              <span className="text-secondary-1">&#34;Message&#34;</span>
              <span className="text-secondary-3">&#44;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;date&#39;</span>
              &nbsp;
              <span className="text-secondary-3">&#58;</span>
              &nbsp;
              <span className="text-secondary-1">&#34;Date&#34;</span>
              <br />
              <span className="text-secondary-1">&#125;</span>
              <span className="text-secondary-3">&#59;</span>
            </p>
            &nbsp;
            <p className="text-secondary-4 inline">
              <span className="text-accent-2">button</span>
              <span className="text-secondary-3">.addEventListener</span>
              &nbsp;
              <span className="text-secondary-1">&#40;</span>
              <span className="text-accent-1">&#39;click&#39;</span>
              <span className="text-secondary-1">&#41;&#44;</span>
              &nbsp;
              <span className="text-secondary-1">&#40;</span>&nbsp;
              <span className="text-secondary-1">&#41;</span>
              &nbsp;
              <span className="text-secondary-3">&#61;&#62;</span>
              &nbsp;
              <span className="text-secondary-1">&#123;</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-accent-2">form</span>
              <span className="text-secondary-3">.send</span>
              &nbsp;
              <span className="text-secondary-1">&#40;</span>
              <span className="text-accent-2">message</span>
              <span className="text-secondary-1">&#41;</span>
              <span className="text-secondary-3">&#59;</span>
              <br />
              <span className="text-secondary-1">&#125;</span>
              <span className="text-secondary-1">&#41;&#59;</span>
            </p>
          </div>
        </div>
      )}

      {/* API Project Code */}
      {activeTab === "api" && (
        <div className="border border-lines-1 rounded-xl p-4 bg-primary-3 hidden md:flex flex-row justify-center items-center gap-12 overflow-auto w-full">
          <div className="numbers text-right">
            {Array.from({ length: 14 }, (_, i) => (
              <p key={i} className="text-secondary-4">
                {i + 1}
              </p>
            ))}
          </div>
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

      {/* Terminal Code V1 */}
      {activeTab === "terminal1" && (
        <div className="border border-lines-1 rounded-xl p-4 bg-primary-3 hidden md:flex flex-row justify-center items-center gap-12 overflow-auto w-full">
          <div className="numbers text-right">
            {Array.from({ length: 14 }, (_, i) => (
              <p key={i} className="text-secondary-4">
                {i + 1}
              </p>
            ))}
          </div>
          <div className="code flex flex-col text-secondary-4 font-mono">
            <p>
              <span className="text-accent-1">
                &gt; booting up developer profile...
              </span>
            </p>
            <p>
              <span className="text-accent-2">✔</span> loaded&nbsp;
              <span className="text-accent-1">React Dev Tools</span>
            </p>
            <p>
              <span className="text-accent-2">✔</span> installed&nbsp;
              <span className="text-accent-1">Next.js</span>&nbsp;framework
            </p>
            <p>
              <span className="text-accent-2">✔</span> connected&nbsp;
              <span className="text-accent-1">Tailwind CSS</span>&nbsp;pipeline
            </p>
            <p>
              <span className="text-accent-2">✔</span> authenticated as&nbsp;
              <span className="text-accent-1">"yourname.dev"</span>
            </p>
            <p>
              <span className="text-accent-2">✔</span> deployed&nbsp;
              <span className="text-accent-1">Client Project: UX Redesign</span>
            </p>
            <p>
              <span className="text-accent-2">✔</span> compiling&nbsp;
              <span className="text-accent-1">portfolio build...</span>
            </p>
            <p>
              <span className="text-accent-2">✔</span> rendering&nbsp;
              <span className="text-accent-1">clean, responsive UI</span>
            </p>
            <p>
              <span className="text-accent-2">✔</span> learning&nbsp;
              <span className="text-accent-1">GSAP + Three.js</span>
            </p>
            <p>
              <span className="text-accent-2">✔</span> system ready. say hi 👋
            </p>
          </div>
        </div>
      )}

      {/* Terminal Code V2 */}
      {activeTab === "terminal2" && (
        <div
          className={`p-4 bg-primary-2 hidden md:flex flex-row justify-center items-center gap-12 overflow-auto w-full h-full`}
        >
          <div className="numbers text-right">
            {Array.from({ length: 9 }, (_, i) => (
              <p key={i} className="text-secondary-4">
                {i + 1}
              </p>
            ))}
          </div>
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
                &gt; futureGoals.map(g =&gt; learn(g))
              </span>
            </p>
            <p>["Three.js", "Web animations", "Design systems"]</p>
          </div>
        </div>
      )}

      {/* Recent Project Code */}
      {activeTab === "recent" && (
        <div className="border border-lines-1 rounded-xl p-4 bg-primary-3 hidden md:flex flex-row justify-center items-center gap-12 overflow-auto w-full">
          <div className="numbers text-right">
            {[...Array(13)].map((_, i) => (
              <p key={i}>{i + 1}</p>
            ))}
          </div>
          <div className="code flex flex-col">
            <p className="text-secondary-4 inline">
              <span className="text-secondary-3">const</span>&nbsp;
              <span className="text-accent-2">recentProject</span>&nbsp;
              <span className="text-secondary-1">&#61;</span>&nbsp;
              <span className="text-secondary-1">&#123;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;<span className="text-accent-1">&#39;name&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">
                &#34;Creative Portfolio v2&#34;
              </span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;<span className="text-accent-1">&#39;stack&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">&#91;</span>
              <span className="text-secondary-1">&#34;Next.js&#34;</span>
              <span className="text-secondary-3">&#44;</span>&nbsp;
              <span className="text-secondary-1">&#34;TypeScript&#34;</span>
              <span className="text-secondary-3">&#44;</span>&nbsp;
              <span className="text-secondary-1">&#34;Tailwind&#34;</span>
              <span className="text-secondary-3">&#44;</span>&nbsp;
              <span className="text-secondary-1">&#34;Framer Motion&#34;</span>
              <span className="text-secondary-1">&#93;</span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;<span className="text-accent-1">&#39;goals&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">&#91;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-secondary-1">
                &#34;Showcase real-world projects&#34;
              </span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-secondary-1">
                &#34;Highlight smooth micro-interactions&#34;
              </span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-secondary-1">
                &#34;Make devs + clients say 'wow'&#34;
              </span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;<span className="text-secondary-1">&#93;</span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;launched&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">&#34;2025-04-15&#34;</span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;<span className="text-accent-1">&#39;link&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">
                &#34;https://yourportfolio.link&#34;
              </span>
            </p>
            <p className="text-secondary-4 inline">
              <span className="text-secondary-1">&#125;</span>
              <span className="text-secondary-3">&#59;</span>
            </p>
          </div>
        </div>
      )}

      {/* About Me Personal Snapshot */}
      {activeTab === "bio" && (
        <div className="border border-lines-1 rounded-xl p-4 bg-primary-3 hidden md:flex flex-row justify-center items-center gap-12 overflow-auto w-full">
          <div className="numbers text-right">
            {[...Array(13)].map((_, i) => (
              <p key={i}>{i + 1}</p>
            ))}
          </div>
          <div className="code flex flex-col">
            <p className="text-secondary-4 inline">
              <span className="text-secondary-3">const</span>&nbsp;
              <span className="text-accent-2">aboutMe</span>&nbsp;
              <span className="text-secondary-1">&#61;</span>&nbsp;
              <span className="text-secondary-1">&#123;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;<span className="text-accent-1">&#39;name&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">&#34;Your Name&#34;</span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;location&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">&#34;UK&#34;</span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;degree&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">
                &#34;BSc Web Programming&#34;
              </span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;passions&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">&#91;</span>
              <span className="text-secondary-1">
                &#34;Creative Frontend Dev&#34;
              </span>
              <span className="text-secondary-3">&#44;</span>&nbsp;
              <span className="text-secondary-1">&#34;UI/UX Design&#34;</span>
              <span className="text-secondary-3">&#44;</span>&nbsp;
              <span className="text-secondary-1">
                &#34;React & Next.js&#34;
              </span>
              <span className="text-secondary-1">&#93;</span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;currentlyLearning&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">&#91;</span>
              <span className="text-secondary-1">&#34;GSAP&#34;</span>
              <span className="text-secondary-3">&#44;</span>&nbsp;
              <span className="text-secondary-1">
                &#34;Advanced TypeScript&#34;
              </span>
              <span className="text-secondary-3">&#44;</span>&nbsp;
              <span className="text-secondary-1">&#34;Accessibility&#34;</span>
              <span className="text-secondary-1">&#93;</span>
              <span className="text-secondary-3">&#44;</span>
            </p>
            <p className="text-secondary-4 inline">
              &nbsp;&nbsp;
              <span className="text-accent-1">&#39;funFact&#39;</span>
              <span className="text-secondary-3">&#58;</span>&nbsp;
              <span className="text-secondary-1">
                &#34;Can explain flexbox better than a yoga instructor 🧘‍♂️&#34;
              </span>
            </p>
            <p className="text-secondary-4 inline">
              <span className="text-secondary-1">&#125;</span>
              <span className="text-secondary-3">&#59;</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
