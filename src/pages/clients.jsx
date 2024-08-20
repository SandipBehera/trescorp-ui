import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import CardGrid from "../components/cards";

const Clients = () => {
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
    const transformedData = clientList.map(item => ({
        title: '',
        content: (
          <div className="justify-center" style={{display:'grid', margin:'3rem'}}>
            <img src={item.builder_logo} alt={item.builder_name} className="h-auto w-auto object-contain" style={{ backgroundColor: item.id === '19' ? 'black' : undefined }}/><br />
            <p style={{fontWeight:'700'}}>{item.builder_name}</p>
          </div>
        ),
      }));
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
    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('../img/2968.jpg')" }}></div>
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
      <span className="ekit-heading__shadow-text2">Our Clients</span>
    </div>
  </div>
</section>
            <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:mt-10">
            
            <div className="flex flex-wrap -m-4 mt-10">
                <div className="p-4 md:w-2/5">
                <img
                    className="object-cover object-center rounded-md w-full hover:transform hover:-translate-y-2 hover:translate-x-2 transition duration-300"
                    alt="hero"
                    src="../img/36029.jpg"
                />
                </div>
                <div className="p-4 md:w-3/5">
                <div className="px-0 mx-auto lg:px-4 lg:py-20 lg:mx-0">
                    <p className="text-base" style={{color:'#ffd100'}}>
                    OUR CLIENTS  
                    </p>
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Trescorp
                    Alliance Pte Ltd
                    </h1>
                    <p className="text-lg leading-relaxed">
                    ” TRESCORP’s clients consist of internationally renowned traders and oil majors.
                    Among them are Chevron, Glencore and Hin Leong which have successfully lifted our products from Thailand.“
                    </p>
                    
                </div>
                </div>
            </div>
            </section>
            <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-0">
                <CardGrid cards={transformedData} />    
                </section>
        </div>
    </main>
    </Layout>
  );
};
export default Clients;
