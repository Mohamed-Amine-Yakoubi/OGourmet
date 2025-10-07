"use client";

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "../../public/Background_header.webp";
import "../styles/Footer.scss";
import logo from "../../public/logo.webp";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export const Footer = () => {
  return (
    <section
      className="mx-auto mt-[100px]  "
 
    >
      {/* information */}
      <motion.div     initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6  justify-center text  font-semibold md:space-y-0 space-y-3"
    
      >
        <div className="flex md:flex-row flex-col items-center justify-center md:text-start text-center md:space-x-2 space-x-0 md:space-y-0 space-y-2">
          <MdEmail className="text-[#ffbe33] text-[40px]" />
          <div className="text ">
            <h1 className="font-bold !text-[15px]">Email</h1>
            <p className="!text-[12px] text-[#6c6c6c]">G’ourmet@gmail.com</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center  md:text-start text-center md:space-x-2 space-x-0 md:space-y-0 space-y-2">
          <FaLocationDot className="text-[#ffbe33] text-[40px]" />
          <div className="text">
            <h1 className="font-bold !text-[15px]">Localisation</h1>
            <p className="!text-[12px] text-[#6c6c6c]">
              Rue du Commandant Gaté, 44600 St Nazaire 130{" "}
            </p>
          </div>
        </div>
        <div className="flex  md:flex-row flex-col items-center justify-center md:text-start text-center md:space-x-2 space-x-0 md:space-y-0 space-y-2">
          <FaPhoneAlt className="text-[#ffbe33] text-[40px]" />
          <div className="text">
            <h1 className="font-bold !text-[15px]">Télèphone</h1>
            <p className="!text-[12px] text-[#6c6c6c]">+33 0240620099 </p>
          </div>
        </div>
      </motion.div>
      {/* footer navbar */}

      {/* Curved Edge */}
      <motion.section className="relative  mx-auto   curved-edge  flex   items-center justify-center "      initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay:   0.2, duration: 0.8 }}
        className="z-10    container mx-10 md:mx-0 flex flex-col md:flex-row justify-between items-center absolute  h-auto    md:bottom-7 bottom-9    md:space-y-0 space-y-7 ">
          <div>
            <Link href="/">
              <Image
                className="md:w-[90px] w-[80px]"
                src={logo}
                alt="Logo de O'Gourmet"
                loading="lazy"
            
              />
            </Link>
          </div>
          <div className="navbar-links flex flex-row md:space-x-16 space-x-0 ">
            <Link href="/" className="block p-2 header_title">
              Accueil
            </Link>
            <Link href="/Menu" className="block p-2 header_title">
              Menu
            </Link>
            <Link href="/#À Propos" className="block p-2 header_title">
              À Propos
            </Link>
            <Link href="/#Contact"  className="block p-2 header_title">
              Contact
            </Link>
          </div>
          <div className="social-icons  flex  flex-row  space-x-3  ">
            <Link href="https://www.instagram.com/ogourmet_44/" className="block p-2 text-[25px] text-[#ffbe33]">
              <FaFacebook />
            </Link>
            <Link href="https://www.instagram.com/ogourmet_44/" className="block p-2 text-[25px] text-[#ffbe33]">
              <FaInstagram />
            </Link>
            <Link
              href="https://www.instagram.com/ogourmet_44/"
              className="block p-2 text-[25px] text-[#ffbe33]"
            >
              <FaSnapchatGhost />
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer copyright */}
      <div className="text-center my-[20px]">
        <h1>© 2025. Tous droits réservés par O’GOURMET</h1>
      </div>
    </section>
  );
};
