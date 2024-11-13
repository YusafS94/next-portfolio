import { fira_code } from "@/app/ui/fonts";
import TopNav from "../ui/portfolio/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${fira_code.className} flex h-screen flex-col md:flex-row md:overflow-hidden bg-primary-2 text-secondary-1`}
    >
      <div className="">
        <div>
          <TopNav />
        </div>
        <div className="flex-grow md:overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
