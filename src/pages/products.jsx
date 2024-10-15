import React from "react";
import Layout from "../components/layout";
import OverlayCard from "../components/cards/overlayCard";

const Products = () => {
  const data = [
    {
      type: "",
      category: "",
      title: "Crude Oil",
      img: "img/Product_Page/Crude.jpg",
      url: "products/Crude_Oil",
    },
    {
      type: "",
      category: "",
      title: "Condensate",
      img: "img/Product_Page/Condensate.jpg",
      url: "products/Condensate",
    },
    {
      type: "mining",
      category: "energy",
      title: "LPG",
      img: "img/Product_Page/LPG.jpg",
      url: "products/LPG",
    },
    {
      type: "mining",
      category: "energy",
      title: "LNG",
      img: "img/Product_Page/CNG.jpg",
      url: "products/LNG",
    },
    {
      type: "supply chain",
      category: "Transport",
      title: "Mogas",
      img: "img/Product_Page/Mogas.jpg",
      url: "products/Mogas",
    },

    {
      type: "CRUDE OIL",
      category: "energy",
      title: "Gas Oil",
      img: "img/Product_Page/GASOIL.jpg",
      url: "products/Gas_Oil",
    },

    {
      type: "CRUDE OIL",
      category: "energy",
      title: "Naphtha",
      img: "img/Product_Page/Naptha.jpg",
      url: "products/Naphtha",
    },
    {
      type: "CRUDE OIL",
      category: "energy",
      title: "Fuel Oil",
      img: "img/Product_Page/Fuel.jpg",
      url: "products/Fuel_oil",
    },
    {
      type: "CRUDE OIL",
      category: "energy",
      title: "Petrochemicals",
      img: "img/Product_Page/Petrochemilcals.jpg",
      url: "products/petrochemicals",
    },
  ];
  return (
    <Layout>
      <main>
        <section
          className="container mx-auto max-w-none text-gray-600 body-font md:my-auto relative"
          style={{ backgroundColor: "black" }}
        >
          <div className="absolute inset-0 bg-gray-800 opactiy-70">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('../img/2968.jpg')" }}
            ></div>
          </div>
          <div className="relative flex flex-wrap -m-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="my-20 sm:my-5 md:my-20">
              <span
                className="text-white transition-all duration-300 inline-block font-bold text-4xl md:text-6xl lg:text-7xl"
                style={{
                  color: "white",
                  transition: "all .3s ease",
                  display: "inline-block",
                }}
              ></span>
              <span className="ekit-heading__shadow-text2"> Our Products</span>
            </div>
          </div>
        </section>
        <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
          <div className="flex flex-wrap -m-4 mt-10">
            <div className="p-4 md:w-2/5">
              <img
                className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                alt="hero"
                src="../img/about1-1.jpg"
              />
            </div>
            <div className="p-4 md:w-3/5">
              <div className="px-0 mx-auto lg:px-4 mx-40">
                <p className="text-lg leading-relaxed">
                  Trescorp Alliance Pte Ltd (Trescorp) is a trading company
                  which focuses on crude oil and petroleum products. We
                  specialise in sourcing and trading of crude oil and refined
                  petroleum products on a global scale and have established
                  strong supply direct from the source. Sales are channeled
                  through our extensive networks internationally. Trescorp is a
                  complete, end to end, supply chain provider.
                </p>
                {/* <p className="text-lg leading-relaxed mt-4">
                    Contacting Industris —
                    addresses and information on how best to contact us.
                    </p> */}
                {/* <button className="btn btn-oval inline-flex items-center mt-4 font-bold" onClick={() => window.location.replace("/contact-us")}>
                        Contat Us
                        </button> */}
              </div>
            </div>
          </div>
        </section>
        <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
          <OverlayCard data={data} />
        </section>
      </main>
    </Layout>
  );
};
export default Products;
