// "use client";
import { fira_code } from "@/app/ui/fonts";
import TopNav from "../ui/portfolio/topnav";
import Footer from "../ui/portfolio/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${fira_code.className} h-screen flex-col md:overflow-hidden bg-slate-950`}
    >
      <div className="h-screen p-4">
        <div className="border-1 border-lines-1 rounded-lg h-full bg-primary-2 text-secondary-1 flex flex-col">
          <div className="topnav flex-none">
            <TopNav />
          </div>
          <div className="flex grow">{children}</div>
          <div className="footer flex-none">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
