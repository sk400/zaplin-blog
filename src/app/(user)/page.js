"use client";

import { Box, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import {
  BlogList,
  EditorPics,
  FeaturedPost,
  Loader,
  TopContainer,
} from "components";
import { ReactQueryDevtools } from "react-query/devtools";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { useGlobalData } from "../context";

const Page = () => {
  const { featuredPost, editorPics, popularPosts } = useGlobalData();

  return (
    <Box className="">
      {/* Top container */}
      <TopContainer featuredPost={featuredPost} />
      {/* Blogs */}
      <Box className="py-10 px-5 md:px-16">
        <Heading className="mb-7">Popular posts</Heading>
        <Flex className="mb-5">
          <Spacer />

          <Link
            href="/post"
            className="cursor-pointer flex items-center space-x-2 "
            _hover={{ opacity: 0.8 }}
          >
            <Text fontSize="sm" fontWeight="bold" className=" cursor-pointer">
              View all
            </Text>
            <ArrowForwardIcon className="sm:text-lg" />
          </Link>
        </Flex>

        <BlogList posts={popularPosts} />
      </Box>

      {/* Featured post */}
      <Box className="py-10">
        <FeaturedPost featuredPost={featuredPost} />
      </Box>

      {/* Editor pics */}
      <Box className="px-5 md:px-16 py-10">
        <Heading className="mb-7 ">Editor pics</Heading>
        <EditorPics editorPics={editorPics} />
      </Box>
    </Box>
  );
};

export default Page;
