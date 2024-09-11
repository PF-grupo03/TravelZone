import { UserContext } from "@/context/userContext";
import { IProduct, IUser, IUserResponse } from "@/types";
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

export async function getOrdersByUserId(id: string): Promise<IUser> {
	const url = `https://pf-grupo03-back.onrender.com/orders/GetOrdersByUser/${id}`;

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
