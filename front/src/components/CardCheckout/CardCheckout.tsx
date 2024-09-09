"use client";
import React, { useContext } from "react";
import BookingContext from "@/context/BookingContext";
import ProceedToPaymentButton from "../ButtonPayment/ProceedToPaymentButton";

const CardCheckout = () => {
	const { adults, kids, extraServices, totalPrice } =
		useContext(BookingContext);

	// Cálculo de IVA (13%) solo si el precio es mayor o igual a 200
	const iva = totalPrice < 200.0 ? 0 : totalPrice * 0.13;
	const totalConIva = totalPrice + iva;

	return (
		<div className="w-full space-y-6 lg:mt-0 lg:max-w-xs xl:max-w-md">
			<div className="flow-root">
				<div className="mt-40 divide-y divide-gray-200 dark:divide-gray-800">
					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
							Subtotal
						</dt>
						<dd className="text-base font-medium text-gray-900 dark:text-white">
							${totalPrice.toFixed(2)}
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
						<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
							IVA (13%)
						</dt>
						<dd className="text-base font-medium text-gray-900 dark:text-white">
							${iva.toFixed(2)}
						</dd>
					</dl>

					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-bold text-gray-900 dark:text-white">
							Total
						</dt>
						<dd className="text-base font-bold text-gray-900 dark:text-white">
							${totalConIva.toFixed(2)}
						</dd>
					</dl>
				</div>
			</div>

			<div className="space-y-3">
				<ProceedToPaymentButton />

				<p className="text-sm font-normal text-gray-500 dark:text-gray-400">
					One or more items in your cart require an account.{" "}
					<a
						href="#"
						title="Sign in or create an account now"
						className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
					>
						Sign in or create an account now
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default CardCheckout;