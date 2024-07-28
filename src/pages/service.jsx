import React from "react";
import Layout from "../components/layout";

const Service = () => {
  return (
    <Layout>
      <main>
        <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
          <h1
            className="text-xs lg:text-9xl mb-2"
            style={{ textTransform: "uppercase" }}
          >
            SERVICES
          </h1>
        </section>
        <section
            className="container mx-auto max-w-none text-gray-600 body-font md:my-auto"
            style={{ backgroundColor: "black" }}
          >
            <div className="flex flex-wrap -m-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="md:w-auto">
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

                <span className="ekit-heading__shadow-text">SERVICES</span>
              </div>
              <div className="mt-10 md:w-fill mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-14">
                  <div className="custom-card">
                    <img
                      src="../img/icon/icon-service4-home3.png"
                      alt="story"
                    />
                    <div className="mt-5">
                      <h2 className="htx">VISION OF EXCELLENCE</h2>
                      <p className="mb-4 mt-4" style={{ color: "white" }}>
                        TRESCORP’s vision is to be the Preferred Oil and Gas
                        Business Solution Provider for the Downstream Supply
                        Chain.
                      </p>
                    </div>
                  </div>
                  <div className="custom-card">
                    <img
                      src="../img/icon/icon-service1-home3.png"
                      alt="story"
                    />
                    <div className="mt-5">
                      <h2 className="htx">A MISSION FOR SUCCESS</h2>
                      <p className="mb-4 mt-4" style={{ color: "white" }}>
                        To provide attractive business alternatives that enhance
                        values to our partners.
                      </p>
                      <p className="mb-4 mt-4" style={{ color: "white" }}>
                        To ensure all our business ventures generate attractive
                        returns.
                      </p>
                      <p className="mb-4 mt-4" style={{ color: "white" }}>
                        To provide solutions, endless support and satisfaction
                        ensuring business sustainability.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
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
                  Trescorp is constructing a new crude and refined oil terminal at Sohar Port (Oman). An independent and privately run oil terminal, which will serve as a propeller to boost Trescorp’s trading activities within the GCC region, East Africa and Asia. The terminal will provide complete terminaling services including storage, blending and bunkering. This world class terminal’s capacity will be approximately 1,800,000 m3 and will also be supported.
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
          </section>
      </main>
    </Layout>
  );
};

export default Service;
