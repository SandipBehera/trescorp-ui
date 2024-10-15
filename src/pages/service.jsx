import React from "react";
import Layout from "../components/layout";
import FaderComponent from "../components/fader";
import SlideInLeftComponent from "../components/slideIn";

const Service = () => {
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
              style={{ backgroundImage: "url('../img/oil-logistic-3.jpg')" }}
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
      >
      </span>
      <span className="ekit-heading__shadow-text2"> Our Business</span>
            </div>
          </div>
        </section>
        <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
          
        </section>
        <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
          <FaderComponent>
            <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-3/5">
                <div>
                  <h1
                    className="btm text-xs lg:text-8xl mb-2"
                    style={{ textTransform: "capitalize" }}
                  >
                    Trading
                  </h1>

                  <p className="mb-4">
                    <b>TRESCORP</b> trades crude oil, LNG and Petroleum products from it's headquaters in Singapore and Oman.
                  </p>
                  <p className="mb-4">
                    We have established sales channels leveraging on our extensive network of customers and suppliers.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-2/5">
                <img
                  className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                  alt="hero"
                  src="../img/trade.jpeg"
                />
              </div>
              
            </div>
          </FaderComponent>
        </section>
        <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
          <FaderComponent>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-2/5">
                <img
                  className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                  alt="hero"
                  src="../img/33442.jpg"
                />
              </div>
              <div className="p-4 md:w-3/5">
                <div>
                  <h1
                    className="btm text-xs lg:text-8xl mb-2"
                    style={{ textTransform: "capitalize" }}
                  >
                    Logistics
                  </h1>

                  <p className="mb-4">
                    Sourcing of vessels to ship cargoes is vital to <b>TRESCORP</b> operations.
                  </p>
                  <p className="mb-4">
                    Our shipping and logistics experties and our strong relationships with ship brokers and owners enable us to ensure a timely and yet flexible devlivery of cargoes.
                    </p>
                  <p className="mb-4">
                    We are contineously committed fo the needs of our customers to ensure reliable delivery to our clients.
                    </p>
                </div>
              </div>
            </div>
          </FaderComponent>
        </section>
        <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
          <FaderComponent>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-3/5">
                <div>
                  <h1
                    className="btm text-xs lg:text-8xl mb-2"
                    style={{ textTransform: "capitalize" }}
                  >
                    Supply Chain
                  </h1>

                  <p className="mb-4">
                    <b>Trescorp</b> source crude oil and LNG directly from oil producers primarily within the Middle East which give us our competitive advantage.
                  </p>
                  <p className="mb-4">
                    Additionally, we have a crude processing arrangment with a private refinery in Thailand where we ship crude oil to be refined into petroleum products.This arrangment provides <b>TRESCORP</b> with another source of diverse product line.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-2/5">
                <img
                  className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                  alt="hero"
                  src="../img/project3-1.jpg"
                />
              </div>
            </div>
          </FaderComponent>
        </section>
        <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
          <FaderComponent>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-2/5">
                <img
                  className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                  alt="hero"
                  src="../img/60868.jpg"
                />
              </div>
              <div className="p-4 md:w-3/5">
                <div>
                  <h1
                    className="btm text-xs lg:text-8xl mb-2"
                    style={{ textTransform: "capitalize" }}
                  >
                    Marketing
                  </h1>

                  <p className="mb-4">
                    <b>TRESCORP</b> markets its own refined petroleum products which are tailored to various markets and designed to meet our customers' requirements.
                  </p>
                  <p className="mb-4">
                  Our marketing goals are to competitively drive our sales and push market expansion into new potential growth areas.
                  </p>
                  <p className="mb-4">
                  We are fully committed to building relationships with our customers and ensure a better understanding of their business needs, making their priorities ours.
                  </p>
                </div>
              </div>
            </div>
          </FaderComponent>
        </section>
        <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
          <FaderComponent>
            <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-3/5">
                <div>
                  <h1
                    className="btm text-xs lg:text-8xl mb-2"
                    style={{ textTransform: "capitalize" }}
                  >
                    LNG
                  </h1>

                  <p className="mb-4">
                    <b>TRESCORP</b> in May 2023 established an LNG business desk with the main objective of providing sound business opportunities for all of our partners.
                  </p>
                  <p className="mb-4">
                  <b>TRESCORP</b> will operate hand in hand with oil majors, LNG producers, utility and gas companies as well as LNG trading houses.
                  </p>
                  <p className="mb-4">
                  <b>TRESCORP's</b> well-experienced LNG business team offers support to term contracts negotiations & management and shipping & logistics. TRESCORP's LNG business team utilizing its network and relationships offers its partners value addition through volume optimization.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-2/5">
                <img
                  className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                  alt="hero"
                  src="../img/lng-service.webp"
                />
              </div>
              
            </div>
          </FaderComponent>
        </section>
      </main>
    </Layout>
  );
};

export default Service;
