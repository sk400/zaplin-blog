import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ posts }) => {
  // const numbers = [1, 2, 3, 4, 5, 6];
  // console.log(posts);

  return (
    <SimpleGrid minChildWidth="250px" spacing="40px">
      {posts?.map((post) => (
        <BlogCard key={post?._id} post={post} />
      ))}
    </SimpleGrid>
  );
};

export default BlogList;
