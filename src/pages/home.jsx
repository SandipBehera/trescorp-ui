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
      <Sliders />
      <main>
        <div style={{ overflow: "hidden" }}>
          {/* <!-- Your content --> */}
          <section className="text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
            <div className="flex flex-wrap -m-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="p-4 md:w-3/5" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-14">
                  <div>
                    <span class="elementor-icon elementor-animation">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-ship"
                        viewBox="0 0 640 512"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <path d="M496.616 372.639l70.012-70.012c16.899-16.9 9.942-45.771-12.836-53.092L512 236.102V96c0-17.673-14.327-32-32-32h-64V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v40h-64c-17.673 0-32 14.327-32 32v140.102l-41.792 13.433c-22.753 7.313-29.754 36.173-12.836 53.092l70.012 70.012C125.828 416.287 85.587 448 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24 61.023 0 107.499-20.61 143.258-59.396C181.677 487.432 216.021 512 256 512h128c39.979 0 74.323-24.568 88.742-59.396C508.495 491.384 554.968 512 616 512c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24-60.817 0-101.542-31.001-119.384-75.361zM192 128h256v87.531l-118.208-37.995a31.995 31.995 0 0 0-19.584 0L192 215.531V128z"></path>
                      </svg>
                    </span>

                    <p className="mb-4">
                      Trescorp Alliance Pte Ltd (Trescorp) is a trading company
                      which focuses on crude oil and petroleum products.
                    </p>
                  </div>
                  <div>
                    <span class="elementor-icon elementor-animation-">
                      {" "}
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-suitcase"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"></path>
                      </svg>
                    </span>
                    <p className="mb-4">
                      Trescorp Alliance Pte Ltd (Trescorp) is a trading company
                      which focuses on crude oil and petroleum products.
                    </p>
                  </div>
                  <div>
                    <span class="elementor-icon elementor-animation-">
                      {" "}
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-star"
                        viewBox="0 0 576 512"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </span>
                    <p className="mb-4">
                      Trescorp Alliance Pte Ltd (Trescorp) is a trading company
                      which focuses on crude oil and petroleum products.
                    </p>
                  </div>
                  <div>
                    <span class="elementor-icon elementor-animation-">
                      {" "}
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-far-money-bill-alt"
                        viewBox="0 0 640 512"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <path d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path>
                      </svg>
                    </span>
                    <p className="mb-4">
                      Trescorp Alliance Pte Ltd (Trescorp) is a trading company
                      which focuses on crude oil and petroleum products.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-2/5">
                <img
                  className="rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                  alt="hero"
                  src="../img/story-home4.jpg"
                />
              </div>
            </div>
          </section>
          <FaderComponent>
          <section
          id="animated-section"
            className="max-w-fit text-gray-600 body-font mx-auto  px-4 py-6 sm:px-6 lg:px-40 max-w-fit md: max-w-fit my-20"
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
                <SlideInLeftComponent>
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
                  </SlideInLeftComponent>
                  <SlideInLeftComponent>
                  <div className="custom-card">
                    <img
                      src="../img/icon/icon-service1-home3.png"
                      alt="story"
                      className="zoom-animation"
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
                        ensuring business sustainability.
                      </p>
                    </div>
                  </div>
                  </SlideInLeftComponent>
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
                    With its headquarters in Singapore, Trescorp has established
                    a strong presence in major energy markets worldwide.
                  </p>
                  <p className="mb-4">
                    Leveraging its extensive network of suppliers and customers,
                    Trescorp has built a reputation for reliable and efficient
                    supply chain management. The company's core strength lies in
                    its ability to source high-quality crude oil and petroleum
                    products directly from producers, refineries, and national
                    oil companies across various regions, including the Middle
                    East, Africa, Asia, and the Americas.
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
                      traders and oil majors.</p>
                      <p className="paragraph">
                      Among them are Chevron, Glencore and Hin Leong which have
                      successfully lifted our products from Thailand.
                    </p>
                  </div>

                  <ClientLogoCarosel builderData={clientList} />
                </div>
              
            </div>
          </section>
          <section className="max-w-fit  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
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
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
