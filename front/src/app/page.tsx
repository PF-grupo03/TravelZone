import CardGrid from "@/components/CardGrid/CardGrid";
import Carousel from "@/components/Carrousel";
import ImagePrincipal from "@/components/ImagePrincipal/ImagePrincipal";
import MasVisitados from "@/components/Masvisitados/MasVisitados";
import Pulpo from "@/components/pulpo";

export default function Home() {
  return (
    <>
      <ImagePrincipal />
      <Pulpo />
      <MasVisitados />
      <Carousel />
      <CardGrid />
    </>
  );
}
