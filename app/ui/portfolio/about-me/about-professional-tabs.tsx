export default function AboutProfTabs() {
  return (
    <>
      <div className="flex flex-col items-start">
        <button
          className="border-b-2 border-r-2 border-t-2 border-lines-1 p-2 w-36"
          onClick={() => setSelectedSection("experience")}
        >
          Experience
        </button>
        <button
          className="border-b-2 border-r-2 border-lines-1 p-2 w-36"
          onClick={() => setSelectedSection("hard_skills")}
        >
          Hard Skills
        </button>
        <button
          className="border-b-2 border-r-2 border-lines-1 p-2 w-36"
          onClick={() => setSelectedSection("soft_skills")}
        >
          Soft Skills
        </button>
      </div>
    </>
  );
}
