"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
	return (
		<button onClick={() => signIn("google")}>
			className="my-4 flex items-center justify-center w-full p-2 border
			border-gray-300 rounded-md bg-white hover:bg-gray-100"
			<img src="google-icon.svg" alt="Google icon" className="w-5 h-5 mr-2" />
			<span className="text-sm font-medium text-gray-700">
				Iniciar sesión con Google
			</span>
		</button>
	);
}