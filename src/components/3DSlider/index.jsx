import React, { Component } from "react";
import M from "materialize-css";
import './index.scss'
import "materialize-css/dist/css/materialize.min.css";
import One from "../../assets/images/hardware.jpg";
import Two from "../../assets/images/landscape.jpg";
import Three from "../../assets/images/roll.jpg";
import Four from "../../assets/images/tree.jpg";
import Five from "../../assets/images/grass.jpg";
const data = [
  { key: 1, url: One },
  { key: 2, url: Two },
  { key: 3, url: Three },
  { key: 4, url: Four },
  { key: 5, url: Five },
];
class Carousel extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
      },
    };
    M.Carousel.init(this.Carousel, options);   
  }

  renderThis = () => {
    return data.map((i) => (
      <div key={i.key} className="carousel-item">
        <img src={i.url} alt=""/>
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
