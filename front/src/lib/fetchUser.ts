import { ILoginUser, IUser } from "@/types";

export const postSignup = async (user: Omit<IUser, "id">) => {
	const response = await fetch(
		"https://pf-grupo03-back.onrender.com/auth/signup",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}
	);

	console.log("Response status:", response.status);

	let data;
	try {
		data = await response.json();
		console.log("Response data:", data);
	} catch (error) {
		console.error("Failed to parse JSON:", error);
		throw new Error("Failed to parse server response.");
	}

	if (!response.ok) {
		throw new Error(data.message || "Error registering user.");
	}

	return data;
};

export const postSignin = async (credentials: ILoginUser) => {
	const response = await fetch(
		"https://pf-grupo03-back.onrender.com/auth/signin",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		}
	);
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || "Error Loging user.");
	}
	const data = await response.json();
	return data;
};

export const getUserOrders = async (): Promise<any> => {
	const token = localStorage.getItem("token"); // Obtén el token del localStorage
	const response = await fetch(
		"https://pf-grupo03-back.onrender.com/users/orders",
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	const data = await response.json();
	return data;
};

export const banUser = async (
	id: string,
	body: object = {}
): Promise<IUser> => {
	console.log("banUser called with:", { id, body });
	const token = localStorage.getItem("token"); // Obtén el token del localStorage

	const response = await fetch(
		`https://pf-grupo03-back.onrender.com/users/ban-user/${id}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`, // Añade el token al encabezado
			},
			body: JSON.stringify(body),
		}
	);

	console.log("banUser response:", response);

	if (!response.ok) {
		const errorMessage = await response.text();
		console.error("banUser error:", errorMessage);
		throw new Error(`Failed to ban user: ${response.status} - ${errorMessage}`);
	}

	const data = await response.json();
	console.log("banUser response data:", data);
	return data as IUser;
};

export const unbanUser = async (id: string): Promise<IUser> => {
	console.log("unbanUser called with:", id);
	const token = localStorage.getItem("token"); // Obtén el token del localStorage

	const response = await fetch(
		`https://pf-grupo03-back.onrender.com/users/unban-user/${id}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`, // Añade el token al encabezado
			},
		}
	);

	console.log("unbanUser response:", response);

	if (!response.ok) {
		const errorMessage = await response.text();
		console.error("unbanUser error:", errorMessage);
		throw new Error(
			`Failed to unban user: ${response.status} - ${errorMessage}`
		);
	}

	const data = await response.json();
	console.log("unbanUser response data:", data);
	return data as IUser;
};

export const updateUser = async (
	id: string,
	body: { username?: string; password?: string }
): Promise<IUser> => {
	console.log("updateUser called with:", { id, body });
	const token = localStorage.getItem("token"); // Obtén el token del localStorage

	const response = await fetch(
		`https://pf-grupo03-back.onrender.com/users/${id}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`, // Añade el token al encabezado
			},
			body: JSON.stringify(body),
		}
	);

	console.log("updateUser response:", response);

	if (!response.ok) {
		const errorMessage = await response.text();
		console.error("updateUser error:", errorMessage);
		throw new Error(
			`Failed to update user: ${response.status} - ${errorMessage}`
		);
	}

	const data = await response.json();
	console.log("updateUser response data:", data);
	return data as IUser;
};

// Eliminar usuario por ID
export const deleteUser = async (id: string): Promise<void> => {
	const token = localStorage.getItem("token"); // Obtén el token del localStorage

	const response = await fetch(
		`https://pf-grupo03-back.onrender.com/users/${id}`,
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`, // Añade el token al encabezado
			},
		}
	);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(
			`Error al eliminar el usuario: ${response.status} - ${errorMessage}`
		);
	}

	console.log("Usuario eliminado:", id);
};

// Buscar usuario por email
export const fetchUserByEmail = async (email: string): Promise<IUser> => {
	const token = localStorage.getItem("token"); // Obtén el token del localStorage

	const response = await fetch(
		`https://pf-grupo03-back.onrender.com/users/getByEmail/${encodeURIComponent(
			email
		)}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`, // Añade el token al encabezado
			},
		}
	);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(
			`Error buscando usuario: ${response.status} - ${errorMessage}`
		);
	}

	const data = await response.json();
	return data as IUser;
};

export async function updateProfileImage(
	userId: string,
	imageFile: File
): Promise<void> {
	const token = localStorage.getItem("token"); // Obtén el token del localStorage
	const formData = new FormData();
	formData.append("profileImage", imageFile); // 'profileImage' debe coincidir con el nombre que espera tu backend

	const response = await fetch(
		`https://tu-api.com/users/image-profile/${userId}`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`, // Añade el token al encabezado
			},
			body: formData,
		}
	);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(
			`Failed to upload profile image: ${response.status} - ${errorMessage}`
		);
	}

	console.log("Imagen de perfil actualizada exitosamente.");
}
