import React, { useState, useEffect, useRef } from "react";

interface Props {
  images: string[];
}

const ImageSlider: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const transitionValue = -currentIndex * 100;

  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevCount) => prevCount - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevCount) => prevCount + 1);
  };

  return (
    <div className="relative h-[600px] max-w-7xl mx-auto border-2 border-red-500">
      <div
        className={`w-full h-full flex items-center`}
        ref={sliderRef}
        style={{
          transform: `translateX(${transitionValue}%)`,
          transition: "all .4s ease",
        }}
      >
        {[images[images.length - 1], ...images, images[0]].map(
          (image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover shrink-0"
            />
          )
        )}
      </div>
      <button
        className="absolute top-0 left-0 p-2 rounded-full bg-gray-800 text-white"
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        className="absolute top-0 right-0 p-2 rounded-full bg-gray-800 text-white"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
