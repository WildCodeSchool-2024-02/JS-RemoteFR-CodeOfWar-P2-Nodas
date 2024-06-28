import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/carrouselstd.css";

export default function CarrouselStd({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button type="button" onClick={prevSlide} className="carousel-button prev">Previous</button>
      <div className="carousel-slides">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Slide ${image.id}`}
            className={index === currentIndex ? "active" : "inactive"}
          />
        ))}
      </div>
      <button type="button" onClick={nextSlide} className="carousel-button next">Next</button>
    </div>
  );
}

CarrouselStd.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };