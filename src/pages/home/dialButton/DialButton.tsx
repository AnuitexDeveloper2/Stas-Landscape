import React, { useEffect, useState } from 'react';
import './index.scss';

const DialButton: React.FC = () => {
    const [state, setState] = useState({
        isKnobActive: false,
    });

    useEffect(() => {
        setTimeout(() => {
            setState({ ...state, isKnobActive: true });
        }, 1000);
    }, []);

    const handleClick = () => {
        setState({ ...state, isKnobActive: !state.isKnobActive });
    };
    return (
        <main className="dial-button-container">
            <div>
                <div className={`selector ${state.isKnobActive ? 'active' : ''}`}>
                    <div className="knob" onClick={handleClick}></div>
                    <ul>
                        <li>
                            <span>Головна</span>
                            <input type="radio" name="'choice'-a" checked />
                        </li>
                        <li>
                            <span>Послуги</span>
                            <input type="radio" name="'choice'-a" />
                        </li>
                        <li>
                            <span className="hide">Наші роботи</span>
                            <input type="radio" name="'choice'-a" />
                        </li>
                        <li>
                            <span className="contact">Зв'язатися з нами</span>
                            <input type="radio" name="'choice'-a" />
                        </li>
                        <li>
                            <span className="hide">More</span>
                            <input type="radio" name="'choice'-a" />
                        </li>
                        <li>
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
