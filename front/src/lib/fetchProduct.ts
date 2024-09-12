import { UserContext } from "@/context/userContext";
import { IOrderResponse, IProduct, IUser, IUserResponse } from "@/types";
import { useContext } from "react";

export async function fetchProducts(filters: string = ""): Promise<IProduct[]> {
  const baseUrl = "https://pf-grupo03-back.onrender.com/products";
  const url = `${baseUrl}${filters}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();
  return products;
}

export async function fetchProductById(id: string): Promise<IProduct> {
  const response = await fetch(
    `https://pf-grupo03-back.onrender.com/products/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const product = await response.json();
  return product;
}

export async function getOrdersByUserId(id: string): Promise<IOrderResponse[]> {
  const url = `https://pf-grupo03-back.onrender.com/orders/GetOrdersByUser/${id}`;
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    console.log("Órdenes del usuario:", data);
    return data;
  } catch (error) {
    console.error("Error al obtener las órdenes:", error);
    throw error;
  }
}

export async function addProduct(product: FormData): Promise<IProduct> {
  const token = localStorage.getItem("token");
  console.log(localStorage.getItem("token"));

  const response = await fetch(
    `https://pf-grupo03-back.onrender.com/products`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: product,
    }
  );

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      `Failed to add product: ${response.status} - ${errorMessage}`
    );
  }

  return response.json();
}

export async function updateProduct(
  id: string,
  updatedProduct: Partial<IProduct>
): Promise<IProduct> {
  const token = localStorage.getItem("token"); // Obtén el token del localStorage
  const response = await fetch(
    `https://pf-grupo03-back.onrender.com/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Añade el token al encabezado
      },
      body: JSON.stringify(updatedProduct),
    }
  );

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      `Failed to update product: ${response.status} - ${errorMessage}`
    );
  }

  const product = await response.json();
  return product;
}

export async function deleteProduct(id: string): Promise<void> {
  const token = localStorage.getItem("token"); // Obtén el token del localStorage
  const response = await fetch(
    `https://pf-grupo03-back.onrender.com/products/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`, // Añade el token al encabezado
      },
    }
  );

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      `Failed to delete product: ${response.status} - ${errorMessage}`
    );
  }

  console.log(`Product ${id} deleted successfully`);
}
