import Filters from "@/components/Filters";
import TourList from "@/components/TourList";
import React from "react";

const App = () => {
  const tours = [
    {
      id: 1,
      image: "/product.png",
      image2: "/product.png",
      image3: "/product.png",
      location: "Rome, Italy",
      title: "Colosseum Guided Tour with Skip-the-Line",
      description:
        "Explore the iconic Colosseum with a professional guide and skip the long lines.",
      description2:
        "Explore the iconic Colosseum with a professional guide and skip the long lines.",
      price: "127",
      duration: "1 Day",
    },
    {
      id: 2,
      image: "/product2.png",
      image2: "/product.png",
      image3: "/product.png",
      location: "New York, USA",
      title: "Statue of Liberty and Ellis Island Tour",
      description:
        "Visit two of New York’s most famous landmarks with an expert guide.",
      description2:
        "Explore the iconic Colosseum with a professional guide and skip the long lines.",
      price: "63",
      duration: "Half Day",
    },
    {
      id: 3,
      image: "/product3.png",
      image2: "/product.png",
      image3: "/product.png",
      location: "Kyoto, Japan",
      title: "Fushimi Inari Taisha Shrine Morning Tour",
      description:
        "Experience the serene beauty of Kyoto’s famous shrine in the early morning.",
      description2:
        "Explore the iconic Colosseum with a professional guide and skip the long lines.",
      price: "40",
      duration: "3 Hours",
    },
    {
      id: 4,
      image: "/product4.png",
      image2: "/product.png",
      image3: "/product.png",
      location: "Sydney, Australia",
      title: "Sydney Opera House Guided Tour",
      description:
        "Go behind the scenes at the world-famous Sydney Opera House with a local guide.",
      description2:
        "Explore the iconic Colosseum with a professional guide and skip the long lines.",
      price: "75",
      duration: "2 Hours",
    },
    {
      id: 5,
      image: "/product.png",
      discount: "5% OFF",
      featured: false,
      location: "Rio de Janeiro, Brazil",
      title: "Christ the Redeemer and Sugarloaf Mountain Tour",
      description:
        "Witness the breathtaking views from two of Rio’s most famous landmarks.",
      rating: "4.7",
      reviews: 180,
      oldPrice: "$80",
      price: "$76",
      duration: "1 Day",
    },
    {
      id: 6,
      image: "/product.png",
      discount: "20% OFF",
      featured: true,
      location: "Cairo, Egypt",
      title: "Pyramids of Giza and Sphinx Day Tour",
      description:
        "Discover the ancient wonders of Egypt with a guided tour of the Pyramids of Giza.",
      rating: "4.9",
      reviews: 400,
      oldPrice: "$200",
      price: "$160",
      duration: "1 Day",
    },
    {
      id: 7,
      image: "/product.png",
      discount: "30% OFF",
      featured: false,
      location: "Maui, Hawaii",
      title: "Maui Helicopter Tour with Ocean Views",
      description:
        "Fly over the stunning landscapes of Maui, including its famous beaches and volcanoes.",
      rating: "4.8",
      reviews: 250,
      oldPrice: "$300",
      price: "$210",
      duration: "2 Hours",
    },
  ];

  return (
    <div className="flex justify-center p-8 bg-gray-100 mt-16">
      <aside className="w-1/4 mr-6">
        <Filters />
      </aside>
      <main className="w-3/4">
        <h1 className="text-2xl font-bold mb-6">¡Personaliza Tu Aventura!</h1>
        <TourList tours={tours} />
      </main>
    </div>
  );
};

export default App;
