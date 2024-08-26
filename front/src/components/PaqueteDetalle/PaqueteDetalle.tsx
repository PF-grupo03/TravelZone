"use client";

import CurrentPaquete from "@/app/armatupaquete/page";
import TarjetaPage from "@/app/armatupaquete/page";
import { PaqueteDetalleProps } from "@/types";

const PaqueteDetalle: React.FC<PaqueteDetalleProps> = ({
	id,
	image1,
	image2,
	image3,
	title,
	description,
	description2,
	price,
}) => {
	return (
		<div className="-mx-[110px]">
			<div className=" my-16 bg-slate-200 flex flex-col items-center justify-center w-full  ">
				<div className="flex justify-center space-x-6 h-full mt-6 ">
					<img src={image1} alt={`${title} image 1`} className="h-96 w-full " />
					<img
						src={image2}
						alt={`${title} image 2`}
						className="h-96 w-full  "
					/>
					<img src={image3} alt={`${title} image 3`} className="h-96 w-full " />
				</div>
				<div className="flex my-20 items-center text-center justify-evenly">
					<div>
						<h1 className="text-4xl font-bold mb-4">{title}</h1>
						<p className=" text-black text-opacity-50">{description}</p>
					</div>
				</div>
			</div>
			<TarjetaPage
				id={id}
				image1={image1}
				image2={image2}
				image3={image3}
				description={description}
				title={title}
				description2={description2}
				price={price}
			/>
		</div>
	);

};

export default PaqueteDetalle;
