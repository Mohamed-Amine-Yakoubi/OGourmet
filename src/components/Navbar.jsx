"use client"
import React from "react";
 
import logo from "../../public/logo.png";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
export const Navbar = () => {
   
  return (
    <div>
      {" "}
      <nav
        className="fixed flex justify-center w-full py-1.5 z-50 top-0 transition-all duration-300 scrolled "
      >
        <div className="container mx-8 md:mx-0   flex justify-between items-center  ">
          <div className="  ">
            <Link href="/">
              {" "}
              <Image className="md:w-[60px] w-[50px]" src={logo} alt="" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-16 ">
            <Link
              href="/"
              className="block   p-2 header_title"
              
            >
              Accueil
            </Link>
            <Link
             href="/Menu"
              className="block   p-2 header_title"
           
            >
              Menu
            </Link>
            <Link
              href="/#À Propos"
              className="block   p-2 header_title"
              
            >
            À Propos
            </Link>
            <Link
                 href="/#Contact"
              className="block  p-2 header_title"
              
            >
              Contact
            </Link>
          </div>
          <button
            
            className="md:hidden text-white focus:outline-none"
          >
            <IoMenu />
          </button>
        </div>
      </nav>
 
    </div>
  );
};
