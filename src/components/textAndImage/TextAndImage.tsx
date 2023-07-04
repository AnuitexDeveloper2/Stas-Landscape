import React, { useEffect, useRef } from 'react';
import { ImageSide, TextAndImageItem } from '../../models/TextAndImage';
import './index.scss';

interface Props {
    items: Array<TextAndImageItem>;
}

const TextAndImage: React.FC<Props> = ({ items }) => {
    const divElement = useRef<HTMLDivElement>(null);
    useEffect(() => {
        items.forEach((item) => {
            const element = document.getElementById(item.alt);
            if (element) {
                const observer = new IntersectionObserver(
                    function (entries: any) {
                        if (entries[0].isIntersecting === true) {
                            element.classList.add('animation');
                        }
                    },
                    { threshold: [0] },
                );
                observer.observe(element);
            }
        });
    }, [items]);

    return (
        <div ref={divElement}>
            {items.map((item, i) => (
                <div className="container" key={i}>
                    <div className={`info ${item.ImageSide === ImageSide.LEFT ? 'reverse' : ''}`}>
                        <div className="info-col">
                            <div className="info-text">
                                <a href="/">
                                    <h3>{item.title}</h3>
                                </a>
                                <div className="text">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`info-image ${
                                item.ImageSide === ImageSide.LEFT ? 'left' : 'right'
                            }`}
                            id={item.alt}
                        >
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TextAndImage;
