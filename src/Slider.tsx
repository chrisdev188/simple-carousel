import React, { useState, useEffect, useRef } from "react";

interface Props {
  images: string[];
}

const ImageSlider: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const transitionValue = -currentIndex * 100 - 100;

  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (currentIndex < 0) {
      return;
    }
    (sliderRef.current as HTMLElement).style.transition = "all 400ms ease";
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    if (currentIndex > images.length - 1) {
      return;
    }
    (sliderRef.current as HTMLElement).style.transition = "all 400ms ease-in";
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    console.log("currentIndex in useEffect: " + currentIndex);
  }, [currentIndex]);

  return (
    <div className="relative h-screen max-w-7xl mx-auto grid place-items-center overflow-hidden">
      <div
        className={`w-full h-[600px] flex items-center`}
        ref={sliderRef}
        style={{
          transform: `translateX(${transitionValue}%)`,
        }}
        onTransitionEnd={() => {
          if (currentIndex < 0) {
            (sliderRef.current as HTMLElement).style.transition = "none";
            setCurrentIndex(images.length - 1);
          }
          if (currentIndex === images.length) {
            (sliderRef.current as HTMLElement).style.transition = "none";
            setCurrentIndex(0);
          }
        }}
      >
        {[images[images.length - 1], ...images, images[0]].map(
          (image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover shrink-0`}
            />
          )
        )}
      </div>
      <button
        className="absolute top-1/2 left-8 p-2 rounded-sm bg-pink-600 text-white"
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-8 p-2 rounded-sm bg-pink-600 text-white"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
