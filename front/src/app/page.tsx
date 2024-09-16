import CardGrid from "@/components/CardGrid/CardGrid";
import Carousel from "@/components/Carrousel";
import ImagePrincipal from "@/components/ImagePrincipal/ImagePrincipal";
import MasVisitados from "@/components/Masvisitados/MasVisitados";
import Pulpo from "@/components/pulpo";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <ImagePrincipal />
      <Pulpo />
      <MasVisitados />
      <Carousel />
      <CardGrid />
      <WhatsAppButton />
    </>
  );
}
