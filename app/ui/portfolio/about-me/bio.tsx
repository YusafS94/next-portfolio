export default function Bio() {
  return (
    <div className="h-full">
      {/* <h1 className="text-2xl font-bold mb-4">Bio</h1> */}
      <p className="">
        A passionate web developer with a strong foundation in both front-end
        and back-end technologies. I have a keen interest in creating dynamic
        and responsive web applications that provide an excellent user
        experience. With a background in web programming from the University of
        Huddersfield, I am always eager to learn new technologies and improve my
        skills.
      </p>
      <div className="md:flex flex-row justify-center items-center gap-12 overflow-auto w-full">
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
    </div>
  );
}
