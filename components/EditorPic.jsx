import { Box, Heading, Image, Stack, Tag, Text } from "components/chakraui";
import { options } from "lib/data";
import { urlFor } from "lib/sanity.client";
import Link from "next/link";
import React from "react";

const EditorPic = ({ editorPic }) => {
  return (
    <>
      <Link href={`/post/${editorPic?.slug?.current}`}>
        <Box className="relative hover:scale-105 transition-transform duration-200 cursor-pointer">
          <Image
            src={urlFor(editorPic?.mainImage)?.url()}
            alt={editorPic?.title}
            borderRadius="lg"
          />

          <Stack
            spacing="1"
            className="absolute top-0 left-0 bottom-0
            right-0 bg-black bg-opacity-30 w-full 

            "
            borderRadius="lg"
            align="center"
            justify="center"
          >
            <Text fontSize="xs" color="white">
              {new Date(editorPic?.publishedAt)?.toLocaleDateString(
                "de-DE",
                options
              )}
            </Text>
            <Heading size="md" color="white" className="text-center">
              {editorPic?.title}
            </Heading>
            <Text
              noOfLines={2}
              color="white"
              fontSize="sm"
              className="px-5 text-center"
            >
              {editorPic?.description}
            </Text>
          </Stack>
          <Tag
            size="sm"
            className="mb-1 md:mb-3 bg-opacity-20 bg-white text-white
            absolute top-[30px] right-[30px]
            "
          >
            {editorPic?.category}
          </Tag>
        </Box>
      </Link>
    </>
  );
};

export default EditorPic;
