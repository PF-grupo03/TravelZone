// context/BookingContext.tsx
"use client";
import { createContext, useState, ReactNode, useEffect } from "react";

interface BookingContextType {
	adults: number;
	setAdults: (value: number | ((prev: number) => number)) => void;
	kids: number;
	setKids: (value: number | ((prev: number) => number)) => void;
	selectedDate: string;
	setSelectedDate: (date: string) => void;
	extraServices: {
		healthInsurance: boolean;
		medicalInsurance: boolean;
	};
	totalPrice: number;
	setTotalPrice: (price: number) => void;
	setExtraServices: (
		services:
			| { healthInsurance: boolean; medicalInsurance: boolean }
			| ((prev: { healthInsurance: boolean; medicalInsurance: boolean }) => {
					healthInsurance: boolean;
					medicalInsurance: boolean;
			  })
	) => void;
	calculateTotal: (price: number) => number;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }) => {
	const [adults, setAdults] = useState<number>(1);
	const [kids, setKids] = useState<number>(0);
	const [selectedDate, setSelectedDate] = useState<string>("03-12-2024");
	const [extraServices, setExtraServices] = useState<{
		healthInsurance: boolean;
		medicalInsurance: boolean;
	}>({
		healthInsurance: false,
		medicalInsurance: false,
	});
	const [totalPrice, setTotalPrice] = useState<number>(0);

	const calculateTotal = (price: number) => {
		let total = adults * price + kids * 200;
		if (extraServices.healthInsurance) total += 220;
		if (extraServices.medicalInsurance) total += 45;
		return total;
	};

	useEffect(() => {
		setTotalPrice(calculateTotal(100)); // Usa el precio base correcto aquí
	}, [adults, kids, extraServices]);

	return (
		<BookingContext.Provider
			value={{
				adults,
				setAdults,
				kids,
				setKids,
				selectedDate,
				setSelectedDate,
				extraServices,
				setExtraServices,
				totalPrice,
				setTotalPrice,
				calculateTotal,
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingContext;
