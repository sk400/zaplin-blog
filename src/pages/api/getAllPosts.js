import { client } from "lib/sanity.client";
import { allPostsQuery } from "lib/sanityQueries";

export default async function handler(req, res) {
  const posts = await client.fetch(allPostsQuery);

  res.status(200).json({ posts });
}
