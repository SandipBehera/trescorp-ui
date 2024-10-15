import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Sliders from "../components/slider";
import "./home.css";
import ClientLogoCarosel from "../components/clients";
import FaderComponent from "../components/fader";
import SlideInLeftComponent from "../components/slideIn";
import SlideInRightComponent from "../components/slideInright";

const HomePage = () => {
  const [clientList, setBuilderList] = useState([]);
  const fetchBuilderLogo = async () => {
    try {
      const response = await fetch(`../data/client.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error Fetching Builder List", error);
      return null;
    }
  };
  async function fetchBuilderList() {
    const data = await fetchBuilderLogo();
    setBuilderList(data);
  }
  useEffect(() => {
    fetchBuilderList();
  }, []);
  return (
    <Layout>
      <div className="relative">
        {/* <img src="../../img/oil-logistic-3.jpg" alt="Slide 1" className="w-full h-lvh md:h-lvh  object-cover" /> */}
        <video
          src="../video/VIDEO_TRESCORP.mp4" // Update with the correct path to your video file
          className="w-full h-lvh md:h-lvh object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            {/* <h1
                className="text-xs lg:text-2xl mb-2"
                style={{
                  color: "white",
                  letterSpacing: "3.9px",
                  textTransform: "uppercase",
                }}
              >
                Welcome to TresCorp..!
              </h1>
              <p
                className="text-6xl lg:text-4xl font-bold"
                style={{ color: "white" }}
              >
                We connect vital resources to power and build the world
              </p> */}
          </div>
        </div>
      </div>
      <main>
        <div style={{ overflow: "hidden" }}>
          {/* <!-- Your content --> */}
          <FaderComponent>
            <section
              id="animated-section"
              className="max-w-fit text-gray-600 body-font mx-auto  px-4 py-6 sm:px-6 lg:px-40 max-w-fit md: max-w-fit my-0"
              style={{ backgroundColor: "black" }}
            >
              <div className="flex flex-wrap -m-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="md:w-auto">
                  <h2
                    className="zoom-animation"
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Archivo, sans-serif",
                      fontSize: "16px",
                      fontWeight: 300,
                      lineHeight: "24px",
                      letterSpacing: "0px",
                      margin: "0px 0px 0px 0px",
                      padding: "7px 23px",
                      borderStyle: "solid",
                      borderWidth: "3px",
                      borderColor: "#FFFFFF20",
                      borderRadius: "2em",
                      width: "max-content",
                    }}
                  >
                    Journey Towards Success
                  </h2>
                  <span
                    className="text-white transition-all duration-300 inline-block font-bold text-4xl md:text-6xl lg:text-7xl shake-animation"
                    style={{
                      color: "white",
                      transition: "all .3s ease",
                      display: "inline-block",
                    }}
                  >
                    <span>SELECTED</span>
                  </span>

                  <span className="ekit-heading__shadow-text">WORK</span>
                </div>

                <div className="mt-10 md:w-fill mt-20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-14">
                    <div className="custom-card">
                      <img
                        src="../img/icon/icon-service4-home3.png"
                        alt="story"
                        className="zoom-animation"
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
                        className="zoom-animation"
                      />
                      <div className="mt-5">
                        <h2 className="htx">A MISSION FOR SUCCESS</h2>
                        <p className="mb-4 mt-4" style={{ color: "white" }}>
                          To provide attractive business alternatives that
                          enhance values to our partners.
                        </p>
                        <p className="mb-4 mt-4" style={{ color: "white" }}>
                          To ensure all our business ventures generate
                          attractive returns.
                        </p>
                        <p className="mb-4 mt-4" style={{ color: "white" }}>
                          To provide solutions, endless support and satisfaction
                          ensuring business sustainability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FaderComponent>
          <section className=" text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
            <div className="flex flex-wrap -m-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="p-4 md:w-3/5">
                <SlideInRightComponent>
                  <div>
                    <h1
                      className="btm text-xs lg:text-8xl mb-2"
                      style={{ textTransform: "capitalize" }}
                    >
                      Trescorp Alliance Pte Ltd
                    </h1>

                    <p className="mb-4">
                      Trescorp Alliance Pte Ltd (Trescorp) is a leading global
                      trading company specializing in the sourcing, trading, and
                      distribution of crude oil and refined petroleum products.
                      With its headquarters in Singapore, Trescorp has
                      established a strong presence in major energy markets
                      worldwide.
                    </p>
                    <p className="mb-4">
                      Leveraging its extensive network of suppliers and
                      customers, Trescorp has built a reputation for reliable
                      and efficient supply chain management. The company's core
                      strength lies in its ability to source high-quality crude
                      oil and petroleum products directly from producers,
                      refineries, and national oil companies across various
                      regions.
                    </p>
                  </div>
                </SlideInRightComponent>
              </div>

              <div className="p-4 md:w-2/5">
                <SlideInRightComponent>
                  <img
                    className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                    alt="hero"
                    src="../img/served-1.jpg"
                  />
                </SlideInRightComponent>
              </div>
            </div>
          </section>
          <section
            className="max-w-fit  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20"
            style={{ backgroundColor: "#f7f9fb" }}
          >
            <div className="flex flex-wrap -m-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="p-4">
                <div>
                  <h1
                    className="heading"
                    style={{ textTransform: "capitalize" }}
                  >
                    Counter Party
                  </h1>

                  <p className="paragraph">
                    TRESCORP’s clients consist of internationally renowned
                    traders and oil majors.
                  </p>
                </div>

                <ClientLogoCarosel builderData={clientList} />
              </div>
            </div>
          </section>
          {/* <section className="max-w-fit  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
            <div className="flex flex-wrap -m-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="md:w-auto">
                <div className="p-4 md:w-auto">
                  <div>
                    <h1
                      className="heading"
                      style={{ textTransform: "capitalize" }}
                    >
                      INSIGHTS
                    </h1>
                  </div>
                  <SlideInLeftComponent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-14">
                    <div>
                      <div className="image-container">
                        <img
                          src="../img/project1-1.jpg"
                          alt="Description"
                          className="image"
                        />
                        <div>
                          <div className="overlay">
                            <div className="text">
                              <div class="pmeta font-second">
                                {" "}
                                <a
                                  href="https://trescorp.saplingedu.in/portfolio-cat/construction/"
                                  rel="tag"
                                  tabindex="-1"
                                >
                                  Construction
                                </a>{" "}
                                /{" "}
                                <a
                                  href="https://trescorp.saplingedu.in/portfolio-cat/energy/"
                                  rel="tag"
                                  tabindex="-1"
                                >
                                  Energy
                                </a>
                              </div>
                              <br />
                              <h4 class="project-name">
                                <a
                                  href="https://trescorp.saplingedu.in/portfolio/industry-complex/"
                                  tabindex="-1"
                                >
                                  Industry Complex
                                </a>
                              </h4>
                              <p className="mt-4 text-base">
                                Sed ut perspiciatis unde omnis iste nas error
                                sit voluptatem accusantium doloremque
                                laudantium, totam aperiam, eaque ipsa quae ab
                                illo inventore veritatis et quasi architecto. Ut
                                enim ad minima veniam, quis nostrum
                                exercitationem ullam…
                              </p>
                              <a
                                class="btn-details mt-10"
                                href="https://trescorp.saplingedu.in/portfolio/industry-complex/"
                                tabindex="-1"
                              >
                                View details{" "}
                                <i class="icon ion-md-add-circle-outline"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="image-container">
                        <img
                          src="../img/project3-1.jpg"
                          alt="Description"
                          className="image"
                        />
                        <div>
                          <div className="overlay">
                            <div className="text">
                              <div class="pmeta font-second">
                                {" "}
                                <a
                                  href="https://trescorp.saplingedu.in/portfolio-cat/construction/"
                                  rel="tag"
                                  tabindex="-1"
                                >
                                  Construction
                                </a>{" "}
                                /{" "}
                                <a
                                  href="https://trescorp.saplingedu.in/portfolio-cat/energy/"
                                  rel="tag"
                                  tabindex="-1"
                                >
                                  Energy
                                </a>
                              </div>
                              <br />
                              <h4 class="project-name">
                                <a
                                  href="https://trescorp.saplingedu.in/portfolio/industry-complex/"
                                  tabindex="-1"
                                >
                                  Industry Complex
                                </a>
                              </h4>
                              <p className="mt-4 text-base">
                                Sed ut perspiciatis unde omnis iste nas error
                                sit voluptatem accusantium doloremque
                                laudantium, totam aperiam, eaque ipsa quae ab
                                illo inventore veritatis et quasi architecto. Ut
                                enim ad minima veniam, quis nostrum
                                exercitationem ullam…
                              </p>
                              <a
                                class="btn-details mt-10"
                                href="https://trescorp.saplingedu.in/portfolio/industry-complex/"
                                tabindex="-1"
                              >
                                View details{" "}
                                <i class="icon ion-md-add-circle-outline"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="image-container">
                        <img
                          src="../img/project7-1.jpg"
                          alt="Description"
                          className="image"
                        />
                        <div>
                          <div className="overlay">
                            <div className="text">
                              <div class="pmeta font-second">
                                {" "}
                                <a
                                  href="https://trescorp.saplingedu.in/portfolio-cat/construction/"
                                  rel="tag"
                                  tabindex="-1"
                                >
                                  Construction
                                </a>{" "}
                                /{" "}
                                <a
                                  href="https://trescorp.saplingedu.in/portfolio-cat/energy/"
                                  rel="tag"
                                  tabindex="-1"
                                >
                                  Energy
                                </a>
                              </div>
                              <br />
                              <h4 class="project-name">
                                <a
                                  href="https://trescorp.saplingedu.in/portfolio/industry-complex/"
                                  tabindex="-1"
                                >
                                  Industry Complex
                                </a>
                              </h4>
                              <p className="mt-4 text-base">
                                Sed ut perspiciatis unde omnis iste nas error
                                sit voluptatem accusantium doloremque
                                laudantium, totam aperiam, eaque ipsa quae ab
                                illo inventore veritatis et quasi architecto. Ut
                                enim ad minima veniam, quis nostrum
                                exercitationem ullam…
                              </p>
                              <a
                                class="btn-details mt-10"
                                href="https://trescorp.saplingedu.in/portfolio/industry-complex/"
                                tabindex="-1"
                              >
                                View details{" "}
                                <i class="icon ion-md-add-circle-outline"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SlideInLeftComponent>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
