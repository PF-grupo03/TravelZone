"use client";

import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Usar el hook useRouter
import DatePickerValue from "../Calendar/Calendar";
import BookingContext from "@/context/BookingContext";

interface BookingCardProps {
	price: number;
	productId: string;
}

const BookingCard = ({ price, productId }: BookingCardProps) => {
	const router = useRouter(); // Obtener el router
	const {
		adults,
		setAdults,
		kids,
		date,
		dateError,
		setKids,
		medicalInsurance,
		setMedicalInsurance,
		calculateTotal,
		setTotalPrice,
		setSelectedProductId,
		updateParticipants,
	} = useContext(BookingContext);

	const [localTotal, setLocalTotal] = useState<number>(calculateTotal(price));

	useEffect(() => {
		setLocalTotal(calculateTotal(price));
	}, [adults, kids, price, calculateTotal]);

	const handleBookNow = () => {
		if (!date || dateError) {
			alert(
				dateError ||
					"Por favor, selecciona una fecha antes de proceder con la reserva."
			);
			return;
		}
		setTotalPrice(localTotal);
		setSelectedProductId(productId);
		router.push("/checkout"); // Redirigir programáticamente
	};

	const handleAdultChange = (increment: number) => {
		const newAdults = Math.max(1, adults + increment);
		setAdults(newAdults);
		updateParticipants(newAdults, kids);
	};

	const handleKidsChange = (increment: number) => {
		const newKids = Math.max(0, kids + increment);
		setKids(newKids);
		updateParticipants(adults, newKids);
	};

	const handleMedicalInsuranceChange = () => {
		setMedicalInsurance((prev: boolean) => !prev);
	};

	return (
		<div className="flex justify-center w-full h-full">
			<div className="bg-white p-8 shadow-lg rounded-lg w-[400px]">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<h1 className="text-gray-500">Price</h1>
						<h2 className="text-2xl font-bold">From</h2>
					</div>
					<p className="text-4xl font-bold text-gray-800">${localTotal}</p>
				</div>

				<div className="mt-4 flex justify-center">
					<button className="text-lg font-semibold border-b-2 border-teal-500 pb-1 mr-4">
						Formulario de reserva
					</button>
				</div>

				<div className="my-10 flex justify-center">
					<DatePickerValue />
				</div>

				<div className="mt-4">
					<div className="flex justify-between">
						<span className="text-gray-800">Adults</span>
						<div className="flex items-center">
							<button
								onClick={() => handleAdultChange(-1)}
								className="bg-gray-200 px-2"
								aria-label="Decrement adults"
							>
								-
							</button>
							<span className="mx-2">{adults}</span>
							<button
								onClick={() => handleAdultChange(1)}
								className="bg-gray-200 px-2"
								aria-label="Increment adults"
							>
								+
							</button>
						</div>
					</div>
					<div className="text-gray-500 text-sm">Over 18 (${price})</div>
				</div>

				<div className="mt-4">
					<div className="flex justify-between">
						<span className="text-gray-800">Kids</span>
						<div className="flex items-center">
							<button
								onClick={() => handleKidsChange(-1)}
								className="bg-gray-200 px-2"
								aria-label="Decrement kids"
							>
								-
							</button>
							<span className="mx-2">{kids}</span>
							<button
								onClick={() => handleKidsChange(1)}
								className="bg-gray-200 px-2"
								aria-label="Increment kids"
							>
								+
							</button>
						</div>
					</div>
					<div className="text-gray-500 text-sm">Under 18 (${price / 2})</div>
				</div>

				<div className="mt-4">
					<span className="text-gray-800">Extra Services</span>
					<div className="flex flex-col mt-2">
						<label className="flex items-center mt-2">
							<input
								type="checkbox"
								className="mr-2"
								checked={medicalInsurance}
								onChange={handleMedicalInsuranceChange}
								aria-label="Toggle medical insurance"
							/>
							Seguro médico ($45)
						</label>
					</div>
				</div>

				<button
					className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg font-semibold"
					onClick={handleBookNow}
				>
					RESERVA AHORA PARA ${localTotal}
				</button>
			</div>
		</div>
	);
};

export default BookingCard;
