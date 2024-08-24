import React from "react";
import { vegmomo } from "../Data/Vegmomo";
import { chickenmomo } from "../Data/Chickenmomo";
const VegMomo = () => {
  return (
    <>
      <div className="ItemList">
        <h2 className="CommonTitle">Veg MoMo</h2>
        {vegmomo.map((el, id) => (
          <div className="Item" key={id}>
            <span className="ItemTitle">{el.title}</span>
            <span className="Dot"></span>
            <span className="Price">{el.price}</span>
          </div>
        ))}
      </div>
      <div className="ItemList">
        <h2 className="CommonTitle">Chicken MoMo</h2>
        {chickenmomo.map((el, id) => (
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

export default VegMomo;
