"use client";

import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white text-black">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-0">
        <div className="flex items-center gap-2">
          <div className="leading-tight">
            <span className="block text-sm font-semibold text-pink-500">Ngo</span>
            <span className="text-lg font-semibold text-pink-500 tracking-wide">Foundation</span>
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <a href="#" className="text-xl font-medium p-10 text-gray-400 hover:text-pink-500">
            Home
          </a>
          <a href="#" className="text-xl font-medium p-10 text-gray-400 hover:text-pink-500">
            Programs
          </a>
          <a href="#" className="text-xl font-medium p-10 text-gray-400 hover:text-pink-500">
            About Us
          </a>
          <a href="#" className="text-xl font-medium p-10 text-gray-400 hover:text-pink-500">
            Contact Us
          </a>
        </div>

        <a
          href="#"
          className="rounded-xl bg-pink-500 px-6 py-2 text-sm font-semibold text-white shadow-lg hover:bg-pink-600 focus:ring-2 focus:ring-pink-400"
        >
          Donate
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
