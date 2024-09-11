import React from "react";

const ErrorPago = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="bg-white p-16 rounded-xl shadow-lg max-w-2xl w-full text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					className="w-32 h-32 mx-auto text-red-500"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
				<h1 className="text-4xl font-bold mt-8 text-red-500">
					¡Error en el pago!
				</h1>
				<p className="text-xl text-gray-600 mt-4">
					Lo sentimos, no pudimos completar tu pago. Por favor, intenta de nuevo
					o contacta con soporte.
				</p>
				<div className="mt-10">
					<a
						href="/"
						className="inline-block bg-red-500 text-white text-xl px-8 py-4 rounded-xl shadow hover:bg-red-600 transition"
					>
						Volver al inicio
					</a>
				</div>
			</div>
		</div>
	);
};

export default ErrorPago;
