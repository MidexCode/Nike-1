import React, { useState } from "react";
import { arrowRight } from "../../assets/icons";
import { shoes, statistics } from "../Constants/constants.index";
import { bigShoe1 } from "../../assets/images";
import ShoeCard from "../ShoeCard/ShoeCard";

export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="font-montserrat text-lg text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

          <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none text-lg bg-coral-red rounded-full text-white border-coral-red">
            <p>Show Now</p>
            <img
              src={arrowRight}
              alt="arrow-right"
              className="ml-2 rounded-full w-7 h-7"
            />
          </button>

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="text-slate-gray font-montserrat leading-7">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            className="object-contain max-w-full h-auto relative z-10"
          />
        </div>

        <div className="flex sm:gap-6 gap-4 absolute bottom-[10%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div> */}

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          {/* Main Shoe Image */}
          <img
            src={bigShoeImg}
            alt="shoe collection"
            className="object-contain relative z-10"
          />

          {/* Thumbnail Section */}
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((image, index) => (
              <ShoeCard
                key={index}
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
