"use client";
import { UserContext } from "@/context/userContext";
import { validatedateRegisterForm } from "@/helpers/formValidation";
import { IRegisterUser, RegisterErrorProps, SignUpResponse } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

function Register() {
  const { signUp } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [signupValues, setSignUpValues] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    dni: "",
  });
  const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
    name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const user: IRegisterUser = {
    name: signupValues.name,
    username: signupValues.username,
    email: signupValues.email,
    password: signupValues.password,
    phone: Number(signupValues.phone),
    dni: Number(signupValues.dni),
    isAdmin: false,
    profilePicture: "",
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validatedateRegisterForm(user);
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
      const result: SignUpResponse = await signUp(user);

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "¡Registro exitoso!",
          text: "Tu cuenta ha sido creada exitosamente.",
          confirmButtonText: "OK",
          confirmButtonColor: "#f97316", // Color naranja para el botón
        });
        setSignUpValues({
          name: "",
          username: "",
          email: "",
          phone: "",
          password: "",
          dni: "",
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
        text: "Ocurrió un error al crear la cuenta. Por favor, intenta de nuevo.",
        confirmButtonText: "OK",
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpValues({
      ...signupValues,
      [name]: value,
    });
    setErrorUser(validatedateRegisterForm({ ...user, [name]: value }));
  };

  return (
    <div className="flex flex-col h-full w-full justify-center mt-16 mb-16 sm:flex-row sm:justify-center">
      <div className="w-full sm:max-w-md flex flex-col bg-white p-8 shadow-lg rounded-lg sm:rounded-l-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Registro</h2>
        <p className="text-gray-600 text-center mb-8">
          Crea tu cuenta de Travel Zone
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Nombre Completo:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={signupValues.name}
              onChange={handleChange}
              placeholder="Nombre Completo"
              className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errorUser.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errorUser.name && (
              <p className="text-red-500 text-sm mt-1">{errorUser.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="username" className="block text-gray-700 font-bold">
              Nombre de Usuario:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={signupValues.username}
              onChange={handleChange}
              placeholder="Nombre de Usuario"
              className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errorUser.username ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errorUser.username && (
              <p className="text-red-500 text-sm mt-1">{errorUser.username}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-bold">
              Número de Teléfono:
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={signupValues.phone}
              onChange={handleChange}
              placeholder="Número de Teléfono"
              className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errorUser.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errorUser.phone && (
              <p className="text-red-500 text-sm mt-1">{errorUser.phone}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={signupValues.email}
              onChange={handleChange}
              placeholder="Correo Electrónico"
              className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errorUser.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errorUser.email && (
              <p className="text-red-500 text-sm mt-1">{errorUser.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-bold">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={signupValues.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errorUser.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errorUser.password && (
              <p className="text-red-500 text-sm mt-1">{errorUser.password}</p>
            )}
          </div>
          <div>
            <label htmlFor="dni" className="block text-gray-700 font-bold">
              DNI:
            </label>
            <input
              type="text"
              id="dni"
              name="dni"
              value={signupValues.dni}
              onChange={handleChange}
              placeholder="DNI"
              className="mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" required className="mr-2" />
            <label htmlFor="terms" className="text-gray-700">
              Acepto los{" "}
              <a href="#" className="text-red-500">
                Términos y Política de Privacidad
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
          >
            Crear cuenta
          </button>
        </form>
        {message && (
          <p className="text-green-500 text-sm mt-2 text-center">{message}</p>
        )}
        <p className="text-center text-gray-600 mt-4">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="text-red-500">
            Iniciar sesión
          </Link>
        </p>
      </div>

      <div className=" mt-6 sm:mt-0 max-lg:hidden">
        <img
          src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726111410/SingIn-SingUp/xt3x2xxmvgxkhdsxoupk.jpg"
          alt="Register"
          className="rounded-lg sm:rounded-r-lg"
        />
      </div>
    </div>
  );
}

export default Register;
