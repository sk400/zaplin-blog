"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  BlogList,
  EditorPics,
  FeaturedPost,
  Footer,
  Loader,
  TopContainer,
} from "components";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";
import { useQuery } from "react-query";

import { Link } from "@chakra-ui/next-js";
import { fetchFeaturedPost } from "utils/fetchFeaturedPost";
import { fetchAllPosts } from "utils/fetchAllPosts";
import { fetchEditorPics } from "utils/fetchEditorPics";

const Page = () => {
  const {
    data: allPosts,
    isFetching,
    error,
  } = useQuery("posts", fetchAllPosts);

  const { data: featuredPost } = useQuery("featuredPost", fetchFeaturedPost);
  const { data: editorPics } = useQuery("editorPics", fetchEditorPics);

  if (isFetching) return <Loader />;

  if (error) return "An unknown error occured";

  return (
    <Box className="">
      {/* Top container */}
      <TopContainer featuredPost={featuredPost} />
      {/* Blogs */}
      <Box className="py-10 px-5 md:px-16">
        <Heading className="mb-7">Popular topics</Heading>
        <Flex className="mb-5">
          <HStack spacing="10px  ">
            <Text fontSize="sm" fontWeight="bold" className="text-amber-500">
              All
            </Text>
            <Text fontSize="sm" fontWeight="bold" className="cursor-pointer">
              Tech
            </Text>
            <Text fontSize="sm" fontWeight="bold" className="cursor-pointer ">
              Freelancing
            </Text>
            <Text fontSize="sm" fontWeight="bold" className="cursor-pointer">
              Travel
            </Text>
          </HStack>
          <Spacer />
          <Text fontSize="sm" fontWeight="bold" className="cursor-pointer">
            <Link
              href="/posts"
              className="cursor-pointer  "
              _hover={{ opacity: 0.8 }}
            >
              View all
            </Link>
          </Text>
        </Flex>
        <SimpleGrid minChildWidth="300px" spacing="40px">
          <BlogList posts={allPosts} />
        </SimpleGrid>
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
      {/* <Box>
        <Footer />
      </Box> */}

      <ReactQueryDevtools initialIsOpen />
    </Box>
  );
};

export default Page;

// const filterPostsByCategory = () => {
//   allPosts?.map((post) => {
//     const categories = post?.categories;

//     const choosenPost = categories?.find(
//       (category) => category?.title == "Travel"
//     );

//     // console.log(choosenPost);

//     return choosenPost;
//   });
// };

// const choosenPosts = filterPostsByCategory();

// // filterPostsByCategory();

// console.log(choosenPosts);
