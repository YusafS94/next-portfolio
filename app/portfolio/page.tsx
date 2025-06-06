import { ChevronDownIcon } from "@heroicons/react/24/outline";
export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around lg:w-4/5 mx-auto overflow-auto">
      <div className="flex flex-col items-start h-96 justify-evenly text-start p-4">
        <div className="flex flex-col gap-2 hero-top-text w-full text-secondary-4">
          <p className="text-base">Hi, I'm</p>
          <h1 className="text-4xl md:text-6xl">Yusaf Saddiq</h1>
          <p className="text-lg md:text-2xl text-secondary-3">
            {" "}
            &gt; Front End Developer
          </p>
          <p className="text-lg md:text-2xl text-secondary-3">
            {" "}
            &gt; Digital Tinkerer
          </p>
          <p>
            Building fast, accessible websites that deliver seamless,
            user-focused experiences.
          </p>
        </div>
        <div className="hero-bottom-text">
          {/* <p>// front-end developer</p> */}
          <p>// check out my github page</p>
          <div className="flex flex-col md:flex-row">
            <p className="text-secondary-4">
              <span className="text-secondary-3">const</span>
              &nbsp;
              <span className="text-accent-2">githubLink</span>
              &nbsp;=&nbsp;
            </p>
            <a
              className="text-accent-1"
              target="_blank"
              href="https://github.com/YusafS94"
            >
              https://github.com/YusafS94
            </a>
          </div>
        </div>
        {/* <ChevronDownIcon className="md:hidden w-10 h-10 text-secondary-4 animate-bounce self-center" /> */}
      </div>

      <div className="h-auto flex flex-col self-center p-6 gap-2 border border-lines-1 md:w-96 mb-8 lg:mb-0">
        <h3 className="text-lg underline underline-offset-4">What do I do?</h3>
        <p className="text-base text-secondary-4">
          I build custom websites that blend clean code, thoughtful{" "}
          <span className="font-bold text-accent-4">UX</span>, and creative
          flair. From marketing sites to interactive experiences, I work with{" "}
          <span className="text-accent-4">Next.js</span>,{" "}
          <span className="text-accent-2">Framer,</span>{" "}
          <span className="text-accent-1">GSAP,</span> and more. Bringing brands
          to life with motion, <span className="text-accent-3">3D</span>, and a
          strategic digital presence.
        </p>
      </div>
    </div>
  );
}
