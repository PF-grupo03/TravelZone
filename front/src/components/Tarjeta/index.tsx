// components/BookingCard.tsx
"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import DatePickerValue from "../Calendar/Calendar";
import BookingContext from "@/context/BookingContext";

interface BookingCardProps {
	price: number;
	productId: string; // Nueva propiedad para el ID del producto
}

const BookingCard = ({ price, productId }: BookingCardProps) => {
	const {
		adults,
		setAdults,
		kids,
		setKids,
		medicalInsurance,
		setMedicalInsurance,
		calculateTotal,
		setTotalPrice,
		setSelectedProductId, // Usar la función setSelectedProductId del contexto
	} = useContext(BookingContext);

	const [localTotal, setLocalTotal] = useState<number>(calculateTotal(price));

	useEffect(() => {
		setLocalTotal(calculateTotal(price));
	}, [adults, kids, medicalInsurance, price]);

	const handleBookNow = () => {
		setTotalPrice(localTotal);
		setSelectedProductId(productId); // Establecer el ID del producto en el contexto
	};

	const handleAdultChange = (increment: number) => {
		setAdults((prev) => Math.max(1, prev + increment));
	};

	const handleMedicalInsuranceChange = () => {
		setMedicalInsurance((prev: boolean) => !prev);
	};

	const handleKidsChange = (increment: number) => {
		setKids((prev) => Math.max(0, prev + increment));
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
						Booking Form
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
							>
								-
							</button>
							<span className="mx-2">{adults}</span>
							<button
								onClick={() => handleAdultChange(1)}
								className="bg-gray-200 px-2"
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
							>
								-
							</button>
							<span className="mx-2">{kids}</span>
							<button
								onClick={() => handleKidsChange(1)}
								className="bg-gray-200 px-2"
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
								onChange={() => handleMedicalInsuranceChange()}
							/>
							Medical Insurance ($45)
						</label>
					</div>
				</div>

				<Link href="/checkout" onClick={handleBookNow}>
					<button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg font-semibold">
						BOOK NOW FOR ${localTotal}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default BookingCard;
