import React from "react";
import Link from "next/link";

const BookingCard = ({ price }) => {
	return (
		<div className="flex justify-end w-full h-full">
			<div className="bg-white p-8 shadow-lg rounded-lg w-[400px]">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<h1 className="text-gray-500">Price</h1>
						<h2 className="text-2xl font-bold">From</h2>
					</div>
					<p className="text-4xl font-bold text-gray-800">${price}</p>
				</div>

				<div className="mt-4 flex justify-between">
					<button className="text-lg font-semibold border-b-2 border-teal-500 pb-1 mr-4">
						Booking Form
					</button>
					<button className="text-lg font-semibold text-gray-500">
						Enquiry Form
					</button>
				</div>

				<div className="mt-4 text-gray-500">
					<div>Date</div>
					<div className="font-medium text-gray-800">03-13-2024</div>
				</div>

				<div className="mt-4">
					<div className="flex justify-between">
						<span className="text-gray-800">Adults</span>
						<div className="flex items-center">
							<button className="bg-gray-200 px-2">-</button>
							<span className="mx-2">1</span>
							<button className="bg-gray-200 px-2">+</button>
						</div>
					</div>
					<div className="text-gray-500 text-sm">Over 18 (${price})</div>
				</div>

				<div className="mt-4">
					<div className="flex justify-between">
						<span className="text-gray-800">Children</span>
						<div className="flex items-center">
							<button className="bg-gray-200 px-2">-</button>
							<span className="mx-2">0</span>
							<button className="bg-gray-200 px-2">+</button>
						</div>
					</div>
					<div className="text-gray-500 text-sm">Under 18 ($200)</div>
				</div>

				<div className="mt-4">
					<span className="text-gray-800">Extra Services</span>
					<div className="flex flex-col mt-2">
						<label className="flex items-center">
							<input type="checkbox" className="mr-2" />
							Health Insurance ($220)
						</label>
						<label className="flex items-center mt-2">
							<input type="checkbox" className="mr-2" />
							Medical Insurance ($45)
						</label>
					</div>
				</div>
				<Link href="/checkout">
					<button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg font-semibold">
						BOOK NOW FOR ${price}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default BookingCard;
