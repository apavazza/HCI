"use client";

import getPostById from '@/lib/getPostById';
import { useEffect, useState } from 'react';
import PostCard from './_components/postCard';

type BlogPostProps = {
  params: { id: string };
};


const PostPage = ({params}: BlogPostProps) => {
  const [post, setPost] = useState([]);

  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostById(params.id);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [params.id]);


  return (
    <div>
      <PostCard props={post} />
    </div>
  );
};


export default PostPage;