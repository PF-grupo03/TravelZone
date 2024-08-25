"use client";
import React, { useState } from 'react';
import BookingCard from "@/components/Tarjeta";
import paquetesDatailToPreload from "@/helpers/paquetesDetailToPreload";
import TourMap from '@/components/Maps';

function TarjetaPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % paquetesDatailToPreload.length);
  };

  const currentPaquete = paquetesDatailToPreload[currentIndex];

  return (
    <div className="flex flex-col items-center mt-24"> 
      <div className="flex justify-between w-full max-w-3xl items-center px-4"> 
        <div className="text-left w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800">{currentPaquete.title}</h2>
          <p className="mt-4 text-gray-700 text-justify">{currentPaquete.description2}</p>
        </div>
        
        <BookingCard price={currentPaquete.price} />
      </div>

      <button
        className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-lg"
        onClick={handleNext}
      >
        Next
      </button>
      <div className="min-h-screen bg-gray-100 p-8 mt-12 w-full max-w-5xl px-4">
      <TourMap/>
    </div>
    </div>


  );
}

export default TarjetaPage;
