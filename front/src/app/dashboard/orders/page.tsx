"use client";
import { UserContext } from "@/context/userContext";
import { getOrdersByUserId } from "@/lib/fetchProduct";
import React, { useContext, useState, useEffect } from "react";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const { user } = useContext(UserContext);

	useEffect(() => {
		if (user && user.user && user.user.id) {
			fetchOrders();
		} else {
			setLoading(false);
			setError("Usuario no definido");
		}
	}, [user]);

	async function fetchOrders() {
		try {
			const orders = await getOrdersByUserId(user.user.id);
			console.log("Órdenes del usuario:", orders);
		} catch (error) {
			setError("Error al obtener las órdenes");
		} finally {
			setLoading(false);
		}
	}

	if (loading) {
		return <div>Cargando...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			<h1>Órdenes del usuario</h1>
			<ul>
				{orders.map((order) => (
					<li key={order.id}>{order.status}</li>
				))}
			</ul>
		</div>
	);
};

export default Orders;
