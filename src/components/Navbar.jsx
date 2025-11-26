import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/siteLogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const inputClass =
    "w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-[#fea222] focus:ring-2 focus:ring-[#fea222] transition";

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-[#1d1919] fixed w-full top-0 left-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* Logo */}
          <NavLink to="/" className="z-[999]">
            <img
              src={logoImage}
              className="logo-size w-20 sm:w-24 md:w-32 object-contain"
              alt="Logo"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 text-gray-300 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 transition text-base ${
                      isActive ? "text-[#fea222]" : "hover:text-[#fea222]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Login */}
            <li>
              <button
                onClick={() => setShowLogin(true)}
                className="text-white border border-[#fea222] px-5 py-2 rounded-md hover:bg-[#fea222] hover:text-black transition"
              >
                Login
              </button>
            </li>

            {/* Sign Up */}
            <li>
              <button
                onClick={() => setShowSignUp(true)}
                className="bg-[#fea222] text-black px-5 py-2 rounded-md hover:bg-[#e4911d] transition font-semibold"
              >
                Sign Up
              </button>
            </li>
          </ul>

          {/* Mobile button */}
          <button
            className="md:hidden text-3xl text-white z-[999] active:scale-90 transition"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden bg-white shadow-lg px-4 pt-3 pb-5 space-y-3 text-gray-700 font-medium w-full animate-fadeIn">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-md text-base ${
                      isActive
                        ? "bg-[#fea222] text-black"
                        : "hover:text-[#fea222]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Mobile Login */}
            <li>
              <button
                onClick={() => {
                  setShowLogin(true);
                  setOpen(false);
                }}
                className="w-full border border-[#fea222] text-black px-4 py-3 rounded-md hover:bg-[#fea222] transition font-semibold text-base"
              >
                Login
              </button>
            </li>

            {/* Mobile Sign Up */}
            <li>
              <button
                onClick={() => {
                  setShowSignUp(true);
                  setOpen(false);
                }}
                className="w-full bg-[#fea222] text-black px-4 py-3 rounded-md hover:bg-[#e4911d] transition font-semibold text-base"
              >
                Sign Up
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* MODALS */}
      {(showSignUp || showLogin) && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[999] p-4">

          {/* SIGN UP */}
          {showSignUp && (
            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg animate-zoomOut relative">
              <button
                onClick={() => setShowSignUp(false)}
                className="absolute right-4 top-4 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold text-center text-[#1d1919] mb-6">
                Create Your Account
              </h2>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className={inputClass} />
                <input type="email" placeholder="Email Address" className={inputClass} />
                <input type="password" placeholder="Password" className={inputClass} />

                <button
                  type="submit"
                  className="w-full bg-[#fea222] text-black py-3 rounded-md font-semibold hover:bg-[#e4911d] transition"
                >
                  Sign Up
                </button>
              </form>

              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setShowSignUp(false);
                    setShowLogin(true);
                  }}
                  className="text-[#fea222] font-semibold cursor-pointer hover:underline"
                >
                  Login
                </span>
              </p>
            </div>
          )}

          {/* LOGIN */}
          {showLogin && (
            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg animate-zoomOut relative">
              <button
                onClick={() => setShowLogin(false)}
                className="absolute right-4 top-4 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold text-center text-[#1d1919] mb-6">
                Welcome Back
              </h2>
              <form className="space-y-4">
                <input type="email" placeholder="Email Address" className={inputClass} />
                <input type="password" placeholder="Password" className={inputClass} />

                <button
                  type="submit"
                  className="w-full bg-[#fea222] text-black py-3 rounded-md font-semibold hover:bg-[#e4911d] transition"
                >
                  Login
                </button>
              </form>

              <p className="text-center text-sm mt-4">
                Don’t have an account?{" "}
                <span
                  onClick={() => {
                    setShowLogin(false);
                    setShowSignUp(true);
                  }}
                  className="text-[#fea222] font-semibold cursor-pointer hover:underline"
                >
                  Sign Up
                </span>
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
