"use client";

import React from "react";
import { MenuSection } from "../../components/MenuSection";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import Background_header_menu from "../../../public/background_header_menu.webp";
import Image from "next/image";
import epinard from "../../../public/epinard.webp";
import { Pagination } from "../../components/Pagination";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Menu = () => {
  return (
    <div className=" ">
      <Navbar />

      <motion.div
        className="font-bold flex items-center justify-center   space-x-3 mt-[100px]  "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={epinard}
          className="w-12"
          alt="image menu de O'Gourmet"
          loading="lazy"
          
        />
        <div>
          <h1 className="text    text-[20px] md:text-[25px] lg:text-[30px]">
            O’Gourmet Menu
          </h1>
          <p className="text !text-[#5B9F21]   text-[13px] md:text-[14px] lg:text-[15px]">
            Ici, vous trouverez l'intégralité de notre menu
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <MenuSection slice={[]} />
      </motion.div>
      <div className="flex justify-center"></div>
      <Footer />
    </div>
  );
};

export default Menu;
