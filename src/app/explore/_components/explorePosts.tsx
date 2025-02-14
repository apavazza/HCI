"use client"

import PostBox from "./postBox";
import getPosts from "@/lib/getPosts";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";


export default function ExplorePosts(){
  const [posts, setPosts] = useState<{ id: string; title: string; thumbnail: string; shortDescription?: string }[]>([])
    const [searchQuery, setSearchQuery] = useState("")
  
    const fetchPosts = async () => {
      try {
        const fetchedPostsData = await getPosts()
        const fetchedPosts = fetchedPostsData.items.map((item) => ({ id: item.sys.id, ...item.fields })) || []
        setPosts(fetchedPosts)
      } catch (error) {
        console.error("Error fetching posts:", error)
      }
    }
  
    useEffect(() => {
      fetchPosts()
    }, [searchQuery]) // Added searchQuery to dependencies
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value)
    }
  
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.shortDescription && post.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())),
    )

  return(
    <>
      <div className="relative mb-8">
            <input
              id="search-posts"
              className="w-full p-4 pr-12 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
              type="text"
              placeholder="Search posts"
              value={searchQuery}
              onChange={handleSearchChange}
              autoFocus
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No posts found. Try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostBox key={post.id} props={post} />
              ))}
            </div>
          )}
        </>
  )
}