"use client";
import React, { useState } from "react";
import {
  banUser,
  unbanUser,
  deleteUser,
  fetchUserByEmail,
} from "@/lib/fetchUser";

const UserControl = ({
  actions = ["unban-user", "ban-user", "delete-user"],
}) => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [selectedAction, setSelectedAction] = useState(actions[0]);
  const [loading, setLoading] = useState(false);

  // Buscar usuario por email
  const handleEmailSearch = async () => {
    if (!email) return;
    setLoading(true);
    try {
      const user = await fetchUserByEmail(email);
      if (user) {
        setUserId(user.id);
        alert(`El ID del usuario es: ${user.id}`);
      } else {
        alert("Usuario no encontrado.");
      }
    } catch (error) {
      console.error("Error fetching user by email:", error);
      alert("Error al buscar usuario por email.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      if (selectedAction === "ban-user") {
        const body = {
          motive: "usuario suspendido por infligir nuestras normas",
        };
        const response = await banUser(userId, body);
        alert(`Usuario ${userId} ha sido bloqueado.`);
      } else if (selectedAction === "unban-user") {
        const response = await unbanUser(userId);
        alert(`Usuario ${userId} ha sido desbloqueado.`);
      } else if (selectedAction === "delete-user") {
        await deleteUser(userId);
        alert(`Usuario ${userId} ha sido eliminado.`);
      } else {
        alert("Acción no válida.");
      }
    } catch (error) {
      console.error("Error performing action:", error);
      alert(`Error: ${error.message || "Intente nuevamente."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md mb-6">
      <h3 className="text-xl font-bold mb-4">Control de Usuarios</h3>
      {/* Buscar por email */}
      <div className="mb-4">
        <label>Email de Usuario</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
        <button
          onClick={handleEmailSearch}
          className="bg-green-500 text-white p-2 rounded-md mt-2"
          disabled={loading || !email}
        >
          {loading ? "Buscando..." : "Buscar por Email"}
        </button>
      </div>
      {/* ID de Usuario */}
      <div className="mb-4">
        <label>ID de Usuario</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
        <p>ID del Usuario: {userId}</p>
      </div>
      {/* Selección de acción */}
      <div className="mb-4">
        <label>Acción</label>
        <select
          value={selectedAction}
          onChange={(e) => setSelectedAction(e.target.value)}
          className="border p-2 w-full rounded-md"
        >
          {actions.map((action) => (
            <option key={action} value={action}>
              {action === "ban-user"
                ? "Bloquear Usuario"
                : action === "unban-user"
                ? "Desbloquear Usuario"
                : action === "delete-user"
                ? "Eliminar Usuario"
                : action}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded-md"
        disabled={loading || !userId}
      >
        {loading ? "Aplicando acción..." : "Aplicar acción"}
      </button>
    </div>
  );
};

export default UserControl;
