import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import img1 from "../../public/assets/image/Green and Brown Minimalist Studio Logo Design Template.png";
import Image from "next/image";

const Footer = () => {
  
  return (
    <footer className="relative bg-[#e2e0e0] text-white mt-56">
      {/* SVG Background */}
  

      {/* Footer Content */}
      <div className=" bg-background w-[90%] mx-auto rounded-md bottom-11 shadow-2xl relative bottom-10 z-10 grid lg:grid-cols-9 gap-10 sm:grid-cols-1 items-center p-20">
        <div className=" col-span-3">
          <Image src={img1} alt=" mb-96 Footer logo fade-up" className="w-[300px]"  />
        </div>

      
        <div className="col-span-2">
          <li className="text-[22px] list-none font-bold text-[#7fcc2a] py-2 uppercase">
            Creativity
          </li>
          <li className="my-4 list-none">Guidelines and Ideas for Websites</li>
          <li className="my-4 list-none">Tips and Tricks</li>
          <li className="my-4 list-none">Photography</li>
        </div>

        <div className="col-span-2">
          <li className="text-[22px] list-none font-bold text-[#7fcc2a] py-2 uppercase">
            Creativity
          </li>
          <li className="my-4 list-none">Guidelines and Ideas</li>
          <li className="my-4 list-none">Tips and Tricks</li>
          <li className="my-4 list-none">Photography</li>
        </div>

        <div className="mb-4 col-span-2 md:mb-0">
          <h2 className="text-[22px] font-bold text-[#7fcc2a] py-2 uppercase">
            Contact Us
          </h2>
          <p className="text-[16px] my-4">Email: example@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
          <div className="flex space-x-4">
            <a
              className="text-white hover:text-[#7fcc2a] transform hover:scale-150 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-[#7fcc2a] transform hover:scale-150 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-[#7fcc2a] transform hover:scale-150 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaTwitter />
            </a>
            <a
              className="text-white hover:text-[#7fcc2a] transform hover:scale-150 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <h6 className="text-center">&copy; Copyright Coderfilx 2025</h6>
    </footer>
  );
};

export default Footer;
