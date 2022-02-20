import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { StyledCarousel } from './styles/StyledCarousel.styled';
import { loggedOutImages, loggedInImages } from '../images';
import CarouselControls from './CarouselControls';

const Carousel = () => {
  const [cookie] = useCookies();
  const [images, setImages] = useState(loggedOutImages);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // set images based on cookie
    console.log(cookie['user'], '4389483284');
    if (cookie['user']) {
      setImages(loggedInImages);
    } else {
      setImages(loggedOutImages);
    }
  }, [cookie]);

  return (
    <StyledCarousel>
      <div className="images">
        <div className="card card-1">
          <img
            src={
              images[(selectedImage + images.length - 1) % images.length].url
            }
            alt="a beautiful place"
          />
        </div>
        <div className="card card-2">
          <img src={images[selectedImage].url} alt="a beautiful place" />
        </div>
        <div className="card card-3">
          <img
            src={
              images[(selectedImage + images.length + 1) % images.length].url
            }
            alt="a beautiful place"
          />
        </div>
      </div>
      <CarouselControls
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </StyledCarousel>
  );
};

export default Carousel;
