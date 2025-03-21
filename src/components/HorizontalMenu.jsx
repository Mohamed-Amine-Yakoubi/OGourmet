"use client";
import React, { useRef } from "react";
import "../styles/Menu.scss";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

const HorizontalMenu = ({ Catégorie ,onCategorySelect ,selectedCategory  }) => {
  const menuRef = useRef();

  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };



  return (
    <div className="menu-container  flex justify-center items-center  ">
      <button className="buttonArrow" onClick={scrollLeft}>
        <BiSolidLeftArrow />
      </button>
      <div className="menu" ref={menuRef}>
      <button
        onClick={() => onCategorySelect(null)} // Clear selection (show all items)
      className={`menu-item  ${selectedCategory=== null?'bg-[#ffbe33]':'bg-transparent'}`}
      >
        All
      </button>
        {Catégorie.map((category, index) => (
          <button type="submit" onClick={() => onCategorySelect(category)} key={index} className={`menu-item  ${selectedCategory=== category?'bg-[#ffbe33]':'bg-transparent'}`}>
            {category}
          </button>
        ))}
    
      </div>
      <button className="buttonArrow" onClick={scrollRight}>
        <BiSolidRightArrow />
      </button>
    </div>
  );
};

export default HorizontalMenu;
