"use client";
"use client";
import React, { useState } from "react";

const Filters = () => {
  const [isContinentOpen, setIsContinentOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isMedicalOpen, setIsMedicalOpen] = useState(false);

  const [selectedContinents, setSelectedContinents] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedMedicalServices, setSelectedMedicalServices] = useState([]);

  const toggleContinentDropdown = () => setIsContinentOpen(!isContinentOpen);
  const toggleCountryDropdown = () => setIsCountryOpen(!isCountryOpen);
  const toggleActivityDropdown = () => setIsActivityOpen(!isActivityOpen);
  const toggleMedicalDropdown = () => setIsMedicalOpen(!isMedicalOpen);

  const handleContinentChange = (continent) => {
    setSelectedContinents((prevSelected) =>
      prevSelected.includes(continent)
        ? prevSelected.filter((item) => item !== continent)
        : [...prevSelected, continent]
    );
    setSelectedCountries([]);
  };

  const handleCountryChange = (country) => {
    setSelectedCountries((prevSelected) =>
      prevSelected.includes(country)
        ? prevSelected.filter((item) => item !== country)
        : [...prevSelected, country]
    );
  };

  const handleActivityChange = (activity) => {
    setSelectedActivities((prevSelected) =>
      prevSelected.includes(activity)
        ? prevSelected.filter((item) => item !== activity)
        : [...prevSelected, activity]
    );
  };

  const handleMedicalServiceChange = (service) => {
    setSelectedMedicalServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((item) => item !== service)
        : [...prevSelected, service]
    );
  };

  const continentCountryMap = {
    Asia: ["India", "China", "Japón", "Tailandia"],
    África: ["Egipto", "Sudáfrica", "Nigeria", "Kenia"],
    América: ["Estados Unidos", "México", "Brasil", "Argentina"],
    Europa: ["Francia", "Alemania", "España", "Italia"],
    Oceanía: ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea"],
  };

  const activities = ["Avistamiento de aves", "Pesca deportiva"];
  const medicalServices = ["Diseño de sonrisa"];

  const availableCountries = selectedContinents.flatMap(
    (continent) => continentCountryMap[continent] || []
  );

  const dropdownArrowClass = (isOpen) =>
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
