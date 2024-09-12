// profile/Sidebar.tsx
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

const Sidebar = () => {
  const { user } = useContext(UserContext);

  if (!user?.user) {
    return null;
  }

  return (
    <div className="w-64 min-h-full bg-white shadow-lg">
      <div className="p-4 mt-20">
        <ul>
          <li className="mb-4">
            <Link
              href="/dashboard/"
              className="text-gray-700 hover:text-blue-600"
            >
              Ajuste de cuenta
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/dashboard/orders"
              className="text-gray-700 hover:text-blue-600"
            >
              Tus órdenes de compra
            </Link>
          </li>
          {user.user.isAdmin && (
            <li className="mb-4">
              <Link
                href="/dashboard/admin"
                className="text-gray-700 hover:text-blue-600"
              >
                Control de usuarios
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
