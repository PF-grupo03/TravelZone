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
		<div className="-mx-[110px] flex flex-col">
			<div className="my-16 flex flex-col items-center justify-center w-full bg-slate-200 min-w-20">
				<div className="flex justify-center space-x-6 h-full mt-6 max-w-full overflow-hidden mx-10">
					<img
						src={image}
						alt={`${title} image 1`}
						className="h-96 w-full  object-contain"
					/>
					<img
						src={image2}
						alt={`${title} image 2`}
						className="h-96 w-full  object-contain"
					/>
					<img
						src={image3}
						alt={`${title} image 3`}
						className="h-96 w-full  object-contain"
					/>
				</div>
				<div className="flex my-20 items-center text-center justify-evenly">
					<div>
						<h1 className="text-4xl font-bold mb-4">{title}</h1>
						<p className="text-black text-opacity-50">{description}</p>
					</div>
				</div>
			</div>
			<TarjetaPage title={title} description2={description2} price={price} />
		</div>
	);
};

export default PaqueteDetalle;
