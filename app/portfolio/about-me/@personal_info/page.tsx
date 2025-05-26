export default function Page() {
  return (
    <>
      {/* Form submit code */}
      {/* <div className="border border-lines-1 rounded-xl p-4 bg-primary-3 hidden md:flex flex-row justify-center items-center gap-12 overflow-auto w-full">
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
      </div> */}

      {/* Recent Project Code */}
      {/* <div className="border border-lines-1 rounded-xl p-4 bg-primary-3 hidden md:flex flex-row justify-center items-center gap-12 overflow-auto w-full">
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
      </div> */}

      {/* About Me Personal Snapshot */}
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
            &nbsp;&nbsp;<span className="text-accent-1">&#39;degree&#39;</span>
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
            <span className="text-secondary-1">&#34;React & Next.js&#34;</span>
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
            &nbsp;&nbsp;<span className="text-accent-1">&#39;funFact&#39;</span>
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
    </>
  );
}
