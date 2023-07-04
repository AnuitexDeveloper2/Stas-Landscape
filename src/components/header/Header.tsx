import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import phone from "../../assets/images/phone.svg";

export const Header: React.FC = () => {
  return (
    <div className="home-header-short-info-section">
      <div className="home-header-short-info">
        <div className="short-info-item">
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </div>
        <div className="short-info-item">
          <a href="tel:+380660175450" className="phone-section">
            <div className="phone-section">
              <img src={phone} alt="" />
              <div>+380660175450</div>
            </div>
          </a>
        </div>
      </div>
      <div className="empty"></div>
    </div>
  );
};

export default Header;
