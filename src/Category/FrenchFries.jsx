import React from "react";
import { frenchfries } from "../Data/FrenchFries";

const FrenchFries = () => {
  return (
    <>
      <div className="ItemList">
        <h2 className="CommonTitle">French Fries</h2>
        {frenchfries.map((el, id) => (
          <div className="Item" key={id}>
            <span className="ItemTitle">{el.title}</span>
            <span className="Dot"></span>
            <span className="Price">{el.price}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default FrenchFries;
