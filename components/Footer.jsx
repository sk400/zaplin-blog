import {
  Box,
  Center,
  Flex,
  HStack,
  Spacer,
  Text,
  Icon,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Box className="w-full h-[70px] bg-[#343A40] px-5 pt-5  md:px-16 ">
        <Flex align="center">
          <Center>
            <Link href="/" color="white" _hover={{ opacity: 0.8 }}>
              <Image src="/images/zaplin.png" alt="" className="w-[80px]" />
            </Link>
          </Center>
          <Spacer />
          <Center className="space-x-2">
            <HStack className="pt-1">
              <Link href="https://twitter.com/">
                <Icon as={AiOutlineTwitter} color="white" fontSize="lg" />
              </Link>
              <Link href="https://www.instagram.com/">
                <Icon as={AiFillInstagram} color="white" fontSize="lg" />
              </Link>

              <Link href="https://www.linkedin.com/">
                <Icon as={AiFillLinkedin} color="white" fontSize="lg" />
              </Link>
            </HStack>
          </Center>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
