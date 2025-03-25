"use client";
import { useState } from "react";
import Link from "next/link";
import TopNavLinks from "@/app/ui/portfolio/top-nav-links";
import NavMenu from "@/app/ui/portfolio/mobilenav"; // Mobile Hamburger Menu
import { Bars2Icon } from "@heroicons/react/24/outline"; // Hamburger Icon

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle TopNavLinks

  return (
    <div
      id="topnav"
      className="md:flex h-full flex-col md:flex-row border-b border-lines-1"
    >
      {/* Logo */}
      <Link
        className="flex justify-start items-center md:w-2/12"
        href="/portfolio"
      >
        <div className="rounded-tl-lg hover:bg-lines-1 hover:text-secondary-4 w-full h-full pl-4 flex justify-start items-center text-center">
          <h1>logo</h1>
        </div>
      </Link>

      {/* Hamburger Icon (Visible only on small screens) */}
      <div className="self-end md:hidden w-2/12">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-5 h-5 text-gray-800"
        >
          <Bars2Icon />
        </button>
      </div>

      {/* Navigation Links (Toggles on small screens, always visible on md+) */}
      <div
        className={`flex grow flex-col md:flex-row justify-start space-x-2 md:space-x-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <TopNavLinks />
      </div>

      {/* Mobile Hamburger Menu (Separate from TopNavLinks) */}
      <div className="md:hidden">{/* Mobile menu goes here */}</div>

      {/* Contact Link */}
      <Link
        className="flex justify-start items-center border-l border-lines-1"
        href="/portfolio/contact"
      >
        <div className="rounded-tr-lg hover:bg-lines-1 hover:text-secondary-4 w-full h-full px-4 flex justify-center items-center text-center">
          <h1>_contact-me</h1>
        </div>
      </Link>
    </div>
  );
}
