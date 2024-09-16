import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  return (
    <Link
      href="https://web.whatsapp.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 mb-10 mr-5"
    >
      <FaWhatsapp size={40} />
    </Link>
  );
};

export default WhatsAppButton;
