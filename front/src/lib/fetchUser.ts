import { ILoginUser, IUser } from "@/types";

export const postSignup = async (user: Omit<IUser,"id">) => {
    const response = await fetch("http://localhost:3001/users/register", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
     },
    body: JSON.stringify (user), } );
    const data = await response.json();
    return data;

}
    export const postSignin = async (credentials: ILoginUser) => {
        const response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
         },
        body: JSON.stringify (credentials), } );
         console.log("response",response)
        return response;

    }

    export const getUserOrders = async (token: string) => {
        const response = await fetch("http://localhost:3001/users/orders", {
          headers: {
            Authorization: `${token}`,
          },
        });
        
        const data = await response.json();
        return data;
      };
      
    