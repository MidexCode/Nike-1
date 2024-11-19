import React from "react";
import Button from "../Button/Button";
import { shoe8 } from "../../assets/images";

export const SuperQuality = () => {
  return (
    <>
      <section
        id="about-us"
        className="flex justify-between items-center max:lg:flex-col gap-10 max-xl:flex-col-reverse w-full max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
            We Provide You <span className="text-coral-red">Super Quality</span>{" "}
            Shoes
          </h2>

          <p className="font-montserrat text-slate-gray text-2xl mt-8 info-text lg:max-w-lg">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance. <br />{" "}
            <br />
            Our dedication to detail and excellence ensures your satisfaction
          </p>

          <div className="mt-11">
            <Button label="View details" />
          </div>
        </div>

        <div className="flx flex-1 justify-center items-center">
          <img
            src={shoe8}
            alt=""
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};
