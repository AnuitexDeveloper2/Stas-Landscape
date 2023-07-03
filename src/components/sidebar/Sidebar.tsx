import React, { useEffect } from "react";
import "./index.scss";
import tel from "../../assets/images/tel.svg";
import insta from "../../assets/images/instagram.svg";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container" id="sidebar">
      <div className="sidebar-content">
        <a href="tel:+380660175450">
          <img src={tel} alt="telephone" width={30} />
        </a>
        <NavLink to={"/"} className="make-order-link">
          зробити заказ
        </NavLink>
        <div>
          <a href="">
            <img src={insta} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
