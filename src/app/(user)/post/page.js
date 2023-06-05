import { PostsPageContents } from "components";
import React from "react";
import { fetchAllPosts } from "utils/fetchAllPosts";

const page = async () => {
  const allPosts = await fetchAllPosts();

  return (
    <>
      <PostsPageContents allPosts={allPosts} />
    </>
  );
};

export default page;
