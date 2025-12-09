"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-0">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="leading-tight">
            <span className="block text-xl font-bold text-pink-500 italic ml-8">
              Ngo
            </span>
            <span className="text-lg font-semibold text-pink-500 tracking-wide font-serif">
              Foundation
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <a
            href="#"
            className="text-lg font-medium px-6 text-gray-600 hover:text-pink-500"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-medium px-6 text-gray-600 hover:text-pink-500"
          >
            Programs
          </a>
          <a
            href="#"
            className="text-lg font-medium px-6 text-gray-600 hover:text-pink-500"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-lg font-medium px-6 text-gray-600 hover:text-pink-500"
          >
            Contact Us
          </a>
        </div>

        <a
          href="#"
          className="hidden md:inline-flex rounded-xl bg-pink-500 px-6 py-2 text-sm font-semibold text-white shadow-lg hover:bg-pink-600"
        >
          Donate
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-[4px] rounded-md border border-pink-500"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`h-[2px] w-5 bg-pink-500 transition-transform ${
              isOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-pink-500 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-pink-500 transition-transform ${
              isOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-gray-200 bg-white text-black transition-[max-height] duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-6 py-4">
          <a
            href="#"
            className="block text-base font-medium text-gray-700 hover:text-pink-500"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-base font-medium text-gray-700 hover:text-pink-500"
          >
            Programs
          </a>
          <a
            href="#"
            className="block text-base font-medium text-gray-700 hover:text-pink-500"
          >
            About Us
          </a>
          <a
            href="#"
            className="block text-base font-medium text-gray-700 hover:text-pink-500"
          >
            Contact Us
          </a>

          <a
            href="#"
            className="mt-2 block text-center rounded-xl bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-pink-600"
          >
            Donate
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
