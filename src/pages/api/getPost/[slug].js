import { client } from "lib/sanity.client";
import { postDetailQuery } from "lib/sanityQueries";

export default async function handler(req, res) {
  const slug = req?.query?.slug;

  // console.log(slug);
  const query = postDetailQuery(slug);

  const post = await client.fetch(query);

  res.status(200).json({ post });
}
