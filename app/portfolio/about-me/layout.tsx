import AboutNav from "@/app/ui/portfolio/about-me/aboutnav";
// const config = require('@/app/lib/developer.json')

export default function Layout({
  children,
  personal_info,
}: {
  children: React.ReactNode;
  personal_info: React.ReactNode;
}) {
  return (
    <>
      <div className="flex grow flex-col md:flex-row">
        {/* <div>
          <AboutNav />
        </div> */}
        <div className="flex flex-col md:flex-row grow">
          <div className="flex w-full md:w-1/2">{children}</div>
          <div className="flex w-full md:w-1/2">{personal_info}</div>
        </div>
      </div>
    </>
  );
}
