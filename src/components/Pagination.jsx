import React from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

export const Pagination = () => {
  return (
    <div>
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <button className="buttonArrow">
            <BiSolidLeftArrow />
          </button>
        </li>
        <li>
          <p className="flex items-center text justify-center px-4 h-10 leading-tight  ">
            1
          </p>
        </li>
        <li>
          <p className="flex items-center text justify-center px-4 h-10 leading-tight ">
            2
          </p>
        </li>
        <li>
          <p className=" flex items-center text justify-center px-4 h-10 leading-tight ">
            3
          </p>
        </li>
        <li>
          <p className="flex items-center text justify-center px-4 h-10 leading-tight ">
            4
          </p>
        </li>
        <li>
          <p className="flex items-center text justify-center px-4 h-10 leading-tight ">
            5
          </p>
        </li>
        <li>
          <button className="buttonArrow">
            <BiSolidRightArrow />
          </button>
        </li>
      </ul>
    </div>
  );
};
