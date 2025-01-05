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
        <div className="border border-lines-1 rounded-lg h-full bg-primary-2 text-secondary-1 flex flex-col">
          <nav className="topnav flex-none">
            <TopNav />
          </nav>
          <main className="flex grow">{children}</main>
          <footer className="footer flex-none">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
