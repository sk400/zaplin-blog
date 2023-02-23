import { Box, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { urlFor } from "lib/sanityClient";
import Link from "next/link";
import React from "react";

const TopContainer = ({ featuredPost }) => {
  // console.log(featuredPost);
  return (
    <Link href={`/post/${featuredPost?.slug?.current}`}>
      <Box className=" bg-black -mt-[70px] relative cursor-pointer ">
        <Image
          src={urlFor(featuredPost?.mainImage)?.url()}
          alt={featuredPost?.title}
          align="center"
          objectFit="cover"
          className="w-full h-[350px] md:h-[450px]"
        />
        <Box
          className="absolute top-0 left-0 bottom-0 right-0 px-5  md:px-16 pt-36 md:p-48  
        bg-black bg-opacity-20
        "
        >
          <Box className=" flex flex-col items-start  max-w-[450px]  ">
            <Tag
              size="sm"
              className="mb-1 md:mb-3 bg-opacity-20 bg-white text-gray-300"
            >
              {featuredPost?.categories[0]?.title}
            </Tag>
            <Heading color="white" className="mb-2 md:mb-5">
              {featuredPost?.title}
            </Heading>
            <Text color="white" fontSize="sm" noOfLines={2}>
              {featuredPost?.description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default TopContainer;
