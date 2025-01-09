"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/hooks/useClickOutside";
import { TypeNavItem } from "@/content-types";

// This is essentially the same as if we had written:
//
// type Page = {
//   title: string;
//   path: string;
//   includeInProd?: boolean;
// };
//
// The difference is that the type is generated from the Contentful schema.
type Page = TypeNavItem<"WITHOUT_UNRESOLVABLE_LINKS">["fields"];

function processPage(
  page: Page,
  index: number,
  pathname: string,
  onClick?: () => void
) {
  const isActive =
    page.path === "/" ? pathname === page.path : pathname.startsWith(page.path);
  return (
    <li key={index}>
      <Link href={page.path} onClick={onClick}>
        <span
          className={cn(
            "border rounded-sm border-transparent px-4 py-2 whitespace-nowrap",
            {
              "hover:text-white hover:bg-brand-primary": !isActive,
              "text-brand-primary border rounded-sm border-brand-primary":
                isActive,
            }
          )}
        >
          {page.title}
        </span>
      </Link>
    </li>
  );
}

type HamburgerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

function Hamburger({ isOpen, toggleMenu }: HamburgerProps) {
  return (
    <button
      className="flex md:hidden flex-col justify-center items-end w-11 h-11 p-2 space-y-1.5 rounded-sm hover:bg-brand-stroke-weak active:bg-brand-stroke-weak"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={toggleMenu}
    >
      <span
        className={cn(
          "w-7 h-1 bg-brand-black rounded-full transition-all duration-300 ease-in-out",
          { "rotate-45 translate-y-2.5": isOpen }
        )}
      />
      <span
        className={cn(
          "w-4 h-1 bg-brand-black rounded-full transition-all duration-300 ease-in-out",
          { "opacity-0": isOpen }
        )}
      />
      <span
        className={cn(
          "w-6 h-1 bg-brand-black rounded-full transition-all duration-300 ease-in-out",
          { "w-7 -rotate-45 -translate-y-2.5": isOpen }
        )}
      />
    </button>
  );
}

type NavigationProps = {
  pages: Page[];
};

export function Navigation({ pages }: NavigationProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useClickOutside(navRef, closeMenu);

  return (
    <nav
      className="py-8 border-b border-brand-stroke-weak sticky top-0 z-20 bg-brand-fill"
      ref={navRef}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" onClick={closeMenu}>
          <Logo className="text-2xl" />
        </Link>

        {/* Hidden on mobile */}
        <ul className="hidden md:flex justify-between space-x-4 text-sm uppercase text-brand-text-strong">
          {pages
            .filter((page) => page.includeInProd)
            .map((page, index) => processPage(page, index, pathname))}
        </ul>

        {/* Visible on mobile */}
        <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <ul
          className={cn(
            "flex md:hidden flex-col absolute top-full left-0 items-center w-full bg-brand-fill py-6 space-y-6 text-sm uppercase text-brand-text-strong border-b border-brand-stroke-weak",
            { hidden: !isMenuOpen }
          )}
        >
          {pages
            .filter((page) => page.includeInProd)
            .map((page, index) =>
              processPage(page, index, pathname, closeMenu)
            )}
        </ul>
      </div>
    </nav>
  );
}