import React from "react";
import { IUserResponse } from "@/types";

interface AccountSettingsProps {
  user: Partial<IUserResponse> | null; // Changed to Partial<IUserResponse>
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ user }) => {
  if (!user) {
    return <div>Loading user data...</div>;
  }

  const { username, email, phone } = user.user || {}; // Safely destructuring

  return (
    <div className="bg-white p-6 shadow-md rounded-md mb-6">
      <div className="flex items-center mb-4">
        <div>
          <h2>{username || "Username unavailable"}</h2>
          <p className="text-gray-600">{email || "Email unavailable"}</p>
          <p className="text-gray-600">{phone || "Phone number unavailable"}</p>
        </div>
      </div>
      <div>
        <label className="block mb-2">Change Password</label>
        <input
          type="password"
          className="border p-2 w-full rounded-md"
          placeholder="New password"
        />
      </div>
    </div>
  );
};

export default AccountSettings;
