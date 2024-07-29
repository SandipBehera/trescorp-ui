import React from "react";
import Layout from "../components/layout";

const Clients = () => {
  return (
    <Layout>
    <main>
        <div style={{ overflow: "hidden" }}>
            {/* <!-- Your content --> */}
            <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
            <h1
                className="text-xs lg:text-7xl mb-2"
                style={{ textTransform: "uppercase" }}
            >
                Our Clients
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
                <div className="px-0 mx-auto lg:px-4 mx-40">
                    <p className="text-base" style={{color:'#ffd100'}}>
                    OUR CLIENTS  
                    </p>
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Trescorp
                    Alliance Pte Ltd
                    </h1>
                    <p className="text-lg leading-relaxed">
                    ” TTRESCORP’s clients consist of internationally renowned traders and oil majors.
                    Among them are Chevron, Glencore and Hin Leong which have successfully lifted our products from Thailand.“
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                    Contacting Industris —
                    addresses and information on how best to contact us.
                    </p>
                    <button className="btn btn-oval inline-flex items-center mt-4 font-bold" >
                        Learn More
                    </button>
                </div>
                </div>
            </div>
            </section>
        </div>
    </main>
    </Layout>
  );
};
export default Clients;
