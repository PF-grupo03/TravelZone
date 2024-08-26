"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Filters = ({ setFilters }) => {
  const router = useRouter();
  const [isContinentOpen, setIsContinentOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isMedicalOpen, setIsMedicalOpen] = useState(false);

  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedMedicalServices, setSelectedMedicalServices] = useState<
    string[]
  >([]);

  // Función para actualizar la URL y los filtros
  const updateQueryParams = (params: Record<string, string[]>) => {
    const queryParams = new URLSearchParams(window.location.search);

    for (const [key, values] of Object.entries(params)) {
      if (values.length > 0) {
        queryParams.set(key, values.join(","));
      } else {
        queryParams.delete(key);
      }
    }

    // Actualiza los filtros en el estado global
    setFilters({
      continents: queryParams.get("categories")?.split(",") || [],
      countries: queryParams.get("countries")?.split(",") || [],
      activities: queryParams.get("activities")?.split(",") || [],
      medicalServices: queryParams.get("medicalServices")?.split(",") || [],
    });

    router.push(`?${queryParams.toString()}`);
  };

  // Handlers para los cambios en los filtros
  const handleContinentChange = (continent: string) => {
    const newSelection = selectedContinents.includes(continent)
      ? selectedContinents.filter((item) => item !== continent)
      : [...selectedContinents, continent];

    setSelectedContinents(newSelection);
    setSelectedCountries([]); // Clear countries when continent changes
    updateQueryParams({ continents: newSelection });
  };

  const handleCountryChange = (country: string) => {
    const newSelection = selectedCountries.includes(country)
      ? selectedCountries.filter((item) => item !== country)
      : [...selectedCountries, country];

    setSelectedCountries(newSelection);
    updateQueryParams({ countries: newSelection });
  };

  const handleActivityChange = (activity: string) => {
    const newSelection = selectedActivities.includes(activity)
      ? selectedActivities.filter((item) => item !== activity)
      : [...selectedActivities, activity];

    setSelectedActivities(newSelection);
    updateQueryParams({ activities: newSelection });
  };

  const handleMedicalServiceChange = (service: string) => {
    const newSelection = selectedMedicalServices.includes(service)
      ? selectedMedicalServices.filter((item) => item !== service)
      : [...selectedMedicalServices, service];

    setSelectedMedicalServices(newSelection);
    updateQueryParams({ medicalServices: newSelection });
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

  const availableCountries = selectedContinents.flatMap(
    (continent) => continentCountryMap[continent] || []
  );

  const dropdownArrowClass = (isOpen: boolean) =>
    `transition-transform transform ${
      isOpen ? "rotate-180" : "rotate-0"
    } text-xs`;

  // Funciones para alternar los dropdowns
  const toggleContinentDropdown = () => setIsContinentOpen(!isContinentOpen);
  const toggleCountryDropdown = () => setIsCountryOpen(!isCountryOpen);
  const toggleActivityDropdown = () => setIsActivityOpen(!isActivityOpen);
  const toggleMedicalDropdown = () => setIsMedicalOpen(!isMedicalOpen);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="bg-orange-500 text-white p-4 rounded-t-lg">
        <h2 className="text-lg font-bold">Escoja el lugar de su servicio.</h2>
      </div>
      <div className="p-4 space-y-4">
        {/* Dropdown para Continente */}
        <div>
          <h3
            onClick={toggleContinentDropdown}
            className="text-md font-semibold mb-2 cursor-pointer flex items-center justify-between"
          >
            <span>Continente</span>
            <span className={dropdownArrowClass(isContinentOpen)}>▼</span>
          </h3>
          {isContinentOpen && (
            <ul className="pl-4 space-y-2">
              {["Asia", "África", "América", "Europa", "Oceanía"].map(
                (continent) => (
                  <li key={continent}>
                    <label>
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedContinents.includes(continent)}
                        onChange={() => handleContinentChange(continent)}
                      />
                      {continent}
                    </label>
                  </li>
                )
              )}
            </ul>
          )}
        </div>

        {/* Dropdown para País */}
        <div>
          <h3
            onClick={toggleCountryDropdown}
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
                        checked={selectedCountries.includes(country)}
                        onChange={() => handleCountryChange(country)}
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
            onClick={toggleActivityDropdown}
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
                      checked={selectedActivities.includes(activity)}
                      onChange={() => handleActivityChange(activity)}
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
            onClick={toggleMedicalDropdown}
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
                      checked={selectedMedicalServices.includes(service)}
                      onChange={() => handleMedicalServiceChange(service)}
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
