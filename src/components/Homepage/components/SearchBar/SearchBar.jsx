import React from "react";
import { SearchBarWrapper, SearchBarInput } from "./SearchBarElements";

export const SearchBar = (props) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
    props.setSearchValue(event.target.value);
  };

  return (
    <SearchBarWrapper>
      <SearchBarInput
        type="text"
        onChange={(event) => handleSearchInput(event)}
        value={inputValue}
        placeholder="Please type the name of the restaurant or cuisine type here"
      />
    </SearchBarWrapper>
  );
};
