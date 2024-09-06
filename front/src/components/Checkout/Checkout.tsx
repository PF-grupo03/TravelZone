"use client";
import React, { useState } from "react";

const Checkout = () => {
	const [showForm, setShowForm] = useState(true);
	const [paymentMethod, setPaymentMethod] = useState("credit-card"); // Controlar el método de pago seleccionado

	const toggleForm = () => {
		setShowForm(!showForm);
	};

	const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPaymentMethod(e.target.id); // Cambia el método de pago basado en el id del input
	};

	return (
		<div className="text-left">
			<ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
				<li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
					<span className="mt-20 mb-10 flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
						Checkout
					</span>
				</li>
			</ol>
			<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
				Delivery Details
			</h2>

			<section className="bg-white py-8 antialiased dark:bg-gray-900">
				<div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
					<button
						type="button"
						className="mb-4 w-full rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-primary-600"
						onClick={toggleForm}
					>
						Payment details
					</button>

					{showForm && (
						<form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
							<div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
								<div className="min-w-0 flex-1 space-y-8">
									<div className="space-y-4">
										<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
											<div>
												<label
													htmlFor="your_name"
													className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
												>
													Your name
												</label>
												<input
													type="text"
													id="your_name"
													className="block w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-primary-500"
													placeholder="Bonnie Green"
													required
												/>
											</div>

											<div>
												<label
													htmlFor="your_email"
													className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
												>
													Your email*
												</label>
												<input
													type="email"
													id="your_email"
													className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
													placeholder="name@TravelZone.com"
													required
												/>
											</div>

											<div>
												<label
													htmlFor="select-country-input-3"
													className="block text-sm font-medium text-gray-900 dark:text-white"
												>
													Country*
												</label>
												<select
													id="select-country-input-3"
													className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
												>
													<option selected>United States</option>
													<option value="AS">Australia</option>
													<option value="FR">France</option>
													<option value="ES">Spain</option>
													<option value="UK">United Kingdom</option>
												</select>
											</div>

											<div>
												<label
													htmlFor="select-city-input-3"
													className="block text-sm font-medium text-gray-900 dark:text-white"
												>
													City*
												</label>
												<input
													placeholder="New York"
													className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
												/>
											</div>

											<div>
												<label
													htmlFor="phone-input-3"
													className="block text-sm font-medium text-gray-900 dark:text-white"
												>
													Phone Number*
												</label>
												<input
													type="text"
													id="phone-input"
													className="block w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
													placeholder="123-456-7890"
													required
												/>
											</div>

											<div>
												<label
													htmlFor="company_name"
													className="block text-sm font-medium text-gray-900 dark:text-white"
												>
													Company name
												</label>
												<input
													type="text"
													id="company_name"
													className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
													placeholder="Travel Zone"
													required
												/>
											</div>

											<div>
												<label
													htmlFor="vat_number"
													className="block text-sm font-medium text-gray-900 dark:text-white"
												>
													VAT number
												</label>
												<input
													type="text"
													id="vat_number"
													className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
													placeholder="DE42313253"
													required
												/>
											</div>
										</div>
									</div>

									<div className="space-y-4">
										<h3 className="my-10 text-xl font-semibold text-gray-900 dark:text-white">
											Payment
										</h3>

										<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
											<div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
												<div className="flex items-start">
													<div className="flex h-5 items-center">
														<input
															id="credit-card"
															aria-describedby="credit-card-text"
															type="radio"
															name="payment-method"
															value="credit-card"
															checked={paymentMethod === "credit-card"} // Controlar con el estado
															onChange={handlePaymentChange} // Función para manejar el cambio
															className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
														/>
													</div>

													<div className="ms-4 text-sm">
														<label
															htmlFor="credit-card"
															className="font-medium leading-none text-gray-900 dark:text-white"
														>
															Credit Card
														</label>
														<p
															id="credit-card-text"
															className="mt-1 text-gray-500 dark:text-gray-400"
														>
															Pay with Visa or Mastercard.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					)}
				</div>
			</section>
		</div>
	);
};

export default Checkout;
