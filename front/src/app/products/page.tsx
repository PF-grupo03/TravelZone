"use client";
import React, { useEffect, useState } from "react";
import Filters from "@/components/Filters";
import TourList from "@/components/TourList";
import { fetchProducts } from "@/lib/fetchProduct";

const App = () => {
  const [filters, setFilters] = useState({
    continents: [],
    countries: [],
    activities: [],
    medicalServices: [],
    name: "",
    priceRange: [0, 1000],
  });

  const [tours, setTours] = useState([]);

  const buildFilterQuery = () => {
    const filterParams = new URLSearchParams();
    const { name, priceRange, ...otherFilters } = filters;

    const allFilters = [
      ...filters.continents,
      ...filters.countries,
      ...filters.activities,
      ...filters.medicalServices,
    ];

    allFilters.forEach((filter) => {
      filterParams.append("categories", filter.toLowerCase());
    });

    // Always include name and priceRange in the query, even if they are empty
    filterParams.set("name", name ? name.toLowerCase() : "");
    filterParams.set(
      "priceRange",
      priceRange ? `${priceRange[0]}-${priceRange[1]}` : "0-1000"
    );

    console.log("Filter query string:", filterParams.toString());

    return `?${filterParams.toString()}`;
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const filterQuery = buildFilterQuery();
        console.log("Final filter query URL:", filterQuery);

        const products = await fetchProducts(filterQuery);
        console.log("Fetched products:", products);

        setTours(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, [filters]);

  return (
    <div className="mx-[110px]">
      <div className="flex flex-col xl:flex-row justify-center p-4 md:p-8 bg-white mt-8 md:mt-16">
        <aside className="w-full xl:w-1/4 xl:mr-6 mb-4 xl:mb-0">
          <Filters setFilters={setFilters} products={tours} />
        </aside>
        <main className="w-full xl:w-3/4">
          <h1 className="text-2xl font-bold mb-4 xl:mb-6 text-center xl:text-left">
            ¡Personaliza Tu Aventura!
          </h1>
          <TourList tours={tours} />
        </main>
      </div>
    </div>
  );
};

export default App;
