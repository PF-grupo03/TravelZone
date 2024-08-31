import React from "react";

const Checkout = () => {
	return (
		<section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 mt-10">
			<form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
				<ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
					<li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
						<span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
							<svg
								className="me-2 h-4 w-4 sm:h-5 sm:w-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								viewBox="0 0 24 24"
							></svg>
							Checkout
						</span>
					</li>
				</ol>

				<div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
					<div className="min-w-0 flex-1 space-y-8">
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
								Delivery Details
							</h2>

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
										className="block w-full rounded-lg  border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:ring-primary-500 "
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
									<div className="mb-2 flex items-center gap-2">
										<label
											htmlFor="select-country-input-3"
											className="block text-sm font-medium text-gray-900 dark:text-white"
										>
											Country*
										</label>
									</div>
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
									<div className="mb-2 flex items-center gap-2">
										<label
											htmlFor="select-city-input-3"
											className="block text-sm font-medium text-gray-900 dark:text-white"
										>
											City*
										</label>
									</div>
									<input
										placeholder="New York"
										className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
									></input>
								</div>

								<div>
									<label
										htmlFor="phone-input-3"
										className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
									>
										Phone Number*
									</label>
									<div className="flex items-center">
										<div className="relative w-full">
											<input
												type="text"
												id="phone-input"
												className="z-20 block w-full rounded-lg   border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
												placeholder="123-456-7890"
												required
											/>
										</div>
									</div>
								</div>

								<div>
									<label
										htmlFor="email"
										className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
										placeholder="name@TravelZone.com"
										required
									/>
								</div>

								<div>
									<label
										htmlFor="company_name"
										className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
									>
										Company name
									</label>
									<input
										type="text"
										id="company_name"
										className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
										placeholder="Travel Zone "
										required
									/>
								</div>

								<div>
									<label
										htmlFor="vat_number"
										className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
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
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
								Payment
							</h3>

							<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
								<div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="credit-card"
												aria-describedby="credit-card-text"
												type="radio"
												name="payment-method"
												value=""
												className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
												checked
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
												className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
											>
												Pay with your credit card
											</p>
										</div>
									</div>

									<div className="mt-4 flex items-center gap-2">
										<button
											type="button"
											className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
										>
											Delete
										</button>

										<div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

										<button
											type="button"
											className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
										>
											Edit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
						<div className="flow-root">
							<div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
								<dl className="flex items-center justify-between gap-4 py-3">
									<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
										Subtotal
									</dt>
									<dd className="text-base font-medium text-gray-900 dark:text-white">
										$8,094.00
									</dd>
								</dl>

								<dl className="flex items-center justify-between gap-4 py-3">
									<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
										Savings
									</dt>
									<dd className="text-base font-medium text-green-500">0</dd>
								</dl>

								<dl className="flex items-center justify-between gap-4 py-3">
									<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
										Store Pickup
									</dt>
									<dd className="text-base font-medium text-gray-900 dark:text-white">
										$99
									</dd>
								</dl>

								<dl className="flex items-center justify-between gap-4 py-3">
									<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
										Tax
									</dt>
									<dd className="text-base font-medium text-gray-900 dark:text-white">
										$199
									</dd>
								</dl>

								<dl className="flex items-center justify-between gap-4 py-3">
									<dt className="text-base font-bold text-gray-900 dark:text-white">
										Total
									</dt>
									<dd className="text-base font-bold text-gray-900 dark:text-white">
										$8,392.00
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
				</div>
			</form>
		</section>
	);
};

export default Checkout;
