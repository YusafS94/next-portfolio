"use client";
import { useState } from "react";
import Link from "next/link";
import TopNavLinks from "@/app/ui/portfolio/top-nav-links";
import NavMenu from "@/app/ui/portfolio/mobilenav-del"; // Mobile Hamburger Menu - delete
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline"; // Hamburger Icon
import clsx from "clsx";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle TopNavLinks
  const pathname = usePathname(); // Get the current pathname

  return (
    <div
      id="topnav"
      className="md:flex h-full flex-col md:flex-row border-b border-lines-1"
    >
      <div className="flex justify-between p-4 md:p-0 items-center md:items-center md:justify-start w-full md:w-auto">
        {/* Logo */}
        <Link className="" href="/portfolio">
          <div className="rounded-tl-lg hover:bg-lines-1 hover:text-secondary-4 w-full h-full md:pr-20 flex justify-start items-center text-center">
            <h1>logo</h1>
          </div>
        </Link>
        {/* Hamburger Icon (Visible only on small screens) */}
        <div className="self-end md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 text-secondary-4"
          >
            <Bars3Icon />
          </button>
        </div>
      </div>

      {/* Navigation Links (Toggles on small screens, always visible on md+) */}
      <div
        className={`flex grow h-screen md:h-auto flex-col md:flex-row justify-start transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <TopNavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Contact Link */}
      <Link
        className={clsx(
          "hidden md:flex justify-start items-center md:border-l border-lines-1 p-2 md:p-0 text-sm",
          {
            "border-b-2 border-b-orange-600 text-secondary-4":
              pathname === "/portfolio/contact",
          }
        )}
        href="/portfolio/contact"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-sm rounded-tr-lg hover:bg-lines-1 hover:text-secondary-4 w-full h-full px-4 flex justify-center items-center text-center">
          <p>_contact-me</p>
        </div>
      </Link>
    </div>
  );
}
