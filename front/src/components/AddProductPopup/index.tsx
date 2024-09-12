import { Button, Modal } from "flowbite-react";
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

  return (
    <>
      <Modal show={isOpen} size="4xl" onClose={onClose} dismissible={true}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
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
              <Button type="submit" className="bg-green-500">
                Añadir Producto
              </Button>
              <Button color="gray" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProductPopup;
