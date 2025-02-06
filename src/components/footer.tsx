"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image src="/images/logo_light.png" alt="WriteWarp Logo" width={128} height={28} />
            </Link>
            <p className="text-sm text-center md:text-left">
              Empowering writers with innovative tools and a supportive community.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {["Website Templates", "Website Builder", "Website Design", "Web Hosting", "Website Accessibility"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-blue-600 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Explore", href: "/explore" },
                { name: "Pricing", href: "/pricing" },
                { name: "Profile", href: "/profile" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-blue-600 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">Dummy Address 123</li>
              <li className="text-sm">+1 (555) 123-4567</li>
              <li>
                <a
                  href="mailto:info@writewarp.example.com"
                  className="text-sm hover:text-blue-600 transition-colors duration-200"
                >
                  writewarp@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">&copy; 2024 - 2025 WriteWarp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

