"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import HorizontalMenu from "./HorizontalMenu";
import Link from "next/link";
import { Pagination } from "./Pagination";

export const MenuSection = ({ slice,etat=true }) => {
 
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/data/Menu.json"); // The file is inside the /public folder
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);
  const categories = [...new Set(menu.map((item) => item.Catégorie))];

  const filteredMenu = selectedCategory
    ? menu.filter((item) => item.Catégorie === selectedCategory)
    : menu;
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const totalItems = filteredMenu.length;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const Menu = slice.length ? filteredMenu.slice(...slice) : filteredMenu;
  const slicedMenu = Menu.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  return (
    <section className="mx-5    ">
      <div className="flex justify-center my-16 items-center  ">
        <HorizontalMenu
          Catégorie={categories}
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 mt-[100px]   space-y-16   ">
        {slicedMenu.length > 0 ? (
          slicedMenu
            .sort(() => Math.random() - 0.5)
            .map((item, index) => (
              <Card
                key={index}
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
            ))
        ) : (
          <p>Loading menu...</p>
        )}
      </div>
      {etat===true && (
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
