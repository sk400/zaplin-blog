"use client";
import React, { useRef, useState } from "react";
import Searchbar from "./Searchbar";
import {
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
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
              ZAPLIN
            </Link>
          </Heading>
        </Center>
        <Spacer />
        <Center>
          <Searchbar />
        </Center>
        {/* <Center style={{ display: showSearchBar ? "flex" : "none" }}>
          <Searchbar />
        </Center> */}
        <Spacer />
        <Center>
          {/* <Center className="md:hidden">
            <IconButton
              aria-label="Toggle searchbar"
              icon={<SearchIcon color="white" fontSize="xl" />}
              size="md"
              onClick={() => setShowSearchBar(!showSearchBar)}
            />
          </Center> */}
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
              <Link
                href="/"
                color="white"
                _hover={{ opacity: 0.8 }}
                // fontFamily="Montserrat"
              >
                Home
              </Link>
              <Link href="/about" color="white" _hover={{ opacity: 0.8 }}>
                About
              </Link>
              <Link href="/posts" color="white" _hover={{ opacity: 0.8 }}>
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
              <Icon as={AiOutlineTwitter} color="white" fontSize="lg" />
              <Icon as={AiFillInstagram} color="white" fontSize="lg" />
              <Icon as={AiFillLinkedin} color="white" fontSize="lg" />
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

// facebook, twitter, linkedIn, instagram
// const [showSearchBar, setShowSearchBar] = useState(false);