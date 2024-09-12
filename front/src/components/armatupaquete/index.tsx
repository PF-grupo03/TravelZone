"use client";
import React, { useState } from "react";
import BookingCard from "@/components/Tarjeta";
import paquetesDatailToPreload from "@/helpers/paquetesDetailToPreload";
import TourMap from "@/components/Maps";

const TarjetaPage = ({
  price,
  title,
  description2,
  productId,
  latitude,
  longitude,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % paquetesDatailToPreload.length
    );
  };

  return (
    <div className="flex flex-col items-center  mt-12 xl:mt-24">
      <div className="flex flex-col xl:flex-row justify-center max-xl:items-center w-full xl:w-2/3 px-4">
        <div className="text-center w-full  md:w-1/2 max-xl:mr-8 lg:mr-24">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {title}
          </h2>
          <p className="mt-4 text-gray-700 text-justify text-sm md:text-base">
            {description2}
          </p>
        </div>
        <div className="mt-8 xl:mt-0 w-full xl:w-auto">
          <BookingCard price={price} productId={productId} />
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 p-8 mt-12 w-full max-w-5xl px-4">
        <TourMap latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
};

export default TarjetaPage;
