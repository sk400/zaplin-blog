"use client";

import { Loader, TopContainer } from "components";
import React from "react";
import { useQuery } from "react-query";
import { fetchPostDetails } from "utils/fetchPostDetails";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "components/RichTextComponents";
import { allPostsQuery } from "lib/sanityQueries";

const getAllSlugs = async () => {
  const posts = await client.fetch(allPostsQuery);

  const allSlugs = posts?.map((item) => item?.slug?.current);
  return allSlugs;
};

export const revalidate = 5;

export async function generateStaticParams() {
  const allSlugs = await getAllSlugs();

  return allSlugs?.map((slug) => ({
    slug: slug,
  }));
}

const Page = ({ params: { slug } }) => {
  // console.log(slug);

  const {
    data: postDetail,
    isFetching,
    error,
  } = useQuery("postDetail", () => fetchPostDetails(slug));

  if (isFetching) return <Loader />;

  if (error) return "An unknown error occured";

  return (
    <>
      <TopContainer featuredPost={postDetail} />
      <article className="max-w-5xl py-7 mx-auto px-5">
        <PortableText
          value={postDetail?.body}
          components={RichTextComponents}
        />
      </article>
    </>
  );
};

export default Page;
