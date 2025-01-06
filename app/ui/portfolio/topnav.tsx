import Link from "next/link";
import TopNavLinks from "@/app/ui/portfolio/top-nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import HamburgerIcon from "@/app/ui/portfolio/hamburger";
// import {
//   PowerIcon,
//   DocumentArrowDownIcon,
//   Bars2Icon,
// } from "@heroicons/react/24/outline";

export default function TopNav() {
  return (
    <div
      id="topnav"
      className="flex h-full flex-col md:flex-row border-b border-lines-1"
    >
      <Link
        className="flex justify-start items-center md:w-2/12"
        href="/portfolio"
      >
        <div className="rounded-tl-lg hover:bg-lines-1 w-full h-full pl-4 flex justify-start items-center text-center">
          <h1>yusaf-saddiq</h1>
        </div>
      </Link>
      <div className="self-end md:hidden w-2/12" id="hamburger-button">
        <HamburgerIcon />
      </div>
      <div className="flex grow flex-col md:flex-row justify-start space-x-2 md:space-x-0">
        <TopNavLinks />
      </div>
      <Link
        className="flex justify-start items-center border-l border-lines-1"
        href="/portfolio/contact"
      >
        <div className="rounded-tr-lg hover:bg-lines-1 w-full h-full px-4 flex justify-center items-center text-center">
          <h1>_contact-me</h1>
        </div>
      </Link>
    </div>
  );
}
