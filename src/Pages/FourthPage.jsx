import React from "react";
import BurgerSan from "../Category/BurgerSan";

const FourthPage = () => {
  return (
    <div>
      <div className="Container">
        <img src="/Images/AlbaikLogo.png" alt="alaik" />
        <div className="LeftMenu">
          <div className="MenuList">
            <BurgerSan />
          </div>
        </div>

        <div className="RightSidebar"></div>
      </div>
    </div>
  );
};

export default FourthPage;
