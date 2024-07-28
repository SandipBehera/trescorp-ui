import React from "react";
import Layout from "../components/layout";

const teamMembers = [
  {
    name: "Hamood Salim Al Hashmi",
    position: "Chairman",
    description: `Hamood is a results-driven and passionate entrepreneur with proven abilities to develop business ventures and converting opportunities into successes. He holds interest in several businesses in the areas of oil and gas, commodity trading, mining, and property development.
    He has strong interpersonal skills and a natural affinity for cultivating relationships and plays a pivotal role in advising the Ministry of Oil and Gas, Sultanate of Oman on various international oil and gas ventures.
    He holds a Bachelor Degree in Business Management.`,
  },
  {
    name: "David Holtom",
    position: "Vice Chairman",
    description: `A highly successful leader and entrepreneur, with extensive global experience in international relations and corporate business. Possessing excellent communication skills and able to establish sustainable and profitable relationships with clients, suppliers, and stakeholders across the world.
    He holds interest in various companies specializing in oil and gas, aviation, and commodity trading.
    David was awarded the Member of the Most Excellent Order of the British Empire (MBE).`,
  },
  {
    name: "Ali Izhar Ahmad",
    position: "Group C.E.O",
    description: `Ali Izhar is a seasoned and highly motivated individual with extensive business exposure in the oil and gas industry.
    He started his career as a quantity and quality surveyor in 1988. Equipped with more than 18 years experience in the inspection business, he is an expert in the area of petroleum product specifications and requirements and was instrumental in setting up and managing a number of oil and gas trading companies.
    Having a complete understanding of the business, he is now entrusted to manage the day-to-day operations of the business.`,
  },
  {
    name: "Wong Shin Ling",
    position: "Finance Manager",
    description: `Wong Shin Ling is a highly motivated and driven finance manager with twenty-five years’ commodity finance experience in top-level business banking environments. Being an experienced professional, she is equipped with the business awareness and strategic planning as well as providing financial solutions which help organizations grow financially. Having high numeracy and sound technical skills she makes sure of the smooth flow of products and services delivery and keeping abreast of changes in financial regulations and legislation.
    Wong Shin Ling holds a degree in Bachelor of Business in Business Administration from the National University of Singapore. Her strong management skill, attentive to details and an investigative nature is bringing productive changes to the business.`,
  },
  // {
  //   name: "Royston Wu",
  //   position: "Chartering / Broking Manager",
  //   description: `Dynamic, self-driven and result-focused with more than 25 years of marine and oil industry, Royston is experienced in terminalling operations / optimization and chartering in vessels for shipboard fuel oil blending. He improves logical planning, reporting and chartering operations.
  //   In addition, he is an outstanding international tanker broker covering East of Suez to United States, securing and developing long-term relationships with oil majors and international trading houses.
  //   He holds a Second Mates Certificate of Competency.`,
  // },
  {
    name: "Saif Al Amri",
    position: "LNG Director",
    description: `Saif Al Amri is results-oriented and self-motivated with more than 22 years of extensive experience in the LNG industry with Oman LNG.
    Saif began his career as an engineer in 1997 immediately after completion of his Bachelor’s degree in Mechanical Engineering from the University of Leeds in the UK. He specializes in the commercial aspects of the LNG market. Saif has a proven track record of Strategies Conception and Implementation, Long Term Contracts Negotiation, Business Development, Origination, and Optimisation.
    Saif’s role as TRESCORP’s LNG Director is to establish and develop the LNG business so that Trescorp achieves its vision of becoming the LNG preferred partner of choice.`,
  },
];

const Team = () => {
  return (
    <Layout>
      <main>
        <div style={{ overflow: "hidden" }}>
          <section className="container text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-20">
            <h1
              className="text-xs lg:text-9xl mb-2"
              style={{ textTransform: "uppercase" }}
            >
              Our Management
            </h1>
            <div className="flex flex-wrap -m-4 mt-10">
              {teamMembers.map((member, index) => (
                <div key={index}className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 mb-4">
                <div className="md:flex-shrink-0">
                  {/* Placeholder for an image or avatar */}
                  <div className="h-32 w-32 bg-gray-200 rounded-full"></div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-2 hover:text-yellow-500">
                    {member.name}
                  </h2>
                  <h3 className="text-md font-medium text-gray-500 mb-3">
                    {member.position}
                  </h3>
                  <p className="leading-relaxed text-base">
                    {member.description}
                  </p>
                </div>
              </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Team;
