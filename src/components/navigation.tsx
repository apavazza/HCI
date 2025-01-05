"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/hooks/useClickOutside";

type Page = {
  title: string;
  path: `/${string}`;
};

// We hardcode pages here, but you could get this information from some external source (e.g. CMS, DB, config file, etc).
const pages: Page[] = [
  { title: "Home", path: "/" },
  {
    title: "Explore",
    path: "/explore",
  },
  {
    title: "Write",
    path: "/write",
  },
  {
    title: "Community",
    path: "/community",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Profile",
    path: "/profile",
  },
];

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

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useClickOutside(navRef, closeMenu);

  return (
    <nav
      className="py-8 border-b border-brand-stroke-weak sticky top-0 z-10 bg-brand-fill"
      ref={navRef}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" onClick={closeMenu}>
          <Logo className="text-2xl ml-3" />
        </Link>

        {/* Hidden on mobile */}
        <ul className="hidden md:flex justify-between space-x-1 text-sm uppercase text-brand-text-strong">
          {pages.map((page, index) => processPage(page, index, pathname))}
        </ul>

        {/* Visible on mobile */}
        <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <ul
          className={cn(
            "flex md:hidden flex-col absolute top-full left-0 items-center w-full bg-brand-fill py-6 space-y-6 text-sm uppercase text-brand-text-strong border-b border-brand-stroke-weak",
            { hidden: !isMenuOpen }
          )}
        >
          {pages.map((page, index) =>
            processPage(page, index, pathname, closeMenu)
          )}
        </ul>
      </div>
    </nav>
  );
}