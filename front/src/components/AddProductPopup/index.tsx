import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { addProduct } from "@/lib/fetchProduct";

const AddProductPopup = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    image: "",
    image2: "",
    image3: "",
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...formData,
        categories: formData.categories.split(",").map((cat) => cat.trim()), // Convertimos la string de categorías a array
      };

      const addedProduct = await addProduct(productData); // Llamada al fetch
      console.log("Producto añadido:", addedProduct);

      onClose(); // Cerrar el modal después de guardar
    } catch (error) {
      console.error("Error al añadir el producto:", error);
      // Aquí puedes mostrar un mensaje de error al usuario si es necesario
    }
  };

  return (
    <>
      <Modal
        show={isOpen}
        size="4xl" // Ajustar el tamaño del modal
        onClose={onClose}
        dismissible={true}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-6">
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

            {/* Agregar campos para image2 e image3 */}
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

            {/* Otros campos: descripción, precio, etc. */}
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

            {/* Campos adicionales */}
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
