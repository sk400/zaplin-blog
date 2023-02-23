import {
  Box,
  Center,
  Flex,
  HStack,
  Spacer,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
// import { HamburgerIcon,  } from "@chakra-ui/icons";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <>
      <Box className="w-full h-[70px] bg-[#343A40] px-5 pt-5  md:px-16">
        <Flex align="center">
          <Center>
            <Text color="white" fontSize="sm" fontWeight="bold">
              ZAPLIN
            </Text>
          </Center>
          <Spacer />
          <Center className="space-x-2">
            <HStack className="pt-1">
              <Icon as={AiOutlineTwitter} color="white" fontSize="lg" />
              <Icon as={AiFillInstagram} color="white" fontSize="lg" />
              <Icon as={AiFillLinkedin} color="white" fontSize="lg" />
            </HStack>
            {/* <Text color="white" className="mt-1">
              Subscribe now
            </Text> */}
          </Center>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
