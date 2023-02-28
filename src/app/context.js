"use client";

import { Loader } from "components";
import { useState, useContext, createContext } from "react";
import { useQuery } from "react-query";
import { fetchAllPosts } from "utils/fetchAllPosts";
import { fetchEditorPics } from "utils/fetchEditorPics";

const App = createContext();

export const Provider = ({ children }) => {
  const {
    data: allPosts,
    isFetching,
    error,
  } = useQuery("posts", async () => fetchAllPosts());

  const { data: editorPics } = useQuery("editorPics", async () =>
    fetchEditorPics()
  );

  if (isFetching) return <Loader />;

  if (error) return "An unknown error occured";

  const featuredPost = allPosts[Math.floor(Math.random() * allPosts?.length)];

  const popularPosts = allPosts?.slice(0, 6);

  const value = { allPosts, editorPics, featuredPost, popularPosts };
  return <App.Provider value={value}>{children}</App.Provider>;
};

export const useGlobalData = () => useContext(App);
