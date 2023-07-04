import React, { useEffect, useState } from "react";
import "./index.scss";

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
        <div className={`selector ${state.isKnobActive ? "active" : ""}`}>
          <div className="knob" onClick={handleClick}></div>
          <ul>
            <li>
              <span>Услуги</span>
              <input type="radio" name="'choice'-a" checked />
            </li>
            <li>
              <span>Продукция</span>
              <input type="radio" name="'choice'-a" />
            </li>
            <li>
              <span>Компания</span>
              <input type="radio" name="'choice'-a" />
            </li>
            <li>
              <span>Star</span>
              <input type="radio" name="'choice'-a" />
            </li>
            <li>
              <span>More</span>
              <input type="radio" name="'choice'-a" />
            </li>
            <li>
              <span>Refresh</span>
              <input type="radio" name="'choice'-a" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default DialButton;
