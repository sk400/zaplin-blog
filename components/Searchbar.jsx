import { Icon, Input, InputGroup, InputLeftElement } from "components/chakraui";

import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = ({ setInputText, setSearchTerm, inputText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputText);
  };

  return (
    <form onSubmit={handleSubmit} className="px-5">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon
            color="gray"
            sx={{
              width: "30px",
              height: "25px",
              mt: 3,
              ml: 3,
            }}
          >
            <AiOutlineSearch />
          </Icon>
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
