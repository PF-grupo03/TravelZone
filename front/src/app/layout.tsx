import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/index";
import { UserProvider } from "@/context/userContext";
import "./globals.css";
import Head from "./head";

export const metadata = {
	title: "TravelZone",
	description: "TravelZone is a travel agency that offers the best packages",
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
			<body className="className flex flex-col min-h-screen">
				<UserProvider>
					<Navbar />
					<main className="flex-grow">{children}</main>
					<Footer />
				</UserProvider>
			</body>
		</html>
	);
}
