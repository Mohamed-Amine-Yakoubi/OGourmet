import Image from "next/image";
import React from "react";
import Big_Gourmet from "../../public/Burgers/Big_Gourmet.png";
import "../styles/Card.scss";
export const Card = () => {
  return (
    <div className="w-full max-w-[320px] bg-white   rounded-t-[300px] rounded-b-[30px] shadow-md Card text ">
      <div>
        <Image
          className=" rounded-t-lg"
          src={Big_Gourmet}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <div className="text-center my-2">
          <h5 className="  font-bold   text  ">Américan</h5>
          <p className=" text font-medium !text-gray-500 text-[14px]  ">
            2 steak, fromage
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-[14px] font-bold   ">
              <span className="bg-[#ffbe33]  font-semibold  px-2 py-1 rounded-md mr-1 ">
                Seul
              </span>
              599€
            </p>
            <p className="text-[14px] font-bold  ">
              <span className="bg-[#5B9F21] font-semibold !text-white   px-2 py-1 rounded-md mr-1 ">
                Menu
              </span>
              599€
            </p>
          </div>
          <div className="text-black  bg-gray-200     font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};


