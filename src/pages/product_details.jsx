import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";

const ProductDetails = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  
  const fetchProduct = async () => {
    try {
      const response = await fetch(`../data/products/product.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error Fetching Builder List", error);
      return null;
    }
  };
  async function fetchProductList() {
    const data = await fetchProduct();
    const filteredData = data?.data.filter((item) => item.url === id);
    setProductData(filteredData);
  }
  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <Layout>
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
            <span className="ekit-heading__shadow-text2"> {productData[0]?.name}</span>
          </div>
        </div>
      </section>
      <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
        <div className="flex flex-wrap -m-4">
          {productData.map((item) => (
            <div className="p-4 md:w-full lg:w-full" key={item?.id}>
              <div>
                <h1
                  className="heading lg:text-6xl mb-2 "
                  style={{ textTransform: "capitalize",textAlign:'center' }}
                >
                  {item.name}
                </h1>
                {
                    item.description.map((desc,index)=>(
                        <p className="mb-4 lg:text-sm mb-2" style={{textAlign:"center"}} key={index}>{desc}</p>
                    ))
                }
                <img src={`../${item?.image}`} alt={item?.name} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;
