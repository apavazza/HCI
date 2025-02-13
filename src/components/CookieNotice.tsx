"use client"

import { useState, useEffect } from "react"
import Button from "@/components/ui/button"

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted")
    if (!cookieAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieAccepted", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm mb-4 sm:mb-0">
          This website uses cookies to ensure you get the best experience on our website.
        </p>
        <div className="flex space-x-4">
          <Button
            onClick={acceptCookies}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Accept
          </Button>
          <Button
            onClick={declineCookies}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}