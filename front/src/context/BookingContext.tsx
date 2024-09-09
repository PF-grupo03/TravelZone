// context/BookingContext.tsx
"use client";
import { createContext, useState, ReactNode, useContext } from "react";
import { UserContext } from "./userContext";
import Stripe from "stripe";
import { BookingContextType } from "@/types";

const stripe = new Stripe(
	"sk_test_51PsmlNRsgw4cKaffU7immScU3lAiyKXnyDWiAcDw0W4NtTiJtYyuygwMsJ0u6KanDXs6PbRyr9wwvF6S7GheHHo300GeBTdknb"
);

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
	const [adults, setAdults] = useState<number>(1);
	const [kids, setKids] = useState<number>(0);
	const [date, setDate] = useState<string>(""); // Nuevo estado para la fecha de departure
	const [medicalInsurance, setMedicalInsurance] = useState<boolean>(false);
	const [totalPrice, setTotalPrice] = useState<number>(0);

	const { user } = useContext(UserContext);
	console.log(user);

	const calculateTotal = (price: number): number => {
		const numAdults = Number(adults);
		const numKids = Number(kids);
		const pricePerKid = price / 2;

		let total = numAdults * price + numKids * pricePerKid;

		if (medicalInsurance) total += 45;

		console.log("Total price:", total);
		return total;
	};
	const sendBookingData = async (): Promise<void> => {
		const iva = totalPrice < 200.0 ? 0 : totalPrice * 0.13;
		const totalConIva = totalPrice + iva;
		const bookingData = {
			userId: user.user.id,
			products: [
				{
					id: "f8091c30-36ae-4a5b-95e9-e76499f51b26",
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
				throw new Error("error al enviar los datos de la reserva");
			}

			const data = await response.json();
			console.log("Booking data sent successfully:", data, user);

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
				medicalInsurance,
				setMedicalInsurance,
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
