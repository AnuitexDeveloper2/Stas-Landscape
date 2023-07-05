import React, { useState } from 'react';
import { createSearchParams, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import phone from '../../assets/images/phone.svg';
import tikTok from '../../assets/images/tiktok.svg';
import insta from '../../assets/images/instagram.svg';
import {
    HeaderInfoSection,
    MenuList,
    SidebarMenu,
    SidebarMenuContent,
    SocialIcons,
} from './Header.styles';
import HeaderSidebar from './headerSidebar/HeaderSidebar';

export const Header: React.FC = () => {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const isHomePage = window.location.pathname === '/';

    const goTo = (destination: string) => {
        setIsOpen(false);
        if (isHomePage) {
            document.getElementById(destination)?.scrollIntoView({
                behavior: 'smooth',
            });
        } else {
            navigate({
                pathname: '/',
                search: `?${createSearchParams({
                    path: destination,
                })}`,
            });
        }
    };
    return (
        <>
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
                    <HeaderSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                <div className="empty"></div>
            </HeaderInfoSection>
            <SidebarMenu className={`${isOpen ? 'visible' : 'invisible'}`}>
                <SidebarMenuContent>
                    <img src={logo} alt="logo" className="logo" />
                    <MenuList>
                        <li onClick={() => goTo('services')}>Послуги</li>
                        <li onClick={() => goTo('works')}>Наші роботи</li>
                        <li onClick={() => goTo('contact-us')}>
                            <NavLink to={`${isHomePage ? '/contact-us' : ''}`}>
                                Зв'язатися з нами
                            </NavLink>
                        </li>
                    </MenuList>
                    <SocialIcons>
                        <div className="socials">
                            <a
                                href="https://instagram.com/frankiedesing13?igshid=Y2IzZGU1MTFhOQ=="
                                target="_blank"
                            >
                                <img src={insta} alt="instagram" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@frankiedesing13?_t=8di47TuFCuT&_r=1"
                                target="_blank"
                            >
                                <img src={tikTok} alt="instagram" />
                            </a>
                        </div>
                    </SocialIcons>
                </SidebarMenuContent>
            </SidebarMenu>
        </>
    );
};

export default Header;
