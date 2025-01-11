"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <div className="w-full pt-3 bg-[#CCE6E2] text-gray-600">
      <div className="flex justify-evenly">
        <Link href={'/'}>
          <img src="/images/logo_light.png" alt="LOGO" className="w-32 h-7"/>
        </Link>
        <div className="w-1/2 flex justify-around">
          <ul className="inline-block">
          <li className="text-lg">Product</li>
            <li><a href="">Website Templates</a></li>
            <li><a href="">Website Builder</a></li>
            <li><a href="">Website Design</a></li>
            <li><a href="">Web Hosting</a></li>
            <li><a href="">Website Accessibility</a></li>
          </ul>
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
            <li className="mt-12"><a href="https://app.contentful.com" target="_blank">Dashboard</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full pt-5 text-center">2024 - 2025 &copy; writewarp. All rights reserved.</div>
    </div>
  );
}