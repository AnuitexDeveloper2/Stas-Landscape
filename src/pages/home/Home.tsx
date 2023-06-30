import React from "react";
import "./index.scss";
import HomeHeader from "./homeHeader/HomeHeader";
import logoBg from "../../assets/images/logo-bg.svg";
import TextAndImage from "../../components/textAndImage/TextAndImage";
import { getTextAndImageItems } from "./home.helper";
import Sidebar from "../../components/sidebar/Sidebar";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HomeHeader />
      <div className="container main">
        <div className="logo-bg">
          <img src={logoBg} alt="logo" />
        </div>
        <Sidebar />
        <div className="home-body-title">
          <h2>Ландшафтный дизайн — простые решения от GardenPark</h2>
        </div>
        <TextAndImage items={getTextAndImageItems()} />
      </div>
    </div>
  );
};

export default HomePage;
