import React from "react";
import "../styles.css";


class FilterPage extends React.Component {
    render() {
        return (
            <div>
                <div className="filter-content">
                    <h3 style={{ marginLeft: "20%", marginRight: "5px" }}>Filter </h3>
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>Categories </h3>
                    <select name="category" id="category" >
                        <option value="">Show All</option>
                        <option value="take-away">Take Away</option>
                        <option value="eat-in">Eat In</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>Price </h3>
                    <select name="price" id="price" >
                        <option value="">Show All</option>
                        <option value="$">Cheap</option>
                        <option value="$$">Normal</option>
                        <option value="$$$">Expensive</option>
                    </select>
                    <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>Rating </h3>
                    <select name="rating" id="rating" >
                        <option value="">Show All</option>
                        <option value="2">Lower</option>
                        <option value="3">Medium</option>
                        <option value="4">High</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default FilterPage;