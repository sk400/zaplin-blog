import { client } from "lib/sanity.client";
import { allPostsQuery } from "lib/sanityQueries";

export default async function handler(req, res) {
  const posts = await client.fetch(allPostsQuery);

  const editorPics = await posts?.slice(0, 3);

  res.status(200).json({ editorPics });
}
