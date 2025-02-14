"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function ArrowScroll(){
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

  return(
    <button
          onClick={scrollToNextSection}
          className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 text-green-600 hover:text-green-700 transition-all duration-300 ease-in-out ${showArrow ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-12 w-12 animate-bounce" />
        </button>
  )
}