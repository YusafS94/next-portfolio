import Link from "next/link";
import NavLinks from "@/app/ui/portfolio/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function LeftNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-14 items-end justify-start bg-blue-600 p-4 md:h-14"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <h1>yusaf-saddiq</h1>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block border-solid border-2 border-lines-1"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Button</div>
          </button>
        </form>
      </div>
    </div>
  );
}
