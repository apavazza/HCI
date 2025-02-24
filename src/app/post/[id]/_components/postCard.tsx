"use client"

import { ArrowLeft, Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

type PostCardProps = {
  props: {
    title: string
    shortDescription: string
    author: string
    thumbnail: string
    text: string
    id: string
    postContent: string
    timePublished: string
  }
}

export default function PostCard({ props }: PostCardProps) {
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
    <article className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 sm:h-80 md:h-96">
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          layout="fill"
          objectFit="cover"
          alt={props.title || "Post thumbnail"}
        />
      </div>

      <div className="p-6 sm:p-8">
        <Link
          href="/explore"
          className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Explore
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{props.title}</h1>
        <h2 className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">{props.shortDescription}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <div className="flex items-center mr-6">
            <User className="w-4 h-4 mr-2" />
            <span>{props.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formattedDate}</span>
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <p>{props.text}</p>
        </div>

        <div
          className="prose max-w-none prose-green prose-img:rounded-md prose-headings:text-gray-900"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(props.postContent),
          }}
        />
      </div>
    </article>
  )
}