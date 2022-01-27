import React from "react";

import { Wrapper, InputBase, SearchIcon } from "./SearchBarElements";

export const SearchBar = ({ searchValue, setSearchValue }) => {
  
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Wrapper>
      <SearchIcon src="./assets/icons/search.svg" alt="Search icon"/>
      <InputBase
        type="text"
        onChange={handleSearchInputChange}
        value={searchValue}
        placeholder="Restaurant, cuisine or dietary..."
      />
    </Wrapper>
  );
};
