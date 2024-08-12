import React from "react";
import Layout from "../components/layout";
import CardGrid from "../components/cards";
import SlideInLeftComponent from "../components/slideIn";
import SlideInRightComponent from "../components/slideInright";

const About = () => {
  const cards = [
    // {
    //   title: "Who we Are",
    //   content:
    //     "Trescorp Alliance Pte Ltd (Trescorp) is a trading company which focuses on crude oil and petroleum products.",
    // },
    {
      title: "Why Choose Us",
      content: "TRESCORP’s strength is in the sourcing and procuring of crude oil and petroleum with complete supply chain activities; including sourcing, transporting, storage and processing arrangements",
    },
    {
      title: "Our Vision",
      content: "TRESCORP’s vision is to be the Preferred Oil and Gas Business Solution Provider for the Downstream Supply Chain.",
    },
    {
      title: "Our Mission",
      list_content: [
        "To provide attractive business alternatives that enhance value to our partners.",
        "To ensure all our business ventures attractive returns.",
        "To provide solutions,endless support and satisfaction ensuring business sustainability.",
      ]
    },
   
    // {
    //   title: "Our Business",
    //   content:
    //     "Complete supply chain activities, including sourcing, transporting, storage and processing arrangements.",
    // },
  ];
  return (
    <Layout>
      <main>
        <div style={{ overflow: "hidden" }}>
          {/* <!-- Your content --> */}
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
                <span className="ekit-heading__shadow-text2">About Us</span>
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
                  {/* <p className="text-base" style={{ color: "#e5a300" }}>
                    OUR STORY
                  </p> */}
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Trescorp Alliance Pte Ltd
                  </h1>
                  <p className="text-lg leading-relaxed">
                    ” Trescorp Alliance Pte Ltd (Trescorp) is a trading company
                    which focuses on crude oil and petroleum products from its
                    headquarters in Singapore. We have established sales
                    channels leveraging on our extensive network of suppliers
                    and customers. Complete supply chain activities, including
                    sourcing, transporting, storage and processing arrangements.
                    “
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    Contacting Industris — addresses and information on how best
                    to contact us.
                  </p>
                  {/* <button
                    className="btn btn-oval inline-flex items-center mt-4 font-bold"
                    onClick={() => window.location.replace("/contact-us")}
                  >
                    Contat Us
                  </button> */}
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
                    Trescorp is constructing a new crude and refined oil
                    terminal at Sohar Port (Oman). An independent and privately
                    run oil terminal, which will serve as a propeller to boost
                    Trescorp’s trading activities within the GCC region, East
                    Africa and Asia. The terminal will provide complete
                    terminaling services including storage, blending and
                    bunkering. This world class terminal’s capacity will be
                    approximately 1,800,000 m3 and will also be supported by
                    quick ship-turnaround marine berths, with capacity up to
                    VLCC (320,000 DWT).
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
                  src="../img/ethis.png"
                />
              </div>
              <div className="p-4 md:w-3/5">
                <div>
                  <h1
                    className="btm text-xs lg:text-8xl mb-2"
                    style={{ textTransform: "capitalize" }}
                  >
                    ETHICS & COMPLIANCE
                  </h1>

                  <p className="mb-4">
                    At TRESCORP, we are committed to maintaining a high standard
                    of ethical practice in our business conduct on a global
                    scale. We are committed to creating a legacy of home-grown
                    skill development by integrating local professionals in our
                    projects, providing sustained economic opportunity in the
                    communities where we operate. And by volunteering our time
                    and talent locally, we actively build a diverse, inclusive,
                    and collaborative work environment where all views are
                    welcomed, honesty is encouraged, and teamwork and
                    distinction are cornerstones. We are proud of what we do and
                    how we do it—and we enjoy doing it! Our ethical standard is
                    one of our most vital assets.
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
