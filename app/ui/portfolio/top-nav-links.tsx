"use client";
import {
  BriefcaseIcon,
  UserIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "_hello",
    href: "/portfolio",
    icon: BriefcaseIcon,
    styles: "md:border-l",
  },
  {
    name: "_about-me",
    href: "/portfolio/about-me",
    icon: UserIcon,
    styles: "md:border-l",
  },
  {
    name: "_projects",
    href: "/portfolio/projects",
    icon: PuzzlePieceIcon,
    styles: "md:border-l md:border-r",
  },
];

type TopNavLinksProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function TopNavLinks({ isOpen, setIsOpen }: TopNavLinksProps) {
  const pathname = usePathname();
  // const [isOpen, setIsOpen] = useState(false); // State to toggle TopNavLinks
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(!isOpen)} // Close the menu when a link is clicked
            className={clsx(
              `${link.styles} flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium hover:text-secondary-4 md:flex-none md:justify-start md:p-2 md:px-3 border-solid hover:border-b-2 border-lines-1 hover:border-b-orange-600 hover:bg-lines-1`,
              {
                "border-b-2 border-b-orange-600 text-secondary-4":
                  pathname === link.href,
              }
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
