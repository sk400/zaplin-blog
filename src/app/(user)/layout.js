"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { Footer, NavBar } from "components";
import { QueryClient, QueryClientProvider } from "react-query";
import "../globals.css";

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white">
        <CacheProvider>
          <ChakraProvider>
            <QueryClientProvider client={queryClient}>
              <NavBar />
              {children}
              <Footer />
            </QueryClientProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
