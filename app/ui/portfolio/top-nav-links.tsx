"use client";
import {
  BriefcaseIcon,
  UserIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "welcome",
    href: "/portfolio",
    icon: BriefcaseIcon,
  },
  { name: "about-me", href: "/portfolio/about-me", icon: UserIcon },
  {
    name: "projects",
    href: "/portfolio/projects",
    icon: PuzzlePieceIcon,
  },
];

export default function TopNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 border-solid hover:border-b-2 border-lines-1 hover:border-orange-600",
              {
                "border-b-2 border-orange-600 text-blue-600":
                  pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
