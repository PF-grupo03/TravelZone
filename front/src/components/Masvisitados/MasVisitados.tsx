import React from "react";

const MasVisitados = () => {
	return (

		<div className="bg-stone-200 h-[500px] w-full">

		<div className="bg-stone-200 h-[500px] w-[calc(100%+220px)] relative left-[-110px]">

			<div className="max-w-[800px] mx-auto  ">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold mt-11">Destinos más visitados</h2>
					<h3 className="text-blue-500 cursor-pointer">Ver todos</h3>
				</div>
				<div className="grid grid-cols-4 grid-rows-2 gap-4 max-h-[310px] mt-11">
					<img
						src="/Francia.png"

						src="/Mas visitados/Francia.png"

						alt="París"
						className="col-start-1 row-start-1 w-full h-full object-cover rounded-lg shadow-lg"
					/>

					<img

						src="/Argentina.png"
						src="/Mas visitados/Argentina.png"

						alt="Argentina"
						className="col-start-2 row-start-1 row-span-2 w-full h-full object-cover rounded-lg shadow-lg"
					/>

					<img

						src="/Italia.png"
						src="/Mas visitados/Italia.png"
						alt="Roma"
						className="col-start-3 row-start-1 col-span-2 w-full h-full object-cover rounded-lg shadow-lg"
					/>

					<img

						src="/Sudafrica.png"

						src="/Mas visitados/Sudafrica.png"

						alt="Sudáfrica"
						className="col-start-3 row-start-2 w-full h-full object-cover rounded-lg shadow-lg"
					/>

					<img
						src="/Japon.png"

						src="/Mas visitados/Japon.png"

						alt="Japón"
						className="col-start-4 row-start-2 w-full h-auto object-cover rounded-lg shadow-lg"
					/>

					<img
						src="/España.png"

						src="/Mas visitados/España.png"

						alt="España"
						className="col-start-1 row-start-2 w-full h-full object-cover rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</div>
	);
};

export default MasVisitados;
