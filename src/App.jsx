import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { PopularProducts } from "./Components/PopularProducts/PopularProducts";
import { SuperQuality } from "./Components/SuperQuality/SuperQuality";
import { Service } from "./Components/Service/Service";
import { SpecialOffers } from "./Components/SpecialOffers/SpecialOffers";
import { CustomerReview } from "./Components/CustomerReview/CustomerReview";
import { Subscribe } from "./Components/Subscribe/Subscribe";
import { Footer } from "./Components/Footer/Footer";
import ShoeCard from "./Components/ShoeCard/ShoeCard";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Service />
      </section>

      <section className="padding">
        <SpecialOffers />
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>

      <section className="padding-x sm:py-32 p-16 w-full">
        <Subscribe />
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
