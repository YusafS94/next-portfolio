import LeftNav from "@/app/ui/portfolio/leftnav";
import { fira_code } from "@/app/ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${fira_code.className} flex h-screen flex-col md:flex-row md:overflow-hidden bg-primary-2 text-secondary-1`}
    >
      <div className="w-full flex-none md:w-64">
        <LeftNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
