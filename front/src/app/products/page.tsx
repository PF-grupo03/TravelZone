"use client";
import React, { useEffect, useState, useCallback, useContext } from "react";
import { useSearchParams } from "next/navigation"; // Cambia el import
import Filters from "@/components/Filters";
import TourList from "@/components/TourList";
import { addProduct, fetchProducts } from "@/lib/fetchProduct";
import { UserContext } from "@/context/userContext"; // Import UserContext
import { debounce } from "@mui/material";

const App = () => {
  const searchParams = useSearchParams(); // Usa useSearchParams
  const [filters, setFilters] = useState({
    continents: [],
    countries: [],
    activities: [],
    medicalServices: [],
    name: "",
  });

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const { user } = useContext(UserContext); // Get the user from the context

  // Use useCallback to memoize the filter query construction
  const buildFilterQuery = useCallback(() => {
    const filterParams = new URLSearchParams();
    const { name, ...otherFilters } = filters;

    const allFilters = [
      ...filters.continents,
      ...filters.countries,
      ...filters.activities,
      ...filters.medicalServices,
    ];

    allFilters.forEach((filter) => {
      filterParams.append("categories", filter.toLowerCase());
    });

    filterParams.set("name", name ? name.toLowerCase() : "");

    const queryString = `?${filterParams.toString()}`;
    return queryString;
  }, [filters]);

  // Set filters based on URL query on initial load
  useEffect(() => {
    const continents = searchParams.get("continents");
    const countries = searchParams.get("countries");
    const activities = searchParams.get("activities");
    const medicalServices = searchParams.get("medicalServices");
    const name = searchParams.get("name");

    const initialFilters = {
      continents: continents ? [continents] : [],
      countries: countries ? [countries] : [],
      activities: activities ? [activities] : [],
      medicalServices: medicalServices ? [medicalServices] : [],
      name: name || "",
    };
    setFilters(initialFilters);
  }, [searchParams]);

  useEffect(() => {
    const loadProducts = debounce(async () => {
      setIsLoading(true); // Show loader
      try {
        const filterQuery = buildFilterQuery();
        console.log("Final filter query URL:", filterQuery);

        const products = await fetchProducts(filterQuery);
        console.log("Fetched products:", products);

        setTours(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false); // Hide loader
      }
    }, 500); // 500ms debounce

    loadProducts();
  }, [filters, buildFilterQuery]);

  const handleAddProduct = async (product) => {
    try {
      await addProduct(product);
      console.log("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="mx-[110px]">
      <div className="flex flex-col xl:flex-row justify-center p-4 md:p-8 bg-white mt-8 md:mt-16">
        <aside className="w-full xl:w-1/4 xl:mr-6 mb-4 xl:mb-0">
          <Filters
            setFilters={setFilters}
            products={tours}
            user={user} // Pasar user a Filters
            onAddProduct={handleAddProduct} // Manejar agregar producto
          />
        </aside>
        <main className="w-full xl:w-3/4">
          <h1 className="text-2xl font-bold mb-4 xl:mb-6 text-center xl:text-left">
            ¡Personaliza Tu Aventura!
          </h1>

          {isLoading ? ( // Mostrar loader mientras se cargan los productos
            <div className="text-center">Cargando productos...</div>
          ) : (
            <TourList tours={tours} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
