"use client";

import { getUserOrders, postSignin, postSignup } from "@/lib/fetchUser";
import {
  ILoginUser,
  IOrderResponse,
  IUser,
  IUsercontextType,
  IUserResponse,
} from "@/types";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<IUsercontextType>({
  user: null,
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
  signIn: async () => false,
  signUp: async () => false,
  getOrders: async () => {},
  orders: [],
  logout: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Partial<IUserResponse> | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [orders, setOrders] = useState<IOrderResponse[]>([]);

  const signUp = async (user: Omit<IUser, "id">) => {
    try {
      const data = await postSignup(user);
      if (data.id) {
        signIn({ email: user.email, password: user.password });
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signIn = async (credentials: ILoginUser) => {
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
    } catch (error) {
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
