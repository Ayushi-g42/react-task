import React, { useState } from "react";
import { Container } from "./style";

export const RocketImages = ({ showRocketDetail }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const size = showRocketDetail?.flickr_images?.length;

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % size;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + size) % size;
    setCurrentImageIndex(newIndex);
  };
  return (
    <Container>
      <button onClick={prevSlide}>{`<`}</button>
      <div className="img-wrap">
        <img
          src={showRocketDetail?.flickr_images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
        />
      </div>
      <button onClick={nextSlide}>{`>`}</button>
    </Container>
  );
};
