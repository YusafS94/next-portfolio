import { fira_code } from "@/app/ui/fonts";
import TopNav from "../ui/portfolio/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${fira_code.className} h-screen flex-col md:overflow-hidden bg-slate-950`}
    >
      <div className="h-screen p-4">
        <div className="border-2 border-lines-1 rounded-lg h-full bg-primary-2 text-secondary-1">
          <div>
            <TopNav />
          </div>
          <div className="flex-grow md:overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
