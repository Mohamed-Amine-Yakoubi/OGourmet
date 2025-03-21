"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import HorizontalMenu from "./HorizontalMenu";
import Link from "next/link";

export const MenuSection = ({slice}) => {
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 
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
  const categories = [...new Set(menu.map(item => item.Catégorie))];

  const filteredMenu =selectedCategory?menu.filter(item=>item.Catégorie===selectedCategory) :menu;
  const slicedMenu = slice.length ? filteredMenu.slice(...slice) :filteredMenu;
  return (
    <section className="mx-5    ">

      <div className="flex justify-center my-16 items-center  ">
        
  
          <HorizontalMenu Catégorie={categories}   onCategorySelect={setSelectedCategory}   selectedCategory={selectedCategory} />
      
      </div>
     
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 mt-[100px]   space-y-16   ">
        {slicedMenu.length > 0 ? (
          slicedMenu
            .sort(() => Math.random() - 0.5).map((item, index) => (
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
   
    </section>
  );
};
