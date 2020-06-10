import React from "react";
import { ContentWrapper } from "../../../../common";
import { CategoriesWrapper, Category } from "./CategoriesListElements";
import { Loading } from "./CategoriesListElements";

export const CategoriesList = (props) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const RESTAURANTS_API =
    "https://redi-final-restaurants.herokuapp.com/restaurants";

  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(RESTAURANTS_API);
      const data = await response.json();
      data.results.map((item) => {
        categories.push(makeUpperCase(item.cuisine));
      });
      categories.push("All");
      setCategories([...new Set(categories.sort())]);
      setLoading(false);
    };
    fetchData();
  }, []);

  const makeUpperCase = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  const handleSelectedCategory = (item) => {
    let category = null;
    if (item !== "All") {
      category = item;
    }
    setSelectedCategory(category);
    props.setSelectedCategory(category);
  };

  return loading ? (
    <Loading src="./loading.svg" alt="Loading" />
  ) : (
    <ContentWrapper>
      <CategoriesWrapper>
        {categories.map((item) => (
          <Category
            key={item}
            onClick={() => handleSelectedCategory(item)}
            active={
              item === selectedCategory ||
              (item === "All" && selectedCategory === null)
            }
          >
            {item}
          </Category>
        ))}
      </CategoriesWrapper>
    </ContentWrapper>
  );
};
