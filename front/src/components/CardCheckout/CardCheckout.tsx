import React from "react";

const CardCheckout = () => {
	return (
		<div className=" w-full space-y-6 lg:mt-0 lg:max-w-xs xl:max-w-md">
			<div className="flow-root">
				<div className="mt-40 divide-y divide-gray-200 dark:divide-gray-800">
					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
							Subtotal
						</dt>
						<dd className="text-base font-medium text-gray-900 dark:text-white">
							$250.00
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
							0
						</dd>
					</dl>

					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-normal text-gray-500 dark:text-gray-400">
							Tax
						</dt>
						<dd className="text-base font-medium text-gray-900 dark:text-white">
							$20.00
						</dd>
					</dl>

					<dl className="flex items-center justify-between gap-4 py-3">
						<dt className="text-base font-bold text-gray-900 dark:text-white">
							Total
						</dt>
						<dd className="text-base font-bold text-gray-900 dark:text-white">
							$270.00
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
