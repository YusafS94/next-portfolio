import AboutContent from "@/app/ui/portfolio/about-me/about-content";
import { redirect } from "next/navigation";
import developerConfig from "@/app/lib/developer.json";
import ProfessionalContent from "@/app/ui/portfolio/about-me/professional-content";
export default function Page() {
  // redirect("/portfolio/about-me/professional-info");
  // console.log(Object.keys(developerConfig));
  const tabs = Object.keys(developerConfig.about.sections);
  // console.log(tabs);
  // console.log(tabs[0]);
  tabs.map((tab) => {
    <p>{tab}</p>;
  });

  return (
    <>
      {/* <div className="flex">
        <ul className="flex flex-col">
          <li>{developerConfig.about.sections["professional-info"].title}</li>
          <li>{developerConfig.about.sections["personal-info"].title}</li>
          <li>{developerConfig.about.sections["hobbies-info"].title}</li>
        </ul>
        <ul>
          <li>{developerConfig.about.sections["professional-info"].info.experience.title}</li>
          <li>{developerConfig.about.sections["professional-info"].info["hard-skills"].title}</li>
          <li>{developerConfig.about.sections["professional-info"].info["soft-skills"].title}</li>
        </ul>
      </div> */}
      <ProfessionalContent />
    </>
  );
}
