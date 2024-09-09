import React from "react";
import { IOrderResponse } from "@/types";

interface OrderCardProps {
  orders: IOrderResponse[];
}

const OrderCard: React.FC<OrderCardProps> = ({ orders }) => {
  if (orders.length === 0) return <p>No tienes órdenes de compra.</p>;

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-bold">Orden ID: {order.id}</h3>
          <p>Fecha: {order.date}</p>
          <p className="mt-2">Estado: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
