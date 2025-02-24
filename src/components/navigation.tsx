"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Logo from "./logo"
import { cn } from "@/lib/utils"
import { useClickOutside } from "@/hooks/useClickOutside"
import type { TypeNavItem } from "@/content-types"
import { authClient } from "@/lib/auth-client"
import Button from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

type Page = TypeNavItem<"WITHOUT_UNRESOLVABLE_LINKS">["fields"]

function NavLink({ page, pathname, onClick }: { page: Page; pathname: string; onClick?: () => void }) {
  const isActive = page.path === "/" ? pathname === page.path : pathname.startsWith(page.path)
  return (
    <Link
      href={page.path}
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out",
        isActive
          ? "bg-brand-primary text-white shadow-md"
          : "text-gray-700 hover:bg-brand-primary/10 hover:text-brand-primary",
      )}
    >
      {page.title}
    </Link>
  )
}

function MobileNavLink({ page, pathname, onClick }: { page: Page; pathname: string; onClick?: () => void }) {
  const isActive = page.path === "/" ? pathname === page.path : pathname.startsWith(page.path)
  return (
    <Link
      href={page.path}
      onClick={onClick}
      className={cn(
        "block py-2 px-4 text-base font-medium rounded-md transition-all duration-200 ease-in-out",
        isActive
          ? "bg-brand-primary text-white shadow-md"
          : "text-gray-700 hover:bg-brand-primary/10 hover:text-brand-primary",
      )}
    >
      {page.title}
    </Link>
  )
}

type NavigationProps = {
  pages: Page[]
}

export function Navigation({ pages }: NavigationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useClickOutside(navRef, closeMenu)

  const { data: session, isPending } = authClient.useSession()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="sticky top-0 z-20 bg-white shadow-md" ref={navRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={closeMenu} className="flex items-center">
              <Logo className="h-8 w-auto text-2xl" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {pages
              .filter((page) => page.includeInProd)
              .map((page, index) => (
                <NavLink key={index} page={page} pathname={pathname} />
              ))}
            {isPending ? (
              <Button ghost iconClassName="hidden">
                Loading...
              </Button>
            ) : session ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-200 ease-in-out">
                  <span>{session.user?.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 py-2 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <Button
                    ghost
                    onClick={() => authClient.signOut()}
                    className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-brand-primary hover:text-white transition-all duration-200 ease-in-out"
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                ghost
                iconClassName="hidden"
                onClick={() => router.push("/signin")}
                className="px-4 py-2 rounded-md text-sm font-medium text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200 ease-in-out"
              >
                Sign In
              </Button>
            )}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-200 ease-in-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {pages
            .filter((page) => page.includeInProd)
            .map((page, index) => (
              <MobileNavLink key={index} page={page} pathname={pathname} onClick={closeMenu} />
            ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="px-2 space-y-1">
            {isPending ? (
              <div>
                <Button ghost iconClassName="hidden" className="inline-block">
                  Loading...
                </Button>
              </div>
            ) : session ? (
              <>
                <p className="block px-4 py-2 text-base font-medium text-gray-700">{session.user?.name}</p>
                <div>
                  <Button
                    ghost
                    onClick={() => authClient.signOut()}
                    className="inline-flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:bg-brand-primary hover:text-white transition-all duration-200 ease-in-out"
                  >
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              <div>
                <Button
                  ghost
                  iconClassName="hidden"
                  onClick={() => router.push("/signin")}
                  className="inline-block px-4 py-2 text-base font-medium text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200 ease-in-out"
                >
                  Sign In
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}