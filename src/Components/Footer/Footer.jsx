import React from "react";
import footerlogo from "../../assets/images/footer-logo.svg";
import { copyrightSign } from "../../assets/icons";
import { footerLinks, socialMedia } from "../Constants/constants.index";

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

            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon) => (
                <div
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                  key={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex justify-start flex-1 item-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="CopyRight Logo"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>CopyRight. All rights reserved</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </footer>
    </>
  );
};
