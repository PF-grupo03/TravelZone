import React, { useContext, useState } from "react";
import { UserContext } from "@/context/userContext";
import { deleteProduct, updateProduct } from "@/lib/fetchProduct";
import EditProductPopup from "../EditProductPopup";

const TourCard = ({ tour }) => {
  const { user } = useContext(UserContext);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        await deleteProduct(tour.id);
        alert("Producto eliminado con éxito");
      } catch (error) {
        alert("Error al eliminar el producto");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full lg:w-1/3 flex-shrink-0">
        {tour.discount && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded">
            {tour.discount}
          </div>
        )}
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-[200px] lg:w-[280px] lg:h-[230px] object-cover"
        />
      </div>
      <div className="p-4 lg:p-6 w-full lg:w-2/3 flex flex-col justify-between">
        <div>
          <p className="text-gray-400 text-xs">{tour.location}</p>
          <h3 className="text-xl font-bold mt-1 text-gray-800">{tour.title}</h3>
          <p className="text-gray-600 mt-2 text-sm">{tour.description}</p>
        </div>
        {tour.rating && (
          <div className="flex items-center mt-4">
            <span className="text-yellow-500 text-lg">{tour.rating}</span>
            <span className="ml-2 text-gray-500 text-sm">({tour.reviews})</span>
          </div>
        )}

        {/* Aquí está la lógica para mostrar los spans o los botones dependiendo si es admin */}
        <div className="mt-4 flex justify-between">
          {user?.user.isAdmin ? (
            <div className="flex space-x-2">
              <button
                className="bg-blue-500 text-white text-xs py-1 px-2 rounded font-semibold hover:bg-blue-600"
                onClick={() => setShowEditPopup(true)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white text-xs py-1 px-2 rounded font-semibold hover:bg-red-600"
                onClick={handleDelete}
              >
                Eliminar
              </button>
            </div>
          ) : (
            <>
              <span className="text-xs text-orange-500 font-semibold">
              Mejor precio garantizado
              </span>
              <span className="text-xs text-orange-500 font-semibold">
              Cancelación gratuita
              </span>
            </>
          )}
        </div>
      </div>
      <div className="p-4 lg:p-6 border-t lg:border-t-0 lg:border-l border-gray-200 w-full lg:w-1/3 flex flex-col justify-between">
        <p className="text-gray-500 text-xs mb-1">{tour.duration}</p>
        <div className="mt-4">
          {tour.oldPrice && (
            <span className="line-through text-gray-400 text-sm">
              {tour.oldPrice}
            </span>
          )}
          <span className="text-lg font-semibold text-red-600 ml-2">
          De {tour.price} USD
          </span>
        </div>
        <button className="bg-[#EB662B] text-white mt-4 py-2 px-6 rounded text-sm hover:bg-orange-600 transition duration-200 ">
          <a href={`/products/${tour.id}`}>View Details</a>
        </button>
      </div>
      {showEditPopup && (
        <EditProductPopup
          tour={tour}
          onClose={() => setShowEditPopup(false)}
          onSave={(updatedProduct) => {
            updateProduct(tour.id, updatedProduct).then(() => {
              setShowEditPopup(false);
              alert("Producto actualizado con éxito");
            });
          }}
        />
      )}
    </div>
  );
};

export default TourCard;
