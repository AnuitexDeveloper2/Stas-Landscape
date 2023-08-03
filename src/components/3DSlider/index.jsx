import React, { Component } from 'react';
import M from 'materialize-css';
import './index.scss';
import 'materialize-css/dist/css/materialize.min.css';
import One from '../../assets/images/slider/photo_1.jpg';
import Two from '../../assets/images/slider/photo_2.jpg';
import Three from '../../assets/images/slider/photo_3.jpg';
import Four from '../../assets/images/slider/photo_4.jpg';
import Five from '../../assets/images/slider/photo_5.jpg';
import Six from '../../assets/images/slider/photo_6.jpg';
import Seven from '../../assets/images/slider/photo_7.jpg';
import Eight from '../../assets/images/slider/photo_8.jpg';
import Nine from '../../assets/images/slider/photo_9.jpg';
import Ten from '../../assets/images/slider/photo_10.jpg';
import Eleven from '../../assets/images/slider/photo_11.jpg';
import Twelwe from '../../assets/images/slider/photo_12.jpg';
const data = [
    { key: 1, url: One },
    { key: 2, url: Two },
    { key: 3, url: Three },
    { key: 4, url: Four },
    { key: 5, url: Five },
    { key: 6, url: Six },
    { key: 7, url: Seven },
    { key: 8, url: Eight },
    { key: 9, url: Nine },
    { key: 10, url: Ten },
    { key: 11, url: Eleven },
    { key: 12, url: Twelwe },
];
class Carousel extends Component {
    componentDidMount() {
        const options = {
            duration: 300,
            onCycleTo: () => {},
        };
        M.Carousel.init(this.Carousel, options);
    }

    renderThis = () => {
        return data.map((i) => (
            <div key={i.key} className="carousel-item">
                <img src={i.url} alt="" />
            </div>
        ));
    };

    render() {
        return (
            <div
                ref={(Carousel) => {
                    this.Carousel = Carousel;
                }}
                className="carousel"
                id="works"
            >
                {this.renderThis()}
            </div>
        );
    }
}

export default Carousel;
