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
      <div className="flex flex-col md:flex-row h-full justify-evenly">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(!isOpen)} // Close the menu when a link is clicked
              className={clsx(
                `${link.styles} flex md:h-[48px] items-center justify-center p-2 md:p-3 text-sm font-normal hover:text-secondary-4 md:flex-none md:justify-start border-solid hover:border-b-2 border-lines-1 hover:border-b-orange-600 hover:bg-lines-1`,
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
        <Link
          className={clsx(
            "flex justify-start items-center md:border-l border-lines-1 p-2 md:p-0 text-sm",
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
    </>
  );
}
