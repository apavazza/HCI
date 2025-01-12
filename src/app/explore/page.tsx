"use client"; // Add this at the top of the file to mark the component as a Client Component

import React, { useState, useEffect } from 'react';
import PostBox from '@/components/postBox';
import getPosts from '@/lib/getPosts';



const ExplorePage = () => {
  const [posts, setPosts] = useState<{ id: string; title: string; thumbnail: string; shortDescription?: string }[]>([]);

  const fetchPosts = async () => {
    try {
      const fetchedPostsData = await getPosts();
      const fetchedPosts = fetchedPostsData.items.map(item => ({ id: item.sys.id, ...item.fields })) || [];
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* TRENDING */}
      <div className="m-5 p-5 bg-[#ace2d1] w-11/12 rounded-lg border border-gray-200 shadow-md">
        <h2>Explore New Posts</h2>
        <div className="flex justify-around flex-wrap">
          {/* Dynamically displaying fetched posts */}
          {posts.map((post, index) => (
            // <PostBox id={post.id} key={index} title={post.title} thumbnail={post.thumbnail} text={post.shortDescription || 'No description available'} />
            <PostBox key={post.id} props={post} />
          ))}
        </div>
      </div>

      {/* <div className="m-5 flex justify-between flex-wrap w-11/12"> */}
        {/* EXPLORE */}
        {/* <div className="inline-block mx-auto p-3 bg-green-200 rounded-lg border border-gray-200 shadow-md">
          <h2>Explore</h2>
          <div className="flex justify-around flex-wrap">
            
          </div>
        </div> */}

        {/* RECENTLY PUBLISHED */}
        {/* <div className="inline-block mt-5 mx-auto p-3 bg-green-200 rounded-lg border border-gray-200 shadow-md">
          <h2>Recently Published</h2>
          <div className="flex justify-around flex-wrap">
            
          </div>
        </div> */}
      {/* </div> */}
    </main>
  );
};

export default ExplorePage;
