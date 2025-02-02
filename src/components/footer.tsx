"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <div className="w-full pt-3 bg-[#CCE6E2] text-gray-600">
      <div className="flex flex-wrap justify-evenly items-stretch md:flex-row flex-col">
        <Link className="m-3" href={'/'}>
          <img src="/images/logo_light.png" alt="LOGO" className="w-32 h-7"/>
        </Link>
        
          <ul className="inline-block m-3 text-center md:text-left">
          <li className="text-lg">Product</li>
            <li><a href="">Website Templates</a></li>
            <li><a href="">Website Builder</a></li>
            <li><a href="">Website Design</a></li>
            <li><a href="">Web Hosting</a></li>
            <li><a href="">Website Accessibility</a></li>
          </ul>
          <ul className="inline-block m-3 text-center md:text-left">
            <li className="text-lg">Sitemap</li>
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/write">Write</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
          <ul className="inline-block m-3 text-center md:text-left">
            <li className="text-lg">About</li>
            <li>Address 123</li>
            <li>+0 000 000</li>
            <li><a href="mailto:info@writewarp.example.com">info@writewarp.example.com</a></li>
          </ul>
        
      </div>
      <div className="w-full pt-5 text-center">2024 - 2025 &copy; writewarp. All rights reserved.</div>
    </div>
  );
}