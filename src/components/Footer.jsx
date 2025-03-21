"use client";

import React  from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "../../public/Background_header.png";
import "../styles/Footer.scss";
import logo from "../../public/logo.png";

import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <section className="mx-auto mt-[100px]  ">
      {/* information */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  justify-center text  font-semibold md:space-y-0 space-y-3">
        <div className="flex md:flex-row flex-col items-center justify-center md:text-start text-center md:space-x-2 space-x-0 md:space-y-0 space-y-2">
          <MdEmail className="text-[#ffbe33] text-[45px]" />
          <div className="text ">
            <h1 className="font-bold !text-[18px]">Email</h1>
            <p className="!text-[13px] text-[#6c6c6c]">G’ourmet@gmail.com</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center  md:text-start text-center md:space-x-2 space-x-0 md:space-y-0 space-y-2">
          <FaLocationDot className="text-[#ffbe33] text-[45px]" />
          <div className="text">
            <h1 className="font-bold !text-[18px]">Localisation</h1>
            <p className="!text-[13px] text-[#6c6c6c]">
              Rue du Commandant Gaté, 44600 St Nazaire 130{" "}
            </p>
          </div>
        </div>
        <div className="flex  md:flex-row flex-col items-center justify-center md:text-start text-center md:space-x-2 space-x-0 md:space-y-0 space-y-2">
          <FaPhoneAlt className="text-[#ffbe33] text-[45px]" />
          <div className="text">
            <h1 className="font-bold !text-[18px]">Télèphone</h1>
            <p className="!text-[13px] text-[#6c6c6c]">+33 0240620099 </p>
          </div>
        </div>
      </div>
      {/* footer navbar */}

      {/* Curved Edge */}
      <section className="relative  mx-auto   curved-edge  flex   items-center justify-center ">
        <div className="z-10    container mx-10 md:mx-0 flex flex-col md:flex-row justify-between items-center absolute  h-auto    md:bottom-7 bottom-9    md:space-y-0 space-y-7 ">
          <div>
            <Link href="/">
              <Image className="md:w-[90px] w-[80px]" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-links flex flex-row md:space-x-16 space-x-0 ">
            <Link href="/" className="block p-2 header_title">
              Accueil
            </Link>
            <Link href="/Menu" className="block p-2 header_title">
              Menu
            </Link>
            <Link href="/about" className="block p-2 header_title">
              A propos
            </Link>
            <Link href="/contact" className="block p-2 header_title">
              Contact
            </Link>
          </div>
          <div className="social-icons  flex  flex-row  space-x-3  ">
            <Link href="/" className="block p-2 text-[25px] text-[#ffbe33]">
              <FaFacebook />
            </Link>
            <Link href="/Menu" className="block p-2 text-[25px] text-[#ffbe33]">
              <FaInstagram />
            </Link>
            <Link
              href="/about"
              className="block p-2 text-[25px] text-[#ffbe33]"
            >
              <FaSnapchatGhost />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer copyright */}
      <div className="text-center my-[20px]">
        <h1>© 2025. Tous droits réservés par O’GOURMET</h1>
      </div>
    </section>
  );
};
