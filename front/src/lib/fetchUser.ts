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
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error registering user.");
  }
  const data = await response.json();
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

export const getUserOrders = async (token: string) => {
  const response = await fetch("https://m4f.onrender.com/users/orders", {
    headers: {
      Authorization: `${token}`,
    },
  });

  const data = await response.json();
  return data;
};
