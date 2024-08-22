"use client";

import Card from "../Card";

const CardGrid = () => {
  const cardsData = [
    {
      title: "Renta de propiedad",
      description:
        "Ofrecemos las mejores propiedades en renta a los precios más competitivos del mercado.¡Contáctanos hoy y descubre cómo podemos hacer realidad tu próximo hogar!",
      imageUrl:
        "https://media.admagazine.com/photos/618a62732f01962557ac4065/master/w_1600%2Cc_limit/80238.jpg",
    },
    {
      title: "Avistamiento de aves",
      description:
        "Ofrecemos las mejores propiedades en renta a los precios más competitivos del mercado.¡Contáctanos hoy y descubre cómo podemos hacer realidad tu próximo hogar!",
      imageUrl:
        "https://topadventure.com/img/2021/02/24/consejos_observacion_aves_ropa.jpg?__scale=c:transparent,w:480,h:319,t:3",
    },
    {
      title: "Pesca deportiva",
      description:
        "Ofrecemos las mejores propiedades en renta a los precios más competitivos del mercado.¡Contáctanos hoy y descubre cómo podemos hacer realidad tu próximo hogar!",
      imageUrl: "https://prensa.cba.gov.ar/wp-content/uploads/2021/11/1-4.jpg",
    },
    {
      title: "Renta de carros",
      description:
        "Ofrecemos las mejores propiedades en renta a los precios más competitivos del mercado.¡Contáctanos hoy y descubre cómo podemos hacer realidad tu próximo hogar!",
      imageUrl:
        "https://media.kasperskydaily.com/wp-content/uploads/sites/87/2015/05/05201736/rentacar-featured.jpg",
    },
  ];

  return (
    <div>
      <h2 className="mt-24 mb-6">Servicios extras...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
