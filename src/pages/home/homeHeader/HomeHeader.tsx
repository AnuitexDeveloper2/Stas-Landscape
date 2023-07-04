import React, { useEffect } from "react";
import "./HomeHeader.styles.ts";

import DialButton from "../dialButton/DialButton";
import { HomeHeaderContainer } from "./HomeHeader.styles";
import Header from "../../../components/header/Header";
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
        <Header />
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
