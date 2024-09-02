"use client";

import TarjetaPage from "../armatupaquete";

const PaqueteDetalle = ({
	id,
	image,
	image2,
	image3,
	title,
	description,
	description2,
	price,
	location,
	duration,
	stock,
	categories,
}) => {
	return (
		<div className="flex flex-col">
			<div className="my-16 flex flex-col items-center justify-center w-full bg-slate-200 min-w-20">
				<div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-6 h-full mt-6 max-w-full overflow-hidden mx-10">
					<img
						src={image}
						alt={`${title} image 1`}
						className="h-64 w-full lg:h-96 lg:w-1/3 object-contain"
					/>
					<img
						src={image2}
						alt={`${title} image 2`}
						className="h-64 w-full lg:h-96 lg:w-1/3 object-contain"
					/>
					<img
						src={image3}
						alt={`${title} image 3`}
						className="h-64 w-full lg:h-96 lg:w-1/3 object-contain"
					/>
				</div>
				<div className="flex flex-col">
					<div className="flex flex-col my-20 items-center text-center lg:flex-row lg:justify-evenly">
						<div>
							<h1 className="text-2xl lg:text-4xl font-bold mb-4">{title}</h1>
							<p className="text-black text-opacity-50">{description}</p>
						</div>
					</div>
					<TarjetaPage
						title={title}
						description2={description2}
						price={price}
					/>
				</div>
			</div>
		</div>
	);
};

export default PaqueteDetalle;
