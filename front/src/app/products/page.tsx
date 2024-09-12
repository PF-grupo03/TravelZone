"use client";
import React, { useEffect, useState, useCallback, useContext } from "react";
import Filters from "@/components/Filters";
import TourList from "@/components/TourList";
import { addProduct, fetchProducts } from "@/lib/fetchProduct";
import { UserContext } from "@/context/userContext"; // Importar UserContext
import { debounce } from "@mui/material";
import { FaSpinner } from "react-icons/fa"; // Importar el ícono del spinner

const App = () => {
  const [filters, setFilters] = useState({
    continents: [],
    countries: [],
    activities: [],
    medicalServices: [],
    rentals: [],
    name: "",
  });

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Estado para el loader
  const { user } = useContext(UserContext); // Obtener el usuario desde el contexto

  // Uso de useCallback para memorizar la función y evitar renderizados innecesarios
  const buildFilterQuery = useCallback(() => {
    const filterParams = new URLSearchParams();
    const { name, ...otherFilters } = filters;

    const allFilters = [
      ...filters.continents,
      ...filters.countries,
      ...filters.activities,
      ...filters.medicalServices,
      ...filters.rentals,
    ];

    allFilters.forEach((filter) => {
      filterParams.append("categories", filter.toLowerCase());
    });

    filterParams.set("name", name ? name.toLowerCase() : "");

    const queryString = `?${filterParams.toString()}`;
    return queryString;
  }, [filters]);

  // Usar debounce en la función de carga de productos
  const loadProducts = useCallback(
    debounce(async () => {
      setIsLoading(true); // Mostrar loader
      try {
        const filterQuery = buildFilterQuery();
        console.log("Final filter query URL:", filterQuery);

        const products = await fetchProducts(filterQuery);
        console.log("Fetched products:", products);

        setTours(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false); // Ocultar loader
      }
    }, 500), // 500ms debounce
    [buildFilterQuery]
  );


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

          {isLoading ? ( // Mostrar spinner mientras se cargan los productos
            <div className="flex justify-center items-center h-screen">
              <FaSpinner className="animate-spin text-4xl text-blue-500" />
              <span className="ml-2 text-xl">Cargando productos...</span>
            </div>
          ) : (
            <TourList tours={tours} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
