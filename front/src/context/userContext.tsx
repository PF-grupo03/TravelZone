"use client";

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
  const [user, setUser] = useState<Partial<IUserResponse> | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [orders, setOrders] = useState<IOrderResponse[]>([]);

  const signUp = async (user: Omit<IUser, "id">): Promise<SignUpResponse> => {
    try {
      // Envía la solicitud para crear el usuario
      const data = await postSignup(user);
      console.log("Response from postSignup:", data); // Log para verificar data

      // Asegúrate de que estás accediendo a data.user.id
      if (data.user && data.user.id) {
        console.log("User created successfully:", data.user); // Log para ver el usuario completo

        console.log("User created, attempting to sign in...");
        await signIn({ email: user.email, password: user.password });

        // Devuelve un objeto de respuesta que indica éxito y el usuario creado
        return {
          success: true,
          message: "Account created successfully!",
          user: data.user,
        };
      } else {
        console.error("User creation failed, no ID returned");
        return { success: false, message: "Failed to create account." };
      }
    } catch (error) {
      console.error("Error during sign-up process:", error);
      return {
        success: false,
        message: error.message || "An error occurred. Please try again.",
      };
    }
  };

  const signIn = async (credentials: ILoginUser): Promise<SignInResponse> => {
    try {
      const response = await postSignin(credentials);
      console.log("Response from postSignin:", response);
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
      const data = await getUserOrders(); // Sin argumento
      setOrders(data);
    } catch (error) {
      console.error(error);
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
