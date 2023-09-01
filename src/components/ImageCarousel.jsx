import React, { useState } from "react";
import leftArrow from "../assets/icons/angle-left.svg";
import rightArrow from "../assets/icons/angle-right.svg";

const ImageCarousel = () => {
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <h1 className="text-4xl py-4 text-emerald-600 text-center">Image section</h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex justify-center">
          <button
            className="mx-4"
            onClick={() =>
              setCurrent(current === 0 ? images.length - 1 : current - 1)
            }
          >
            <img src={leftArrow} alt="Logo" />
          </button>

          {images.map(
            (image, index) =>
              current === index && (
                <div key={image}>
                  <img src={image} alt="images" className="w-96 h-80" />
                </div>
              )
          )}

          <button
            className="mx-4"
            onClick={() =>
              setCurrent(current === images.length - 1 ? 0 : current + 1)
            }
          >
            <img src={rightArrow} alt="Logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
