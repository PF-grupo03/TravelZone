"use client";

interface PaqueteDetalleProps {
	id: number;
	image1: string;
	image2: string;
	image3: string;
	title: string;
	description: string;
	price: number;
}

const PaqueteDetalle: React.FC<PaqueteDetalleProps> = ({
	image1,
	image2,
	image3,
	title,
	description,
	price,
}) => {
	return (
		<div className="paquete-detalle-container">
			<h1 className="title">{title}</h1>
			<div className="images">
				<img src={image1} alt={`${title} image 1`} className="image" />
				<img src={image2} alt={`${title} image 2`} className="image" />
				<img src={image3} alt={`${title} image 3`} className="image" />
			</div>
			<p className="description">{description}</p>
			<p className="price">${price}</p>
		</div>
	);
};

export default PaqueteDetalle;
