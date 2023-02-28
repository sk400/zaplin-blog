import { client } from "lib/sanity.client";
import { searchQuery } from "lib/sanityQueries";

export default async function handler(req, res) {
  const searchTerm = req?.query?.searchTerm;

  const query = searchQuery(searchTerm);

  const posts = await client.fetch(query);

  res.status(200).json({ posts });
}
