// context/BookingContext.tsx
"use client";
import { createContext, useState, ReactNode, useContext } from "react";
import { UserContext } from "./userContext"; // Importa el contexto de usuario
import Stripe from "stripe";

const stripe = new Stripe(
	"sk_test_51PsmlNRsgw4cKaffU7immScU3lAiyKXnyDWiAcDw0W4NtTiJtYyuygwMsJ0u6KanDXs6PbRyr9wwvF6S7GheHHo300GeBTdknb"
);

interface BookingContextType {
	adults: number;
	setAdults: (value: number | ((prev: number) => number)) => void;
	kids: number;
	setKids: (value: number | ((prev: number) => number)) => void;
	date: string;
	setDate: (date: string) => void;
	extraServices: {
		healthInsurance: boolean;
		medicalInsurance: boolean;
	};
	setExtraServices: (
		services:
			| { healthInsurance: boolean; medicalInsurance: boolean }
			| ((prev: { healthInsurance: boolean; medicalInsurance: boolean }) => {
					healthInsurance: boolean;
					medicalInsurance: boolean;
			  })
	) => void;
	totalPrice: number;
	setTotalPrice: (price: number) => void;
	calculateTotal: (price: number) => number;
	sendBookingData: () => Promise<void>;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
	const [adults, setAdults] = useState<number>(1);
	const [kids, setKids] = useState<number>(0);
	const [date, setDate] = useState<string>(""); // Nuevo estado para la fecha de departure
	const [extraServices, setExtraServices] = useState<{
		healthInsurance: boolean;
		medicalInsurance: boolean;
	}>({ healthInsurance: false, medicalInsurance: false });
	const [totalPrice, setTotalPrice] = useState<number>(0);

	const { user } = useContext(UserContext); // Usa el contexto de usuario

	const calculateTotal = (price: number): number => {
		const numAdults = Number(adults);
		const numKids = Number(kids);
		const basePrice = Number(price);

		let total = numAdults * 100 + numKids * 200 + basePrice;

		if (extraServices.healthInsurance) total += 220;
		if (extraServices.medicalInsurance) total += 45;

		console.log("Total price:", total);
		return total;
	};

	const sendBookingData = async (): Promise<void> => {
		const iva = totalPrice < 200.0 ? 0 : totalPrice * 0.13;
		const totalConIva = totalPrice + iva;
		const bookingData = {
			userId: "cb7316da-1453-4e99-8de5-86f8fa0669d7",
			products: [
				{
					id: "9d7d7403-0453-4e4a-b781-a95902213e99",
				},
			],
			date: "2024-11-12",
			adults: 1,
			children: 0,
			medicalInsurance: false,
			passengers: [
				{
					name: "string",
					email: "string",
					cellphone: "string",
					dni: "string",
				},
			],
		};
		try {
			const response = await fetch(
				"https://pf-grupo03-back.onrender.com/orders",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(bookingData),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to send booking data");
			}

			const data = await response.json();
			console.log("Booking data sent successfully:", data);

			const sessionId = data.sessionId;
			const session = await stripe.checkout.sessions.retrieve(sessionId);
			window.location.href = session.url;
		} catch (error) {
			console.error("Error sending booking data:", error);
		}
	};

	return (
		<BookingContext.Provider
			value={{
				adults,
				setAdults,
				kids,
				setKids,
				date,
				setDate, // Proveedor de la nueva función setDate
				extraServices,
				setExtraServices,
				totalPrice,
				setTotalPrice,
				calculateTotal,
				sendBookingData,
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingContext;
