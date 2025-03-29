"use client";
import React, { useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";

export const Accueil = () => {
  const [formData, setFormData] = useState({
    NomPrenom: "",
    telephone: "",
    sujet: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { NomPrenom, telephone, email, sujet, message } = formData;

    // Vérification des champs vides
    if (!NomPrenom || !telephone || !email || !sujet || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Vérification de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }
    const logo_URL = "../../../public/logo.png";

    const mailContent = `
  <html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .logo {
      width: 150px;
      margin: 0 auto;
      display: block;
    }
    h1 {
      color: #333;
      font-size: 24px;
      text-align: center;
      margin-bottom: 15px;
    }
    h2 {
      color: #5B9F21;
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      color: #666;
      line-height: 1.6;
      font-size: 14px;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #$green: #5B9F21;
;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
      text-align: center;
      margin-top: 20px;
    }
    .footer {
      font-size: 12px;
      color: #aaa;
      text-align: center;
      margin-top: 40px;
    }
    .reclamation-details {
      margin-top: 30px;
      padding: 15px;
      background-color: #f9f9f9;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
    }
    .reclamation-details h2 {
      font-size: 18px;
      color: #5B9F21;
    }
    .reclamation-details p {
      font-size: 14px;
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <img src="${logo_URL}" alt="Logo" class="logo" />
    </div>
    <h1>Réclamation de ${NomPrenom}</h1>

    <div class="reclamation-details">
      <h2>Détails de la réclamation :</h2>
      <p><strong>Description :</strong> ${sujet}</p>
      <p><strong>Nom et Prénom :</strong> ${NomPrenom}</p>
      <p><strong>Numéro de téléphone :</strong> ${telephone}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Sujet :</strong> ${message}</p>
    </div>

   
    <a href="mailto:${email}" class="button">Répondre à cette réclamation</a>

    <div class="footer">
      <p>O'Gourmet - Service Client</p>
      <p>Tous droits réservés &copy; ${new Date().getFullYear()}</p>
    </div>
  </div>
</body>
</html>


`;
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          NomPrenom: NomPrenom,

          email_user: email,
          sujet: sujet,

          html: mailContent,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Erreur: ${errorMessage}`);
      }

      const data = await response.json();
      alert(
        data.message ||
          "  Nous vous remercions de nous avoir contactés. Nous traitons toutes les réclamations avec la plus grande attention et reviendrons vers vous dans les plus brefs délais "
      );
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div>
      <Header />

      {/* Menu section */}
      <motion.div
        className="font-bold flex items-center justify-center space-x-3 mt-[100px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={epinard}
          className="w-12"
          alt="image À Propos de O'Gourmet"
          loading="lazy"
        />
        <h1 className="text text-[30px]">Notre Menu</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <MenuSection slice={[0, 8]} etat={false} />
      </motion.div>

      <motion.div
        className="flex justify-center mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          href="/Menu"
          className="text font-semibold bg-[#ffbe33] px-5 py-2 rounded-full text-[14px]"
        >
          Voir plus ...
        </Link>
      </motion.div>

      {/* À propos section */}
      <motion.section
        id="À Propos"
        className="mx-auto py-[100px] px-6 lg:px-20 flex flex-col lg:flex-row items-center Section_Propos   space-y-10 lg:space-y-0 lg:space-x-10"
 
      >
        <motion.div
          className="flex justify-center w-full lg:w-1/2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={Photo_propos}
            className="w-full h-auto max-w-2xl lg:max-w-full"
            alt="image À Propos de O'Gourmet"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center text-center lg:text-left space-y-6 w-full lg:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-bold flex items-center justify-center lg:justify-start space-x-3">
            <Image
              src={epinard}
              className="w-12"
              alt="image À Propos de O'Gourmet"
              loading="lazy"
            />
            <h1 className="text text-[30px]">À Propos de nous</h1>
          </div>
          <p className="text text-[15px] leading-[40px]">
            Bienvenue chez O'Gourmet, nous revisitons le fast-food en alliant
            saveur, qualité et rapidité. Nos burgers gourmets, sandwichs
            généreux, pizzas et plats faits maison sont préparés avec des
            ingrédients frais et soigneusement sélectionnés. Dans une ambiance
            conviviale, nous vous offrons une expérience culinaire unique, où
            chaque bouchée est un plaisir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text font-semibold">
            {[fraicheur_icon, rapidite_icon, passion_icon].map(
              (icon, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Image src={icon} className="w-20 mx-auto" alt="icon" />
                  <p>
                    {
                      [
                        "Qualité et fraîcheur",
                        "Rapidité et efficacité",
                        "Convivialité et passion",
                      ][index]
                    }
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </motion.section>

      {/* Contact section */}
      <motion.section
        className="mx-auto   section_contact"
        id="Contact"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="z-10 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-bold flex items-center justify-center space-x-3">
              <Image
                src={epinard}
                className="w-12"
                alt="image de Contact de O'Gourmet"
                loading="lazy"
              />
              <h1 className="text !text-white text-[30px]">Contact</h1>
            </div>

            <h2 className="text !text-white text-[18px] text-center font-medium py-3">
              Vous avez des questions ?
              <span className="text !text-[#ffbe33]"> Contactez-nous ! </span>
            </h2>
          </motion.div>
          <div className="flex flex-col lg:flex-row justify-center items-center mt-10 space-y-10 lg:space-y-0 lg:space-x-20">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <Input
                    label="Nom et Prénom"
                    name="NomPrenom"
                    placeholder="Nom et Prénom"
                    value={formData.NomPrenom}
                    onChange={handleChange}
                    rows={1}
                  />
                  <Input
                    label="Téléphone"
                    name="telephone"
                    placeholder="Téléphone"
                    value={formData.telephone}
                    onChange={handleChange}
                    rows={1}
                  />
                  <Input
                    label="Sujet"
                    name="sujet"
                    placeholder="Sujet"
                    rows={1}
                    value={formData.sujet}
                    onChange={handleChange}
                  />
                  <Input
                    label="Email"
                    name="email"
                    placeholder="Email"
                    rows={1}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <Input
                    label="Message"
                    name="message"
                    placeholder="Message"
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="!bg-[#ffbe33] p-2 px-5 rounded-full text-dark text-[15px]"
                  type="submit"
                >
                  Envoyer
                </button>
              </form>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section_horaire w-full px-8 py-10 space-y-8">
                <h2 className="text !text-white text-[18px] text-start font-medium">
                  Horaires
                  <span className="text !text-[#ffbe33]"> D'ouverture</span>
                </h2>
                <p className="text !text-white text-[13px] leading-[25px]">
                  Ici, vous trouverez nos horaires d'ouverture indiquant les
                  jours et heures d'accès à notre établissement.
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
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};
