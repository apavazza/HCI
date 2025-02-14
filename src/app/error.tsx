"use client";

import Image from "next/image"
import Link from "next/link"

export default function Error({ error }: { error: Error, reset: () => void })  {
  return (
    <div className="flex justify-center mt-6 bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">{error.name}</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Oops! Something went wrong</h2>
        <p className="text-xl text-gray-600 mb-8">{error.message}</p>
        <Image
          src="/images/robot-3256109_1280.png"
          alt="Confused robot"
          width={300}
          height={300}
          className="mx-auto mb-8"
        />
        <p className="text-lg text-gray-600 mb-8">
          Our robot is just as confused as you are. Maybe it can help you find your way back?
        </p>
        <Link
          href="/"
          className="bg-brand-primary hover:bg-brand-secondary active:bg-brand-tertiary text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}