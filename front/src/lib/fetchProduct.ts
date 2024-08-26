import { IProduct } from "@/types";

export async function fetchProducts(): Promise<IProduct[]> {
  const response = await fetch("https://pf-grupo03-back.onrender.com/products");
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
