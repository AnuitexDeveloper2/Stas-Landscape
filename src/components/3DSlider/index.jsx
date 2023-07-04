import React, { Component } from "react";
import M from "materialize-css";
import "./index.scss";
import "materialize-css/dist/css/materialize.min.css";
import One from "../../assets/images/slider/one.jpg";
import Two from "../../assets/images/slider/two.jpg";
import Three from "../../assets/images/slider/three.jpg";
import Four from "../../assets/images/slider/four.jpg";
import Five from "../../assets/images/slider/five.jpg";
import Six from "../../assets/images/slider/six.jpg";
import Seven from "../../assets/images/slider/seven.jpg";
import Eight from "../../assets/images/slider/eight.jpg";
import Nine from "../../assets/images/slider/nine.jpg";
const data = [
  { key: 1, url: One },
  { key: 2, url: Two },
  { key: 3, url: Three },
  { key: 4, url: Four },
  { key: 5, url: Five },
  { key: 6, url: Six },
  { key: 8, url: Eight },
  { key: 9, url: Nine }
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
      >
        {this.renderThis()}
      </div>
    );
  }
}

export default Carousel;
