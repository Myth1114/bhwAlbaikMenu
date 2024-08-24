import React from "react";
import FriBiPi from "../Category/FriBiPi";

const FifthPage = () => {
  return (
    <div>
      <div className="Container">
        <img src="/Images/AlbaikLogo.png" alt="alaik" />
        <div className="LeftSidebar"></div>
        <div className="RightMenu">
          <div className="MenuList">
            <FriBiPi />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
