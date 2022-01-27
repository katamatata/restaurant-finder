import React, { useState, useEffect } from "react";

import ImageBlock from "./components/ImageBlock";
import FiltersBlock from "./components/FiltersBlock";
import RestaurantList from "./components/RestaurantList";

const RESTAURANTS_API =
  "https://redi-final-restaurants.herokuapp.com/restaurants";

export const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [restaurantList, setRestaurantList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedDietary, setSelectedDietary] = useState("");

  useEffect(() => {
    fetch(RESTAURANTS_API)
      .then((response) => response.json())
      .then((data) => {
        setRestaurantList(data.results);
        const categoriesList = data.results.map(item => item.cuisine.toLowerCase());
        categoriesList.push("all");
        setCategories([...new Set(categoriesList.sort())]);
      })
      // .catch()
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // console.log("restaurantList:", restaurantList);
  // console.log("categories:", categories);

  // console.log("Delivery:", restaurantList.filter((rest) => rest.delivery));
  // console.log("Pickup:", restaurantList.filter((rest) => rest.pickup));
  // console.log("Dine-in only:", restaurantList.filter((rest) => !rest.pickup && !rest.delivery));

  return (
    <>
      <ImageBlock />
      <FiltersBlock
        loading={loading} 
        categories={categories}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
        selectedServiceType={selectedServiceType}
        setSelectedServiceType={setSelectedServiceType} 
        selectedDietary={selectedDietary}
        setSelectedDietary={setSelectedDietary}
        />
      <RestaurantList
        loading={loading}
        restaurants={restaurantList}
        searchValue={searchValue}
        selectedCategory={selectedCategory} 
        selectedServiceType={selectedServiceType} 
        selectedDietary={selectedDietary}
      />
    </>
  );
};
