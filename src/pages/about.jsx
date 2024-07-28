import React from "react";
import Layout from "../components/layout";
import CardGrid from "../components/cards";

const About = () => {
    const cards = [
        {
          title: "Who we Are",
          content: "Trescorp Alliance Pte Ltd (Trescorp) is a trading company which focuses on crude oil and petroleum products.",
        },
        {
          title: "Why Choose Us",
          content: "Trescorp is a complete, end to end, supply chain provider.",
        },
        {
          title: "Our Vision",
          content: "Trescorp is a complete, end to end, supply chain provider.",
        },
        {
          title: "Our Business",
          content: "Complete supply chain activities, including sourcing, transporting, storage and processing arrangements.",
        },
      ];
  return (
    <Layout>
      <main>
        <div style={{ overflow: "hidden" }}>
          {/* <!-- Your content --> */}
          <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
            <h1
              className="text-xs lg:text-9xl mb-2"
              style={{ textTransform: "uppercase" }}
            >
              About Us
            </h1>
            <div className="flex flex-wrap -m-4 mt-10">
              <div className="p-4 md:w-2/5">
                <img
                  className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                  alt="hero"
                  src="../img/about1-1.jpg"
                />
              </div>
              <div className="p-4 md:w-3/5">
                <div className="px-4 mx-40">
                    <p className="text-base" style={{color:'#ffd100'}}>
                    OUR STORY  
                    </p>
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Trescorp
                    Alliance Pte Ltd
                    </h1>
                    <p className="text-lg leading-relaxed">
                    ” Trescorp Alliance Pte Ltd (Trescorp) is a trading company which focuses on crude oil and petroleum products. We specialise in sourcing and trading of crude oil and refined petroleum products on a global scale and have established strong supply direct from the source. “
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                    Contacting Industris —
                    addresses and information on how best to contact us.
                    </p>
                    <button className="btn btn-oval inline-flex items-center mt-4 font-bold" >
                        Contat Us
                        </button>
              </div>
              </div>

            </div>
          </section>
          <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
            <CardGrid cards={cards} />
            </section>
            <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-3/5">
                <div>
                  <h1
                    className="btm text-xs lg:text-8xl mb-2"
                    style={{ textTransform: "capitalize" }}
                  >
                    Our values
                  </h1>

                  <p className="mb-4">
                  Trescorp is constructing a new crude and refined oil terminal at Sohar Port (Oman). An independent and privately run oil terminal, which will serve as a propeller to boost Trescorp’s trading activities within the GCC region, East Africa and Asia. The terminal will provide complete terminaling services including storage, blending and bunkering. This world class terminal’s capacity will be approximately 1,800,000 m3 and will also be supported by quick ship-turnaround marine berths, with capacity up to VLCC (320,000 DWT).
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
          <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
            <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-2/5">
                <img
                  className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                  alt="hero"
                  src="../img/ethis.avif"
                />
              </div>
              <div className="p-4 md:w-3/5">
                <div>
                  <h1
                    className="btm text-xs lg:text-8xl mb-2"
                    style={{ textTransform: "capitalize" }}
                  >
                    ETHICS &
                    COMPLIANCE
                  </h1>

                  <p className="mb-4">
                  At TRESCORP, we are committed to maintaining a high standard of ethical practice in our business conduct on a global scale. We are committed to creating a legacy of home-grown skill development by integrating local professionals in our projects, providing sustained economic opportunity in the communities where we operate. And by volunteering our time and talent locally, we actively build a diverse, inclusive, and collaborative work environment where all views are welcomed, honesty is encouraged, and teamwork and distinction are cornerstones. We are proud of what we do and how we do it—and we enjoy doing it! Our ethical standard is one of our most vital assets.
                  </p>
                </div>
              </div>
              
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};
export default About;
