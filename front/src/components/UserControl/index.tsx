"use client";
import React, { useState } from "react";
import {
  banUser,
  unbanUser,
  deleteUser,
  fetchUserByEmail,
} from "@/lib/fetchUser";
import Swal from "sweetalert2";

const UserControl = ({
  actions = ["unban-user", "ban-user", "delete-user"],
}) => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [selectedAction, setSelectedAction] = useState(actions[0]);
  const [loadingEmail, setLoadingEmail] = useState(false); // Estado de carga para buscar por email
  const [loadingAction, setLoadingAction] = useState(false); // Estado de carga para aplicar acción

  // Buscar usuario por email
  const handleEmailSearch = async () => {
    if (!email) return;
    setLoadingEmail(true);
    try {
      const user = await fetchUserByEmail(email);
      if (user) {
        setUserId(user.id);
        Swal.fire({
          icon: "success",
          title: "Usuario encontrado",
          text: `El ID del usuario es: ${user.id}`,
          confirmButtonText: "OK",
          confirmButtonColor: "#FF6B00",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Usuario no encontrado",
          text: "No se encontró un usuario con ese email.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al buscar usuario por email.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleSubmit = async () => {
    if (!userId) return;
    setLoadingAction(true);
    try {
      if (selectedAction === "ban-user") {
        const body = {
          motive: "usuario suspendido por infligir nuestras normas",
        };
        await banUser(userId, body);
        Swal.fire({
          icon: "success",
          title: "Usuario bloqueado",
          text: `El usuario ${userId} ha sido bloqueado.`,
          confirmButtonText: "OK",
          confirmButtonColor: "#FF6B00",
        });
      } else if (selectedAction === "unban-user") {
        await unbanUser(userId);
        Swal.fire({
          icon: "success",
          title: "Usuario desbloqueado",
          text: `El usuario ${userId} ha sido desbloqueado.`,
          confirmButtonText: "OK",
          confirmButtonColor: "#FF6B00",
        });
      } else if (selectedAction === "delete-user") {
        await deleteUser(userId);
        Swal.fire({
          icon: "success",
          title: "Usuario eliminado",
          text: `El usuario ${userId} ha sido eliminado.`,
          confirmButtonText: "OK",
          confirmButtonColor: "#FF6B00",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Acción no válida",
          text: "La acción seleccionada no es válida.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error: ${error.message || "Intente nuevamente."}`,
        confirmButtonText: "OK",
      });
    } finally {
      setLoadingAction(false);
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
          disabled={loadingEmail || !email}
        >
          {loadingEmail ? "Buscando..." : "Buscar por Email"}
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
        disabled={loadingAction || !userId}
      >
        {loadingAction ? "Aplicando acción..." : "Aplicar acción"}
      </button>
    </div>
  );
};

export default UserControl;
