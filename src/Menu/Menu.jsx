import React from "react";
import "./menu.css";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

import Starter from "../Category/Starter";
import FrenchFries from "../Category/FrenchFries";
const Menu = () => {
  return (
    <>
      <div className="MenuSection">
        <div className="MenuContainer">
          <div className="AlbaikLogo">
            <img src="Images/AlbaikLogo.png" alt="albaiklogo" />
          </div>
          <div className="Sidebar">
            <img src="/Images/1.png" alt="albaik" />
            <h1>MENU</h1>
          </div>
          <div className="AlbaikInfo">
            <img src="/Images/AlbaikLogo.png" alt="alaik" />
            <div className="Details">
              <span className="Albaik">Nepal Albaik</span>
              <span className="Bar">Restaurant & Bar</span>
              <div className="Contact">
                <span className="Logo">
                  <IoIosCall />
                </span>
                <span>9827430413</span>
              </div>
              <div className="Contact">
                <span className="Logo">
                  <IoIosMail />
                </span>
                <span>NEPALALBAIK@GMAIL.COM</span>
              </div>
            </div>
            <div className="MenuList">
              <Starter />
              <FrenchFries />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
