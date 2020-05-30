import React from "react";
import "../styles.css";

import RestaurantNameList from "../components/RestaurantNameList";
import FilterPage from "./FilterPage";

class RestaurantFrontPage extends React.Component {
  state = {
    restaurantNameList: []
  };

  loadData = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://test-places-response.s3.eu-west-3.amazonaws.com/response.json"
    );

    const data = await response.json();
    this.setState({
      restaurantNameList: data.results
    });
  };

  render() {
    const { restaurantNameList } = this.state;

    return (
      <div>
        <div className="header-style">
          <h2>Favourite Food Finder</h2>
          <button onClick={this.loadData}> Search </button>

        </div>
        <FilterPage />
        <div className="nameListContainerStyle" >
          {restaurantNameList.map(itemObject => (
            <div className="gridlist">
              <RestaurantNameList {...itemObject} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RestaurantFrontPage;

