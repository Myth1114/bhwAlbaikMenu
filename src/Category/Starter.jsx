import React from "react";
import { starter } from "../Data/Starter";

const Starter = () => {
  return (
    <>
      <div className="ItemList">
        <h2 className="CommonTitle">Veg Starters</h2>
        {starter.map((el, id) => (
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

export default Starter;
