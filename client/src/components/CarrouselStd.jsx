import { useState } from "react";
import { Link } from "react-router-dom";
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
      <button
        type="button"
        onClick={prevSlide}
        className="carousel-button prev"
      >
        Previous
      </button>
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div key={image.id} className="carousel-slide">
            <Link 
            className={index === currentIndex ? "active" : "inactive"}
            style={{
              zIndex: 1,
            }}
            to={`/gamepage/${image.id}`}>{image.name}</Link>
            <img
              src={image.url}
              alt={`Slide ${image.id}`}
              className={index === currentIndex ? "active" : "inactive"}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={nextSlide}
        className="carousel-button next"
      >
        Next
      </button>
    </div>
  );
}

CarrouselStd.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
