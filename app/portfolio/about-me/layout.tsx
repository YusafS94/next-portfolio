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
        <div className="flex flex-col lg:flex-row grow">
          <div className="flex w-full h-full lg:w-2/3">{children}</div>
          <div className="hidden lg:flex flex-col w-full lg:w-1/3 bg-primary-2">{personal_info}</div>
        </div>
      </div>
    </>
  );
}
