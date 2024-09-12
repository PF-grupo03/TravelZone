import React, { useContext, useState } from "react";
import { IUserResponse } from "@/types";
import { updateUser, deleteUser, changePassword } from "@/lib/fetchUser";
import { UserContext } from "@/context/userContext";
import Swal from "sweetalert2";

interface AccountSettingsProps {
  user: Partial<IUserResponse> | null;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ user }) => {
  const { user: loggedInUser, logout } = useContext(UserContext); // Import logout function

  const [username, setUsername] = useState(loggedInUser?.user?.username || "");
  const [email, setEmail] = useState(loggedInUser?.user?.email || "");
  const [password, setPassword] = useState("");

  console.log("Datos iniciales del usuario:", loggedInUser);

  const handleSubmit = async () => {
    if (!loggedInUser?.user?.id) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "ID de usuario no encontrado. Por favor, inicia sesión.",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      // Actualizar solo el nombre de usuario si ha cambiado
      if (username !== loggedInUser.user.username) {
        await updateUser(loggedInUser.user.id, { username });
      }

      // Solo cambiar la contraseña si el campo de contraseña no está vacío
      if (password.trim()) {
        await changePassword(loggedInUser.user.id, password);
      }

      Swal.fire({
        icon: "success",
        title: "¡Actualización exitosa!",
        text: "La información del usuario ha sido actualizada exitosamente.",
        confirmButtonText: "OK",
        confirmButtonColor: "#FF6B00", // Color naranja
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error al actualizar!",
        text: "Hubo un error al actualizar la información. Por favor, inténtalo nuevamente.",
        confirmButtonText: "OK",
      });
    }
  };

  const handleDeleteAccount = async () => {
    if (!loggedInUser?.user?.id) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "ID de usuario no encontrado. Por favor, inicia sesión.",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      icon: "warning",
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer. Eliminará permanentemente tu cuenta.",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#FF6B00", // Color naranja
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUser(loggedInUser.user.id);
          Swal.fire({
            icon: "success",
            title: "¡Cuenta eliminada!",
            text: "Tu cuenta ha sido eliminada permanentemente.",
            confirmButtonText: "OK",
            confirmButtonColor: "#FF6B00", // Color naranja
          });

          // Logout after successful deletion
          logout(); // Call logout to remove user from local storage
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error al eliminar",
            text: `No se pudo eliminar la cuenta. Error: ${error.message}`,
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  return (
    <div className="col-span-8 overflow-hidden rounded-xl w-full sm:bg-gray-50 sm:px-8 sm:shadow">
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">Configuración de cuenta</h1>
      </div>
      <hr className="mt-4 mb-8" />

      <div className="flex items-center mb-4">
        <div>
          <p className="py-2 text-xl font-semibold">Nombre de usuario</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full rounded-md mb-4"
          />
          <p className="text-gray-600">
            {email || "Correo electrónico no disponible"}
          </p>
        </div>
      </div>

      <hr className="mt-4 mb-8" />

      <p className="py-2 text-xl font-semibold">Contraseña</p>
      <div className="flex items-center">
        <label htmlFor="login-password" className="w-full">
          <span className="text-sm text-gray-500">Nueva contraseña</span>
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="***********"
            />
          </div>
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Guardar cambios
      </button>

      <hr className="mt-4 mb-8" />

      <div className="mb-10">
        <p className="py-2 text-xl font-semibold">Eliminar cuenta</p>
        <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a 1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Proceder con precaución
        </p>
        <p className="mt-2">
          Asegúrate de haber realizado una copia de seguridad de tu cuenta en
          caso de que necesites acceder a tus datos en el futuro. Eliminaremos
          completamente tus datos. No habrá forma de acceder a tu cuenta después
          de esta acción.
        </p>
        <button
          onClick={handleDeleteAccount}
          className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2"
        >
          Continuar con la eliminación
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
