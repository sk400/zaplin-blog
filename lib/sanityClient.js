import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

export const urlFor = (source) => imageUrlBuilder(client).image(source);
