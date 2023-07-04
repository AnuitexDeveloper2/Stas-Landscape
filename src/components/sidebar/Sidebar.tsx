import React from 'react';
import './index.scss';
import tel from '../../assets/images/tel.svg';
import tikTok from '../../assets/images/tiktok.svg';
import insta from '../../assets/images/instagram.svg';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar-container" id="sidebar">
            <div className="sidebar-content">
                <a href="tel:+380660175450">
                    <img src={tel} alt="telephone" width={30} />
                </a>
                <NavLink to={'/'} className="make-order-link">
                    зробити заказ
                </NavLink>
                <div className="socials">
                    <a
                        href="https://instagram.com/frankiedesing13?igshid=Y2IzZGU1MTFhOQ=="
                        target="_blank"
                    >
                        <img src={insta} alt="instagram" />
                    </a>
                    <a
                        href="https://instagram.com/frankiedesing13?igshid=Y2IzZGU1MTFhOQ=="
                        target="_blank"
                    >
                        <img src={tikTok} alt="instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
