import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">Our real estate app connects you with the best properties, seamless browsing, smart filters, and instant contact—all in one place. Whether you're buying, renting, or just exploring, your next move starts here.</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About
            </a>
            <a href="#Projects" className="hover:text-white">
              Projects
            </a>
            <a href="#Testimonials" className="hover:text-white">
              Customers Review
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4 max-w-80">The latest news, articles, nad resources, sent to your inbox weekly.</p>
          <div className="">
            <input type="email" placeholder="Enter the E-Mail" className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto" />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
