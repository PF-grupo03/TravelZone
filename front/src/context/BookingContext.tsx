// context/BookingContext.tsx
"use client";
import { createContext, useState, ReactNode, useContext } from "react";
import { UserContext, UserProvider } from "./userContext";
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
	const [selectedProductId, setSelectedProductId] = useState<string>("");
	const [participants, setParticipants] = useState([{}]);

	const updateParticipants = (newAdults, newKids) => {
		const totalParticipants = newAdults + newKids;
		const newParticipants = Array(totalParticipants).fill({});
		setParticipants(newParticipants);
	};

	const { user } = useContext(UserContext); // Usar useContext para obtener el valor de UserContext

	const calculateTotal = (price: number): number => {
		const numAdults = Number(adults);
		const numKids = Number(kids);
		const pricePerKid = price / 2;

		let total = numAdults * price + numKids * pricePerKid;

		if (medicalInsurance) total += 45;

		return total;
	};

	const sendBookingData = async (): Promise<void> => {
		const iva = totalPrice < 200.0 ? 0 : totalPrice * 0.13;
		const totalConIva = totalPrice + iva;
		const bookingData = {
			userId: user.user.id,
			products: [
				{
					id: selectedProductId,
				},
			],
			date: date,
			adults: adults,
			children: kids,
			medicalInsurance: medicalInsurance,
			passengers: participants,
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
			console.log("Booking data sent successfully:", data, user, "hola");

			const sessionId = data.sessionId;
			const session = await stripe.checkout.sessions.retrieve(sessionId);
			window.location.href = session.url;
		} catch (error) {
			console.error("Error sending booking data:", error);
		}
		console.log(bookingData);
	};

	return (
		<BookingContext.Provider
			value={{
				adults,
				setAdults,
				kids,
				setKids,
				participants,
				setParticipants,
				updateParticipants,
				date,
				setDate, // Proveedor de la nueva función setDate
				medicalInsurance,
				setMedicalInsurance,
				totalPrice,
				setTotalPrice,
				calculateTotal,
				sendBookingData,
				selectedProductId,
				setSelectedProductId,
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingContext;
