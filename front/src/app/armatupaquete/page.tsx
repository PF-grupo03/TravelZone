"use client";
import React, { useState } from "react";
import BookingCard from "@/components/Tarjeta";
import paquetesDatailToPreload from "@/helpers/paquetesDetailToPreload";
import TourMap from "@/components/Maps";
import { PaqueteDetalleProps } from "@/types";

const TarjetaPage: React.FC<PaqueteDetalleProps> = ({
	price,
	title,
	description2,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0); //

	const handleNext = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex + 1) % paquetesDatailToPreload.length
		);
	};

	return (
		<div className="flex flex-col justify-center items-center mt-24 ">
			<div className="flex justify-center px-4 w-2/3">
				<div className="text-left w-full md:w-1/2 mr-24">
					<h2 className="text-2xl font-bold text-gray-800">{title}</h2>
					<p className="mt-4 text-gray-700 text-justify">{description2}</p>
				</div>
				<div>
					<BookingCard price={price} />
				</div>
			</div>

			<button
				className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-lg"
				onClick={handleNext}
			>
				Next
			</button>
			<div className="min-h-screen bg-gray-100 p-8 mt-12 w-full max-w-5xl px-4">
				<TourMap />
			</div>
		</div>
	);
};

export default TarjetaPage;
