"use client";
import React, { useEffect, useState } from "react";

import logo from "../../public/logo.png";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      {" "}
      <nav
        className={`fixed flex justify-center w-full py-1.5 z-50 top-0 transition-all duration-300 ${
          isScrolled ? "scrolled  " : "bg-transparent  "
        }`}
      >
        <div className="container mx-8 md:mx-0   flex justify-between items-center  ">
          <div className="  ">
            <Link href="/">
              {" "}
              <Image
                className={`"   ${
                  isScrolled ? "md:w-[60px] w-[50px] " : "   md:w-[100px] w-[50px]  "
                }`}
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-16 ">
            <Link href="/" className="block   p-2 header_title">
              Accueil
            </Link>
            <Link href="/Menu" className="block   p-2 header_title">
              Menu
            </Link>
            <Link href="#À Propos" className="block   p-2 header_title">
              À Propos
            </Link>
            <Link href="#Contact" className="block  p-2 header_title">
              Contact
            </Link>
          </div>
          <button className="md:hidden text-white focus:outline-none">
            <IoMenu />
          </button>
        </div>
      </nav>
      
      
      <div className="background_header">
        <div className=" section_header flex lg:flex-row flex-col   lg:pt-0 md:pt-10 pt-[40px] ">
          <div className="md:px-20 md:pt-10 px-3 pt-2 lg:text-start text-center ">
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
            <p className="text-white  mb-10  text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
              Spécialiste du fast-food, O'Gourmet vous régale avec des recettes
              gourmandes et généreuses
            </p>
            <button className="!bg-[#ffbe33] p-2 px-5 rounded-full text-dark text-[15px]">
              Notre Menu
            </button>
          </div>

          {/* <Image className="md:visible  invisible" src={header_photo} alt="" /> */}
        </div>
      </div>
    </div>
  );
};
.section_header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 110px;
  width: 100%;
  max-height: 100vh; /* Prevent overflow */
  overflow: hidden;
  position: absolute;
 
  .section_1 {
    text-align: start;
    width: 80%;

    p {
      max-width: 35rem; /* Plus flexible */
    }
  }

  .section_2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}

.background_header {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 10;
  background: url("../../public/Background_header.png") center/cover no-repeat;
}

/* Image inside .background_header */
.background_header img {
  left: 30%;
  top: 20%;
  width: 100%;
  height: 800px;

  object-fit: cover;
}

@media (max-width: 1200px) {
  .background_header {
    height: 100vh;
    background-size: cover;
  }

  .background_header img {
    position: absolute;
    left: 0;
    top: 70%;
    width: 85%;
  }

  .section_header {
    flex-direction: column;
    justify-content: center;
    padding-top: 110px;
    width: 100%;
    overflow: hidden;

    .section_1 {
      text-align: center;
      width: 100%;
      p {
        width: 100%;
      }
    }
  }
}
