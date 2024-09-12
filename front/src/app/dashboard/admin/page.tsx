"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/userContext";
import { IUsercontextType } from "@/types";
import UserControl from "@/components/UserControl";
import Swal from "sweetalert2";

const AdminPage = () => {
  const { user, isLogged } = useContext<IUsercontextType>(UserContext);
  const router = useRouter();

  useEffect(() => {
    // Si no está logueado, redirigir al login o home
    if (!isLogged) {
      Swal.fire({
        icon: "error",
        title: "Acceso denegado",
        text: "Debes iniciar sesión para acceder a esta página.",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/");
      });
      return;
    }

    // Si no es administrador, redirigir al home
    if (user && !user?.user?.isAdmin) {
      Swal.fire({
        icon: "error",
        title: "Acceso denegado",
        text: "No tienes permisos para acceder a esta página.",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/");
      });
    }
  }, [isLogged, user, router]);

  if (!isLogged || (user && !user?.user?.isAdmin)) {
    // Mostrar un mensaje de carga o vacío mientras redirige
    return <div>Cargando...</div>;
  }

  return (
    <div className="p-6 mt-10">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <UserControl />
    </div>
  );
};

export default AdminPage;
