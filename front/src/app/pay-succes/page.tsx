import React from "react";

const ConfirmacionPago = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="bg-white p-16 rounded-xl shadow-lg max-w-2xl w-full text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					className="w-32 h-32 mx-auto text-green-500"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<h1 className="text-4xl font-bold mt-8">¡Pago recibido con éxito!</h1>
				<p className="text-xl text-gray-600 mt-4">
					Gracias por tu compra. Hemos recibido tu pago y estamos procesando tu
					pedido.
				</p>
				<div className="mt-10">
					<a
						href="/"
						className="inline-block bg-green-500 text-white text-xl px-8 py-4 rounded-xl shadow hover:bg-green-600 transition"
					>
						Volver al inicio
					</a>
				</div>
			</div>
		</div>
	);
};

export default ConfirmacionPago;
