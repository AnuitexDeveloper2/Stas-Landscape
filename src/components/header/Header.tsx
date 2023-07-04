import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import phone from '../../assets/images/phone.svg';
import { HeaderInfoSection } from './Header.styles';
import HeaderSidebar from './headerSidebar/HeaderSidebar';

export const Header: React.FC = () => {
    return (
        <HeaderInfoSection>
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
                <HeaderSidebar />
            </div>
            <div className="empty"></div>
        </HeaderInfoSection>
    );
};

export default Header;
