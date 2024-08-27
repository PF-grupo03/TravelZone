"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Filters = ({ setFilters }) => {
  const router = useRouter();

  const [isContinentOpen, setIsContinentOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isMedicalOpen, setIsMedicalOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Función para actualizar la URL con los filtros seleccionados
  const updateQueryParams = (newSelection: string[]) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (newSelection.length > 0) {
      // Convertir los valores de las categorías a minúsculas
      const formattedCategories = newSelection.map((item) =>
        item.toLowerCase()
      );
      queryParams.set("categories", formattedCategories.join(","));
    } else {
      queryParams.delete("categories");
    }

    router.push(`?${queryParams.toString()}`);
  };

  const handleFilterChange = (filter: string) => {
    const newSelection = selectedFilters.includes(filter)
      ? selectedFilters.filter((item) => item !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(newSelection);
    updateQueryParams(newSelection);
  };

  // Mapa de continentes y países
  const continentCountryMap = {
    Asia: ["Japón"],
    África: ["Egipto"],
    América: ["Estados Unidos", "Brasil"],
    Europa: ["Italia"],
    Oceanía: ["Australia", "Hawáii"],
  };

  const activities = ["Avistamiento de aves", "Pesca deportiva"];
  const medicalServices = ["Diseño de sonrisa"];

  const availableCountries = selectedFilters
    .filter((filter) => Object.keys(continentCountryMap).includes(filter))
    .flatMap((continent) => continentCountryMap[continent] || []);

  const dropdownArrowClass = (isOpen: boolean) =>
    `transition-transform transform ${
      isOpen ? "rotate-180" : "rotate-0"
    } text-xs`;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="bg-orange-500 text-white p-4 rounded-t-lg">
        <h2 className="text-lg font-bold">Escoja el lugar de su servicio.</h2>
      </div>
      <div className="p-4 space-y-4">
        {/* Dropdown para Continente */}
        <div>
          <h3
            onClick={() => setIsContinentOpen(!isContinentOpen)}
            className="text-md font-semibold mb-2 cursor-pointer flex items-center justify-between"
          >
            <span>Continente</span>
            <span className={dropdownArrowClass(isContinentOpen)}>▼</span>
          </h3>
          {isContinentOpen && (
            <ul className="pl-4 space-y-2">
              {Object.keys(continentCountryMap).map((continent) => (
                <li key={continent}>
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedFilters.includes(continent)}
                      onChange={() => handleFilterChange(continent)}
                    />
                    {continent}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dropdown para País */}
        <div>
          <h3
            onClick={() => setIsCountryOpen(!isCountryOpen)}
            className="text-md font-semibold mb-2 cursor-pointer flex items-center justify-between"
          >
            <span>País</span>
            <span className={dropdownArrowClass(isCountryOpen)}>▼</span>
          </h3>
          {isCountryOpen && (
            <ul className="pl-4 space-y-2">
              {availableCountries.length > 0 ? (
                availableCountries.map((country) => (
                  <li key={country}>
                    <label>
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedFilters.includes(country)}
                        onChange={() => handleFilterChange(country)}
                      />
                      {country}
                    </label>
                  </li>
                ))
              ) : (
                <li>No hay países disponibles</li>
              )}
            </ul>
          )}
        </div>

        {/* Dropdown para Actividad */}
        <div>
          <h3
            onClick={() => setIsActivityOpen(!isActivityOpen)}
            className="text-md font-semibold mb-2 cursor-pointer flex items-center justify-between"
          >
            <span>Actividad</span>
            <span className={dropdownArrowClass(isActivityOpen)}>▼</span>
          </h3>
          {isActivityOpen && (
            <ul className="pl-4 space-y-2">
              {activities.map((activity) => (
                <li key={activity}>
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedFilters.includes(activity)}
                      onChange={() => handleFilterChange(activity)}
                    />
                    {activity}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dropdown para Servicios Médicos */}
        <div>
          <h3
            onClick={() => setIsMedicalOpen(!isMedicalOpen)}
            className="text-md font-semibold mb-2 cursor-pointer flex items-center justify-between"
          >
            <span>Servicios Médicos</span>
            <span className={dropdownArrowClass(isMedicalOpen)}>▼</span>
          </h3>
          {isMedicalOpen && (
            <ul className="pl-4 space-y-2">
              {medicalServices.map((service) => (
                <li key={service}>
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedFilters.includes(service)}
                      onChange={() => handleFilterChange(service)}
                    />
                    {service}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
