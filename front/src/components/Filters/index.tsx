"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Filters = ({ setFilters }) => {
  const router = useRouter();

  const [isContinentOpen, setIsContinentOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isMedicalOpen, setIsMedicalOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState<{
    continents: string[];
    countries: string[];
    activities: string[];
    medicalServices: string[];
  }>({
    continents: [],
    countries: [],
    activities: [],
    medicalServices: [],
  });

  const updateQueryParams = (newFilters: Record<string, string[]>) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.delete("categories");

    Object.values(newFilters).forEach((filterArray) => {
      filterArray.forEach((filterValue) => {
        queryParams.append("categories", filterValue.toLowerCase());
      });
    });

    router.push(`?${queryParams.toString()}`);
  };

  const handleFilterChange = (
    category: keyof typeof selectedFilters,
    value: string
  ) => {
    const updatedFilters = { ...selectedFilters };
    if (updatedFilters[category].includes(value)) {
      updatedFilters[category] = updatedFilters[category].filter(
        (item) => item !== value
      );
    } else {
      updatedFilters[category].push(value);
    }

    setSelectedFilters(updatedFilters);
    setFilters(updatedFilters);
    updateQueryParams(updatedFilters);
  };

  const continentCountryMap = {
    Asia: ["Japón"],
    África: ["Egipto"],
    América: ["Estados Unidos", "Brasil"],
    Europa: ["Italia"],
    Oceanía: ["Australia", "Hawáii"],
  };

  const activities = ["Avistamiento de aves", "Pesca deportiva"];
  const medicalServices = ["Diseño de sonrisa"];

  const availableCountries = selectedFilters.continents.flatMap(
    (continent) => continentCountryMap[continent] || []
  );

  const dropdownArrowClass = (isOpen: boolean) =>
    `transition-transform transform ${
      isOpen ? "rotate-180" : "rotate-0"
    } w-2.5 h-2.5 ms-3`;

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
            <svg
              className={dropdownArrowClass(isContinentOpen)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </h3>
          {isContinentOpen && (
            <ul className="pl-4 space-y-2">
              {Object.keys(continentCountryMap).map((continent) => (
                <li key={continent}>
                  <div className="flex items-center">
                    <input
                      id={`continent-${continent} `}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={selectedFilters.continents.includes(continent)}
                      onChange={() =>
                        handleFilterChange("continents", continent)
                      }
                    />
                    <label
                      htmlFor={`continent-${continent}`}
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {continent}
                    </label>
                  </div>
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
            <svg
              className={dropdownArrowClass(isCountryOpen)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </h3>
          {isCountryOpen && (
            <ul className="pl-4 space-y-2">
              {availableCountries.length > 0 ? (
                availableCountries.map((country) => (
                  <li key={country}>
                    <div className="flex items-center">
                      <input
                        id={`country-${country}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        checked={selectedFilters.countries.includes(country)}
                        onChange={() =>
                          handleFilterChange("countries", country)
                        }
                      />
                      <label
                        htmlFor={`country-${country}`}
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {country}
                      </label>
                    </div>
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
            <svg
              className={dropdownArrowClass(isActivityOpen)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </h3>
          {isActivityOpen && (
            <ul className="pl-4 space-y-2">
              {activities.map((activity) => (
                <li key={activity}>
                  <div className="flex items-center">
                    <input
                      id={`activity-${activity}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={selectedFilters.activities.includes(activity)}
                      onChange={() =>
                        handleFilterChange("activities", activity)
                      }
                    />
                    <label
                      htmlFor={`activity-${activity}`}
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {activity}
                    </label>
                  </div>
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
            <svg
              className={dropdownArrowClass(isMedicalOpen)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </h3>
          {isMedicalOpen && (
            <ul className="pl-4 space-y-2">
              {medicalServices.map((service) => (
                <li key={service}>
                  <div className="flex items-center">
                    <input
                      id={`medical-${service}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={selectedFilters.medicalServices.includes(
                        service
                      )}
                      onChange={() =>
                        handleFilterChange("medicalServices", service)
                      }
                    />
                    <label
                      htmlFor={`medical-${service}`}
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {service}
                    </label>
                  </div>
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
