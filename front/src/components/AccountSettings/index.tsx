import React, { useContext, useState } from "react";
import { IUserResponse } from "@/types"; // Importa la interfaz IUserResponse
import { updateUser } from "@/lib/fetchUser"; // Importa la función updateUser
import { UserContext } from "@/context/userContext"; // Importa el contexto UserContext

// Define la interfaz AccountSettingsProps
interface AccountSettingsProps {
	user: Partial<IUserResponse> | null; // Establece el tipo de user como Partial<IUserResponse> o null
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ user }) => {
	// Context para acceder a los datos del usuario logueado
	const { user: loggedInUser } = useContext(UserContext);

	// Estados para almacenar los valores de los campos del formulario
	const [username, setUsername] = useState(loggedInUser?.user?.username || "");
	const [email, setEmail] = useState(loggedInUser?.user?.email || "");
	const [password, setPassword] = useState("");

	// Mensaje de consola para verificar los datos iniciales del usuario
	console.log("Datos iniciales del usuario:", loggedInUser); // Mensaje en español

	const handleSubmit = async () => {
		// Verifica si el ID de usuario existe
		if (!loggedInUser?.user?.id) {
			alert("ID de usuario no encontrado. Por favor, inicia sesión.");
			return;
		}

		// Mensaje de consola para verificar los valores del formulario
		console.log("Valores del formulario:", { username, password }); // Mensaje en español

		try {
			// Construye el objeto de datos de actualización
			const updatedUserData = {
				username:
					username !== loggedInUser?.user.username ? username : undefined,
				password: password || undefined,
			};

			// Actualiza el usuario utilizando la función updateUser
			const response = await updateUser(loggedInUser.user.id, updatedUserData);

			// Mensaje de consola para verificar la respuesta
			console.log("Respuesta de updateUser:", response); // Mensaje en español

			alert("Información del usuario actualizada exitosamente.");
		} catch (error) {
			// Manejo de errores
			console.error("Error al actualizar el usuario:", error); // Mensaje en español
			alert(
				"Error al actualizar la información del usuario. Inténtalo nuevamente."
			);
		}
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
							d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
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
				<button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">
					Continuar con la eliminación
				</button>
			</div>
		</div>
	);
};

export default AccountSettings;
