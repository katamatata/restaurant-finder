import React from "react";

import { ContentWrapper, Loading } from "../../../../common";

import { options } from "./utils";
import CategoriesList from "./components/CategoriesList";
import SearchBar from "./components/SearchBar";
import DropdownMenu from "./components/DropdownMenu";

import { 
  FiltersMainContainer, 
  InnerContainer, 
  InputWrapper, 
  DropdownsContainer 
} from "./FiltersBlockElements";

export const FiltersBlock = ({ 
  loading,
  categories,
  searchValue,
  setSearchValue, 
  selectedCategory,
  setSelectedCategory, 
  selectedServiceType,
  setSelectedServiceType, 
  selectedDietary,
  setSelectedDietary
}) => {
  
  const { serviceType, dietary } = options;

  return loading ? (
    <Loading src="./assets/spinner.gif" alt="Loading in progress" />
  ) : (
    <ContentWrapper>
      <FiltersMainContainer>
        <InnerContainer>
          <CategoriesList 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <InputWrapper>
            <SearchBar 
              searchValue={searchValue} 
              setSearchValue={setSearchValue} 
            />
          </InputWrapper>
        </InnerContainer>
        <DropdownsContainer>
          <DropdownMenu 
            title="Service Type" 
            options={serviceType}
            selected={selectedServiceType}
            setSelected={setSelectedServiceType}
          />
          <DropdownMenu 
            title="Dietary" 
            options={dietary}
            selected={selectedDietary}
            setSelected={setSelectedDietary}
          />
        </DropdownsContainer>
      </FiltersMainContainer>
    </ContentWrapper>
  );
};