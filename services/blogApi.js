import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL} `,
  }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => `/api/getAllPosts`,
    }),
  }),
});

export const { useGetAllBlogsQuery } = blogApi;
