import React, { useEffect, useState } from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/styles.css";
import MainCard from "../components/MainCard";
import fetchWatchData from "../data/watchData";

const MainPage = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchWatchData();
        console.log("Fetched and processed data:", data);
        setWatches(data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    loadData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      <div className="top-bar">
        <MainCard />
      </div>
      <div className="carousel">
        <Slick {...settings}>
          <div>
            <img
              src="C:\Users\shrey\Documents\GitHub\React\e-commerce-product-page\public\assets1\archive\watches\watches\images\0.jpg"
              alt="Slide 1"
            />
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
