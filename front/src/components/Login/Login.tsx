"use client";
import { validatedateLoginForm } from "@/helpers/formValidation";
import { LoginErrorProps, SignInResponse } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import GoogleLoginButton from "../GoogleLoginButton/GoogleLoginButton";
import { UserContext } from "@/context/userContext";

const Login = () => {
  const router = useRouter();
  const { signIn } = useContext(UserContext);
  const [signinValues, setSigninValues] = useState({
    email: "",
    password: "",
  });
  const [errorUser, setErrorUser] = useState<LoginErrorProps>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSigninValues({ ...signinValues, [name]: value });
    setErrorUser(validatedateLoginForm({ ...signinValues, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validatedateLoginForm(signinValues);
    if (Object.keys(errors).length > 0) {
      setErrorUser(errors);
      alert("Please correct the errors in the form.");
      return;
    }

    try {
      const result: SignInResponse = await signIn(signinValues);

      if (result.success) {
        alert(result.message);
        router.push("/");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center mt-16 mb-16 sm:flex-row sm:justify-center">
      <div className="w-full max-w-full sm:max-w-md flex flex-col bg-white p-8 shadow-lg rounded-lg sm:rounded-l-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <p className="text-gray-600 text-center mb-8">
          Login to access your Travel Zone account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email-address"
              className="block text-gray-700 font-bold"
            >
              Email:
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={signinValues.email}
              required
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errorUser.email && (
              <p className="text-red-500 text-sm">{errorUser.email}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 font-bold">
              Password:
            </label>
            <div className="">
              <input
                id="password"
                name="password"
                type="password"
                value={signinValues.password}
                required
                onChange={handleChange}
                placeholder="************"
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errorUser.password && (
                <p className="text-red-500 text-sm">{errorUser.password}</p>
              )}
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-red-500">
              Forgot Password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded"
            >
              Login
            </button>
            <GoogleLoginButton />
          </div>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-red-500">
            Sign up
          </Link>
        </p>
      </div>

      <div className="w-full md:w-96 mt-6 sm:mt-0 max-md:hidden">
        <img
          src="/AvionLogin.jpg"
          alt="Resort"
          className="w-full rounded-lg sm:rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default Login;
