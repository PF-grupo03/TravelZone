import React, { useState } from "react";

const EditProductPopup = ({ tour, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    image: tour.image,
    image2: tour.image2 || "",
    image3: tour.image3 || "",
    title: tour.title,
    description: tour.description,
    description2: tour.description2 || "",
    price: tour.price || "", // Asegúrate de que sea string inicialmente
    location: tour.location,
    duration: tour.duration,
    stock: tour.stock || "", // Asegúrate de que sea string inicialmente
    categories: tour.categories ? tour.categories.join(", ") : "",
    latitude: tour.latitude || "", // Agregar campo de latitude
    longitude: tour.longitude || "", // Agregar campo de longitude
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Handle category input specifically
    if (name === "categories") {
      const categoriesArray = value.split(",").map((cat) => cat.trim()); // Split, trim, and convert to array
      setFormData((prev) => ({ ...prev, [name]: categoriesArray }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica que price, stock, latitude y longitude sean válidos números
    const updatedProduct = {
      ...formData,
      price: parseFloat(formData.price) || 0, // Convierte price a número, default 0
      stock: parseInt(formData.stock) || 0, // Convierte stock a número entero, default 0
      latitude: parseFloat(formData.latitude) || 0, // Convierte latitude a número, default 0
      longitude: parseFloat(formData.longitude) || 0, // Convierte longitude a número, default 0
      categories: formData.categories
        ? formData.categories
            .toString()
            .split(",")
            .map((cat) => cat.trim()) // Convierte a array de strings
        : [], // Envía array vacío si no hay categorías
    };

    console.log("Data sent to API:", updatedProduct);
    // Validación adicional si lo necesitas
    if (isNaN(updatedProduct.price)) {
      alert("El precio debe ser un número válido.");
      return;
    }

    if (isNaN(updatedProduct.stock)) {
      alert("El stock debe ser un número válido.");
      return;
    }

    if (isNaN(updatedProduct.latitude)) {
      alert("La latitud debe ser un número válido.");
      return;
    }

    if (isNaN(updatedProduct.longitude)) {
      alert("La longitud debe ser un número válido.");
      return;
    }

    // Llamar a la función onSave con el producto actualizado
    onSave(updatedProduct);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg max-h-screen overflow-auto p-6">
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          onClick={onClose}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <h3 className="text-lg font-semibold mb-4">Editar Producto</h3>
        <form onSubmit={handleSubmit}>
          {/* Título */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Título</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Descripción */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Descripción adicional */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Descripción 2</label>
            <textarea
              name="description2"
              value={formData.description2}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Imagen */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Imagen</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Imagen 2 */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Imagen 2</label>
            <input
              type="text"
              name="image2"
              value={formData.image2}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Imagen 3 */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Imagen 3</label>
            <input
              type="text"
              name="image3"
              value={formData.image3}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Precio */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Precio</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Ubicación */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Ubicación</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Duración */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Duración</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Stock */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Categorías */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Categorías (ejemplo: argentina,américa)
            </label>
            <input
              type="text"
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Latitud */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Latitud</label>
            <input
              type="number"
              step="any"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Longitud */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Longitud</label>
            <input
              type="number"
              step="any"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          {/* Botones */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg ml-2"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductPopup;
