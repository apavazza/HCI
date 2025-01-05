"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PostBoxType = {
    title: string,
    author: string,
    thumbnail: any,
    text: string,
    id: string, // Add an id field to identify the post
    postContent: any
}

export default function PostCard({props}: PostBoxType){
    const thumbnailUrl = props.thumbnail?.fields?.file?.url ? `https:${props.thumbnail.fields.file.url}` : '/images/placeholder-image-icon-14.jpg'; // Fallback to a placeholder image if URL is not available

    return(
        <div className="mx-auto my-3 w-9/12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transition-colors duration-200">
            <Link
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
                >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Link>
            <Image 
                className="mx-auto" 
                src={thumbnailUrl} 
                width={600} 
                height={100} 
                alt={props.title || 'Image goes here...'}
            />
            <p className="m-1 text-right">Author: <span className="italic">{props.author}</span></p>
            <h3 className="m-1 text-center text-xl">{props.title}</h3>
            <p className="m-1">{props.text}</p>
        </div>
    );
}