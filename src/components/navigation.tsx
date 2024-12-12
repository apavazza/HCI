"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={
          page.path === "/"
            ? pathname === page.path
              ? "font-extrabold border-2 border-solid p-3 border-green-900"
              : ""
            : pathname.startsWith(page.path)
            ? "font-extrabold border-2 border-solid p-3 border-green-900"
            : ""
        }
      >
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between border-b-2">
      <span className="inline-block p-5">LOGO</span>
      <ul className="inline-flex justify-center items-center space-x-4 mt-8 pb-3 pr-5">
        {pages.map((page, index) => processPage(page, index, pathname))}
      </ul>
    </div>
      
  );
}