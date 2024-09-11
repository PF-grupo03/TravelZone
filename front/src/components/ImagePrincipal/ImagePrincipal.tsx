import React from "react";

const ImagePrincipal = () => {
	return (
		<div className="h-[100vh] bg-cover bg-center bg-[url('/Principal.png')] rounded-2xl flex-col items-center justify-around flex w-full relative overflow-x-hidden">
			<div className="flex flex-col items-center mt-44 max-sm:mt-24">
				<h1 className="text-6xl text-white font-jua max-sm:text-3xl">
					¡Todo el turismo, está aquí!
				</h1>
				<h2 className="text-3xl text-gray-300 text-opacity-80 font-jua max-sm:text-2xl">
					explora sin límites, vive cada destino
				</h2>
			</div>
			<div className="bg-slate-50 w-[650px] h-24 rounded-2xl flex items-center justify-center max-sm:w-[20rem] max-sm:h-14 max-sm:text-sm">
				<div className="flex items-center">
					<img src="/Symbol.png" alt="" />
					<input
						type="text"
						placeholder="¿Qué destino buscas?"
						className="mx-4 p-4 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-black placeholder-opacity-70 placeholder:text-xl text-center max-sm:text-xs max-sm:placeholder:text-sm max-sm:p-2"
					/>
					<button className="w-60 h-14 bg-orange-500 text-white px-4 py-2 rounded-lg ml-2 max-sm:w-20 max-sm:h-10 max-sm:py-1">
						Buscar
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImagePrincipal;
