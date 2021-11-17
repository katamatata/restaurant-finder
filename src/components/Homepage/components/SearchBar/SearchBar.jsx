import React from "react";
import { Wrapper, InputBase, SearchIcon } from "./SearchBarElements";

export const SearchBar = (props) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
    props.setSearchValue(event.target.value);
  };

  return (
    <Wrapper>
      <SearchIcon src="./assets/icons/search.svg" alt="Search icon"/>
      <InputBase
        type="text"
        onChange={(event) => handleSearchInput(event)}
        value={inputValue}
        placeholder="Restaurant or cuisine..."
      />
    </Wrapper>
  );
};
