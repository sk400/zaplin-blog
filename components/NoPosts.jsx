import { Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

const NoPosts = ({ searching }) => {
  const state = searching ? "search term" : "category";
  return (
    <Center className="h-[82vh] overflow-y-hidden">
      <Flex
        direction="column"
        justify="center"
        align="center"
        className="space-y-5"
      >
        <Text fontSize="md" fontWeight="bold" className=" ">
          Sorry, there is no post related to your {state}.
        </Text>
        <Button
          colorScheme="blue"
          size="md"
          onClick={() => window.location.reload()}
          className="text-white bg-blue-600"
        >
          Refresh
        </Button>
      </Flex>
    </Center>
  );
};

export default NoPosts;
