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

    return(
        <Link href={`/post/${props.id}`}>
            <div className="m-1 w-44 h-52 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transition-colors duration-200">
                <Image 
                    className="mx-auto" 
                    src={thumbnailUrl} 
                    width={100} 
                    height={100} 
                    alt="Image goes here...">
                </Image>
                <h3 className="m-1">{props.title}</h3>
                <p className="m-1">{props.shortDescription}</p>
            </div>
        </Link>
    );
}