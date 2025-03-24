import React, { useRef } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import "../styles/Pagination.scss"
export const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
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
    <div className="flex justify-center mt-8 pagination-container">
      <button
        className="buttonArrow"
        onClick={scrollLeft}
      >
        <BiSolidLeftArrow />
      </button>
   
      <div className="pagination" ref={menuRef}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3  pagination-item   text-[13px] mx-1 ${
            number === currentPage ? " font-bold text-[#ffbe33]  text-[15px] " : ""
          }`}
        >
          {number}
        </button>
      ))}
       </div>
      <button
        className="buttonArrow"
        onClick={scrollRight}
      >
        <BiSolidRightArrow />
      </button>
    </div>
   
  );
};
