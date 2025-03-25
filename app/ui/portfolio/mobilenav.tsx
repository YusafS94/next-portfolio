"use client";
import { useState } from "react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import {
  BriefcaseIcon,
  UserIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

// Navigation links (same as your desktop nav)
const links = [
  { name: "_hello", href: "/portfolio", icon: BriefcaseIcon },
  { name: "_about-me", href: "/portfolio/about-me", icon: UserIcon },
  { name: "_projects", href: "/portfolio/projects", icon: PuzzlePieceIcon },
];

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Icon (Right aligned) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-5 h-5 text-gray-800"
      >
        <Bars2Icon />
      </button>

      {/* Mobile Menu (Shows when isOpen is true) */}
      <div
        className={`absolute top-12 right-0 bg-white shadow-lg p-4 w-48 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="space-y-2 text-left">
          {links.map((link) => (
            <li
              key={link.name}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
            >
              <link.icon className="w-5 h-5" />
              <Link href={link.href} className="block py-1">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
