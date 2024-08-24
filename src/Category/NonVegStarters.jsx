import React from "react";
import { Nonvegstarters } from "../Data/NonVegstarters";

const NonVegStarters = () => {
  return (
    <>
      <div className="ItemList">
        <h2 className="CommonTitle">Non Veg Starters</h2>
        {Nonvegstarters.map((el, id) => (
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

export default NonVegStarters;
