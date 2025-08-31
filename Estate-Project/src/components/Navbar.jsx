import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useClerk, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { openSignIn } = useClerk();

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <img src={assets.logo} alt="Logo" />

        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>

        {/* Auth buttons for desktop */}
        <div className="hidden md:block">
          <SignedOut>
            <button onClick={openSignIn} className="bg-white text-black px-8 py-2 rounded-full hover:bg-gray-200 transition">
              Sign up
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile menu icon */}
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className="block md:hidden w-7 cursor-pointer" alt="Menu" />
      </div>

      {/* Mobile menu drawer */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 bg-white z-20 transition-all duration-300 ${showMobileMenu ? "w-full" : "w-0 overflow-hidden"}`}>
        <div className="flex justify-end p-6">
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className="w-6 cursor-pointer" alt="Close" />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full">
            Home
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full">
            About
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2 rounded-full">
            Projects
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className="px-4 py-2 rounded-full">
            Testimonials
          </a>

          {/* Auth for mobile menu */}
          <SignedOut>
            <button
              onClick={() => {
                setShowMobileMenu(false);
                openSignIn();
              }}
              className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Sign in
            </button>
          </SignedOut>
          <SignedIn>
            <div className="mt-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
