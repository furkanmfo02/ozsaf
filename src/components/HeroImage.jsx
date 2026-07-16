import { useState, useEffect } from "react";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import "./HeroImage.css";

const images = [hero1, hero2];

function HeroImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  function goToPrevious() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function goToNext() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  return (
    <div className="hero-carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero slide ${index + 1}`}
          className={`hero-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      <button className="hero-arrow hero-arrow-left" onClick={goToPrevious}>‹</button>
      <button className="hero-arrow hero-arrow-right" onClick={goToNext}>›</button>

      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`hero-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroImage;