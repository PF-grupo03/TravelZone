import CardCheckout from "@/components/CardCheckout/CardCheckout";
import Checkout from "@/components/Checkout/Checkout";
import FormUsers from "@/components/FormUsers/FormUsers";
import React from "react";

const Page = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex-grow flex flex-col lg:flex-row lg:justify-evenly">
				<div className="w-auto">
					<FormUsers />
				</div>
				<CardCheckout />
			</div>
		</div>
	);
};

export default Page;
