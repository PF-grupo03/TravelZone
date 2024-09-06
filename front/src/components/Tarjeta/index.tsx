// components/BookingCard.tsx
"use client";

import React, { useContext } from "react";
import Link from "next/link";
import DatePickerValue from "../Calendar/Calendar";
import BookingContext from "@/context/BookingContext";

interface BookingCardProps {
	price: number;
}

const BookingCard = ({ price }: BookingCardProps) => {
	const {
		adults,
		setAdults,
		kids,
		setKids,
		selectedDate,
		setSelectedDate,
		extraServices,
		setExtraServices,
		calculateTotal,
		setTotalPrice,
	} = useContext(BookingContext);

	const handleBookNow = () => {
		setTotalPrice(calculateTotal(price));
	};
	const handleAdultChange = (increment: number) => {
		setAdults((prev) => Math.max(1, prev + increment));
	};

	const handleKidsChange = (increment: number) => {
		setKids((prev) => Math.max(0, prev + increment));
	};

	const handleServiceChange = (service: string) => {
		setExtraServices((prev) => ({
			...prev,
			[service]: !prev[service],
		}));
	};

	return (
		<div className="flex justify-center w-full h-full">
			<div className="bg-white p-8 shadow-lg rounded-lg w-[400px]">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<h1 className="text-gray-500">Price</h1>
						<h2 className="text-2xl font-bold">From</h2>
					</div>
					<p className="text-4xl font-bold text-gray-800">
						${calculateTotal(price)}
					</p>
				</div>

				<div className="mt-4 flex justify-center">
					<button className="text-lg font-semibold border-b-2 border-teal-500 pb-1 mr-4">
						Booking Form
					</button>
				</div>

				{/* Integrando DatePickerValue */}
				<div className="my-10 flex justify-center">
					<DatePickerValue />
				</div>

				{/* Mostrando la fecha seleccionada */}

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
					<div className="text-gray-500 text-sm">Under 18 ($200)</div>
				</div>

				<div className="mt-4">
					<span className="text-gray-800">Extra Services</span>
					<div className="flex flex-col mt-2">
						<label className="flex items-center">
							<input
								type="checkbox"
								className="mr-2"
								checked={extraServices.healthInsurance}
								onChange={() => handleServiceChange("healthInsurance")}
							/>
							Health Insurance ($220)
						</label>
						<label className="flex items-center mt-2">
							<input
								type="checkbox"
								className="mr-2"
								checked={extraServices.medicalInsurance}
								onChange={() => handleServiceChange("medicalInsurance")}
							/>
							Medical Insurance ($45)
						</label>
					</div>
				</div>

				<Link href="/checkout" onClick={handleBookNow}>
					<button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg font-semibold">
						BOOK NOW FOR ${calculateTotal(price)}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default BookingCard;
