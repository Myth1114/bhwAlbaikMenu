import React from "react";
import { burger } from "../Data/Burger";
import { sandwich } from "../Data/Sandwich";
import { twister } from "../Data/Twister";
const BurgerSan = () => {
  return (
    <>
      <div className="ItemList">
        <h2 className="CommonTitle">Burger</h2>
        {burger.map((el, id) => (
          <div className="Item" key={id}>
            <span className="ItemTitle">{el.title}</span>
            <span className="Dot"></span>
            <span className="Price">{el.price}</span>
          </div>
        ))}
      </div>
      <div className="ItemList">
        <h2 className="CommonTitle">Sandwich</h2>
        {sandwich.map((el, id) => (
          <div className="Item" key={id}>
            <span className="ItemTitle">{el.title}</span>
            <span className="Dot"></span>
            <span className="Price">{el.price}</span>
          </div>
        ))}
      </div>
      <div className="ItemList">
        <h2 className="CommonTitle">Twister</h2>
        {twister.map((el, id) => (
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

export default BurgerSan;
