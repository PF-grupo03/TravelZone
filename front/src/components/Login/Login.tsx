"use client";
import { validatedateLoginForm } from "@/helpers/formValidation";
import { LoginErrorProps, SignInResponse } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import GoogleLoginButton from "../GoogleLoginButton/GoogleLoginButton";
import { UserContext } from "@/context/userContext";
import Swal from "sweetalert2"; // Importa SweetAlert2

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
      Swal.fire({
        icon: "error",
        title: "¡Errores en el formulario!",
        text: "Por favor, corrige los errores en el formulario.",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const result: SignInResponse = await signIn(signinValues);

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "¡Inicio de sesión exitoso!",
          text: result.message,
          confirmButtonText: "OK",
          confirmButtonColor: "#FF6B00", // Color naranja
        });
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: result.message,
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "Ocurrió un error. Por favor, intenta de nuevo.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center mt-16 mb-16 sm:flex-row sm:justify-center">
      <div className="w-full max-w-full sm:max-w-md flex flex-col bg-white p-8 shadow-lg rounded-lg sm:rounded-l-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <p className="text-gray-600 text-center mb-8">
          Inicia sesión para acceder a tu cuenta de Travel Zone
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
              Contraseña:
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
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">
                Recuérdame
              </label>
            </div>
            <a href="#" className="text-red-500">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded"
            >
              Iniciar sesión
            </button>
            <GoogleLoginButton />
          </div>
        </form>
        <p className="text-center text-gray-600 mt-4">
          ¿No tienes una cuenta?{" "}
          <Link href="/register" className="text-red-500">
            Regístrate
          </Link>
        </p>
      </div>

      <div className="w-full md:w-96 mt-6 sm:mt-0 max-md:hidden">
        <img
          src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1725552322/SingIn-SingUp/sozouj4oqnznhqhombo2.jpg"
          alt="Resort"
          className="w-full rounded-lg sm:rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default Login;
