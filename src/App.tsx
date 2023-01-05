import React from "react";
import ImageSlider from "./Slider";

const App: React.FC = () => {
  const images = [
    "https://picsum.photos/id/1018/1000/600",
    "https://picsum.photos/id/1015/1000/600",
    "https://picsum.photos/id/1019/1000/600",
  ];

  return (
    <div className="App">
      <ImageSlider images={images} />
    </div>
  );
};

export default App;
