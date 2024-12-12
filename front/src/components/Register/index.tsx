"use client";
import React, { useState } from "react";

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
}

function Register() {
	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
	});

	const [errors, setErrors] = useState<Partial<FormData>>({});
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormData({
			...formData,
			[id]: value,
		});
	};

	const validate = () => {
		let tempErrors: Partial<FormData> = {};
		let isValid = true;

		if (!formData.firstName.trim()) {
			tempErrors.firstName = "First name is required";
			isValid = false;
		}

		if (!formData.lastName.trim()) {
			tempErrors.lastName = "Last name is required";
			isValid = false;
		}

		if (!formData.email) {
			tempErrors.email = "Email is required";
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			tempErrors.email = "Email is invalid";
			isValid = false;
		}

		if (!formData.phone) {
			tempErrors.phone = "Phone number is required";
			isValid = false;
		} else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
			tempErrors.phone = "Phone number must be in the format: 123-456-7890";
			isValid = false;
		}

		if (!formData.password) {
			tempErrors.password = "Password is required";
			isValid = false;
		} else if (formData.password.length < 6) {
			tempErrors.password = "Password must be at least 6 characters long";
			isValid = false;
		}

		if (!formData.confirmPassword) {
			tempErrors.confirmPassword = "Please confirm your password";
			isValid = false;
		} else if (formData.password !== formData.confirmPassword) {
			tempErrors.confirmPassword = "Passwords do not match";
			isValid = false;
		}

		setErrors(tempErrors);
		return isValid;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validate()) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setMessage("Registration successful!");
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					password: "",
					confirmPassword: "",
				});
			}, 2000);
		}
	};

	return (
		<div className="flex justify-center mt-24 mb-32 items-start ">
			<div className="w-full max-w-md h-screen flex flex-col bg-white p-6 rounded-l-lg shadow-lg">
				<div className=" ">
					<h1 className="text-3xl font-bold mb-4 text-center">Register</h1>
					<p className="text-gray-600 text-center mb-8">
						Please fill in the information below to create your account.
					</p>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								htmlFor="firstName"
								className="block text-gray-700 font-bold"
							>
								First Name:
							</label>
							<input
								type="text"
								id="firstName"
								value={formData.firstName}
								onChange={handleInputChange}
								placeholder="First Name"
								className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
									errors.firstName ? "border-red-500" : "border-gray-300"
								} rounded-md`}
							/>
							{errors.firstName && (
								<p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
							)}
						</div>
						<div>
							<label
								htmlFor="lastName"
								className="block text-gray-700 font-bold"
							>
								Last Name:
							</label>
							<input
								type="text"
								id="lastName"
								value={formData.lastName}
								onChange={handleInputChange}
								placeholder="Last Name"
								className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
									errors.lastName ? "border-red-500" : "border-gray-300"
								} rounded-md`}
							/>
							{errors.lastName && (
								<p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
							)}
						</div>
						<div>
							<label htmlFor="email" className="block text-gray-700 font-bold">
								Email:
							</label>
							<input
								type="email"
								id="email"
								value={formData.email}
								onChange={handleInputChange}
								placeholder="Email"
								className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
									errors.email ? "border-red-500" : "border-gray-300"
								} rounded-md`}
							/>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">{errors.email}</p>
							)}
						</div>
						<div>
							<label htmlFor="phone" className="block text-gray-700 font-bold">
								Phone Number:
							</label>
							<input
								type="text"
								id="phone"
								value={formData.phone}
								onChange={handleInputChange}
								placeholder="Phone Number"
								className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
									errors.phone ? "border-red-500" : "border-gray-300"
								} rounded-md`}
							/>
							{errors.phone && (
								<p className="text-red-500 text-sm mt-1">{errors.phone}</p>
							)}
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-gray-700 font-bold"
							>
								Password:
							</label>
							<input
								type="password"
								id="password"
								value={formData.password}
								onChange={handleInputChange}
								placeholder="Password"
								className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
									errors.password ? "border-red-500" : "border-gray-300"
								} rounded-md`}
							/>
							{errors.password && (
								<p className="text-red-500 text-sm mt-1">{errors.password}</p>
							)}
						</div>
						<div>
							<label
								htmlFor="confirmPassword"
								className="block text-gray-700 font-bold"
							>
								Confirm Password:
							</label>
							<input
								type="password"
								id="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleInputChange}
								placeholder="Confirm Password"
								className={`mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
									errors.confirmPassword ? "border-red-500" : "border-gray-300"
								} rounded-md`}
							/>
							{errors.confirmPassword && (
								<p className="text-red-500 text-sm mt-1">
									{errors.confirmPassword}
								</p>
							)}
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
							disabled={loading}
						>
							{loading ? "Creating account..." : "Create account"}
						</button>
					</form>
					{message && (
						<p className="text-green-500 text-sm mt-4 text-center">{message}</p>
					)}
					<p className="text-center text-gray-700 mt-4">
						Already have an account?{" "}
						<a href="#" className="text-red-500">
							Login
						</a>
					</p>
				</div>
			</div>
			<div className="w-1/3 h-full">
				<img
					src="Imagenes Pulpo/Register.jpg"
					alt="Register"
					className="rounded-r-lg w-full h-screen"
				/>
			</div>
		</div>
	);
}

export default Register;
