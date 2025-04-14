"use client";

import Image from "next/image";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export const DropDown = ({ libellé = [], Title, image = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text  ">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex items-center h-full border   border-gray-300 bg-gray-100 rounded-md text-[13px] font-semibold text-center cursor-pointer  "
      >
   
        {image[0] && (
          <Image
            className="  "
            width={50}
            height={50}
            src={image[0]}
          alt={`${Title} `}
            loading="lazy" 
      
          />
        )}
        <span>{Title} </span>
        <TiArrowSortedDown className="mx-2 " />
        
      </button>
      
      {isOpen && (
        <div       onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)} className="absolute left-0 z-80 bg-white top-13 divide-y divide-gray-100 rounded-lg w-46 box-shadow">
          <ul className="py-2 text-[13px] font-medium">
            {libellé.length > 0 ? (
              libellé.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {image[index] && (
                    <Image
                      className="rounded-full"
                      width={40}
                      height={40}
                      src={image[index]}
                      alt={item}
            loading="lazy" 
        
                    />
                  )}
                  <p>{item}</p>
                </li>
              ))
            ) : (
              <li>
                <p className="block px-4 py-2 text-gray-500">Aucun élément disponible</p>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
