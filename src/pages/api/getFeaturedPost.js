import { client } from "lib/sanityClient";
import { allPostsQuery } from "lib/sanityQueries";

export default async function handler(req, res) {
  const posts = await client.fetch(allPostsQuery);

  const featuredPost = posts[Math.floor(Math.random() * posts?.length)];

  res.status(200).json({ featuredPost });
}
