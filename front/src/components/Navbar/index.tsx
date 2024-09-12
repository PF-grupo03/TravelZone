"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/userContext";

const Navbar = () => {
	const { isLogged, logout } = useContext(UserContext);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleUserMenu = () => {
		setIsUserMenuOpen(!isUserMenuOpen);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};
	return (
		<nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 max-sm:w-screen">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
				<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img
						src="https://res.cloudinary.com/dfaej4bi8/image/upload/v1726111289/liupdky5x3x9i8kcovtt.png"
						className="h-12"
						alt="Turobelix Logo"
					/>
				</a>
				<div className="md:hidden flex items-center">
					<button
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-sticky"
						aria-expanded={isMobileMenuOpen}
						onClick={toggleMobileMenu}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					className={`${
						isMobileMenuOpen ? "block" : "hidden"
					} absolute top-16 left-0 w-full bg-gray-50 text-black p-4 transition-transform duration-300 ease-in-out md:hidden z-50`}
					id="navbar-sticky"
				>
					<ul className="flex flex-col space-y-4">
						<li>
							<Link
								href="/products?activities=tours"
								className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
							>
								Tours
							</Link>
						</li>
						<li>
							<Link
								href="/products"
								className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
							>
								Paquetes
							</Link>
						</li>
						<li>
							<Link
								href="/products?rentals=transporte"
								className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
							>
								Alquileres
							</Link>
						</li>
						{isLogged ? (
							<li className="relative">
								<button
									type="button"
									className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
									onClick={toggleUserMenu}
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3 0-6 1.3-6 4v1h12v-1c0-2.7-3-4-6-4z"
										></path>
									</svg>
								</button>
								{isUserMenuOpen && (
									<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
										<Link href="/dashboard">
											<button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
												Perfil
											</button>
										</Link>
										<button
											className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
											onClick={logout}
										>
											Cerrar sesión
										</button>
									</div>
								)}
							</li>
						) : (
							<>
								<li>
									<Link
										href="/register"
										className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
									>
										Registrarse
									</Link>
								</li>
								<li>
									<Link
										href="/login"
										className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
									>
										<button
											type="button"
											className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
										>
											Iniciar Sesion
										</button>
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
				<div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
					<Link
								href="/products?activities=tours"
								className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
							>
								Tours
							</Link>
					<Link
						href="/products"
						className="text-gray-900 hover:text-blue-700 inter"
					>
						Paquetes
					</Link>
					<Link
								href="/products?rentals=transporte"
								className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
							>
								Alquileres
							</Link>
					{isLogged ? (
						<div className="relative">
							<button
								type="button"
								className="text-gray-900 hover:text-blue-700 inter"
								onClick={toggleUserMenu}
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3 0-6 1.3-6 4v1h12v-1c0-2.7-3-4-6-4z"
									></path>
								</svg>
							</button>
							{isUserMenuOpen && (
								<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
									<Link href="/dashboard">
										<button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
											Perfil
										</button>
									</Link>
									<button
										className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
										onClick={logout}
									>
										Cerrar Sesion
									</button>
								</div>
							)}
						</div>
					) : (
						<>
							<Link
								href="/register"
								className="text-gray-900 hover:text-blue-700 inter"
							>
								Registro
							</Link>
							<Link
								href="/login"
								className="text-gray-900 hover:text-blue-700 inter"
							>
								<button
									type="button"
									className="text-white bg-[#EB662B] hover:bg-[#cc541f] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-l-full rounded-r-full text-sm px-4 py-2 text-center dark:bg-[#EB662B] dark:hover:bg-[#cc541f] dark:focus:ring-orange-800"
								>
									Iniciar Sesion
								</button>
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);

	return (
		<nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 max-sm:w-screen">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
				<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src="/Logo.png" className="h-12" alt="Turobelix Logo" />
				</a>
				<div className="md:hidden flex items-center">
					<button
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-sticky"
						aria-expanded={isMobileMenuOpen}
						onClick={toggleMobileMenu}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					className={`${
						isMobileMenuOpen ? "block" : "hidden"
					} absolute top-16 left-0 w-full bg-gray-50 text-black p-4 transition-transform duration-300 ease-in-out md:hidden z-50`}
					id="navbar-sticky"
				>
					<ul className="flex flex-col space-y-4">
						<li>
							<a
								href="#"
								className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
							>
								Tours
							</a>
						</li>
						<li>
							<Link
								href="/products"
								className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
							>
								Paquetes
							</Link>
						</li>
						<li>
							<a
								href="#"
								className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
							>
								Alquileres
							</a>
						</li>
						{isLogged ? (
							<li className="relative">
								<button
									type="button"
									className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
									onClick={toggleUserMenu}
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3 0-6 1.3-6 4v1h12v-1c0-2.7-3-4-6-4z"
										></path>
									</svg>
								</button>
								{isUserMenuOpen && (
									<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
										<Link href="/dashboard/">
											<button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
												Perfil
											</button>
										</Link>
										<button
											className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
											onClick={logout}
										>
											Cerrar sesión
										</button>
									</div>
								)}
							</li>
						) : (
							<>
								<li>
									<Link
										href="/register"
										className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
									>
										Registrarse
									</Link>
								</li>
								<li>
									<Link
										href="/login"
										className="block text-lg font-medium hover:text-blue-500 transition-colors duration-300"
									>
										<button
											type="button"
											className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
										>
											Iniciar Sesion
										</button>
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
				<div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
					<a href="#" className="text-gray-900 hover:text-blue-700 inter">
						Tours
					</a>
					<Link
						href="/products"
						className="text-gray-900 hover:text-blue-700 inter"
					>
						Paquetes
					</Link>
					<a href="#" className="text-gray-900 hover:text-blue-700 inter">
						Alquileres
					</a>
					{isLogged ? (
						<div className="relative">
							<button
								type="button"
								className="text-gray-900 hover:text-blue-700 inter"
								onClick={toggleUserMenu}
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3 0-6 1.3-6 4v1h12v-1c0-2.7-3-4-6-4z"
									></path>
								</svg>
							</button>
							{isUserMenuOpen && (
								<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
									<Link href="/dashboard">
										<button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
											Perfil
										</button>
									</Link>
									<button
										className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
										onClick={logout}
									>
										Cerrar Sesion
									</button>
								</div>
							)}
						</div>
					) : (
						<>
							<Link
								href="/register"
								className="text-gray-900 hover:text-blue-700 inter"
							>
								Registro
							</Link>
							<Link
								href="/login"
								className="text-gray-900 hover:text-blue-700 inter"
							>
								<button
									type="button"
									className="text-white bg-[#EB662B] hover:bg-[#cc541f] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-l-full rounded-r-full text-sm px-4 py-2 text-center dark:bg-[#EB662B] dark:hover:bg-[#cc541f] dark:focus:ring-orange-800"
								>
									Iniciar Sesion
								</button>
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
