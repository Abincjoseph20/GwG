import { useState, useEffect } from "react";
import bridal1 from "../../assets/Homes/bridal1.jpg";
import bridal2 from "../../assets/Homes/bridal2.jpg";
import bridal3 from "../../assets/Homes/bridal3.jpg";

import "./Home.css";

function Home({ autoPlay = true, interval = 4000 }) {
  const images = [
    { src: bridal1, alt: "Bridal Makeup Look 1" },
    { src: bridal2, alt: "Bridal Makeup Look 2" },
    { src: bridal3, alt: "Bridal Makeup Look 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  return (
    

    <div className="home-container">
      <header className="home-header">
        <p className="breadcrumb">GLOW WITH GOLD ▸ FASHION & BEAUTY</p>
        <h1 className="title">Indian Bridal Makeup For 2025 [Expert Tips]</h1>
        <div className="meta">
          <span>100+ HAPPY CUSTOMERS</span>
          <span>13+ PRO TIPS</span>
        </div>
        <p className="author">
          Author: <a href="#">SWRNA T M</a> | FOUNDER AND CEO OF GLOW WITH GOLD
        </p>
      </header>

      {/* Carousel */}
      <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

    
    </div>

    </div>
  );
}

export default Home;
