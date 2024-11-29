export default function Page() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-8/12 m-auto">
      <div className="flex flex-col justify-between hero-text w-full md:w-1/2">
        <div className="hero-top-text text-secondary-4">
          <p>Hi, I'm</p>
          <h1 className="text-6xl">Yusaf Saddiq</h1>
          <p className="text-lg text-secondary-3"> _Web Developer</p>
        </div>
        <div className="hero-bottom-text">
          <p>// front-end developer</p>
          <p>// check out my github page</p>
          <p className="text-secondary-4 inline">
            <span className="text-secondary-3">const</span>
            &nbsp;
            <span className="text-accent-2">githubLink</span>
            &nbsp;
            =
            &nbsp;
          </p>
          <a className="text-accent-1" href="https://github.com/YusafS94">https://github.com/YusafS94</a>
        </div>
      </div>
      <div className="hidden md:block hero-right text-secondary-4 bg-gradient-to-b from-cyan-500 to-slate-900 w-full md:w-1/2 rounded-lg p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tenetur
        eligendi laboriosam, cupiditate vel error porro eum alias modi aliquid
        suscipit iusto, consequuntur quisquam debitis blanditiis repellendus
        sapiente doloribus libero quae earum dignissimos voluptatum obcaecati
        iste! Officiis aspernatur laudantium similique ipsam excepturi incidunt
        quo eveniet, nostrum, culpa veritatis quam beatae!
      </div>
    </div>
  );
}
