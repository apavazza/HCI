"use client"

import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, UserIcon } from "lucide-react"

type PostBoxProps = {
  props: {
    id: string
    title: string
    thumbnail: any
    shortDescription: string
    author: string
    timePublished: string
  }
}

export default function PostBox({ props }: PostBoxProps) {
  const thumbnailUrl = props.thumbnail?.fields?.file?.url
    ? `https:${props.thumbnail.fields.file.url}`
    : "/images/placeholder-image-icon-14.jpg"

  const timePublished = new Date(props.timePublished)
  const formattedDate = timePublished.toLocaleString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "long",
  })

  return (
    <Link href={`/post/${props.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 ease-in-out">
        <div className="relative h-48">
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            layout="fill"
            objectFit="cover"
            alt={props.title}
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{props.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{props.shortDescription}</p>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 mr-1" />
              <span>{props.author}</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
              Read More
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

