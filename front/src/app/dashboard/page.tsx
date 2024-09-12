"use client";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/userContext";
import { IUsercontextType } from "@/types";
import SignInAlert from "@/components/SignInAlert";
// import Sidebar from "@/components/Sidebar";
import AccountSettings from "@/components/AccountSettings";
import UserControl from "@/components/UserControl";

const ProfilePage = () => {
  const { isLogged, user } = useContext<IUsercontextType>(UserContext);

  useEffect(() => {
    // if (isLogged) {
    //   getOrders();
    // }
  }, [isLogged]);

  if (!isLogged) return <SignInAlert />;

  return (
    <div className="mt-14 flex min-h-screen w-full">
      {/* <Sidebar /> */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {user && <AccountSettings user={user} />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
