"use client";
import { Box, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { Loader, TopContainer } from "components";
import { urlFor } from "lib/sanityClient";
import React from "react";
import { useQuery } from "react-query";
import { fetchPostDetails } from "utils/fetchPostDetails";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "components/RichTextComponents";

const Page = ({ params: { slug } }) => {
  // console.log(slug);

  const {
    data: postDetail,
    isFetching,
    error,
  } = useQuery("postDetail", () => fetchPostDetails(slug));

  if (isFetching) return <Loader />;

  if (error) return "An unknown error occured";

  console.log(postDetail);

  // const postdetail = await fetchPostDetails(slug);

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
