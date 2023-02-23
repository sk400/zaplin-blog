import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { options } from "lib/data";
import { urlFor } from "lib/sanityClient";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }) => {
  // console.log(post);
  return (
    <>
      <Link href={`/post/${post?.slug?.current}`}>
        <Card className="hover:scale-105 transition-transform duration-200 cursor-pointer">
          <CardBody className="relative">
            <Image
              src={urlFor(post?.mainImage)?.url()}
              alt={post?.title}
              borderRadius="lg"
            />

            <Stack mt="6" spacing="1">
              <Text fontSize="xs">
                {new Date(post?.publishedAt)?.toLocaleDateString(
                  "de-DE",
                  options
                )}
              </Text>
              <Heading size="lg">{post?.title}</Heading>
              <Text noOfLines={3}>{post?.description}</Text>
              <Text color="blue.600" fontSize="sm" className="cursor-pointer">
                Read more
              </Text>
            </Stack>
            <Tag
              size="sm"
              className="mb-1 md:mb-3 bg-opacity-20 bg-gray-400 text-white
            absolute top-[30px] right-[30px]
            "
            >
              {post?.categories[0]?.title}
            </Tag>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default BlogCard;
