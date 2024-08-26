import React from "react";
import TourCard from "../TourCard";

const TourList = ({ tours, filters }) => {
  const { continents, countries, activities, medicalServices } = filters;

  const filteredTours = tours.filter((tour) => {
    // Filtrar por continente
    const matchesContinent =
      continents.length === 0 ||
      continents.some((continent) =>
        tour.categories.includes(continent.toLowerCase())
      );

    // Filtrar por país
    const matchesCountry =
      countries.length === 0 ||
      countries.some((country) =>
        tour.categories.includes(country.toLowerCase())
      );

    // Filtrar por actividad
    const matchesActivity =
      activities.length === 0 ||
      activities.some((activity) =>
        tour.categories.includes(activity.toLowerCase())
      );

    // Filtrar por servicio médico
    const matchesMedicalService =
      medicalServices.length === 0 ||
      medicalServices.some((service) =>
        tour.categories.includes(service.toLowerCase())
      );

    // Un tour debe cumplir con todos los filtros seleccionados
    return (
      matchesContinent &&
      matchesCountry &&
      matchesActivity &&
      matchesMedicalService
    );
  });

  return (
    <div className="space-y-6">
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default TourList;
