import React, { useState, useRef, useEffect } from "react";

import { Dropdown, DropdownBtn, DropdownContent, DropdownItem } from "./DropdownMenuElements";

export const DropdownMenu = ({ title, options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const dropdownRef = useRef();

  const handleSelected = (item) => {
    setSelected(item.label);
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown>
      <DropdownBtn onClick={() => setIsOpen(!isOpen)}>
        <p>{selected ? selected : title}</p>
        <img src="./assets/icons/arrow-down.svg" alt="Arrow down icon"/>
      </DropdownBtn>
      {isOpen && (
        <DropdownContent>
          {options.map(option => 
            <DropdownItem 
              key={option.value} 
              onClick={() => handleSelected(option)} 
              // selected={selected} 
            >
              {option.label}
            </DropdownItem>
          )}
        </DropdownContent>
      )} 
    </Dropdown>   
  );
};