import React from "react";
import Layout from "../components/layout";
import OverlayCard from "../components/cards/overlayCard";


const Products = () => {
    const data = [
        {
            type:'mining',
            category:'energy',
            title:'Petrochemicals',
            smallDescription:'Trescorp is a complete, end to end, supply chain provider.',
            img:'img-service1-1.jpg'
        },
        {
            type:'mining',
            category:'energy',
            title:'FUEL OIL TRADER DUBAI | FUEL OIL SUPPLIER IN DUBAI | TOP FUEL OIL TRADER DUBAI',
            smallDescription:'Trescorp is a complete, end to end, supply chain provider.',
            img:'img-service5-1.jpg'
        },
        {
            type:'mining',
            category:'energy',
            title:'LNG',
            smallDescription:'Liquefied Natural Gas (LNG) is natural gas that has been cooled to a liquid state, at about -162°C (-260°F), for ease and safety of non-pressurized storage or transport. When liquefied, the gas volume is reduced by approximately 600 times, making it efficient to transport over long distances where pipelines are not feasible. LNG is primarily methane with small amounts of other hydrocarbons. It is considered a cleaner fossil fuel compared to coal and oil because it produces fewer carbon emissions and pollutants when burned.',
            img:'img-service1-1.jpg'
        },
        {
            type:'supply chain',
            category:'Transport',
            title:'Condensate',
            smallDescription:'Condensate, often produced alongside natural gas, plays a crucial role in the energy sector due to its unique properties and applications. This hydrocarbon mixture is typically collected at the wellhead where natural gas undergoes a pressure drop and cooling. ',
            img:'img-service6-1.jpg'
        },
        {
            type:'mining',
            category:'energy',
            title:'LPG',
            smallDescription:'Liquefied Petroleum Gas (LPG) is a versatile and widely utilized fuel that comprises primarily propane and butane, which are hydrocarbons derived from the refining of crude oil and the processing of natural gas. Its ability to liquefy under moderate pressure makes it easy to store and transport in pressurized containers, enhancing its utility in areas where pipeline infrastructure is unavailable. Known for its clean-burning properties, LPG produces fewer particulates and lower carbon emissions compared to other fossil fuels, making it an environmentally friendly energy source.',
            img:'img-service4-1.jpg'
        },
        {
            type:'CRUDE OIL',
            category:'energy',
            title:'CRUDE OIL TRADER DUBAI | CRUDE OIL SHIPMENT DUBAI | CRUDE OIL TRADING IN DUBAI',
            smallDescription:'Crude oil, a complex mixture of hydrocarbons and other organic compounds, is extracted from geological formations beneath the Earth’s surface, often located beneath both land and sea. This valuable resource is discovered through a combination of geological surveys and advanced geophysical techniques, such as seismic imaging, which help pinpoint potential reservoirs.',
            img:'img-service5-1.jpg'
        }
    ]
    return(
        <Layout>
            <main>
            <section className="container  text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
            <h1
              className="text-xs lg:text-9xl mb-2"
              style={{ textTransform: "uppercase" }}
            >
              Our Products
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
                    
                    <p className="text-lg leading-relaxed">
                    Trescorp Alliance Pte Ltd (Trescorp) is a trading company which focuses on crude oil and petroleum products. We specialise in sourcing and trading of crude oil and refined petroleum products on a global scale and have established strong supply direct from the source. Sales are channeled through our extensive networks internationally. Trescorp is a complete, end to end, supply chain provider.
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
          <OverlayCard data={data}/>
          </section>
                </main>
        </Layout>
    )
}
export default Products;