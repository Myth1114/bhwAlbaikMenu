import React from "react";
import VegMomo from "../Category/VegMomo";

const ThirdPage = () => {
  return (
    <div>
      <div className="Container">
        <img src="/Images/AlbaikLogo.png" alt="alaik" />
        <div className="LeftSidebar"></div>
        <div className="RightMenu">
          <div className="MenuList">
            <VegMomo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
