"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Filters from "@/components/Filters";
import TourList from "@/components/TourList";
import { fetchProducts } from "@/lib/fetchProduct";

const App = () => {
  const [filters, setFilters] = useState({
    continents: [],
    countries: [],
    activities: [],
    medicalServices: [],
  });

  const [tours, setTours] = useState([]);

  // Función para construir la query string basada en los filtros
  const buildFilterQuery = () => {
    const filterParams = new URLSearchParams();
    const allFilters = [
      ...filters.continents,
      ...filters.countries,
      ...filters.activities,
      ...filters.medicalServices,
    ];

    if (allFilters.length > 0) {
      filterParams.set("categories", allFilters.join(",").toLowerCase());
    }

    return `?${filterParams.toString()}`;
  };

  // Cargar los productos cuando los filtros cambian
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const filterQuery = buildFilterQuery();
        const products = await fetchProducts(filterQuery);
        setTours(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, [filters]); // Se ejecuta cuando cambian los filtros

  return (
    <div className="flex flex-col xl:flex-row justify-center p-4 md:p-8 bg-white mt-8 md:mt-16">
      <aside className="w-full xl:w-1/4 xl:mr-6 mb-4 xl:mb-0">
        <Filters setFilters={setFilters} />
      </aside>
      <main className="w-full xl:w-3/4">
        <h1 className="text-2xl font-bold mb-4 xl:mb-6 text-center xl:text-left">
          ¡Personaliza Tu Aventura!
        </h1>
        <TourList tours={tours} />
      </main>
    </div>
  );
};

export default App;
