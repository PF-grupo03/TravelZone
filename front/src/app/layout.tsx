import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/index";
import { UserProvider } from "@/context/userContext";
import "./globals.css";
import Head from "./head";
import { BookingProvider } from "@/context/BookingContext";
import DatePickerValue from "@/components/Calendar/Calendar";

export const metadata = {
	title: "Travel Zone",
	description:
		"Travel Zone is a travel agency that provides the best services.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<Head />
			</head>
			<body className="flex flex-col min-h-screen">
				<UserProvider>
					<BookingProvider>
						<Navbar />
						<main className="flex-grow">{children}</main>
						<Footer />
					</BookingProvider>
				</UserProvider>
			</body>
		</html>
	);
}
