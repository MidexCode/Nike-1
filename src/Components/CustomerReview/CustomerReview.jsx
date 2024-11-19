import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";

import { star } from "../../assets/icons";
import { customer1, customer2 } from "../../assets/images";
import customer3 from "../../assets/images/customer3.jpg";

export const CustomerReview = () => {
  return (
    <>
      <section className="max-container">
        <div>
          <h3 className="font-palanquin font-bold  text-4xl text-center">
            What Our <span className="text-coral-red">Customers</span> Says
          </h3>

          <p className="info-text m-auto mt-4 max-w-lg text-center">
            Hear genuine stories from our satisfied customers about their
            exceptional experiences with us.
          </p>
        </div>

        <div className="mt-24 flex flex-1 justify-evenly">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-center items-center flex-col mt-16">
                <img
                  src={customer1}
                  alt="customer"
                  className="rounded-full object-cover w-[120px] h-[120px]"
                />
                <p className="mt-6 max-w-sm text-center font-montserrat text-lg leading-7 text-white px-3">
                  "The attention to detail and the quality of the product
                  exceeded my expectations. Highly recommended!"
                </p>
                <div className="mt-6 flex justify-center items-center gap-2.5">
                  <img
                    src={star}
                    width={24}
                    height={24}
                    alt="rating star"
                    className="object-contain m-0"
                  />
                  <p className="text-xl font-montserrat text-white">4.5</p>
                </div>
                <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
                  Morich Brown
                </h3>

                <p className="font-montserrat text-[16px] text-slate-300 mt-12">
                  Swipe this card to see more
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center flex-col mt-16">
                <img
                  src={customer2}
                  alt="customer"
                  className="rounded-full object-cover w-[120px] h-[120px]"
                />
                <p className="mt-6 max-w-sm text-center font-montserrat text-lg leading-7 text-white px-3">
                  "The product not only met but exceeded my expectations. I'll
                  definitely be a returning customer!",
                </p>
                <div className="mt-6 flex justify-center items-center gap-2.5">
                  <img
                    src={star}
                    width={24}
                    height={24}
                    alt="rating star"
                    className="object-contain m-0"
                  />
                  <p className="text-xl font-montserrat text-white">4.5</p>
                </div>
                <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
                  Lota Mongeskar
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center flex-col mt-16">
                <img
                  src={customer3}
                  alt="customer"
                  className="rounded-full object-cover w-[120px] h-[120px]"
                />
                <p className="mt-6 max-w-sm text-center font-montserrat text-lg leading-7 text-white px-3">
                  "The service was outstanding, and the quality exceeded all my
                  expectations. Highly recommended!"
                </p>
                <div className="mt-6 flex justify-center items-center gap-2.5">
                  <img
                    src={star}
                    width={24}
                    height={24}
                    alt="rating star"
                    className="object-contain m-0"
                  />
                  <p className="text-xl font-montserrat text-white">4.5</p>
                </div>
                <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
                  Amara Patel
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
