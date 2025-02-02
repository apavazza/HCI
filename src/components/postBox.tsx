"use client";

import Image from "next/image";
import Link from "next/link";

type PostBoxType = {
    title: string,
    thumbnail: any,
    text: string,
    id: string // Add an id field to identify the post
}

export default function PostBox({props}: PostBoxType){
    const thumbnailUrl = props.thumbnail?.fields?.file?.url ? `https:${props.thumbnail.fields.file.url}` : '/images/placeholder-image-icon-14.jpg';

    const timePublished = new Date(props.timePublished);
    // Format the date
    const formattedDate = timePublished.toLocaleString('en-US', {
        year: 'numeric',
        day: 'numeric',
        month: 'long',
    });

    return(
        <Link href={`/post/${props.id}`}>
            <div className="m-1 w-60 h-72 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transition-colors duration-200">
                <Image 
                    className="mx-auto" 
                    src={thumbnailUrl} 
                    width={200} 
                    height={100} 
                    alt="Image goes here...">
                </Image>
                <h3 className="m-1 text-l">{props.title}</h3>
                <p className="m-1">{props.shortDescription}</p>
                <p className="italic mt-2">Author: {props.author}</p>
                <p>{formattedDate}</p>
            </div>
        </Link>
    );
}

