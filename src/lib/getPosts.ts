import contentfulClient from "./contentfulClient";
import { unstable_cache } from 'next/cache';

// const getPosts = unstable_cache(async () => {
//   const data = await contentfulClient.withoutUnresolvableLinks.getEntries({
//       content_type: 'blogPost',
//       select: ['fields'],
//   });

//   return data;

// }, ['navigation'], { revalidate: 60 * 60, tags: ['navigation'] });


const getPosts = async () => {
  const data = await contentfulClient.withoutUnresolvableLinks.getEntries({
    content_type: 'blogPost',
    select: ['fields'],
  });
  
  return data;
};

export default getPosts;