import React from "react";
import Buckets from "../Category/Buckets";
const SixthPage = () => {
  return (
    <div>
      <div className="Container">
        <img src="/Images/AlbaikLogo.png" alt="alaik" />
        <div className="LeftMenu">
          <div className="MenuList">
            <Buckets />
          </div>
        </div>

        <div className="RightSidebar">
          <img src="/Images/2.png" alt="albaik" />
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
