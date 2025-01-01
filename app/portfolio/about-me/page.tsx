import AboutContent from "@/app/ui/portfolio/about-me/about-content";
import { redirect } from "next/navigation";
import developerConfig from "@/app/lib/developer.json";
export default function Page() {
  // redirect("/portfolio/about-me/professional-info");
  // console.log(Object.keys(developerConfig));
  const tabs = Object.keys(developerConfig.about.sections);
  console.log(tabs);
  console.log(tabs[0]);
  tabs.map((tab) => {
    <p>{tab}</p>;
  });

  return (
    <>
      <ul className="flex flex-col">
        {tabs.map((tab) => (
          <li key={tab} style={{ marginBottom: "16px" }}>
            {tab}
          </li>
        ))}
      </ul>
    </>
  );
}
