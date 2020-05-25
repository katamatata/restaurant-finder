import React from "react";
import "./nameListStyle.css";
import errorImage from "../image/ab2.png";
import mapImage from "../image/map.png";

const NameList = props => {
  return (
    <div>
      <div className="nameList">

          <img
            className="restaurant-image"
            src={props.icon ? props.icon : errorImage}
            alt="icon"
          />{" "}
          <text-corner> {props.readyInMinutes}mint</text-corner>
          <text> {props.name} </text>{" "}
       
        </div>
           <div className="inlneStyle">
        <text> {props.formatted_address} </text>{" "}

        <a href={props.photos[0].html_attributions[0]} rel="noopener noreferrer"
            target="_blank" >
            <img src={mapImage} alt="map" style={{width:"25px" ,height:"25px"}} /></a>

       </div>

    </div>
  );
};

export default NameList;
