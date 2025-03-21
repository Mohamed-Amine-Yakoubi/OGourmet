import React from "react";
import { Header } from "../../components/Header";
import Photo_propos from "../../../public/section_propos.png";
import epinard from "../../../public/epinard.png";
import fraicheur_icon from "../../../public/fraicheur_icon.png";
import rapidite_icon from "../../../public/rapidité_icon.png";
import passion_icon from "../../../public/icon_passion.png";
import "../../styles/Accueil.scss";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { MenuSection } from "../../components/MenuSection";
import Image from "next/image";
import Link from "next/link";
 
 
 

export const Accueil = () => {
 
  return (
    <div>
      <Header />

      {/* Meun section */}
      <div className="font-bold flex items-center justify-center   space-x-3 mt-[100px]  ">
        <Image src={epinard} className="w-12" alt="À Propos" />
        <h1 className="text    text-[30px]">Notre Menu</h1>
      </div>
   <MenuSection slice={[0,8]}/>
   <div className="flex justify-center">
        <Link href={'/Menu'} className="text font-semibold bg-[#ffbe33] px-5 py-2 rounded-full text-[14px]">Voir plus ...</Link>
      </div>
      {/* A propos section */}
      <section className="  mx-auto my-[150px] px-6 lg:px-20 flex flex-col lg:flex-row items-center    Section_Propos space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Image Container */}
        <div className="flex justify-center w-full lg:w-1/2">
          <Image
            src={Photo_propos}
            className="w-full h-auto max-w-2xl lg:max-w-full "
            alt="À Propos"
          />
        </div>

        {/* Text Container */}
        <div className="flex flex-col justify-center text-center lg:text-left space-y-6 w-full lg:w-1/2   " id="À Propos">
          <div className="font-bold flex items-center justify-center lg:justify-start space-x-3">
            <Image src={epinard} className="w-12" alt="À Propos" />
            <h1 className="text  text-[30px]"> À Propos de nous</h1>
          </div>
          <p className="text text-[15px] leading-[40px]">
            Bienvenue chez O'Gourmet, nous revisitons le fast-food en alliant
            saveur, qualité et rapidité. Nos burgers gourmets, sandwichs
            généreux, pizzas et plats faits maison sont préparés avec des
            ingrédients frais et soigneusement sélectionnés. Dans une ambiance
            conviviale, nous vous offrons une expérience culinaire unique, où
            chaque bouchée est un plaisir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text  font-semibold">
            <div className="space-y-2">
              <Image
                src={fraicheur_icon}
                className="w-20 mx-auto"
                alt="Qualité et fraîcheur"
              />
              <p>Qualité et fraîcheur</p>
            </div>
            <div className="space-y-2">
              <Image
                src={rapidite_icon}
                className="w-20 mx-auto"
                alt="Rapidité et efficacité"
              />
              <p>Rapidité et efficacité</p>
            </div>
            <div className="space-y-2">
              <Image
                src={passion_icon}
                className="w-20 mx-auto"
                alt="Convivialité et passion"
              />
              <p>Convivialité et passion</p>
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}
      <section className="  mx-auto my-[100px] section_contact  " id="Contact">
        <div className="z-10 relative">
          <div className="font-bold flex items-center justify-center   space-x-3  ">
            <Image src={epinard} className="w-12" alt=" Contact" />
            <h1 className="text !text-white  text-[30px]">Contact</h1>
          </div>

          <h2 className="text !text-white  text-[18px] text-center font-medium py-3 ">
            Vous avez des questions ?
            <span className="text !text-[#ffbe33]"> Contactez-nous ! </span>
          </h2>
          <div className="flex flex-col lg:flex-row   justify-center items-center mt-10 space-y-10 lg:space-y-0 lg:space-x-20">
            {/* contact section */}
            <div className=" w-full lg:w-1/2">
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <Input
                    label="Nom et Prénom"
                    id={""}
                    placeholder="Nom et Prénom"
                    rows={1}
                  />
                  <Input
                    label="Télèphone"
                    id={""}
                    placeholder="Télèphone"
                    rows={1}
                  />
                  <Input label="Sujet" id={""} placeholder="Sujet" rows={1} />
                  <Input label="Email" id={""} placeholder="Email" rows={1} />
                </div>
                <div className="mb-6">
                  <Input
                    label="Message"
                    id={""}
                    placeholder="Message"
                    rows={7}
                  />{" "}
                </div>
              </form>
            </div>
            {/* horaires section */}
            <div className=" w-full lg:w-1/3">
              <div className="section_horaire w-full px-8  py-10 space-y-8">
                <h2 className="text !text-white  text-[18px] text-start font-medium   ">
                  Horaires
                  <span className="text !text-[#ffbe33]"> D'ouverture</span>
                </h2>
                <p className="text !text-white text-[13px] leading-[25px]">
                  Ici, vous trouverez nos horaires d'ouverture indiquant les
                  jours et heures d'accès à notre établissement
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text !text-white">
                    <span className="font-medium text-[15px]">
                      Lundi-Samedi
                    </span>
                    <div className="flex-grow border-t border-dotted mx-4"></div>
                    <span className="font-medium text-[15px]">
                      11h - 14h / 18h
                    </span>
                  </div>
                  <div className="flex items-center text !text-white">
                    <span className="font-medium text-[15px]">Dimanche</span>
                    <div className="flex-grow border-t border-dotted mx-4"></div>
                    <span className="font-medium text-[15px]">18h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
