import React from "react";
import { services } from "../Constants/constants.index";
import ServiceCard from "./ServiceCard";

export const Service = () => {
  return (
    <section className="max-container px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};
