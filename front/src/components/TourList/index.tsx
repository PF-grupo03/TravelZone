import React from "react";
import TourCard from "../TourCard";

const TourList = ({ tours }) => {
  return (
    <div className="space-y-6">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default TourList;
