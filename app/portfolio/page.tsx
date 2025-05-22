export default function Page() {
  return (
    <div className="flex flex-col md:flex-row w-10/12 md:w-3/5 mx-auto">
      <div className="flex flex-col items-center justify-center h-screen md:h-auto">
        <div className="hero-top-text text-secondary-4">
          <p className="text-base">Hi, I'm</p>
          <h1 className="text-6xl">Yusaf Saddiq</h1>
          <p className="text-4xl text-secondary-3"> _Web Developer</p>
        </div>
        <div className="hero-bottom-text">
          <p>// front-end developer</p>
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
      </div>
      <div className="h-auto flex self-center">
        I build custom websites that blend clean code, thoughtful UX, and
        creative flair. From marketing sites to interactive experiences, I work
        with React, Next.js, Tailwind, and more—bringing brands to life with
        motion, 3D, and a strategic digital presence.
      </div>
    </div>
  );
}
