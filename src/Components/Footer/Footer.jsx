import React from "react";
import footerlogo from "../../assets/images/footer-logo.svg";

export const Footer = () => {
  return (
    <>
      <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerlogo} alt="" width={150} height={46} />
            </a>

            <p className="mt-6 text-base text-white-400 font-montserrat leading-7 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>

            <div className="flex gap-5 items-center mt-8">{socialM}</div>
          </div>
        </div>
      </footer>
    </>
  );
};
