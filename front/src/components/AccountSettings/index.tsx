import React from "react";
import { IUserResponse } from "@/types";

interface AccountSettingsProps {
  user: IUserResponse | null;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ user }) => {
  if (!user) {
    return <div>Loading user data...</div>;
  }
  return (
    <div className="bg-white p-6 shadow-md rounded-md mb-6">
      <div className="flex items-center mb-4">
        <div>
          <h2>{user?.user?.username || "Username unavailable"}</h2>
          <p className="text-gray-600">
            {user?.user?.email || "Username unavailable"}
          </p>
          <p className="text-gray-600">
            {user?.user?.phone || "Username unavailable"}
          </p>
        </div>
      </div>
      <div>
        <label className="block mb-2">Cambiar Contraseña</label>
        <input
          type="password"
          className="border p-2 w-full rounded-md"
          placeholder="Nueva contraseña"
        />
      </div>
    </div>
  );
};

export default AccountSettings;
