import Link from "next/link";
import TopNavLinks from "@/app/ui/portfolio/top-nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function TopNav() {
  return (
    <div className="flex h-full flex-row px-3 md:px-2 border-b-2 border-lines-1">
      <Link className="flex justify-start items-center md:pr-32" href="/portfolio">
        <div className="">
          <h1>yusaf-saddiq</h1>
        </div>
      </Link>
      <div className="flex grow flex-row justify-start space-x-2 md:space-x-0">
        <TopNavLinks />
      </div>
      <Link
        className="flex justify-start items-center border-l-2 border-lines-1 md:pl-4"
        href="#"
      >
        <div className="">
          <h1>_contact-me</h1>
        </div>
      </Link>
    </div>
  );
}
