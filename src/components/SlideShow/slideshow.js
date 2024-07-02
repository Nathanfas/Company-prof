import React, { useState, useEffect } from 'react';
import './slideshow.css';
import Slide1 from "../../assets/image/slide1.jpeg";
import Slide2 from "../../assets/image/furniture.jpg";
import Slide3 from "../../assets/image/Office-Copier-Buying-Guide-1024x432.webp";
import Slide4 from "../../assets/image/offset-printing-services.jpg";

const slides = [Slide1, Slide2, Slide3, Slide4]; // Replace with your own images

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow">
      <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default Slideshow;
