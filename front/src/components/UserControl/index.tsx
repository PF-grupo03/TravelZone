import React, { useState } from "react";
import { banUser, unbanUser } from "@/lib/fetchUser";

const UserControl = ({ actions = ["unban-user", "ban-user"] }) => {
  const [userId, setUserId] = useState("");
  const [selectedAction, setSelectedAction] = useState(actions[0]);

  const handleSubmit = async () => {
    if (userId) {
      try {
        if (selectedAction === "ban-user") {
          const body = {
            motive: "usuario suspendido por infligir nuestras normas",
          };
          await banUser(userId, body);
          alert(`Usuario ${userId} ha sido bloqueado.`);
        } else if (selectedAction === "unban-user") {
          await unbanUser(userId);
          alert(`Usuario ${userId} ha sido desbloqueado.`);
        } else {
          console.error("Invalid action:", selectedAction);
          alert("Acción no válida. Intente nuevamente.");
        }
      } catch (error) {
        console.error("Error performing user action:", error);
        alert("Error. Intente nuevamente.");
      }
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md mb-6">
      <h3 className="text-xl font-bold mb-4">Control de Usuarios</h3>
      <div className="mb-4">
        <label>ID de Usuario</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
      </div>
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
                : action}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Aplicar acción
      </button>
    </div>
  );
};

export default UserControl;
