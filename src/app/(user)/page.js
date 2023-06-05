import { Box, Flex, Heading, Icon, Spacer, Text } from "components/chakraui";
import { fetchAllPosts } from "utils/fetchAllPosts";
import { BlogList, EditorPics, FeaturedPost, TopContainer } from "components";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Page = async () => {
  const allPosts = await fetchAllPosts();

  const featuredPost = allPosts[Math.floor(Math.random() * allPosts?.length)];

  const popularPosts = allPosts?.slice(0, 6);

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
            <Icon>
              <BsArrowRight />
            </Icon>
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
        <EditorPics />
      </Box>
    </Box>
  );
};

export default Page;
