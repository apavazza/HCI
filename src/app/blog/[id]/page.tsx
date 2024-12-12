import Link from "next/link";
import type { Post } from "../page";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

type BlogPostProps = {
  params: { id: string };
};

async function getPost(id: string): Promise<Post> {
  const data = await fetch(`${process.env.BASE_API_URL}/posts/${id}`);
  return data.json();
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.id);
  const { id, title, body } = post;
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <article className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Post {id}: {title}
        </h1>
        <p>{body}</p>
      </article>
    </main>
  );
}