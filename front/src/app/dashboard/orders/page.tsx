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
  const [userIdInput, setUserIdInput] = useState<string>(""); // Estado para el input del ID del usuario
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user && user.user && user.user.id) {
      setLoading(true);
      setError(null);
      fetchOrders(user.user.id); // Cargar las órdenes del usuario autenticado
    } else {
      setLoading(false);
      setError("Usuario no definido");
    }
  }, [user]);

  async function fetchOrders(userId: string) {
    try {
      const orders = await getOrdersByUserId(userId);
      setOrders(orders);
    } catch (error) {
      setError("Error al obtener las órdenes");
    } finally {
      setLoading(false);
    }
  }

  const handleUserIdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userIdInput) {
      setLoading(true);
      fetchOrders(userIdInput); // Cargar las órdenes del ID ingresado
    }
  };

  return (
    <div className="w-full mt-20 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Tus órdenes {user?.user?.name}
      </h1>

      {/* Mostrar input solo si el usuario es administrador */}
      {user?.user?.isAdmin && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Buscar órdenes por ID de usuario
          </h2>
          <form
            onSubmit={handleUserIdSubmit}
            className="flex items-center space-x-4"
          >
            <input
              type="text"
              value={userIdInput}
              onChange={(e) => setUserIdInput(e.target.value)}
              className="border p-2 rounded-md w-full"
              placeholder="Ingresa el ID del usuario"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Cargar Órdenes
            </button>
          </form>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <FaSpinner className="animate-spin text-4xl text-blue-500" />
          <span className="ml-2 text-xl">Cargando...</span>
        </div>
      ) : error ? (
        <div className="bg-red-100 text-red-600 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Error</h2>
          <p>{error}</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-lg text-gray-700">
                    Estado:{" "}
                    <span className="text-blue-600">{order.status}</span>
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
      )}
    </div>
  );
};

export default OrdersPage;
