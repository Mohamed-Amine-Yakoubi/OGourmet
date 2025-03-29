"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../public/logo.png";
import header_photo from "../../public/header_photo.png";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import "../styles/Header.scss";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed text flex justify-center w-full  z-50 top-0 transition-all duration-300 ${
          isScrolled ? "scrolled" : "bg-transparent"
        }
        ${isMenuOpen ? "py-0" : "py-1.5"}`}
      >
        <div className="container mx-8 md:mx-0 flex justify-between items-center">
          {/* Logo */}

          <div className="flex items-center">
            <Link href="/">
              <Image
                className={`transition-all duration-300 ${
                  isScrolled ? "md:w-[60px] w-[50px]" : "md:w-[100px] w-[50px]"
                } ${isMenuOpen && "hidden md:block"}`}
                src={logo}
                alt="Logo de O'Gourmet"
                       loading="lazy" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-16">
            <Link href="/" className="block p-2 header_title">
              Accueil
            </Link>
            <Link href="/Menu" className="block p-2 header_title">
              Menu
            </Link>
            <Link href="#À Propos" className="block p-2 header_title">
              À Propos
            </Link>
            <Link href="#Contact" className="block p-2 header_title">
              Contact
            </Link>
          </div>

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

      {/* Mobile Menu Dropdown */}
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
            <div className="flex justify-center">
              <Link href="/">
                <Image className="w-[90px]" src={logo}       alt="Logo de O'Gourmet"  loading="lazy"  />
              </Link>
            </div>

            <div className="space-y-4 mt-16">
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
                href="#À Propos"
                className="block p-2 text-center"
                onClick={toggleMenu}
              >
                À Propos
              </Link>
              <Link
                href="#Contact"
                className="block p-2 text-center"
                onClick={toggleMenu}
              >
                Contact
              </Link>

              <div className="social-icons  flex  flex-row  space-x-3  justify-center mt-16 ">
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="background_header   ">
        <div className=" section_header     ">
          <div className="    section_1    ">
            <h1 className="text_header leading-[80px] ">
              <span className="text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]">
                Bienvenue chez
              </span>
              <br />
              <span className="text_header text-[90px] sm:text-[120px] md:text-[130px] lg:text-[140px] !text-[#ffbe33]">
                O'Gourmet
              </span>
              <br />
              <span className="text_header text-[70px] sm:text-[80px] md:text-[90px] lg:text-[110px]">
                Menu
              </span>
            </h1>
            <p className="text-white  mb-10  text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]      ">
              Spécialiste du fast-food, O'Gourmet vous régale avec des recettes
              gourmandes et généreuses
            </p>
            <button className="!bg-[#ffbe33] p-2 px-5 rounded-full text-dark text-[15px]">
              Notre Menu
            </button>
          </div>
          <div className="section_2  ">
          <Image className=" " src={header_photo} alt="O'Gourmet"   loading="lazy"  />
        </div>
        </div>
 
      </div>
    </div>
  );
};
