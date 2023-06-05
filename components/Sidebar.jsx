"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Stack,
  Text,
  Icon,
  Image,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillHome,
} from "react-icons/ai";

import { MdArticle } from "react-icons/md";

const Sidebar = ({ isOpen, placement, onClose, finalFocusRef, size }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={finalFocusRef}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link
              href="/"
              color="black"
              _hover={{ opacity: 0.8 }}
              className="cursor-pointer hover:scale-105 transition-all duration-200 "
              onClick={onClose}
            >
              <Image
                src="/images/logo-black.png"
                alt=""
                className="w-[120px] -mt-[35px]"
              />
            </Link>
          </DrawerHeader>

          <DrawerBody className="pt-5">
            <Stack spacing="" direction="column" justify="left">
              <Link
                href="/"
                color="black"
                _hover={{ opacity: 0.8 }}
                className="capitalize font-semibold"
                onClick={onClose}
              >
                <HStack
                  spacing="15px"
                  className="hover:bg-gray-300 
              px-2 py-2 rounded-sm transition-colors duration-200 cursor-pointer
              "
                >
                  <Icon
                    color="Black"
                    sx={{
                      width: "30px",
                      height: "24px",
                      mt: "10px",
                    }}
                    className=""
                  >
                    <AiFillHome />
                  </Icon>
                  <Text>Home</Text>
                </HStack>
              </Link>

              <Link
                href="/post"
                color="black"
                _hover={{ opacity: 0.8 }}
                className="capitalize font-semibold"
                onClick={onClose}
              >
                <HStack
                  spacing="15px"
                  className="hover:bg-gray-300 
              px-2 py-2 rounded-sm transition-colors duration-200 cursor-pointer
              "
                >
                  <Icon
                    color="Black"
                    sx={{
                      width: "30px",
                      height: "24px",
                      mt: "10px",
                    }}
                    className=""
                  >
                    <MdArticle />
                  </Icon>
                  <Text>Articles</Text>
                </HStack>
              </Link>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Flex
              direction="row"
              justify="space-between"
              align="center"
              className="w-full"
            >
              <HStack className="pt-1" spacing="15px">
                <Link href="https://twitter.com/">
                  <Icon
                    fontSize="24px"
                    color="Black"
                    className="cursor-pointer hover:scale-105 transition-all duration-200"
                  >
                    <AiOutlineTwitter />
                  </Icon>
                </Link>
                <Link href="https://www.instagram.com/">
                  <Icon
                    fontSize="24px"
                    color="Black"
                    className="cursor-pointer hover:scale-105 transition-all duration-200"
                  >
                    <AiFillInstagram />
                  </Icon>
                </Link>

                <Link href="https://www.linkedin.com/">
                  <Icon
                    fontSize="24px"
                    color="Black"
                    className="cursor-pointer hover:scale-105 transition-all duration-200"
                  >
                    <AiFillLinkedin />
                  </Icon>
                </Link>
              </HStack>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
