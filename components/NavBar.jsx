"use client";
import React, { useRef, useState } from "react";

import {
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import Sidebar from "./Sidebar";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Icon } from "@chakra-ui/react";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex
        height="70px"
        className="bg-black bg-opacity-25 px-5  md:px-16 sticky top-0 z-10"
        alignItems="center"
      >
        <Center>
          <Heading fontSize="lg" color="white">
            <Link href="/" color="white" _hover={{ opacity: 0.8 }}>
              <Image src="/images/zaplin.png" alt="" className="w-[80px]" />
            </Link>
          </Heading>
        </Center>
        <Spacer />

        <Spacer />
        <Center>
          <Center className="md:hidden">
            <IconButton
              aria-label="Toggle drawer"
              icon={<HamburgerIcon color="white" fontSize="2xl" />}
              size="md"
              onClick={onOpen}
              ref={btnRef}
            />
          </Center>

          <Center className="hidden md:flex items-center">
            <HStack spacing="10px">
              <Link href="/" color="white" _hover={{ opacity: 0.8 }}>
                Home
              </Link>
              <Link href="/post" color="white" _hover={{ opacity: 0.8 }}>
                Articles
              </Link>
            </HStack>
            <Divider
              orientation="vertical"
              height="15px"
              color="white"
              className="mx-1.5"
            />
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
        </Center>
      </Flex>

      <Sidebar
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      />
    </>
  );
};

export default NavBar;
