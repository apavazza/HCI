"use client";

import getPostById from '@/lib/getPostById';
import { useEffect, useState } from 'react';
import PostCard from '@/components/postCard';

type BlogPostProps = {
  params: { id: string };
};


const PostPage = ({params}) => {
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    try {
      const fetchedPost = await getPostById(params.id);
      setPost(fetchedPost);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);


  return (
    <div>
      {/* <PostCard title={post.title} author={post.author} thumbnail={post.thumbnail} text={post.shortDescription || 'No description available'} /> */}
      <PostCard props={post} />
    </div>
  );
};


export default PostPage;