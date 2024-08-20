import Image from "next/image";

function Pulpo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative w-full max-w-4xl h-[600px]">
      <div className="absolute top-[28%] left-[33%] transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/Imagenes Pulpo/Logo.jpeg" alt="Travel Agency Logo" width={300} height={300} className="w-80 h-80" />
        </div>

        <div className="absolute top-[13%] left-[38%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full">
            <Image src="/Imagenes Pulpo/Pesca.jpg" alt="Pesca Deportiva" width={64} height={64} className="w-16 h-16 rounded-full" />
            <span className="text-lg font-semibold">Pesca deportiva</span>
          </div>
        </div>

        <div className="absolute top-[30%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full">
            <Image src="/Imagenes Pulpo/Aves.jpg" alt="Avistamiento de Aves" width={64} height={64} className="w-16 h-16 rounded-full" />
            <span className="text-lg font-semibold">Avistamiento de aves</span>
          </div>
        </div>

        <div className="absolute top-[60%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full">
            <Image src="/Imagenes Pulpo/Vuelo.jpg" alt="Vuelos" width={64} height={64} className="w-16 h-16 rounded-full" />
            <span className="text-lg font-semibold">Vuelos</span>
          </div>
        </div>

        <div className="absolute top-[85%] left-[38%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full">
            <Image src="/Imagenes Pulpo/Alojamiento.jpg" alt="Alojamientos" width={64} height={64} className="w-16 h-16 rounded-full" />
            <span className="text-lg font-semibold">Alojamientos</span>
          </div>
        </div>

        <div className="absolute top-[60%] left-[5%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full">
            <Image src="/Imagenes Pulpo/Diseño2.jpg" alt="Diseño Sonrisa" width={64} height={64} className="w-16 h-16 rounded-full" />
            <span className="text-lg font-semibold">Diseño de Sonrisa</span>
          </div>
        </div>

        <div className="absolute top-[30%] left-[5%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center space-x-2 p-4 bg-gray-100 rounded-full">
            <Image src="/Imagenes Pulpo/Renta.jpg" alt="Renta de Carros" width={64} height={64} className="w-16 h-16 rounded-full" />
            <span className="text-lg font-semibold">Renta de carros</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pulpo;
