import { useEffect, useState } from 'react';
import { Button } from './styles/Button.styled';
import { CarouselNav } from './styles/CarouselNav.styled';

const CarouselControls = ({ images, selectedImage, setSelectedImage }) => {
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  useEffect(() => {
    // if autoscroll is true begin scrolling through
    // images every 5 seconds
    const intervalId = setInterval(() => {
      if (shouldAutoScroll) {
        setSelectedImage((selectedImage + images.length + 1) % images.length);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  });

  const handlePrev = () => {
    // reset autoscroll to false once user controls image
    setShouldAutoScroll(false);
    setSelectedImage((selectedImage + images.length - 1) % images.length);

    // after 5 seconds of inactivity set autoscroll to true
    setTimeout(() => {
      setShouldAutoScroll(true);
    }, 5000);
  };
  const handleNext = () => {
    // reset autoscroll to false once user controls image
    setShouldAutoScroll(false);
    setSelectedImage((selectedImage + images.length + 1) % images.length);

    // after 5 seconds of inactivity set autoscroll to true
    setTimeout(() => {
      setShouldAutoScroll(true);
    }, 5000);
  };

  return (
    <CarouselNav>
      <div className="carousel-controls">
        <Button onClick={handlePrev}>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="#3cbec3"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Button>
        <div className="image-indicators">
          {/* display selected image indicator between nav buttons */}
          {images.map((icon, i) => {
            if (i === selectedImage) {
              return <div key={i} className="image-indicator selected"></div>;
            }
            return <div key={i} className="image-indicator"></div>;
          })}
        </div>
        <Button onClick={handleNext}>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="#3cbec3"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Button>
      </div>
    </CarouselNav>
  );
};

export default CarouselControls;
