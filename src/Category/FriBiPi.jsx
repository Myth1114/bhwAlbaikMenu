import React from "react";
import { friedrice } from "../Data/FriedRice";
import { biryani } from "../Data/Biryani";
import { pizza } from "../Data/Pizza";
const FriBiPi = () => {
  return (
    <>
      <div className="ItemList">
        <h2 className="CommonTitle">Fried Rice</h2>
        {friedrice.map((el, id) => (
          <div className="Item" key={id}>
            <span className="ItemTitle">{el.title}</span>
            <span className="Dot"></span>
            <span className="Price">{el.price}</span>
          </div>
        ))}
      </div>
      <div className="ItemList">
        <h2 className="CommonTitle">Biryani</h2>
        {biryani.map((el, id) => (
          <div className="Item" key={id}>
            <span className="ItemTitle">{el.title}</span>
            <span className="Dot"></span>
            <span className="Price">{el.price}</span>
          </div>
        ))}
      </div>
      <div className="ItemList">
        <h2 className="CommonTitle">Pizza</h2>
        {pizza.map((el, id) => (
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

export default FriBiPi;
