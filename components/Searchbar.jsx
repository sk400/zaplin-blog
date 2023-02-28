"use client";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import { useQuery } from "react-query";

const Searchbar = ({ setInputText, setSearchTerm, inputText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputText);
  };

  return (
    <form onSubmit={handleSubmit} className="px-5">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray" fontSize="sm" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search..."
          focusBorderColor="black"
          border="none"
          _placeholder={{ opacity: 1, color: "gray" }}
          variant="filled"
          color="black"
          onChange={(e) => setInputText(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default Searchbar;

// Do not pass children as props. Instead, nest children between the opening and closing tags.  react/no-children-prop
