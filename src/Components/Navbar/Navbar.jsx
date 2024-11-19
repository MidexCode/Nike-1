import React, { useRef } from "react";
import Headerlogo from "../../assets/images/header-logo.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import { navLinks } from "../Constants/constants.index";

export const Navbar = () => {
  const menuRef = useRef(null);

  const openmenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closemenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-100%"; // Move it completely out of view
    }
  };

  return (
    <>
      <header className="padding-x py-8 absolute z-50 w-full">
        <nav className="flex justify-between items-center max-container">
          {/* Logo */}
          <a href="/">
            <img src={Headerlogo} alt="Logo" width={130} height={29} />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="flex flex-1 justify-center items-center gap-28 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-gray-800 hover:text-gray-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Icon */}
          <div className="hidden max-lg:block cursor-pointer">
            <img
              src={Hamburger}
              alt="Hamburger Icon"
              onClick={openmenu}
              width={25}
              height={25}
            />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="fixed top-0 right-[-100%] h-full w-full bg-white shadow-lg transition-all duration-300"
          style={{ zIndex: 100 }}
        >
          {/* Close Button */}
          <button
            onClick={closemenu}
            className="absolute top-4 right-4 text-2xl font-bold text-gray-800"
          >
            ✖
          </button>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center gap-8 mt-16">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-gray-800 hover:text-gray-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};
