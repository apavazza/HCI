import contentfulClient from "./contentfulClient";
import { unstable_cache } from 'next/cache';

async function getPosts() {
  const data = await contentfulClient.withoutUnresolvableLinks.getEntries({
    content_type: 'blogPost',
    select: ['fields'],
  });
  return data.items.map(item => ({ id: item.sys.id, ...item.fields })) || []; // Safely accessing the fields
}

//const getPostsCached = unstable_cache(fetchPosts, ['posts'], { revalidate: 60 * 60, tags: ['posts'] });

export default getPosts;