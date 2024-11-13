import Link from "next/link";
import TopNavLinks from "@/app/ui/portfolio/top-nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function TopNav() {
  return (
    <div className="flex h-full flex-row px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-14 items-end justify-start bg-blue-600 p-4 md:h-14"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <h1>_welcome</h1>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:space-x-0">
        <TopNavLinks />
      </div>
    </div>
  );
}
