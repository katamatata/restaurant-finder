import React from "react";
import "../styles.css";

import RestaurantNameList from "../components/RestaurantNameList";

class Restaurant extends React.Component {
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
    console.log(data.results);
  };

  render() {
    const { restaurantNameList } = this.state;

    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <button onClick={this.loadData}>Search</button>
        </div>
        <div >
          {restaurantNameList.map(itemObject => (
            <div className="gridlist">
              <RestaurantNameList {...itemObject} />
            </div>
          ))}
        </div>
        {/* end return */}
      </div>
    );
  }
}

export default Restaurant;

