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
      const data = await postSignin(credentials);
      if (data.token) {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", data.token);
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
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
