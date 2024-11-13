import AboutNav from "@/app/ui/portfolio/about-me/aboutnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex">
        <div>
          <AboutNav />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
