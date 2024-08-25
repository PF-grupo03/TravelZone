import paquetesDatailToPreload from "@/helpers/paquetesDetailToPreload";
import Filters from "@/components/Filters";
import TourList from "@/components/TourList";
import React from "react";

const App = () => {
  return (
    <div className="flex justify-center p-8 bg-gray-100 mt-16">
      <aside className="w-1/4 mr-6">
        <Filters />
      </aside>
      <main className="w-3/4">
        <h1 className="text-2xl font-bold mb-6">¡Personaliza Tu Aventura!</h1>
        <TourList tours={paquetesDatailToPreload} />
      </main>
    </div>
  );
};

export default App;
