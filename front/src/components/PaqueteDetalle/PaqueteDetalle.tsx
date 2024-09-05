"use client";

import TarjetaPage from "../armatupaquete";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<div className="flex flex-col items-center w-full">
			<div className="my-10 flex flex-col items-center justify-center w-full 2xl:p-16 ">
				{/* Carousel for mobile and tablet */}
				<div className="flex items-center justify-center h-full mt-6 mx-4 md:hidden w-full bg-slate-600  ">
					<Slider
						{...settings}
						className=" h-full max-w-md md:max-w-lg lg:max-w-2xl p-10"
					>
						<img
							src={image}
							alt={`${title} image 1`}
							className=" w-full object-cover aspect-[4/3] "
						/>
						<img
							src={image2}
							alt={`${title} image 2`}
							className="w-full object-cover aspect-[4/3]"
						/>
						<img
							src={image3}
							alt={`${title} image 3`}
							className="w-full object-cover aspect-[4/3]"
						/>
					</Slider>
				</div>

				{/* Fixed images for desktop */}
				<div className="hidden md:flex items-center justify-center h-full mt-6 mx-4 md:mx-10 w-full space-x-4">
					<img
						src={image}
						alt={`${title} image 1`}
						className="h-192 lg:h-[36rem] w-1/3 object-cover aspect-[4/3]"
					/>
					<img
						src={image2}
						alt={`${title} image 2`}
						className="h-192 lg:h-[36rem] w-1/3 object-cover aspect-[4/3]"
					/>
					<img
						src={image3}
						alt={`${title} image 3`}
						className="h-192 lg:h-[36rem] w-1/3 object-cover aspect-[4/3]"
					/>
				</div>

				<div className="w-full flex flex-col my-10 md:my-20 text-center px-4 md:px-10 ">
					<div>
						<h1 className="text-xl md:text-2xl font-bold mb-4">{title}</h1>
						<p className="text-sm md:text-base text-black text-opacity-50">
							{description}
						</p>
					</div>
				</div>
				<div className="w-full px-4 xl:px-10 ">
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
