import { Box, Heading, Tag, Text } from "components/chakraui";
import { urlFor } from "lib/sanity.client";
import Image from "next/image";
import Link from "next/link";

const TopContainer = ({ featuredPost }) => {
  return (
    <Link href={`/post/${featuredPost?.slug?.current}`}>
      <Box className=" bg-black -mt-[70px] relative  cursor-pointer ">
        <Box className="h-[350px] md:h-[450px] relative">
          <Image
            src={urlFor(featuredPost?.mainImage)?.url()}
            alt={featuredPost?.title}
            align="center"
            className="w-full cover "
            fill
            priority="true"
          />
        </Box>

        <Box
          className="absolute top-0 left-0 bottom-0 right-0 px-5  md:px-16 pt-36 md:p-48  
        bg-black bg-opacity-30 space-y-10
        "
        >
          <Box className=" flex flex-col items-start  max-w-[450px]  ">
            <Tag
              size="sm"
              className="mb-1 md:mb-3 bg-opacity-20 bg-white text-gray-100"
            >
              {featuredPost?.category}
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
