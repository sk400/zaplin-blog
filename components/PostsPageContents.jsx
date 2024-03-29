"use client";

import { Box, Heading, HStack, Spacer, Text } from "components/chakraui";
import { BlogList, Loader, NoPosts, Searchbar } from "components";
import { categories } from "lib/data";
import React, { useState, useEffect } from "react";

import { fetchSearchPosts } from "utils/fetchSearchPosts";

const PostsPageContents = ({ allPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputText, setInputText] = useState("");
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [categoryFetching, setCategoryFetching] = useState(false);

  const getPosts = async () => {
    if (searchTerm) {
      try {
        setLoading(true);
        const data = await fetchSearchPosts(searchTerm.toLowerCase());

        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    } else {
      setPosts(allPosts);
    }
  };

  const getPostByCategory = async () => {
    if (category === "all") {
      setPosts(allPosts);
    } else {
      try {
        setCategoryFetching(true);
        const data = await fetchSearchPosts(category.toLowerCase());

        setPosts(data);
        setCategoryFetching(false);
      } catch (error) {
        console.log(error);
        setCategoryFetching(true);
      }
    }
  };

  useEffect(() => {
    getPosts();
  }, [searchTerm]);

  useEffect(() => {
    getPostByCategory();
  }, [category]);

  if (loading) return <Loader />;

  if (posts?.length === 0) return <NoPosts searching />;

  return (
    <>
      <Box className="py-10 px-5 max-w-7xl mx-auto">
        <Box className=" sm:flex justify-between items-center mb-10 ">
          <Heading className="mb-5">All posts</Heading>
          <Spacer />
          <Searchbar
            setSearchTerm={setSearchTerm}
            inputText={inputText}
            setInputText={setInputText}
          />
        </Box>
        <HStack spacing="10px  ">
          <Text
            fontSize="sm"
            fontWeight="bold"
            className=" cursor-pointer"
            onClick={() => setPosts(allPosts)}
          >
            All
          </Text>
          {categories?.map((category, index) => (
            <Text
              key={index}
              fontSize="sm"
              fontWeight="bold"
              className=" cursor-pointer"
              onClick={() => setCategory(category)}
            >
              {category}
            </Text>
          ))}
        </HStack>

        <Box className="pt-5">
          {posts?.length === 0 ? (
            <NoPosts />
          ) : categoryFetching ? (
            <Loader />
          ) : (
            <Box>
              <BlogList posts={posts} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default PostsPageContents;
