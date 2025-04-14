import Image from "next/image";
import React from "react";
import "../styles/Card.scss";
export const Card = ({
  image,
  Title,
  subtitle,
  Prix_Seul,
  Prix_Menu,
  Prix_Moyenne,
  Prix_Méga,
  Prix,
  Catégorie,
}) => {
  return (
    <div className="  flex justify-center    ">
      <div className=" card w-[20rem]      text group  ">
        
          <Image
            className="card-img-top    "
            width={600}
            height={600}
            src={image}
            alt={`${Title} ${subtitle}`}
            loading="lazy" 
        
          />
       
        <div className="card-block p-4 mt-5 z-50">
          <div className="text-center my-2">
            <p className=" text font-medium !text-gray-500 text-[12px]  ">
              {Catégorie}
            </p>
            <h5 className="  font-bold   text  text-[17px] my-2 ">{Title}</h5>
            <p className=" text font-medium !text-gray-500 text-[13.5px] line-clamp-1   group-hover:line-clamp-2  transition-all duration-300">
              {subtitle}
            </p>
          </div>
          <div className="mt-7   ">
            <div className="flex items-center justify-between    ">
              {Prix_Seul && (
                <p className="text-[14px] font-bold   ">
                  <span className="bg-[#ffbe33]  font-semibold  px-2 py-1 rounded-md mr-1 ">
                    Seul
                  </span>
                  {Prix_Seul}€
                </p>
              )}
              {Prix_Menu && (
                <p className="text-[14px] font-bold  ">
                  <span className="bg-[#5B9F21] font-semibold !text-white   px-2 py-1 rounded-md mr-1 ">
                    Menu
                  </span>
                  {Prix_Menu}€
                </p>
              )}

              {Prix_Moyenne && (
                <p className="text-[14px] font-bold  ">
                  <span className="bg-[#ffbe33] font-semibold    px-2 py-1 rounded-md mr-1 ">
                    Moyenne
                  </span>
                  {Prix_Moyenne}€
                </p>
              )}
              {Prix_Méga && (
                <p className="text-[14px] font-bold  ">
                  <span className="bg-[#5B9F21] font-semibold !text-white   px-2 py-1 rounded-md mr-1 ">
                    Méga
                  </span>
                  {Prix_Méga}€
                </p>
              )}
            </div>{" "}
            <div className="flex items-center justify-center    ">
              {Prix && (
                <p className="text-[14px] font-bold  ">
                  <span className="bg-[#5B9F21] font-semibold !text-white   px-2 py-1 rounded-md mr-1 ">
                    Prix
                  </span>
                  {Prix}€
                </p>
              )}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
