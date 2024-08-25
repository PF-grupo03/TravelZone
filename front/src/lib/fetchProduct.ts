import { IProduct } from "@/types";

export async function fetchProducts(): Promise<IProduct[]> {
    const response = await fetch("http://localhost:3001/products")
    const products = await response.json();
    return products;
    
}

export async function fetchProductById(id: string): Promise <IProduct>{
    const response = await fetch(`http://localhost:3001/products/${id}`)
    const product = await response.json();
    return product;
    
  }