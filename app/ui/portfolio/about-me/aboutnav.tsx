import Link from "next/link";
import AboutNavLinks from "@/app/ui/portfolio/about-me/about-nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function AboutNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 border-r-2 border-lines-1">
      <div className="flex grow flex-col justify-start space-x-2 md:space-x-0 md:space-y-2">
        <AboutNavLinks />
      </div>
    </div>
  );
}
