import PaqueteDetalle from "@/components/PaqueteDetalle/PaqueteDetalle";
import paquetesDetailToPreload from "../../../helpers/paquetesDetailToPreload";

const Detail = ({ params }: { params: { detalleID: string } }) => {
  const product = paquetesDetailToPreload.find(
    (p) => p.id === Number(params.detalleID)
  );
  if (!product) {
    return <div>Product not found</div>;
  }
  return <PaqueteDetalle {...product} />;
};

export default Detail;
