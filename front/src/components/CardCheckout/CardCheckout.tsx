// components/CardCheckout.tsx
"use client";
import React, { useContext } from "react";
import BookingContext from "@/context/BookingContext";

const CardCheckout = () => {
	const { adults, kids, extraServices, totalPrice } =
		useContext(BookingContext);

	return (
		<div className=" w-full space-y-6 lg:mt-0 lg:max-w-xs xl:max-w-md">
			<div className="flow-root">
				<div className="mt-40 divide-y divide-gray-200 dark:divide-gray-800">
					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
							Subtotal
						</dt>
						<dd className="text-base font-medium text-gray-900 dark:text-white">
							${totalPrice} {/* Ajusta el precio base según sea necesario */}
						</dd>
					</dl>

					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
							Adults
						</dt>
						<dd className="text-base font-medium text-gray-900 dark:text-white">
							{adults}
						</dd>
					</dl>

					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
							Kids
						</dt>
						<dd className="text-base font-medium text-gray-900 dark:text-white">
							{kids}
						</dd>
					</dl>

					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
							Health Insurance
						</dt>
						<dd className="text-base font-medium text-gray-900 dark:text-white">
							{extraServices.healthInsurance ? "Yes" : "No"}
						</dd>
					</dl>

					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
							Medical Insurance
						</dt>
						<dd className="text-base font-medium text-gray-900 dark:text-white">
							{extraServices.medicalInsurance ? "Yes" : "No"}
						</dd>
					</dl>

					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-bold text-gray-900 dark:text-white">
							Total
						</dt>
						<dd className="text-base font-bold text-gray-900 dark:text-white">
							${totalPrice} {/* Ajusta el precio base según sea necesario */}
						</dd>
					</dl>
				</div>
			</div>

			<div className="space-y-3">
				<button
					type="submit"
					className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>
					Proceed to Payment
				</button>

				<p className="text-sm font-normal text-gray-500 dark:text-gray-400">
					One or more items in your cart require an account.
					<a
						href="#"
						title=""
						className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
					>
						Sign in or create an account now.
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default CardCheckout;
