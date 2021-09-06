import React from "react";
import { SearchInput } from "./SearchBarElements";

export const SearchBar = (props) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
    props.setSearchValue(event.target.value);
  };

  return (
    <SearchInput
      type="text"
      onChange={(event) => handleSearchInput(event)}
      value={inputValue}
      placeholder="Search by the name of the restaurant or cuisine type"
    />
  );
};
