"use client";
import { UserContext } from "@/context/userContext";
import { getOrdersByUserId } from "@/lib/fetchProduct";
import { IOrderResponse } from "@/types";
import React, { useContext, useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const OrdersPage = () => {
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [orders, setOrders] = useState<IOrderResponse[]>([]);
	const { user } = useContext(UserContext);

	useEffect(() => {
		if (user && user.user && user.user.id) {
			setLoading(true);
			setError(null);
			fetchOrders();
		} else {
			setLoading(false);
			setError("Usuario no definido");
		}
	}, [user]);

	async function fetchOrders() {
		try {
			const orders = await getOrdersByUserId(user.user.id);
			setOrders(orders);
		} catch (error) {
			setError("Error al obtener las órdenes");
		} finally {
			setLoading(false);
		}
	}

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<FaSpinner className="animate-spin text-4xl text-blue-500" />
				<span className="ml-2 text-xl">Cargando...</span>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="bg-red-100 text-red-600 p-4 rounded-lg shadow-md">
					<h2 className="text-xl font-bold">Error</h2>
					<p>{error}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full  mt-20 p-6 bg-white shadow-md rounded-lg">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">
				Tus órdenes {user.user.name}
			</h1>
			<ul className="space-y-4">
				{orders.map((order) => (
					<li
						key={order.id}
						className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
					>
						<div className="flex justify-between items-center">
							<div>
								<p className="font-semibold text-lg text-gray-700">
									Estado: <span className="text-blue-600">{order.status}</span>
								</p>
								<p className="text-sm text-gray-500">
									Fecha:{" "}
									{new Date(order.orderDate).toLocaleDateString("es-ES", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</p>
							</div>
							<div className="text-right">
								<p className="text-lg font-semibold text-gray-900">
									${order.totalPrice}
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default OrdersPage;
