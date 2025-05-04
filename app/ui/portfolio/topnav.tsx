"use client";
import { useState } from "react";
import Link from "next/link";
import TopNavLinks from "@/app/ui/portfolio/top-nav-links";
import NavMenu from "@/app/ui/portfolio/mobilenav"; // Mobile Hamburger Menu
import { usePathname } from "next/navigation";
import { Bars2Icon } from "@heroicons/react/24/outline"; // Hamburger Icon
import clsx from "clsx";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle TopNavLinks
  const pathname = usePathname(); // Get the current pathname

  return (
    <div
      id="topnav"
      className="md:flex h-full flex-col md:flex-row border-b border-lines-1"
    >
      <div className="flex justify-between">
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
            <Bars2Icon />
          </button>
        </div>
      </div>

      {/* Navigation Links (Toggles on small screens, always visible on md+) */}
      <div
        className={`flex grow flex-col md:flex-row justify-start space-x-2 md:space-x-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <TopNavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
        <Link
          className={clsx(
            "flex justify-start items-center border-l border-lines-1",
            {
              "border-b-2 border-b-orange-600 text-secondary-4":
                pathname === "/portfolio/contact",
            }
          )}
          href="/portfolio/contact"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="md:hidden text-sm rounded-tr-lg hover:bg-lines-1 hover:text-secondary-4 w-full h-full px-4 flex justify-center items-center text-center">
            <p>_contact-me</p>
          </div>
        </Link>
      </div>

      {/* Mobile Hamburger Menu (Separate from TopNavLinks) */}
      <div className="md:hidden">{/* Mobile menu goes here */}</div>

      {/* Contact Link */}
      <Link
        className="hidden md:flex justify-start items-center border-l border-lines-1"
        href="/portfolio/contact"
      >
        <div className="rounded-tr-lg hover:bg-lines-1 hover:text-secondary-4 w-full h-full px-4 flex justify-center items-center text-center">
          <h1>_contact-me</h1>
        </div>
      </Link>
    </div>
  );
}
