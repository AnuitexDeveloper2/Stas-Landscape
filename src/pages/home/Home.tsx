import React, { useEffect } from 'react';
import './Home.styles.ts';
import HomeHeader from './homeHeader/HomeHeader';
import logoBg from '../../assets/images/logo.jpg';
import TextAndImage from '../../components/textAndImage/TextAndImage';
import { getTextAndImageItems } from './home.helper';
import Sidebar from '../../components/sidebar/Sidebar';
import Carousel from '../../components/3DSlider';
import Footer from '../../components/footer/Footer';
import { HomeBodyTitle, HomePageContainer } from './Home.styles';

const HomePage: React.FC = () => {
    return (
        <HomePageContainer>
            <HomeHeader />
            <div className="custom-container main">
                <div className="logo-bg">
                    <img src={logoBg} alt="logo" />
                </div>
                <Sidebar />
                <HomeBodyTitle className="container">
                    <h2>Ландшафтний дизайн - прості рішення від Frankie Design</h2>
                </HomeBodyTitle>
                <TextAndImage items={getTextAndImageItems()} />
            </div>
            <div className="our-works-section container">
                <h2>Наші роботи</h2>
                <Carousel />
            </div>
            <Footer />
        </HomePageContainer>
    );
};

export default HomePage;
