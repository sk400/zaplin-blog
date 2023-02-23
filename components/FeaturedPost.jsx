import { Box, Divider, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { options } from "lib/data";
import { urlFor } from "lib/sanityClient";
import Link from "next/link";
import React from "react";

const FeaturedPost = ({ featuredPost }) => {
  // console.log(featuredPost);
  return (
    <>
      <Link href={`/post/${featuredPost?.slug?.current}`}>
        <Box className="h-[300px] md:h-[350px] relative cursor-pointer ">
          <Image
            src={urlFor(featuredPost?.mainImage)?.url()}
            alt={featuredPost?.title}
            align="center"
            objectFit="cover"
            className="w-full h-[300px] md:h-[350px]"
          />
          <Box className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-25">
            <Box
              className=" h-[300px] md:h-[350px] max-w-[450px]  flex flex-col justify-center items-center 
          mx-auto "
            >
              <Tag
                size="sm"
                className="mb-1 md:mb-3 bg-opacity-20 bg-white text-gray-300"
              >
                {featuredPost?.categories[0]?.title}
              </Tag>
              <Heading color="white" className="mb-2 md:mb-5 text-center">
                {featuredPost?.title}
              </Heading>
              <Text
                color="white"
                fontSize="sm"
                noOfLines={2}
                className="text-center px-5"
              >
                Redesigned around the next-generation M2 chip, MacBook Air is
                strikingly thin and brings exceptional speed and power
              </Text>
              <Divider className="w-[50px] my-3" />
              <Text fontSize="xs" color="white">
                {new Date(featuredPost?.publishedAt)?.toLocaleDateString(
                  "de-DE",
                  options
                )}
              </Text>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default FeaturedPost;
