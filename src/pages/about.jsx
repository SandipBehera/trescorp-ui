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
      content: "TRESCORP is in the sourcing and procuring of crude oil and petroleum with complete supply chain activities; including sourcing, transporting, storage and processing arrangements.",
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
          <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-5">
            <div className="flex flex-wrap -m-4 mt-5">
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
                  <p className="text-lg leading-relaxed">
                    <b>Trescorp Alliance Pte Ltd (Trescorp)</b> is a trading
                    company which focuses on crude oil and petroleum products
                    from its headquarters in Singapore.
                  </p>
                  <br/>
                  <p className="text-lg leading-relaxed">
                  We specialize in sourcing and trading of crude oil, LNG and refined petroleum products on a global scale. We have established reliable supply direct from source. We channel sales through our extensive networks internationally. We are a complete end to end supply chain provider.
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
          <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-5">
            <CardGrid cards={cards} />
          </section>
          <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-5">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-full">
                <div>
                  <h1
                    className="btm text-xs lg:text-8xl mb-2"
                    style={{ textTransform: "capitalize",fontWeight:'500' }}
                  >
                    Our Strenghts
                  </h1>
                </div>
              </div>
              <div className="p-4 md:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 my-0">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="pentagon">
                      <span class="elementor-icon elementor-animation" >
                      <i className="fa-solid fa-handshake" style={{fontSize:'x-large', marginTop:'0.8rem'}}></i>
                      </span>
                    </div>
                    <div className="mt-2">
                      <p className="text-black font-bold">
                       We have been appointed by the Ministry of Energy and Minerals, The Sultanate of Oman to act as their representative to market,sell and distribute crude oil.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="pentagon">
                      <span class="elementor-icon elementor-animation">
                      <i class="fa-solid fa-bolt" style={{fontSize:'xx-large', marginTop:'0.5rem'}}></i>
                      </span>
                    </div>
                    <div className="mt-2">
                      
                      <p className="text-black font-bold">
                       We process and market our own petroleum products, including gasoline, gasoil (diesel), fuel oil and LPG.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="pentagon">
                      <span class="elementor-icon elementor-animation">
                      <i class="fa-solid fa-oil-well" style={{fontSize:'x-large', marginTop:'0.5rem'}}></i>
                      </span>
                    </div>
                    <div className="mt-2">
                      <p className="text-black font-bold">
                        We trade Fuel Oil, Crude oil, LNG, LPG and Gas oil. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="pentagon">
                      <span class="elementor-icon elementor-animation">
                      <i class="fa-solid fa-industry" style={{fontSize:'x-large', marginTop:'0.8rem'}}></i>
                      </span>
                    </div>
                    <div className="mt-2">
                      
                      <p className="text-black font-bold">
                       Constructing and Managing crude and fuel oil storage facilities in Oman.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="pentagon">
                      <span class="elementor-icon elementor-animation">
                      <i class="fa-solid fa-bullseye" style={{fontSize:'x-large', marginTop:'0.8rem'}}></i>
                      </span>
                    </div>
                    <div className="mt-2">
                      
                      <p className="text-black font-bold">
                      Since 2017 we have been a Term allocation holder of Oman Exports Blend souced directly from the Ministry of Energy and Minerals, The Sultanate of Oman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/2">
                <p className="font-bold mb-4 lg:my-36">
                  Trescorp's strength is in the sourcing and procuting of crude
                  oil's. LNG and petroleum products namely gasoline,
                  gasoil(disel), fuel oil and LPG and distrubuting them into the
                  Asia region at competitive terms.
                </p>
              </div>
            </div>
          </section>
          <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-5">
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
                    one of our most valued assets.
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
