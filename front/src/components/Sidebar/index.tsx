import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

const Sidebar = () => {
  const { user } = useContext(UserContext);

  // Verificación para asegurar que user?.user esté definido
  if (!user?.user) {
    return null; // O un componente de loading, si prefieres
  }

  return (
    <div className="mt-10">
      <div className="w-64 bg-white shadow-lg">
        <ul className="p-4">
          <li className="mb-4">
            <Link href="/dashboard/profile">Ajuste de cuenta</Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/orders">Tus órdenes de compra</Link>
          </li>
          {/* Solo mostrar el control de usuarios si el usuario tiene el rol de "admin" */}
          {user.user.isAdmin && (
            <li className="mb-4">
              <Link href="/dashboard/admin">Control de usuarios</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
