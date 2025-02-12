"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowDown, Palette, Globe, PenTool } from "lucide-react"

const Page = () => {
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false)
      } else {
        setShowArrow(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNextSection = () => {
    const featuresSection = document.getElementById("features-section")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Share Your Story <br /> With The World</h1>
            <p className="text-xl text-gray-700 mb-8"><span className="text-green-800 font-bold">Blogging service</span> made simple</p>
            <Link href="/signup">
              <span className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out">
                TRY IT FOR FREE
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/images/home/lauren-mancke-aOC7TSLb1o8-unsplash.jpg"
              alt="Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <button
          onClick={scrollToNextSection}
          className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 text-green-600 hover:text-green-700 transition-all duration-300 ease-in-out ${showArrow ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-12 w-12 animate-bounce" />
        </button>
      </section>

      {/* Features Section */}
      <section id="features-section" className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Build your blog your way</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: "Design a unique blog", subtitle: "Stand out with a layout that captures your brand's personality" },
              { icon: Globe, title: "Establish your site's domain name", subtitle: "Create a strong online identity with a memorable domain" },
              { icon: PenTool, title: "Create with content in mind", subtitle: "Focus on delivering value and quality to engage your readers" },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <feature.icon className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/images/home/carlos-muza-hpjSkU2UYSU-unsplash.jpg"
              alt="About Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get started with a free blog</h2>
            <ul className="space-y-4">
              {[
                "Get your blog up and running in minutes",
                "Choose from a wide selection of templates",
                "Customize your blog's design and layout",
                "Connect your domain or get a new one",
                "Start writing your blog posts",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <span className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out mt-8">
                Start your blog today
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page

