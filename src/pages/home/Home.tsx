import React, { useEffect } from "react";
import "./index.scss";
import HomeHeader from "./homeHeader/HomeHeader";
import logoBg from "../../assets/images/logo.jpg";
import TextAndImage from "../../components/textAndImage/TextAndImage";
import { getTextAndImageItems } from "./home.helper";
import Sidebar from "../../components/sidebar/Sidebar";
import Carousel from "../../components/3DSlider";
import Footer from "../../components/footer/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HomeHeader />
      <div className="custom-container main">
        <div className="logo-bg">
          <img src={logoBg} alt="logo" />
        </div>
        <Sidebar />
        <div className="home-body-title container">
          <h2>Ландшафтний дизайн - прості рішення від Frankie Design</h2>
        </div>
        <TextAndImage items={getTextAndImageItems()} />
      </div>
      <div className="our-works-section container">
        <h2>Наші роботи</h2>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
