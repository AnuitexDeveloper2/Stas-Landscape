import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import logo from "../../../assets/images/garden-park-main-screen.svg";
import phone from "../../../assets/images/phone.svg";
import DialButton from "../dialButton/DialButton";
const HomeHeader: React.FC = () => {
  return (
    <div>

    <div className="home-header-container">
      <div className="home-header-short-info-section">
        <div className="home-header-short-info">
          <div className="short-info-item">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="short-info-item">
            <a href="tel:+380971867569" className="phone-section">
              <div className="phone-section">
                <img src={phone} alt="" />
                <div>+380971867569</div>
              </div>
            </a>
          </div>
        </div>
        <div className="empty"></div>
      </div>
      <div className="home-header-clip">
        <div className="menu-clip-path">
          <DialButton />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeHeader;
