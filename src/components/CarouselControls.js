import { Button } from './styles/Button.styled';
import { CarouselNav } from './styles/CarouselNav.styled';

const CarouselControls = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <CarouselNav>
      <div className="carousel-controls">
        <Button
          onClick={() =>
            setSelectedImage(
              (selectedImage + images.length - 1) % images.length
            )
          }>
          prev
        </Button>
        <div className="image-indicators">
          {images.map((icon, i) => {
            if (i === selectedImage) {
              return <div key={i} className="image-indicator selected"></div>;
            }
            return <div key={i} className="image-indicator"></div>;
          })}
        </div>
        <Button
          onClick={() =>
            setSelectedImage(
              (selectedImage + images.length + 1) % images.length
            )
          }>
          next
        </Button>
      </div>
    </CarouselNav>
  );
};

export default CarouselControls;
