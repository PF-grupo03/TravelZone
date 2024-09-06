"use client";
import React, { useState } from "react";

const FormUsers = () => {
	const [isParticipantFormOpen, setIsParticipantFormOpen] = useState(false);
	const [participants, setParticipants] = useState([{}]);

	const toggleParticipantForm = () => {
		setIsParticipantFormOpen(!isParticipantFormOpen);
	};

	const handleAddParticipant = () => {
		setParticipants([...participants, {}]);
	};

	const handleParticipantChange = (index, event) => {
		const { name, value } = event.target;
		const newParticipants = participants.map((participant, i) =>
			i === index ? { ...participant, [name]: value } : participant
		);
		setParticipants(newParticipants);
	};

	const handleRemoveParticipant = (index) => {
		setParticipants(participants.filter((_, i) => i !== index));
	};

	return (
		<section className="bg-white pt-9 w-[50rem] antialiased dark:bg-gray-900 mt-10">
			<form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
				<ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
					<li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
						<span className="mt-10 flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
							Information
						</span>
					</li>
				</ol>

				<div className="mt-6 sm:mt-8 lg:items-start lg:gap-12 xl:gap-16">
					<div className="min-w-0 flex-1 space-y-8">
						{/* Delivery Details */}

						{/* Participant Details */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
								Participant Details
							</h3>
							<button
								type="button"
								onClick={toggleParticipantForm}
								className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded"
							>
								{isParticipantFormOpen
									? "Hide Participants"
									: "Add Participant Details"}
							</button>

							<div
								className={`transition-all duration-300 ease-in-out mt-4 ${
									isParticipantFormOpen
										? "block" // Allows the section to grow
										: "hidden"
								}`}
							>
								<div className="overflow-auto">
									{participants.map((participant, index) => (
										<div
											key={index}
											className="mb-4 p-4 border rounded-lg bg-gray-50"
										>
											<h4 className="text-lg font-semibold mb-2">
												Participant {index + 1}
											</h4>
											<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
												<div>
													<label
														htmlFor={`participant_name_${index}`}
														className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
													>
														Name
													</label>
													<input
														type="text"
														id={`participant_name_${index}`}
														name="name"
														onChange={(e) => handleParticipantChange(index, e)}
														className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
														placeholder="Participant Name"
														required
													/>
												</div>
												<div>
													<label
														htmlFor={`participant_email_${index}`}
														className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
													>
														Email
													</label>
													<input
														type="email"
														id={`participant_email_${index}`}
														name="email"
														onChange={(e) => handleParticipantChange(index, e)}
														className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
														placeholder="participant@example.com"
														required
													/>
												</div>
												<div>
													<label
														htmlFor={`participant_cellphone_${index}`}
														className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
													>
														Cellphone
													</label>
													<input
														type="text"
														id={`participant_cellphone_${index}`}
														name="cellphone"
														onChange={(e) => handleParticipantChange(index, e)}
														className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
														placeholder="123-456-7890"
														required
													/>
												</div>
												<div>
													<label
														htmlFor={`participant_dni_${index}`}
														className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
													>
														DNI
													</label>
													<input
														type="text"
														id={`participant_dni_${index}`}
														name="dni"
														onChange={(e) => handleParticipantChange(index, e)}
														className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
														placeholder="DNI Number"
														required
													/>
												</div>
											</div>
											{/* Show the remove button only if there are more than one participant and not for the first participant */}
											{participants.length > 1 && index > 0 && (
												<button
													type="button"
													onClick={() => handleRemoveParticipant(index)}
													className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded"
												>
													Remove Participant
												</button>
											)}
										</div>
									))}

									<button
										type="button"
										onClick={handleAddParticipant}
										className="w-full bg-gray-200 hover:bg-gray-300 text-black p-2 rounded mt-4"
									>
										Add Another Participant
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Order Summary */}
					<div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
						<div className="flow-root">
							<div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
								{/* Order summary details */}
								{/* ... */}
							</div>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default FormUsers;
