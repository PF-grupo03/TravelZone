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
  });

  const [tours, setTours] = useState([]);

  // Cargar los productos al montar el componente
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setTours(products); // Guardar los productos obtenidos en el estado
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="flex justify-center p-8 bg-white mt-16">
      <aside className="w-1/4 mr-6">
        <Filters setFilters={setFilters} />
      </aside>
      <main className="w-3/4">
        <h1 className="text-2xl font-bold mb-6">¡Personaliza Tu Aventura!</h1>
        <TourList tours={tours} filters={filters} />
      </main>
    </div>
  );
};

export default App;
