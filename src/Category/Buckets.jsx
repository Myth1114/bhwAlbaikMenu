import React from "react";
import { buckets } from "../Data/Buckets";
const Buckets = () => {
  console.log(buckets.name);
  return (
    <>
      <div className="ItemList">
        <h2 className="CommonTitle">Buckets</h2>
        {buckets.map((el, id) => (
          <div className="BucketBox">
            <div class="BucketItem">
              <h1>{el.name}</h1>
              <ul class="ItemLists">
                {el.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            {/* <span className="Price">Price: $${el.price}</span> */}
            <div class="PriceTag">
              {/* <span class="currency">$</span> */}
              <span class="amount">{el.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Buckets;
