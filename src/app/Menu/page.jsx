"use client";

import React from "react";
import { MenuSection } from "../../components/MenuSection";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import Background_header_menu from "../../../public/background_header_menu.png";
import Image from "next/image";
import epinard from "../../../public/epinard.png";
import { Pagination } from "../../components/Pagination";

const Menu = () => {
  return (
    <div className=" ">
      <Navbar />

      <div className="relative w-full  lg:h-[300px]  md:h-[200px] h-[150px] lg:mt-[70px] md:mt-[70px] mt-[60px]  ">
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
          <div className="flex  lg:w-1/2 w-full  lg:justify-start   justify-center   ">
            <h1 className="text-[55px] md:text-[70px] lg:text-[80px] text-center text_header !text-[#5B9F21]">
              <span className="text-[#484848]">Accueil-</span>Menu
            </h1>
          </div>
        </div>
      </div>
      <div className="font-bold flex items-center justify-center   space-x-3 mt-[100px]  ">
        <Image src={epinard} className="w-12" alt="À Propos" />
        <div>
          <h1 className="text    text-[20px] md:text-[25px] lg:text-[30px]">O’Gourmet Menu</h1>
          <p className="text !text-[#5B9F21]   text-[13px] md:text-[14px] lg:text-[15px]">
            Ici, vous trouverez l'intégralité de notre menu
          </p>
        </div>
      </div>
      <MenuSection slice={[]} />
      <div className="flex justify-center">
 
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
