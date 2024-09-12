import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
	return (
		<div
			className="bg-cover bg-center h-64 flex flex-col sm:flex-row w-full p-4"
			style={{
				backgroundImage: 'url("https://res.cloudinary.com/dfaej4bi8/image/upload/v1726104791/Fondo3_nooybf.jpg")',
				// marginLeft: "calc(-110px + var(--margin-adjust))",
				// marginRight: "calc(-110px + var(--margin-adjust))",
				// paddingLeft: "calc(110px - var(--margin-adjust))",
				// paddingRight: "calc(110px - var(--margin-adjust))",
			}}
		>
			<div className="flex items-center justify-center w-full sm:w-1/4 h-full sm:pl-4 mb-4 sm:mb-0">
				<h1 className="transform rotate-90 text-3xl font-bold text-white leading-tight max-sm:text-sm">
				¡Viaja más allá de tu imaginación, con nuestra Agencia de Viajes!
				</h1>
			</div>
			<div className="flex flex-col justify-center items-center space-y-2 w-full sm:w-2/4 h-full text-center max-sm:text-sm">
				<h2 className="font-bold text-white">Direccion</h2>
				<p className="text-white">1080 Bicrest Ave</p>
				<p className="text-white">Miami - Florida</p>
				<p className="text-white">U.S. of America</p>
				<div className="flex justify-center space-x-4 text-white mt-4">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-facebook"></i>
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-instagram"></i>
					</a>
					<a
						href="https://youtube.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-youtube"></i>
					</a>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center space-y-2 w-full sm:w-1/4 h-full text-center sm:text-left max-sm:w-full">
				<h2 className="font-bold text-white">Contacto</h2>
				<a
					href="mailto:info@travel.com"
					className="bg-orange-600 text-white px-4 py-2 rounded-full inline-block max-sm:text-xs"
				>
					info@travel.com
				</a>
				<p className="text-white">+01 483 593 284</p>
			</div>
		</div>
	);
}
