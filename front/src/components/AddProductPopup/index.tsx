import { useState } from "react";
import { addProduct } from "@/lib/fetchProduct";
import Swal from "sweetalert2"; // Importa SweetAlert2

const AddProductPopup = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    image: null,
    image2: null,
    image3: null,
    title: "",
    description: "",
    description2: "",
    price: 0,
    location: "",
    duration: "",
    stock: 0,
    categories: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();

      // Añadir las imágenes
      if (formData.image) productData.append("image", formData.image);
      if (formData.image2) productData.append("image2", formData.image2);
      if (formData.image3) productData.append("image3", formData.image3);

      // Añadir los demás datos
      productData.append("title", formData.title);
      productData.append("description", formData.description);
      productData.append("description2", formData.description2);
      productData.append("price", formData.price.toString());
      productData.append("stock", formData.stock.toString());
      productData.append("location", formData.location);
      productData.append("duration", formData.duration);

      // Convertir las categorías a array de strings
      const categoriesArray = formData.categories
        .split(",")
        .map((cat) => cat.trim());
      productData.append("categories", JSON.stringify(categoriesArray));

      // Logging de datos enviados
      productData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      const addedProduct = await addProduct(productData);
      console.log("Producto añadido:", addedProduct);

      // Mostrar alerta de éxito
      Swal.fire({
        icon: "success",
        title: "¡Producto añadido!",
        text: "El producto se ha añadido exitosamente.",
        confirmButtonText: "OK",
        confirmButtonColor: "#FF6B00", // Color naranja
      });

      onClose();
    } catch (error) {
      console.error("Error al añadir el producto:", error);

      // Mostrar alerta de error
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Hubo un error al añadir el producto. Inténtalo de nuevo.",
        confirmButtonText: "OK",
      });
    }
  };

  // Verifica si el modal debe estar abierto
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 max-h-[90vh] overflow-auto">
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

        <h3 className="text-lg font-semibold mb-4">Añadir Producto</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campos para subir imágenes */}
          <div>
            <label className="block text-sm font-medium">
              Imagen principal
            </label>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Imagen 2</label>
            <input
              type="file"
              name="image2"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Imagen 3</label>
            <input
              type="file"
              name="image3"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Otros campos */}
          <div>
            <label className="block text-sm font-medium">
              Título del producto
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Descripción principal
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Descripción 2</label>
            <textarea
              name="description2"
              value={formData.description2}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Precio</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Ubicación</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Duración</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Categorías (separadas por comas)
            </label>
            <input
              type="text"
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-lg"
            >
              Añadir Producto
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPopup;
