import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./HomeHeader.styles.ts";
import logo from "../../../assets/images/logo.jpg";
import phone from "../../../assets/images/phone.svg";
import DialButton from "../dialButton/DialButton";
import { HomeHeaderContainer } from "./HomeHeader.styles";
const HomeHeader: React.FC = () => {
  useEffect(() => {
    const element = document.getElementById("home-header-container");
    const sidebarElement = document.getElementById("sidebar");
    if (element && sidebarElement) {
      const observer = new IntersectionObserver(
        function (entries: any) {
          if (entries[0].isIntersecting === true) {
            sidebarElement.classList.add("hide");
            sidebarElement.classList.remove("visible");
          } else {
            sidebarElement.classList.add("visible");
            sidebarElement.classList.remove("hide");
          }
        },
        { threshold: [0] }
      );
      observer.observe(element);
    }
  }, []);
  return (
    <div>
      <HomeHeaderContainer id="home-header-container">
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
        <div className="home-header-clip">
          <div className="menu-clip-path">
            <DialButton />
          </div>
        </div>
      </HomeHeaderContainer>
    </div>
  );
};

export default HomeHeader;
