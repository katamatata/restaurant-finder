import React from "react";
import "./nameListStyle.css";
import starImage from "../image/star1.png";
const ShortRating = props => {
  return (
    <div>
      <div className="inlineStyle">
        <text > rating </text>
        <img src={starImage} alt="star" style={{ width: "15px", height: "15px" }} />
        <text>{props.rating}/5({props.user_ratings_total})</text>
      </div>
    </div>
  );
};

export default ShortRating;