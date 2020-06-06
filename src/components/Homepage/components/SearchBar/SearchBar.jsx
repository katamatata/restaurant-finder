import React from "react";
import {
  SearchBarWrapper,
  SearchBarInput,
  SearchBarButton,
} from "./SearchBarElements";

export const SearchBar = (props) => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearchBar = (event) => {
    setSearchValue(event.target.value);
    props.handleSearchValue(event.target.value);
  };

  return (
    <SearchBarWrapper>
      <SearchBarInput
        type="text"
        onChange={(event) => handleSearchBar(event)}
        value={searchValue}
        placeholder="Please type the name of the restaurant or cuisine type here"
      />
    </SearchBarWrapper>
  );
};
