"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/context/userContext";

const Navbar = () => {
  const { isLogged, logout } = useContext(UserContext);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Logo.png" className="h-12" alt="Turobelix Logo" />
        </a>
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <a href="#" className="text-gray-900 hover:text-blue-700 inter">
            Tours
          </a>
          <a href="#" className="text-gray-900 hover:text-blue-700 inter">
            Vuelos
          </a>
          <a href="#" className="text-gray-900 hover:text-blue-700 inter">
            Alquileres
          </a>
          {isLogged ? (
            <div className="relative">
              <button
                type="button"
                className="text-gray-900 hover:text-blue-700 inter"
                onClick={toggleUserMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3 0-6 1.3-6 4v1h12v-1c0-2.7-3-4-6-4z"
                  ></path>
                </svg>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <Link href="/dashboard/profile">
                    <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                      Profile
                    </button>
                  </Link>
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/register"
                className="text-gray-900 hover:text-blue-700 inter"
              >
                Sign up
              </Link>
              <button
                type="button"
                className="text-white bg-[#EB662B] hover:bg-[#cc541f] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-l-full rounded-r-full text-sm px-4 py-2 text-center dark:bg-[#EB662B] dark:hover:bg-[#cc541f] dark:focus:ring-orange-800"
              >
                Log in
              </button>
            </>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
