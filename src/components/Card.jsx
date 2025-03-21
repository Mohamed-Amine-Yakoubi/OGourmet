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
  Catégorie
}) => {
  return (
    <div className="  flex justify-center ">
      <div className=" card w-[20rem] text   ">
        <Image
          className="card-img-top img-circle rounded-circle   "
          width={600}
          height={600}
          src={image}
          alt="Card image cap"
        />
        <div className="card-block p-3 mt-5 ">
          <div className="text-center my-2">
          <p className=" text font-medium !text-gray-500 text-[14px]  ">
              {Catégorie}
            </p>
            <h5 className="  font-bold   text  ">{Title}</h5>
            <p className=" text font-medium !text-gray-500 text-[14px]  ">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center justify-between mt-7">
            <div className="space-y-3">
              {Prix_Seul && (
                <p className="text-[14px] font-bold   ">
                  <span className="bg-[#ffbe33]  font-semibold  px-2 py-1 rounded-md mr-1 ">
                    Seul
                  </span>
                  {Prix_Seul}
                </p>
              )}
              {Prix_Seul && (
                <p className="text-[14px] font-bold  ">
                  <span className="bg-[#5B9F21] font-semibold !text-white   px-2 py-1 rounded-md mr-1 ">
                    Menu
                  </span>
                  {Prix_Menu}
                </p>
              )}

              {Prix_Moyenne && (
                <p className="text-[14px] font-bold  ">
                  <span className="bg-[#ffbe33] font-semibold    px-2 py-1 rounded-md mr-1 ">
                    Moyenne
                  </span>
                  {Prix_Moyenne}
                </p>
              )}
                      {Prix_Méga && (
                <p className="text-[14px] font-bold  ">
                  <span className="bg-[#5B9F21] font-semibold !text-white   px-2 py-1 rounded-md mr-1 ">
                  Méga
                  </span>
                  {Prix_Méga}
                </p>
              )}
                      {Prix && (
                <p className="text-[14px] font-bold  ">
                  <span className="bg-[#5B9F21] font-semibold !text-white   px-2 py-1 rounded-md mr-1 ">
                  Prix
                  </span>
                  {Prix}
                </p>
              )}
            </div>

            <div className="text-black  bg-gray-200     font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
              Add to cart
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
