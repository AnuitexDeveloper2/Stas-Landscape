import React, { useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import './index.scss';

const DialButton: React.FC = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        isKnobActive: false,
    });
    const isHomePage = window.location.pathname === '/';
    useEffect(() => {
        setTimeout(() => {
            setState({ ...state, isKnobActive: true });
        }, 1000);
    }, []);

    const handleClick = () => {
        setState({ ...state, isKnobActive: !state.isKnobActive });
    };

    const goTo = (destination: string) => {
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
        <main className="dial-button-container">
            <div>
                <div className={`selector ${state.isKnobActive ? 'active' : ''}`}>
                    <div className="knob" onClick={handleClick}></div>
                    <ul>
                        <li onClick={() => navigate('/')}>
                            <span> Головна</span>
                            <input type="radio" name="'choice'-a" checked={isHomePage} />
                        </li>
                        <li onClick={() => goTo('services')}>
                            <span>Послуги</span>
                            <input type="radio" name="'choice'-a" />
                        </li>
                        <li>
                            <span className="hide">Наші роботи</span>
                            <input type="radio" name="'choice'-a" />
                        </li>
                        <li onClick={() => navigate('/contact-us')}>
                            <span className="contact">Зв'язатися з нами</span>
                            <input type="radio" name="'choice'-a" checked={!isHomePage} />
                        </li>
                        <li>
                            <span className="hide">More</span>
                            <input type="radio" name="'choice'-a" />
                        </li>
                        <li onClick={() => goTo('works')}>
                            <span>Наші роботи</span>
                            <input type="radio" name="'choice'-a" />
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default DialButton;
