import React, { useContext } from "react";
import BookingContext from "@/context/BookingContext";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ProceedToPaymentButton = () => {
  const router = useRouter();
  const bookingContext = useContext(BookingContext);
  const userContext = useContext(UserContext);

  const validateParticipants = () => {
    if (!bookingContext) return false;
    for (const participant of bookingContext.participants) {
      if (
        !participant.name ||
        !participant.email ||
        !participant.cellphone ||
        !participant.dni
      ) {
        return false;
      }
    }
    return true;
  };

  const handleProceedToPayment = async () => {
    if (!userContext.isLogged) {
      await MySwal.fire({
        icon: "warning",
        title: "No estás autenticado",
        text: "Por favor, inicia sesión para proceder con el pago.",
        confirmButtonText: "Iniciar sesión",
        confirmButtonColor: "#f97316", // Color naranja para el botón
      });
      router.push("/login");
      return;
    }

    if (validateParticipants()) {
      bookingContext.sendBookingData();
      console.log("data sent:" + bookingContext);
      await MySwal.fire({
        icon: "success",
        title: "Datos enviados",
        text: "Tu reserva ha sido enviada correctamente. Procede al pago.",
        confirmButtonText: "OK",
        confirmButtonColor: "#f97316", // Color naranja para el botón
      });
    } else {
      await MySwal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos antes de proceder con el pago.",
        confirmButtonText: "OK",
        confirmButtonColor: "#f97316", // Color naranja para el botón
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleProceedToPayment}
      className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      Proceder al pago
    </button>
  );
};

export default ProceedToPaymentButton;
