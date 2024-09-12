"use client";

import Link from "next/link";
import React, { useState } from "react";

const MasVisitados = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://res.cloudinary.com/dfaej4bi8/image/upload/v1725547922/Destinos%20mas%20visitados/je04jfl4vnjon5sbnfej.png",
      alt: "París",
    },
    {
      src: "https://res.cloudinary.com/dfaej4bi8/image/upload/v1725547922/Destinos%20mas%20visitados/fs3001cpmtw02lmv9edk.png",
      alt: "Argentina",
    },
    {
      src: "https://res.cloudinary.com/dfaej4bi8/image/upload/v1725547926/Destinos%20mas%20visitados/nxzdlzaj2ezbxrf4uxod.png",
      alt: "Roma",
    },
    {
      src: "https://res.cloudinary.com/dfaej4bi8/image/upload/v1725547927/Destinos%20mas%20visitados/yitaq3nlompvgvjipip2.png",
      alt: "Sudáfrica",
    },
    {
      src: "https://res.cloudinary.com/dfaej4bi8/image/upload/v1725547926/Destinos%20mas%20visitados/jl7zubfy13bucvlxk7yo.png",
      alt: "Japón",
    },
    {
      src: "https://res.cloudinary.com/dfaej4bi8/image/upload/v1725547923/Destinos%20mas%20visitados/jzgmxyw0ieqnfbjykeqe.png",
      alt: "España",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-stone-200 w-full py-8">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center mb-4 mt-4">
          <h2 className="text-xl font-bold font-inter text-[#05073C] ">
            Destinos más visitados
          </h2>
        </div>

        {/* Grid for desktop */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 max-h-[310px] mt-11">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover rounded-lg shadow-lg ${
                index === 1 ? "row-span-2" : ""
              } ${index === 2 ? "col-span-2" : ""}`}
            />
          ))}
        </div>

        {/* Carousel for mobile */}
        <div className="md:hidden mt-11 relative w-full">
          <div className="overflow-hidden">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={handlePrevClick}
              className="bg-gray-700 text-white rounded-full p-2"
            >
              &#8592;
            </button>
            <button
              onClick={handleNextClick}
              className="bg-gray-700 text-white rounded-full p-2"
            >
              &#8594;
            </button>
          </div>
        </div>
        <Link href="/products">
          <h3 className="text-blue-500 cursor-pointer text-right mt-4">
            Ver todos
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default MasVisitados;
