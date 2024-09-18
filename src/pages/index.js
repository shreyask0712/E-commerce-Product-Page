import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/styles.css";
import MainCard from "../components/MainCard";

// Custom Previous Arrow
const PreviousArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-prev`} onClick={onClick}>
      <i className="a-icon a-icon-previous-rounded">
        <span className="a-icon-alt">Previous slide</span>
      </i>
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-next`} onClick={onClick}>
      <i className="a-icon a-icon-next-rounded">
        <span className="a-icon-alt">Next slide</span>
      </i>
    </div>
  );
};

const MainPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
  };

  return (
    <div className="container">
      <div className="top-bar">
        <MainCard />
      </div>
      <div className="carousel">
        <Slick {...settings}>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Slide 1" />
          </div>
          <div>
            <img src="https://placehold.co/600x400" alt="Slide 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Slide 3" />
          </div>
          <div>
            <img src="https://placehold.co/600x400" alt="Slide 4" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Slide 5" />
          </div>
          <div>
            <img src="https://placehold.co/600x400" alt="Slide 6" />
          </div>
        </Slick>
      </div>
      <div className="display-box">
        <div className="trending">Trending here</div>
        <div className="featured">Featured</div>
      </div>
    </div>
  );
};

export default MainPage;
