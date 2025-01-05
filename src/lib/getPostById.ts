import contentfulClient from "./contentfulClient";

export default async function getPostById(id: string) {
  try {
    const data = await contentfulClient.getEntry(id, {
      select: ['fields'],
    });
    console.log('Fetched post:', data.fields);
    return { id: data.sys.id, ...data.fields }; // Include the id in the returned data
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}