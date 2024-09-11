"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import AddProductPopup from "../AddProductPopup";

const Filters = ({ setFilters, products, user, onAddProduct }) => {
  const router = useRouter();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddProduct = () => {
    setIsPopupOpen(true);
  };

  const handleSaveProduct = async (product) => {
    try {
      await onAddProduct(product); // Call the fetch function to add the product
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const [isContinentOpen, setIsContinentOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isMedicalOpen, setIsMedicalOpen] = useState(false);
  const [isRentalOpen, setIsRentalOpen] = useState(false);

  const filterUpdateTimeout = useRef(null);

  const [priceRange, setPriceRange] = useState([0, 5000]);

  const [selectedFilters, setSelectedFilters] = useState({
    continents: [],
    countries: [],
    activities: [],
    medicalServices: [],
    rentals: [],
    priceRange: [0, 5000],
  });

  // Leer los parámetros de la URL y actualizar los filtros
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const filtersFromURL = {
      continents: params.getAll("continents"),
      countries: params.getAll("countries"),
      activities: params.getAll("activities"),
      medicalServices: params.getAll("medicalServices"),
      rentals: params.getAll("rentals"),
      priceRange: params.get("maxPrice")
        ? [0, parseInt(params.get("maxPrice"), 10)]
        : [0, 5000],
    };

    setSelectedFilters(filtersFromURL);
    setPriceRange(filtersFromURL.priceRange);
    setFilters(filtersFromURL); // Actualiza los filtros en el componente padre
  }, [setFilters]);

  // Debounced query update
  const updateQueryParams = (newFilters) => {
    if (filterUpdateTimeout.current) {
      clearTimeout(filterUpdateTimeout.current);
    }

    filterUpdateTimeout.current = setTimeout(() => {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.delete("categories");
      queryParams.delete("maxPrice");

      if (newFilters.priceRange) {
        queryParams.set("maxPrice", newFilters.priceRange[1]);
      }

      Object.entries(newFilters).forEach(([key, filterArray]) => {
        if (Array.isArray(filterArray)) {
          filterArray.forEach((filterValue) => {
            if (typeof filterValue === "string") {
              queryParams.append(key, filterValue.toLowerCase());
            }
          });
        }
      });

      router.push(`?${queryParams.toString()}`);
    }, 500); // Debounce 500ms
  };

  const handleFilterChange = (category, value) => {
    const updatedFilters = { ...selectedFilters };

    if (category === "priceRange") {
      updatedFilters[category] = value;
    } else {
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[category].push(value);
      }
    }

    setSelectedFilters(updatedFilters);
    setFilters(updatedFilters);
    updateQueryParams(updatedFilters);
  };

  // Lista de países
  const countriesList = [
    "España",
    "Colombia",
    "Argentina",
    "Perú",
    "Reino Unido",
    "Francia",
    "República Dominicana",
    "Estados Unidos",
    "Italia",
    "Brasil",
    "Hawái",
    "Egipto",
    "Australia",
    "Japón",
  ];

  const activities = ["Avistamiento de aves", "Pesca deportiva", "Tours"];
  const medicalServices = ["Diseño de sonrisa"];
  const rentals = ["Transporte", "Hospedaje"];

  const dropdownArrowClass = (isOpen) =>
    `transition-transform transform ${
      isOpen ? "rotate-180" : "rotate-0"
    } w-2.5 h-2.5 ms-3`;

  const handlePriceChange = (value) => {
    setPriceRange([0, value]);

    if (filterUpdateTimeout.current) {
      clearTimeout(filterUpdateTimeout.current);
    }

    filterUpdateTimeout.current = setTimeout(() => {
      handleFilterChange("priceRange", [0, value]);
    }, 500);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="bg-orange-500 text-white p-4 rounded-t-lg">
        <h2 className="text-lg font-bold">Escoja el lugar de su servicio.</h2>
      </div>
      <div className="p-4 space-y-4">
        {/* Continente Filter */}
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
              {["Asia", "África", "América", "Europa", "Oceanía"].map(
                (continent) => (
                  <li key={continent}>
                    <div className="flex items-center">
                      <input
                        id={`continent-${continent}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        checked={selectedFilters.continents.includes(continent)}
                        onChange={() =>
                          handleFilterChange("continents", continent)
                        }
                      />
                      <label
                        htmlFor={`continent-${continent}`}
                        className="ms-2 text-sm font-medium"
                      >
                        {continent}
                      </label>
                    </div>
                  </li>
                )
              )}
            </ul>
          )}
        </div>

        {/* País Filter */}
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
              {countriesList.map((country) => (
                <li key={country}>
                  <div className="flex items-center">
                    <input
                      id={`country-${country}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      checked={selectedFilters.countries.includes(country)}
                      onChange={() => handleFilterChange("countries", country)}
                    />
                    <label
                      htmlFor={`country-${country}`}
                      className="ms-2 text-sm font-medium"
                    >
                      {country}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Actividades Filter */}
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
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      checked={selectedFilters.activities.includes(activity)}
                      onChange={() =>
                        handleFilterChange("activities", activity)
                      }
                    />
                    <label
                      htmlFor={`activity-${activity}`}
                      className="ms-2 text-sm font-medium"
                    >
                      {activity}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Servicios Médicos Filter */}
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
                      id={`medicalService-${service}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      checked={selectedFilters.medicalServices.includes(
                        service
                      )}
                      onChange={() =>
                        handleFilterChange("medicalServices", service)
                      }
                    />
                    <label
                      htmlFor={`medicalService-${service}`}
                      className="ms-2 text-sm font-medium"
                    >
                      {service}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Alquileres Filter */}
        <div>
          <h3
            onClick={() => setIsRentalOpen(!isRentalOpen)}
            className="text-md font-semibold mb-2 cursor-pointer flex items-center justify-between"
          >
            <span>Alquileres</span>
            <svg
              className={dropdownArrowClass(isRentalOpen)}
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
          {isRentalOpen && (
            <ul className="pl-4 space-y-2">
              {rentals.map((rental) => (
                <li key={rental}>
                  <div className="flex items-center">
                    <input
                      id={`rental-${rental}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      checked={selectedFilters.rentals.includes(rental)}
                      onChange={() => handleFilterChange("rentals", rental)}
                    />
                    <label
                      htmlFor={`rental-${rental}`}
                      className="ms-2 text-sm font-medium"
                    >
                      {rental}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="text-md font-semibold mb-2">Rango de Precio</h3>
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {user?.user?.isAdmin && (
          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Añadir un producto
          </button>
        )}

        <AddProductPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onSave={handleSaveProduct}
        />
      </div>
    </div>
  );
};

export default Filters;
