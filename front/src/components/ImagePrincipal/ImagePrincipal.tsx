import React from "react";

const ImagePrincipal = () => {
	return (
		<div className="w-[1800px] h-[678px] bg-cover bg-center bg-[url('/Principal.png')] m-10 rounded-2xl flex flex-col items-center justify-around ">

		<div className=" h-[678px] bg-cover bg-center bg-[url('/Principal.png')] rounded-2xl  flex-col items-center justify-around flex w-[calc(100%+220px)] relative left-[-110px]">

			<div className="flex flex-col items-center mt-44">
				<h1 className="text-6xl text-white ">¡Todo el turismo, está aquí!</h1>
				<h2 className="text-3xl text-gray-300 text-opacity-80">
					explora sin limites, vive cada destino
				</h2>
			</div>
			<div className="bg-white w-[650px] h-24 rounded-2xl flex items-center justify-center">
				<div className="flex  items-center">
					<img src="/Symbol.png" alt="" />
					<input
						type="text"
						placeholder="¿Qué destino buscas?"
						className=" mx-4 p-4 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-500  placeholder-black placeholder-opacity-70 placeholder:text-xl placeholder:bg-center text-center"
					/>
					<button className=" w-60 h-14 bg-orange-500 text-white px-4 py-2 rounded-lg ml-2">
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImagePrincipal;
