"use client";

import { useSession } from "next-auth/react";

import { getUserOrders, postSignin, postSignup } from "@/lib/fetchUser";
import {
	ILoginUser,
	IOrderResponse,
	IUser,
	IUsercontextType,
	IUserResponse,
	SignInResponse,
	SignUpResponse,
} from "@/types";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<IUsercontextType>({
	user: null,
	setUser: () => {},
	isLogged: false,
	setIsLogged: () => {},
	signIn: async () => ({ success: false, message: "" }),
	signUp: async () => ({ success: false, message: "" }),
	getOrders: async () => {},
	orders: [],
	logout: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const { data: session, status } = useSession();
	const [user, setUser] = useState<Partial<IUserResponse> | null>(null);
	const [isLogged, setIsLogged] = useState(false);
	const [orders, setOrders] = useState<IOrderResponse[]>([]);

	useEffect(() => {
		console.log("Session data:", session);
		if (status === "authenticated" && session?.user) {
			const userResponse: Partial<IUserResponse> = {
				user: session.user,
				login: true,
				token: session.accessToken as string,
			};
			setUser(userResponse);
			setIsLogged(true);
		} else {
			setUser(null);
			setIsLogged(false);
		}
	}, [session, status]);

	const signUp = async (user: Omit<IUser, "id">): Promise<SignUpResponse> => {
		try {
			const data = await postSignup(user);
			if (data.user && data.user.id) {
				await signIn({ email: user.email, password: user.password });
				return {
					success: true,
					message: "Account created successfully!",
					user: data.user,
				};
			} else {
				return { success: false, message: "Failed to create account." };
			}
		} catch (error) {
			return {
				success: false,
				message: error.message || "An error occurred. Please try again.",
			};
		}
	};

	const signIn = async (credentials: ILoginUser): Promise<SignInResponse> => {
		try {
			const response = await postSignin(credentials);
			if (response.token) {
				setUser(response);
				localStorage.setItem("user", JSON.stringify(response));
				localStorage.setItem("token", response.token);
				return { success: true, message: "Login successful!" };
			} else {
				return { success: false, message: "Invalid credentials." };
			}
		} catch (error: any) {
			return {
				success: false,
				message: error.message || "An error occurred. Please try again.",
			};
		}
	};

	const getOrders = async () => {
		try {
			const token: string = localStorage.getItem("token") || "";
			const data = await getUserOrders(token);
			setOrders(data);
		} catch (error) {
			return [];
		}
	};

	const logout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		setUser(null);
		setIsLogged(false);
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setIsLogged(true);
		}
	}, [user]);

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			setUser(JSON.parse(user));
			return;
		}
		setUser(null);
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				isLogged,
				setIsLogged,
				signIn,
				signUp,
				orders,
				getOrders,
				logout,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
