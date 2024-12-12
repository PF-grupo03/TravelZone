import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
	return (
		<div
			className="bg-cover bg-center  h-64 flex w-[calc(100%+220px)] relative left-[-110px]"
			style={{ backgroundImage: 'url("/Imagenes Pulpo/Fondo3.jpeg")' }}
		>
			<div className="flex items-center justify-center w-1/4 h-full pl-4">
				<h1 className="transform rotate-90 text-3xl font-bold text-white leading-tight">
					Travel beyond your imagination, with our Travel Agency!
				</h1>
			</div>
			<div className="flex flex-col justify-center items-center space-y-2 w-2/4 h-full">
				<h2 className="font-bold text-white">Address</h2>
				<p className="text-white">1080 Bicrest Ave</p>
				<p className="text-white">Miami - Florida</p>
				<p className="text-white">U.S. of America</p>
				<div className="flex space-x-4 text-white">
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
			<div className="flex flex-col justify-center items-center space-y-2 w-1/4 h-full">
				<h2 className="font-bold text-white">Contact</h2>
				<a
					href="mailto:info@travel.com"
					className="bg-orange-600 text-white px-4 py-2 rounded-full inline-block"
				>
					info@travel.com
				</a>
				<p className="text-white">+01 483 593 284</p>
			</div>
		</div>
	);
}
