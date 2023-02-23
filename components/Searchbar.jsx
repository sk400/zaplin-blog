import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const Searchbar = () => {
  return (
    <div>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="white" fontSize="sm" />}
        />
        <Input
          type="text"
          placeholder="Search..."
          focusBorderColor="white"
          border="none"
          _placeholder={{ opacity: 1, color: "white" }}
          variant="flushed"
          color="white"
        />
      </InputGroup>
    </div>
  );
};

export default Searchbar;
