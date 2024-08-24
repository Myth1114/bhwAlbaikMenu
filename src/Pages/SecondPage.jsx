import React from "react";
import NonVegStarters from "../Category/NonVegStarters";
import "./secondpage.css";

const SecondPage = () => {
  return (
    <div>
      <div className="Container">
        <img src="/Images/AlbaikLogo.png" alt="alaik" />
        <div className="LeftMenu">
          <div className="MenuList">
            <NonVegStarters />
          </div>
        </div>

        <div className="RightSidebar">
          <img src="/Images/2.png" alt="albaik" />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
