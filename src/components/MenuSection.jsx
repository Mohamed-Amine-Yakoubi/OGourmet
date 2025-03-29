"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import HorizontalMenu from "./HorizontalMenu";

import { Pagination } from "./Pagination";

import SearchBar from "./SearchBar";
import { DropDown } from "./DropDown";
import { AnimatePresence, motion } from "framer-motion";

export const MenuSection = ({ slice, etat = true }) => {
  const [menu, setMenu] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/data/Menu.json");
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
    const fetchIng = async () => {
      try {
        const response = await fetch("/data/Tacos_ingredient.json");
        const data = await response.json();
        setIngredient(data);
      } catch (error) {
        console.error("Error fetching  Ingredient:", error);
      }
    };

    fetchIng();
  }, []);

  const categories = [...new Set(menu.map((item) => item.Catégorie))];
  const ItemIngredient = [...new Set(ingredient.map((item) => item))];

  // Filtrage par catégorie et recherche
  const filteredMenu = menu.filter(
    (item) =>
      (!selectedCategory || item.Catégorie === selectedCategory) &&
      (!searchTerm ||
        item.Libellé.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const totalItems = filteredMenu.length;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const Menu = slice.length ? filteredMenu.slice(...slice) : filteredMenu;
  const slicedMenu = Menu.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="mx-5  ">
      {/* Barre de recherche */}

      {etat === true && (
        <motion.div className="mt-12 mx-10"         initial={{ x: "20%", opacity: 0 }} // Position initiale
        animate={{ x: 0, opacity: 1 }} // Position finale
        exit={{
          x: "20%",
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        }} // Animation de sortie
        transition={{ duration: 0.8, ease: "easeInOut" }}>
          <SearchBar onSearch={setSearchTerm} />
        </motion.div>
      )}
      {/* Menu horizontal */}
      <motion.div className="flex justify-center mt-16 mb-10 items-center"       initial={{ x: "-20%", opacity: 0 }} // Position initiale
            animate={{ x: 0, opacity: 1 }} // Position finale
            exit={{
              x: "-20%",
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }} // Animation de sortie
            transition={{ duration: 0.8, ease: "easeInOut" }}>
        <HorizontalMenu
          Catégorie={categories}
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </motion.div>
      {/* selected Category */}
      <div className="flex justify-center   items-center    ">
        {selectedCategory == "Tacos" && (
          <div className="flex justify-center   items-center flex-wrap md:gap-10 gap-5       ">
            <div className="">
              <DropDown
                libellé={ItemIngredient.filter(
                  (item) => item.Sous_Catégorie === "Viande"
                ).map((item) => item.Libellé)}
                Title={"Viande"}
                image={ItemIngredient.filter(
                  (item) => item.Sous_Catégorie === "Viande"
                ).map((item) => item.Image)}
              />
            </div>

            <div>
              <DropDown
                libellé={ItemIngredient.filter(
                  (item) => item.Sous_Catégorie === "SuppLément"
                ).map((item) => item.Libellé)}
                Title={"SuppLément"}
                image={ItemIngredient.filter(
                  (item) => item.Sous_Catégorie === "SuppLément"
                ).map((item) => item.Image)}
              />
            </div>
            <div>
              <DropDown
                libellé={ItemIngredient.filter(
                  (item) => item.Sous_Catégorie === "Tacos_Gratiné"
                ).map((item) => item.Libellé)}
                Title={"Tacos Gratiné"}
                image={ItemIngredient.filter(
                  (item) => item.Sous_Catégorie === "Tacos_Gratiné"
                ).map((item) => item.Image)}
              />
            </div>
            <div>
              <DropDown
                libellé={ItemIngredient.filter(
                  (item) => item.Sous_Catégorie === "Sauce"
                ).map((item) => item.Libellé)}
                Title={"Sauce"}
                image={ItemIngredient.filter(
                  (item) => item.Sous_Catégorie === "Sauce"
                ).map((item) => item.Image)}
              />
            </div>
          </div>
        )}
      </div>
      {/* Affichage des cartes */}

      <AnimatePresence mode="popLayout">
        <div className="flex justify-center items-center mt-[60px]">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 md:space-y-5 space-y-10">
            {slicedMenu.length > 0 ? (
              slicedMenu
                .sort(() => Math.random() - 0.5)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      Title={item.Libellé}
                      Catégorie={item.Catégorie}
                      image={item.Image}
                      subtitle={item.Description}
                      Prix_Seul={item.Prix_Seul}
                      Prix_Menu={item.Prix_Menu}
                      Prix_Moyenne={item.Prix_Moyenne}
                      Prix_Méga={item.Prix_Méga}
                      Prix={item.Prix}
                    />
                  </motion.div>
                ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-screen"
              >
                <p className="text-center mb-20">
                  Aucun résultat disponible pour votre recherche chez O'Gourmet.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </AnimatePresence>

      {/* Pagination */}
      {etat === true && (
        <div className="flex justify-center">
          <Pagination
            totalItems={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </section>
  );
};
