"use client";

import TarjetaPage from "@/components/armatupaquete";

const PaqueteDetalle = ({
  id,
  image,
  image2,
  image3,
  title,
  description,
  description2,
  price,
}) => {
  return (
    <div className="">
      <div className="my-16 flex flex-col items-center justify-center w-full">
        <div className="flex justify-center space-x-6 h-full mt-6 ">
          <img src={image} alt={`${title} image 1`} className="h-96 w-full" />
          <img src={image2} alt={`${title} image 2`} className="h-96 w-full" />
          <img src={image3} alt={`${title} image 3`} className="h-96 w-full" />
        </div>
        <div className="flex my-20 items-center text-center justify-evenly">
          <div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-black text-opacity-50">{description}</p>
          </div>
        </div>
      </div>
      <TarjetaPage title={title} description2={description2} price={price} />
    </div>
  );
};

export default PaqueteDetalle;
