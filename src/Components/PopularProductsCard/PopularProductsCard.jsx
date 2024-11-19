import React from "react";
import { star } from "../../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <>
      <div className="flex flex-1 flex-col w-full max-sm:w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-4xl">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />

        <div className="mt-8 px-6 flex justify-start gap-2.5">
          <img src={star} alt="rating" />
          <p className="font-montserrat leading-8 text-xl text-slate-gray">
            4.5
          </p>
        </div>
        <h3 className="mt-2 px-6 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 px-6 font-semibold font-montserrat text-coral-red text-2lx leading-normal">
          {price}
        </p>
      </div>
    </>
  );
};

export default PopularProductsCard;
