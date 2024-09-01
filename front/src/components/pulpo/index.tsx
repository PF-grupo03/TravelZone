"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Pulpo() {
	return (
		<div className="flex flex-col items-center bg-white mb-40 lg:flex-row lg:my-10 lg:min-h-full">
			<div className="w-full ">
				<div className="flex justify-center mb-8 lg:mb-0 max-lg:w-2/3 max-lg:justify-end">
					<Image
						src="/Imagenes Pulpo/Logo.jpeg"
						alt="Travel Agency Logo"
						width={300}
						height={300}
						className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 "
					/>
				</div>

				<div className="flex flex-col space-y-4">
					<div className="flex justify-center items-center">
						<div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
							<Image
								src="/Imagenes Pulpo/Pesca.jpg"
								alt="Pesca Deportiva"
								width={300}
								height={300}
								className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
							/>
							<span className="text-base sm:text-lg font-semibold w-full">
								Pesca deportiva
							</span>
						</div>
					</div>

					<div className="flex justify-center items-center">
						<div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
							<Image
								src="/Imagenes Pulpo/Aves.jpg"
								alt="Avistamiento de Aves"
								width={1200}
								height={800}
								className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
							/>
							<span className="text-base sm:text-lg font-semibold w-full">
								Avistamiento de aves
							</span>
						</div>
					</div>

					<div className="flex justify-center items-center ">
						<div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
							<Image
								src="/Imagenes Pulpo/Vuelo.jpg"
								alt="Pesca Deportiva"
								width={300}
								height={300}
								className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
							/>
							<span className="text-base sm:text-lg font-semibold w-full">
								Vuelos
							</span>
						</div>
					</div>

					<div className="flex justify-center items-center">
						<div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
							<Image
								src="/Imagenes Pulpo/Alojamiento.jpg"
								alt="Alojamientos"
								width={1200}
								height={800}
								className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
							/>
							<span className="text-base sm:text-lg font-semibold w-full">
								Alojamientos
							</span>
						</div>
					</div>

					<div className="flex justify-center items-center">
						<div className="flex items-center justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
							<Image
								src="/Imagenes Pulpo/Diseño2.jpg"
								alt="Diseño Sonrisa"
								width={1200}
								height={800}
								className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
							/>
							<span className="text-base sm:text-lg font-semibold w-full">
								Diseño de Sonrisa
							</span>
						</div>
					</div>

					<div className="flex justify-center items-center">
						<div className="flex items-center  justify-center space-x-2 p-4 w-1/4 bg-gray-100 rounded-full hover:scale-105 duration-300 hover:bg-orange-400 max-lg:w-2/3">
							<Image
								src="/Imagenes Pulpo/Renta.jpg"
								alt="Renta de Carros"
								width={1200}
								height={800}
								className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
							/>
							<span className="text-base sm:text-lg font-semibold w-full">
								Renta de carros
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pulpo;
