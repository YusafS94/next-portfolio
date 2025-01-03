"use client";
import { useState } from "react";
// import developerConfig from "@/app/lib/developer.json";
import developerConfig from "@/app/lib/developer";
// import { info } from "console";

console.log(developerConfig.about.sections["professional-info"].info[0].title);

export default function ProfessionalContent() {
  const profContentFolders = Object.keys(
    developerConfig.about.sections["professional-info"].info
  );
  // console.log(profContentFolders);
  const [currentFolder, setCurrentFolder] = useState(
    profContentFolders[0]
  );
  console.log(currentFolder);

  return (
    <>
      <h1>{currentFolder}</h1>
      {/* <h1>{developerConfig.about.sections["professional-info"].info[currentFolder].title}</h1> */}
    </>
  );
}
