import React from 'react';
import './Sidebar.styles.ts';
import tel from '../../assets/images/tel.svg';
import tikTok from '../../assets/images/tiktok.svg';
import insta from '../../assets/images/instagram.svg';
import { NavLink } from 'react-router-dom';
import { SidebarContainer } from './Sidebar.styles';

const Sidebar: React.FC = () => {
    return (
        <SidebarContainer id="sidebar">
            <div className="sidebar-content">
                <a href="tel:+380660175450">
                    <img src={tel} alt="telephone" width={30} />
                </a>
                <NavLink to={'/contact-us'} className="make-order-link">
                    зробити замовлення
                </NavLink>
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
            </div>
        </SidebarContainer>
    );
};

export default Sidebar;
