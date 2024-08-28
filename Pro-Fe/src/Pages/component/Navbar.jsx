import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">Posyandu Jabung</div>

  
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-800">
            Beranda
          </a>
          <a href="/about" className="hover:text-blue-800">
            Tentang Kami
          </a>
          <a href="/dashboard" className="hover:text-blue-800">
            Dashboard
          </a>
          <a href="/contact" className="hover:text-blue-800">
            Kontak
          </a>


          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
