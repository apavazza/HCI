"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  title: string;
  path: `/${string}`;
};

export function Footer() {
  return (
    <div className="w-full pt-3 bg-[#CCE6E2] text-gray-600">
      <div className="flex justify-around">
        <div>LOGO</div>
        <div className="w-1/4 flex justify-around">
          <ul className="inline-block">
            <li className="text-lg">Sitemap</li>
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/write">Write</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
          <ul className="inline-block mt-7">
            <li>Address 123</li>
            <li>+0 000 000</li>
            <li><a href="mailto:info@writewarp.example.com">info@writewarp.example.com</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full pt-5 text-center">2024 &copy; writewarp. All rights reserved.</div>
    </div>
  );
}