import React from "react";

const TourCard = ({ tour }) => {
  return (
    <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-8/24">
        {tour.discount && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded">
            {tour.discount}
          </div>
        )}
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 w-2/3 flex flex-col justify-between">
        <div>
          <p className="text-gray-400 text-xs">{tour.location}</p>
          <h3 className="text-xl font-bold mt-1 text-gray-800">{tour.title}</h3>
          <p className="text-gray-600 mt-2 text-sm">{tour.description}</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-yellow-500 text-lg"> {tour.rating}</span>
          <span className="ml-2 text-gray-500 text-sm">({tour.reviews})</span>
        </div>
        <div className="mt-4 flex justify-between">
          <span className="text-xs text-orange-500 font-semibold">
            Best Price Guarantee
          </span>
          <span className="text-xs text-orange-500 font-semibold">
            Free Cancellation
          </span>
        </div>
      </div>
      <div className="p-6 border-l border-gray-200 w-1/3 flex flex-col justify-between">
        <p className="text-gray-500 text-xs mb-1">{tour.duration}</p>
        <div className="mt-4">
          <span className="line-through text-gray-400 text-sm">
            {tour.oldPrice}
          </span>
          <span className="text-lg font-semibold text-red-600 ml-2">
            From {tour.price}
          </span>
        </div>
        <button className="bg-orange-500 text-white mt-4 py-2 px-6 rounded text-sm hover:bg-orange-600 transition duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TourCard;
