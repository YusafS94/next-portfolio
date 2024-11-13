"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  IdentificationIcon,
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
  // { name: "Home", href: "/portfolio", icon: HomeIcon },
  // { name: "Invoices", href: "/portfolio/invoices", icon: DocumentDuplicateIcon, },
  // { name: "Customers", href: "/portfolio/customers", icon: UserGroupIcon },
  // { name: "About", href: "/portfolio/about", icon: IdentificationIcon },
  { name: "professional-info", href: "/portfolio/about-me/professional-info", icon: BriefcaseIcon },
  { name: "personal-info", href: "/portfolio/about-me/personal-info", icon: UserIcon },
  { name: "hobbies-info", href: "/portfolio/about-me/hobbies-info", icon: PuzzlePieceIcon },
];

export default function AboutNavLinks() {
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
              "flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 border-solid border-2 border-lines-1",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
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
