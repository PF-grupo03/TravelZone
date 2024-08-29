"use client"; // Add this line if using Next.js 13 or higher with app directory

import { UserContext } from "@/context/userContext";
import { validatedateRegisterForm } from "@/helpers/formValidation";
import { IRegisterUser, RegisterErrorProps, SignUpResponse } from "@/types";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

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
	const [errorUser, setErrorUser] = useState<RegisterErrorProps | null>({
		name: "",
		username: "",
		phone: null,
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
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const errors = validatedateRegisterForm(user);
		if (Object.keys(errors).length > 0) {
			setErrorUser(errors);
			alert("Check your info");
			return;
		}

		try {
			const result: SignUpResponse = await signUp(user);

			if (result.success) {
				alert(result.message);
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
				alert(result.message);
			}
		} catch (error) {
			console.error("Error during sign-up:", error);
			alert("An error occurred while creating the account.");
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
		<div className="flex justify-center mt-24 mb-32 items-start">
			<div className="w-full max-w-md h-[100vh] flex flex-col bg-white p-9 rounded-lg shadow-lg">
				<h1 className="text-2xl font-bold mb-1 text-center">Register</h1>
				<br />
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="name" className="block text-gray-700 font-bold">
							Full Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={signupValues.name}
							onChange={handleChange}
							placeholder="Full Name"
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
							Username:
						</label>
						<input
							type="text"
							id="username"
							name="username"
							value={signupValues.username}
							onChange={handleChange}
							placeholder="Username"
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
							Phone Number:
						</label>
						<input
							type="number"
							id="phone"
							name="phone"
							value={signupValues.phone}
							onChange={handleChange}
							placeholder="Phone Number"
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
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={signupValues.email}
							onChange={handleChange}
							placeholder="Email"
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
							Password:
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={signupValues.password}
							onChange={handleChange}
							placeholder="Password"
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
							className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 `}
						/>
					</div>
					<div>
						<input type="checkbox" id="terms" required />
						<label htmlFor="terms" className="ml-2 text-gray-700">
							I agree to the{" "}
							<a href="#" className="text-red-500">
								Terms and Privacy Policy
							</a>
						</label>
					</div>
					<button
						type="submit"
						className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
					>
						Create account
					</button>
				</form>
				{message && (
					<p className="text-green-500 text-sm mt-2 text-center">{message}</p>
				)}
				<p className="text-center text-gray-700 mt-4">
					Already have an account?{" "}
					<a href="#" className="text-red-500">
						Login
					</a>
				</p>
			</div>
			<div className="w-1/3 h-full ">
				<img
					src="/register.jpg"
					alt="Register"
					className="rounded-r-lg w-full h-screen"
				/>
			</div>
		</div>
	);
}

export default Register;
