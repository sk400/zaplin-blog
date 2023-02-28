import { client } from "lib/sanity.client";
import { socialsQuery } from "lib/sanityQueries";

export default async function handler(req, res) {
  const socials = await client.fetch(socialsQuery);

  res.status(200).json({ socials });
}
