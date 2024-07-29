import React from "react";
import Layout from "../components/layout";
import FaderComponent from "../components/fader";
import SlideInLeftComponent from "../components/slideIn";

const Service = () => {
  return (
    <Layout>
      <main>
        {/* <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
          <h1
            className="text-xs place_margin lg:text-7xl mb-2"
            style={{ textTransform: "uppercase" }}
          >
            SERVICES
          </h1>
        </section> */}

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
              >
                <span>ENGINEERING</span>
              </span>
              <span className="ekit-heading__shadow-text1">SERVICES</span>
            </div>
          </div>
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
                    Trescorp Sohar Terminal
                  </h1>

                  <p className="mb-4">
                    Trescorp is constructing a new crude and refined oil
                    terminal at Sohar Port (Oman). An independent and privately
                    run oil terminal, which will serve as a propeller to boost
                    Trescorp’s trading activities within the GCC region, East
                    Africa and Asia. The terminal will provide complete
                    terminaling services including storage, blending and
                    bunkering. This world class terminal’s capacity will be
                    approximately 1,800,000 m3 and will also be supported.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-2/5">
                <img
                  className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                  alt="hero"
                  src="../img/served-1.jpg"
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
                    Logistic
                  </h1>

                  <p className="mb-4">
                    Sourcing vessels for shipment of cargoes are vital to
                    Trescorp operations. Our shipping and logistics expertise
                    and strong relationship with shipbrokers and owners enables
                    us to ensure timely yet flexible supply and delivery of
                    cargoes. We continuously committed to the needs of our
                    customers to ensure reliable delivery and performance to our
                    customers
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
                    Trescorp source crude oil supplies from the Middle East
                    where we have strong business relationships with major oil
                    producers within the region which gives us a competitive
                    advantage. Together with our logistics partners, we ship the
                    crude oil to the refinery to be processed. Trescorp has a
                    processing arrangement with a refinery in Thailand whereby
                    we provide crude oil as a feedstock to be processed to
                    petroleum products. This agreement provides Trescorp another
                    source of diverse product lines into its existing basket of
                    products available for its clients.
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
                    We at Trescorp markets our refined petroleum products. Our
                    products are tailored to various markets and designed to
                    meet the requirements of our customers. Our marketing goals
                    are to ensure a competitiveness drive in our sales and push
                    market expansion in new potential growth areas. We are fully
                    committed in building relationships with our customers to
                    ensure better understanding of their business needs, making
                    their priorities ours, and aspire to be a trusted partner.
                  </p>
                </div>
              </div>
            </div>
          </FaderComponent>
        </section>
      </main>
    </Layout>
  );
};

export default Service;
