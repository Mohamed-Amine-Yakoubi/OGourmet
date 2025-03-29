"use client";
import React, { useState } from "react";

import logo from "../../public/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import Background_header_menu from "../../../public/background_header_menu.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <div>
      {" "}
      <nav
        className={`fixed flex justify-center w-full z-50 top-0 transition-all duration-300 scrolled  ${isMenuOpen ? "py-0" : "py-1.5"}`}
      >
        {" "}
        <div className="container mx-8 md:mx-0 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ x: "-20%", opacity: 0 }} // Position initiale
            animate={{ x: 0, opacity: 1 }} // Position finale
            exit={{
              x: "-20%",
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }} // Animation de sortie
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Link href="/">
              <Image
                className={`transition-all duration-300   md:w-[60px] w-[50px] 
          } ${isMenuOpen && "hidden md:block"}`}
                src={logo}
                alt="Logo de O'Gourmet"
                loading="lazy"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="  hidden  md:flex space-x-16"
            initial={{ x: "20%", opacity: 0 }} // Position initiale
            animate={{ x: 0, opacity: 1 }} // Position finale
            exit={{
              x: "20%",
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }} // Animation de sortie
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Link href="/" className="block p-2 header_title">
              Accueil
            </Link>
            <Link href="/Menu" className="block p-2 header_title">
              Menu
            </Link>
            <Link href="/#À Propos" className="block p-2 header_title">
              À Propos
            </Link>
            <Link href="/#Contact" className="block p-2 header_title">
              Contact
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          {!isMenuOpen && (
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <IoMenu />
            </button>
          )}
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 h-full w-1/2 bg-black/80 backdrop-blur-md text-white py-4 z-60"
            initial={{ x: "100%", opacity: 0 }} // Position initiale
            animate={{ x: 0, opacity: 1 }} // Position finale
            exit={{
              x: "100%",
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }} // Animation de sortie
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <IoClose />
            </button>
            <motion.div
              className="flex justify-center"
              initial={{ x: "-20%", opacity: 0 }} // Position initiale
              animate={{ x: 0, opacity: 1 }} // Position finale
              exit={{
                x: "-20%",
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" },
              }} // Animation de sortie
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Link href="/">
                <Image
                  className="w-[90px]"
                  src={logo}
                  alt="Logo de O'Gourmet"
                  loading="lazy"
                />
              </Link>
            </motion.div>

            <motion.div
              className="space-y-4 mt-16"
              initial={{ x: "20%", opacity: 0 }} // Position initiale
              animate={{ x: 0, opacity: 1 }} // Position finale
              exit={{
                x: "20%",
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" },
              }} // Animation de sortie
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Link
                href="/"
                className="block p-2 text-center"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
              <Link
                href="/Menu"
                className="block p-2 text-center"
                onClick={toggleMenu}
              >
                Menu
              </Link>
              <Link
                href="/#À Propos"
                className="block p-2 text-center"
                onClick={toggleMenu}
              >
                À Propos
              </Link>
              <Link
                href="/#Contact"
                className="block p-2 text-center"
                onClick={toggleMenu}
              >
                Contact
              </Link>

              <motion.div
                className="social-icons  flex  flex-row  space-x-3  justify-center mt-16 "
                initial={{ x: "-20%", opacity: 0 }} // Position initiale
                animate={{ x: 0, opacity: 1 }} // Position finale
                exit={{
                  x: "-20%",
                  opacity: 0,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }} // Animation de sortie
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Link href="/" className="block p-2 text-[25px] text-[#ffbe33]">
                  <FaFacebook />
                </Link>
                <Link
                  href="/Menu"
                  className="block p-2 text-[25px] text-[#ffbe33]"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="/about"
                  className="block p-2 text-[25px] text-[#ffbe33]"
                >
                  <FaSnapchatGhost />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`relative w-full  lg:h-[300px]  md:h-[200px] h-[150px] lg:mt-[70px] md:mt-[70px]   ${isMenuOpen ? "mt-[0px]" : "mt-[60px]"}`}
      >
        {/* Image en arrière-plan */}
        <Image
          src={Background_header_menu} // Remplace par le chemin de ton image
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        {/* Contenu du header (ex: titre) */}

        <div className="absolute inset-0 flex flex-col    justify-center  items-center text-white   ">
          <motion.div className="flex  lg:w-1/2 w-full  lg:justify-start   justify-center   "  initial={{ x: "-20%", opacity: 0 }} // Position initiale
              animate={{ x: 0, opacity: 1 }} // Position finale
              exit={{
                x: "-20%",
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" },
              }} // Animation de sortie
              transition={{ duration: 0.8, ease: "easeInOut" }}>
            <h1 className="text-[55px] md:text-[70px] lg:text-[80px] text-center text_header !text-[#5B9F21]">
              <span className="text-[#484848]">Accueil-</span>Menu
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
